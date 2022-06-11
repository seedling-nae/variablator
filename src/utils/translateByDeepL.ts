import { ky } from '../deps.ts';

const REQUEST_URL = 'https://api-free.deepl.com/v2/translate'; // free version
const AUTH_KEY = Deno.env.get('AUTH_KEY') ?? '';

type DeepLResponse = {
  translations: {
    detected_source_language: string;
    text: string;
  }[];
};

export const translateByDeepL = async (text: string, language = 'JA') => {
  const searchParams = new URLSearchParams({
    text: text,
    target_lang: language,
  });
  const response = await ky.post(REQUEST_URL, {
    headers: {
      Authorization: `DeepL-Auth-Key ${AUTH_KEY}`,
    },
    searchParams,
  });
  const json: DeepLResponse = await response.json();

  return {
    beforeTranslation: text,
    afterTranslation: json.translations[0].text,
  };
};
