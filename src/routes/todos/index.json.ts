import { api } from "./_api"

// export const get: RequestHandler = (request) => {
//     return api(request);
// }

export async function get({ request }) {
    return api(request);
}

export async function post({ params, request }) {
    const body = await request.formData();
    return api(request, {
        uid: `${Date.now()}`,
        created_at: new Date(),
        text: body.get("text"),
        done: false
    })
}