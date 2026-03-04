import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
	baseURL: "https://maestro-done-web-ondx.vercel.app/api/auth",
	credentials: "include",
});
