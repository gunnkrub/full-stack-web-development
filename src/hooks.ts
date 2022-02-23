import type { Handle } from "@sveltejs/kit"
import type { RequestEvent } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    // if (event.request.url.includes("_method")) {
    //     event.request.method = event.url.searchParams.get("_method").toUpperCase();
    // }

    const response = await resolve(event);
    return response;

}