export function isValidDate(dateStr : string) {
    const validFormat = /^\d{4}-\d{2}-\d{2}$/;

    if (!validFormat.test(dateStr)) {
        return false;
    }

    const date = new Date(dateStr);

    return !isNaN(date.getTime());
}