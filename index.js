#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelIncrease() {
        this.fuel == 100;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
}
async function main() {
    let playerName = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: chalk.bold.bgCyanBright("Please enter your name")
        }
    ]);
    console.log(playerName.name);
    let opponentPlayer = await inquirer.prompt([
        {
            name: "name",
            type: "list",
            choices: ["Skeleton", "Zoombie", "Assassin"],
            message: "Please select your opponent",
        }
    ]);
    let p1 = new Player(playerName.name);
    let o1 = new Opponent(opponentPlayer.name);
    while (true) {
        if (opponentPlayer.name === "Skeleton") {
            let ask = await inquirer.prompt([
                {
                    name: "option",
                    message: "Select your action",
                    type: "list",
                    choices: ["attack", "drink potion", "run for life..."],
                }
            ]);
            if (ask.option === "attack") {
                let number = Math.floor(Math.random() * 2);
                if (number > 0) {
                    p1.fuelDecrease();
                    console.log(chalk.bold.yellow(`🔥 ${p1.name}'s fuel decreased to ${p1.fuel}`));
                    console.log(chalk.bold.bgGray(`💀 ${o1.name}'s fuel remains ${o1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.bold.red(`❌ ${p1.name} lost the battle! Better luck next time.😢`));
                        process.exit();
                    }
                }
                else {
                    o1.fuelDecrease();
                    console.log(chalk.bold.yellow(`🔥 ${p1.name}'s fuel remains ${p1.fuel}`));
                    console.log(chalk.bold.bgGray(`💀 ${o1.name}'s fuel decreased to ${o1.fuel}`));
                    if (o1.fuel <= 0) {
                        console.log(chalk.bold.green(`✨ ${p1.name} wins the battle against ${o1.name}!`));
                        process.exit();
                    }
                }
            }
            else {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(`You win.`);
                    process.exit();
                }
            }
            ;
            if (ask.option === "drink potion") {
                p1.fuelIncrease();
                console.log(`You Drink Health portion your fuel is ${p1.fuel}`);
            }
            if (ask.option === "run for life...") {
                console.log(chalk.bold.red(`you lose your life, better luck next time😢`));
                process.exit();
            }
        }
        if (opponentPlayer.name === "Zoombie") {
            let ask = await inquirer.prompt([
                {
                    name: "option",
                    message: "Select your action",
                    type: "list",
                    choices: ["attack", "drink potion", "run for life..."],
                }
            ]);
            if (ask.option === "attack") {
                let number = Math.floor(Math.random() * 2);
                if (number > 0) {
                    p1.fuelDecrease();
                    console.log(chalk.bold.magentaBright(`😎 ${p1.name}'s fuel decreased to ${p1.fuel}`));
                    console.log(chalk.bold.bgGreen(`🧟 ${o1.name}'s fuel remains ${o1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.bold.bgRedBright(`❌ ${p1.name} lost the battle! Better luck next time.😢`));
                        process.exit();
                    }
                }
                else {
                    o1.fuelDecrease();
                    console.log(chalk.bold.magentaBright(`😎 ${p1.name}'s fuel remains ${p1.fuel}`));
                    console.log(chalk.bold.bgGreen(`🧟 ${o1.name}'s fuel decreased to ${o1.fuel}`));
                    if (o1.fuel <= 0) {
                        console.log(chalk.bold.green(`✨ ${p1.name} wins the battle against ${o1.name}!`));
                        process.exit();
                    }
                }
            }
            else {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(`You win.`);
                    process.exit();
                }
            }
            ;
            if (ask.option === "drink potion") {
                p1.fuelIncrease();
                console.log(`You Drink Health portion your fuel is ${p1.fuel}`);
            }
            if (ask.option === "run for life...") {
                console.log(chalk.bold.bgRed(`you lose your life, better luck next time😢 `));
                process.exit();
            }
        }
        if (opponentPlayer.name === "Assassin") {
            let ask = await inquirer.prompt([
                {
                    name: "option",
                    message: "Select your action",
                    type: "list",
                    choices: ["attack", "drink potion", "run for life..."],
                }
            ]);
            if (ask.option === "attack") {
                let number = Math.floor(Math.random() * 2);
                if (number > 0) {
                    p1.fuelDecrease();
                    console.log(chalk.bold.green(`😊 ${p1.name}'s fuel decreased to ${p1.fuel}`));
                    console.log(chalk.bold.bgMagentaBright(`😈 ${o1.name}'s fuel remains ${o1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.bold.bgRedBright(`❌ ${p1.name} lost the battle! Better luck next time.😢`));
                        process.exit();
                    }
                }
                else {
                    o1.fuelDecrease();
                    console.log(chalk.bold.green(`😊 ${p1.name}'s fuel remains ${p1.fuel}`));
                    console.log(chalk.bold.bgMagentaBright(`😈 ${o1.name}'s fuel decreased to ${o1.fuel}`));
                    if (o1.fuel <= 0) {
                        console.log(chalk.bold.bgGreenBright(`✨ ${p1.name} wins the battle against ${o1.name}!`));
                        process.exit();
                    }
                }
            }
            else {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(`You lose.`);
                    process.exit();
                }
            }
            ;
            if (ask.option === "drink potion") {
                p1.fuelIncrease();
                console.log(`You Drink Health portion your fuel is ${p1.fuel}`);
            }
            if (ask.option === "run for life...") {
                console.log(chalk.bold.bgRed(`you lose your life, better luck next time😢 `));
                process.exit();
            }
        }
    }
}
main();
