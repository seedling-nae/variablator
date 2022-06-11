import ky from 'https://cdn.skypack.dev/ky@0.28.5?dts';
import * as log from 'https://deno.land/std@0.140.0/log/mod.ts';
import { serve } from 'https://deno.land/std@0.140.0/http/server.ts';
import { config } from 'https://deno.land/x/dotenv@v3.2.0/mod.ts';

config({ safe: true, export: true });

export { ky, log, serve };
