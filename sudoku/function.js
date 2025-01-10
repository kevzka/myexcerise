const [width, height, numbox] = [9, 9, 9];
const readline = require("node:readline");
const { promiseHooks } = require("node:v8");
class grid {
    constructor({width, height, numbox, template = Array.from({ length: width * height }, (el, i) => i)}){
        this.template = template;
        this.rows = Array.from({ length: width }, (el, i) => template.slice(i * 9, (i + 1) * 9));
        this.miniboxes = Array.from({ length: numbox }, (el, i) => {
            let base = Math.floor(i / 3) * 27 + (i % 3) * 3; // Hitung indeks awal
            return [
                ...template.slice(base, base + 3), // Elemen 3 pertama
                ...template.slice(base + 9, base + 12), // Elemen 3 tengah
                ...template.slice(base + 18, base + 21), // Elemen 3 terakhir
            ];
        });
        this.columns = Array.from({length: height}, (el, i) => {
            let temp = []
            for(let j = 0; j < width; j++){
                temp.push(template[9*j+i]);
            }
            return temp
        })
    }
}

async function question(text){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise((resolve)=>{
        rl.question(text, (answer) => {
            resolve(answer);
            rl.close();
        })
    })
}

async function print(grids){
    let temp = ``
    for(row in grids.rows){
        for(el in grids.rows[row]){
            if(String(grids.rows[row][el]).length < 2){
                grids.rows[row][el] = String(grids.rows[row][el]).padStart(2, 0);
            }
            if(el%3==2){
                grids.rows[row][el] += ' '
            }
        }
        if(row%3==0){
            temp += ' \n'
        }
        temp += grids.rows[row] + "\n";
    }
    console.log(temp);
}

module.exports = {grid, question, print};