import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const generateImage = createServerFn({ method: "POST" })
  .inputValidator((input) =>
    z.object({ prompt: z.string().min(1).max(2000) }).parse(input),
  )
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) {
      return { image: null as string | null, error: "AI gateway is not configured." };
    }

    try {
      const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash-image",
          messages: [{ role: "user", content: data.prompt }],
          modalities: ["image", "text"],
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("AI gateway error:", res.status, text);
        if (res.status === 429) return { image: null, error: "Слишком много запросов. Попробуйте позже." };
        if (res.status === 402) return { image: null, error: "Закончились кредиты на генерацию." };
        return { image: null, error: "Не удалось сгенерировать изображение." };
      }

      const json = await res.json();
      const image: string | undefined =
        json?.choices?.[0]?.message?.images?.[0]?.image_url?.url;

      if (!image) {
        return { image: null, error: "Модель не вернула изображение." };
      }
      return { image, error: null };
    } catch (e) {
      console.error("generateImage failed:", e);
      return { image: null as string | null, error: "Сервис временно недоступен." };
    }
  });
