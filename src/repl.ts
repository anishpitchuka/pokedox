export function cleanInput(input: string) : string[] {
    return input
        .trim()
        .toLocaleLowerCase()
        .split(" ")
        .filter((word) => word !== "");
}