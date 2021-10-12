const prompt = require('prompt-sync')();

class snakesLadders {

    constructor() {
        this.currentPosition = 0,
        this.rolledDice = 0,
        this.snakesArray = [
            {
                head: 99,
                tale: 80
            },
            {
                head: 95,
                tale: 75
            },
            {
                head: 92,
                tale: 88
            },
            {
                head: 89,
                tale: 68
            },
            {
                head: 74,
                tale: 53
            },
            {
                head: 64,
                tale: 60
            },
            {
                head: 62,
                tale: 19
            },
            {
                head: 49,
                tale: 11
            },
            {
                head: 46,
                tale: 25
            },
            {
                head: 16,
                tale: 6
            }
        ],
        this.laddersArray = [
            {
                bottom: 2,
                top: 38
            },
            {
                bottom: 7,
                top: 14
            },
            {
                bottom: 8,
                top: 31
            },
            {
                bottom: 15,
                top: 26
            },
            {
                bottom: 21,
                top: 42
            },
            {
                bottom: 28,
                top: 84
            },
            {
                bottom: 36,
                top: 44
            },
            {
                bottom: 51,
                top: 67
            },
            {
                bottom: 71,
                top: 91
            },
            {
                bottom: 78,
                top: 98
            },
            {
                bottom: 87,
                top: 94
            }
        ]
    }

    play() {
        this.rollDice();
    }

    rollDice() {
        prompt("Hit Enter to roll the dice \n")
        this.rolledDice = Math.floor((Math.random() * 6) + 1);
        this.moveToken();
    }

    moveToken() {
        if (this.currentPosition + this.rolledDice <= 100) {
            this.currentPosition += this.rolledDice
        }
        if (this.currentPosition === 100) {
            console.log(`Dice number : ${this.rolledDice} Current Position : ${this.currentPosition}`);
            console.log("You win!")
        } else {
            this.snakeCheck()
            this.ladderCheck()
            console.log(`Dice number : ${this.rolledDice} Current Position : ${this.currentPosition}`);
            this.rollDice()
        }

    }

    snakeCheck() {
        this.snakesArray.forEach(s => {
            if (s.head === this.currentPosition) {
                console.log("oops! snake bite")
                this.currentPosition = s.tale
            }
        })
    }

    ladderCheck() {
        this.laddersArray.forEach(l => {
            if (l.bottom === this.currentPosition) {
                console.log("yay! climb ladder")
                this.currentPosition = l.top
            }
        })
    }
}

new snakesLadders().play()