export default defineEventHandler(async (event) => {
    const {apiKey, apiBase, selectedAlbuns} = useRuntimeConfig();
    //Gets all info
    const response = await $fetch(`${apiBase}/album/${selectedAlbuns}`, {
        headers: {'X-API-KEY': apiKey},
    });
    const assets = response?.assets.map(asset => {
        return asset.id
    })

    return assets
});

