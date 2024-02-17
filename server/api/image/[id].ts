export default defineEventHandler(async (event) => {
    const {apiKey, apiBase} = useRuntimeConfig();

    const id = getRouterParam(event, 'id')

    const response = await fetch(`${apiBase}/asset/file/${id}`, {
        headers: {'X-API-KEY': apiKey},
    });

    return response
})