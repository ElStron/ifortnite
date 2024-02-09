export function getCosmeticImg(path: string) {
    const id = path.split('/').pop()?.toLocaleLowerCase()

    return `https://fortnite-api.com/images/cosmetics/br/materialinstances/${id}/background_v1-2.webp`;
}