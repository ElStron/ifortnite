const API_KEY = import.meta.env.API_KEY

export async function fetchData(url: string) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': API_KEY
        }
    });
    const data = await response.json();
    return data
}