import { createInterface, Interface } from "readline";

export function startREPL(){
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedox >",
    });

    rl.prompt();

    rl.on("line", async (input) => {
        const words = cleanInput(input);
        if(words.length === 0){
            rl.prompt();
            return;
        }
        const firstWord = words[0];
        console.log(`Your command was: ${firstWord}`);
        rl.prompt();
    })
}

export function cleanInput(input: string) : string[] {
    return input
        .trim()
        .toLocaleLowerCase()
        .split(" ")
        .filter((word) => word !== "");
}