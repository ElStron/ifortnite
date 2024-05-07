export default function defaultImage({
        url
    } : {
        url:string | null
    }): string {

    if(!url || url === null) return '/images/default.png'
    return url
}