import { T as TSS_SERVER_FUNCTION, i as createServerFn } from "./server-BrW-spyj.js";
import { o as objectType, s as stringType } from "./types-DGfzljZx.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const generateImage_createServerFn_handler = createServerRpc({
  id: "d14c03a65f7c855fb8a2bd675c99851c1445338e64703529f9f13543c700e7c9",
  name: "generateImage",
  filename: "src/lib/image-gen.functions.ts"
}, (opts) => generateImage.__executeServer(opts));
const generateImage = createServerFn({
  method: "POST"
}).inputValidator((input) => objectType({
  prompt: stringType().min(1).max(2e3)
}).parse(input)).handler(generateImage_createServerFn_handler, async ({
  data
}) => {
  const apiKey = process.env.LOVABLE_API_KEY;
  if (!apiKey) {
    return {
      image: null,
      error: "AI gateway is not configured."
    };
  }
  try {
    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        messages: [{
          role: "user",
          content: data.prompt
        }],
        modalities: ["image", "text"]
      })
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("AI gateway error:", res.status, text);
      if (res.status === 429) return {
        image: null,
        error: "Слишком много запросов. Попробуйте позже."
      };
      if (res.status === 402) return {
        image: null,
        error: "Закончились кредиты на генерацию."
      };
      return {
        image: null,
        error: "Не удалось сгенерировать изображение."
      };
    }
    const json = await res.json();
    const image = json?.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    if (!image) {
      return {
        image: null,
        error: "Модель не вернула изображение."
      };
    }
    return {
      image,
      error: null
    };
  } catch (e) {
    console.error("generateImage failed:", e);
    return {
      image: null,
      error: "Сервис временно недоступен."
    };
  }
});
export {
  generateImage_createServerFn_handler
};
