import { isInput } from './validator/isInput.ts';
import type { Input } from './validator/isInput.ts';
import { translateByDeepL } from './utils/translateByDeepL.ts';
import { convertToPlainText } from './utils/convertToPlainText.ts';

const TRANSLATE_ROUTE = new URLPattern({ pathname: '/translate' });

export const handler = async (request: Request): Promise<Response> => {
  const match = TRANSLATE_ROUTE.exec(request.url);
  if (request.method !== 'POST' || !match) {
    const result = { message: 'Not Found.' };
    return new Response(JSON.stringify(result), {
      status: 404,
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
    });
  }

  const input: Input = await request.json();
  if (!isInput(input)) {
    const result = { message: 'text property is empty or unset.' };
    return new Response(JSON.stringify(result), {
      status: 400,
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
    });
  }

  const convertedText = convertToPlainText(input.text);
  const result = await translateByDeepL(convertedText);
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  });
};
