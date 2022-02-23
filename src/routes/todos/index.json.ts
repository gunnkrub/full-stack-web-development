import { api } from "./_api"
import type { RequestHandler, RequestEvent } from "@sveltejs/kit"

// export const get: RequestHandler = (request) => {
//     return api(request);
// }

export const get: RequestHandler = (request) => {
    return api(request);
}

export const post: RequestHandler = async ( request: RequestEvent ) => {
    const body = await request.request.formData();
    return api(request, {
        created_at: new Date(),
        text: body.get("text"),
        done: false
    })
}