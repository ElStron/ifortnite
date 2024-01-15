import { writeFile, readFile } from 'node:fs/promises'
import path from 'node:path'
export const saveWinners = async (data) => {
    await writeFile(`${DB_PATH}/shop.json`, JSON.stringify(data))

    return true
}