const API_KEY = import.meta.env.API_KEY


export async function fetchData(url: string) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': API_KEY
            }
        })
        if (!response.ok) {
            console.log(response)
            throw new Error('Failed to fetch data')
        }

        const data = await response.json()
        return data
    }
    catch (error) {
        console.log(error)
    }
}

export async function fetchItems(url: string) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();
    return data
}