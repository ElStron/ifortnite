import { writeFile, readFile } from 'node:fs/promises'

export const saveWinners = async (data) => {
    await writeFile('data/shop.json', JSON.stringify(data))

    return true
}