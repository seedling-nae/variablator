import { log, serve } from './deps.ts';
import { handler } from './handler.ts';

const PORT = parseInt(Deno.env.get('PORT') ?? '8000');
log.info(`🦕  Starting server on port ${PORT}....`);

serve(handler, { port: PORT });
