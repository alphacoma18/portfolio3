// @ts-check
/**
 * This file is included in `/next.config.js` which ensures the app isn't built with invalid env vars.
 * It has to be a `.js`-file to be imported there.
 */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/*eslint sort-keys: "error"*/

function validateString(min = 1, max = 50) {
	return z.string().trim().min(min).max(max);
}

export const env = createEnv({
	client: {
		NEXT_PUBLIC_HOST_URL: validateString(1).url()
	},
	emptyStringAsUndefined: true,
    runtimeEnv: {
        NEXT_PUBLIC_HOST_URL: process.env.NEXT_PUBLIC_HOST_URL,
        NODE_ENV: process.env.NODE_ENV,
	},
    server: {
		NODE_ENV: z.enum(["development", "test", "production"]),
	},
});
