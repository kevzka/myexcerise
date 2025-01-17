/* 

const readline = require("readline");
const table = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });
    
    function askQuestion(query) {
        return new Promise((resolve) => rl.question(query, resolve));
        }
        
        // Fungsi untuk mencetak tabel
        function print(table) {
            console.clear()
            let output = ``;
            for (let i = 0; i < table.length; i++) {
                const space = (i + 1) % 3 === 0 ? `\n` : ` | `;
                output += `${table[i]}${space}`;
                }
                console.log(output);
                }

                // Fungsi untuk mengecek kondisi kemenangan
function check(symbol) {
    const teks = `${symbol} menang`
    for (let i = 0; i < 3; i++) {
        if (
            // Periksa baris
            (
                table[i * 3] === table[i * 3 + 1] &&
                table[i * 3 + 1] === table[i * 3 + 2]
                ) ||
                // Periksa kolom
                (
                    table[i] === table[i + 3] && table[i + 3] === table[i + 6]
                    ) ||
                    //periksa diagonal
                    (
                        (table[0] === table[4] && table[4] === table[8]) ||
                        (table[2] === table[4] && table[4] === table[6])
                        )
        ) {
            print(table);
            console.log(teks);
            return true;
            }
            }
            
            return false;
            }
            
            function bot(){
                let blankCel = table.filter(box => box != `X`)
                blankCel = blankCel.filter(box => box != `O`)
                let random = blankCel[Math.round(Math.random() * blankCel.length)]
                let name = table[random]
                return name;
                }
                
                // Fungsi utama permainan
                async function main() {
                    symbol = (putaran % 2 === 0)? `X`:`O`
                    let name = ``;
                    if(putaran % 2 != 0){
                        name = bot();
                        } else {
                            print(table);
    console.log(`giliran : ${symbol}`)
    name = await askQuestion("Masukkan tempat (0-8): ");
    }
    
    if (table[name] && table[name] !== "X" && table[name] !== "O") {
        putaran++
        table[name] = symbol;
        !check(symbol) ? main() : rl.close();
        } else {
            console.log("Pilihan tidak valid, coba lagi.");
        main();
        }
        } */

// main();
const cells = Array.from(document.getElementsByClassName("cell"));
const table = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
let putaran = 0;
let endGame = false;
let botOn = true;

cells.forEach((cell, index) => {
	cells[index].className += " " + table[index];
	cell.addEventListener("click", function () {
        if(!endGame){
            main(index);
        }
        if(!endGame){
            if (botOn) {
                if (putaran % 2 != 0) {
                    main(index);
                }
            }
        }
	});
});

function refresh() {
	cells.forEach((cell, index) => {
		cells[index].className = "cell";
		cells[index].className += " " + table[index];
	});
}

function main(index) {
	putaran++;
	let symbol = putaran % 2 === 0 ? `x` : `o`;
	/* symbol = (putaran % 2 === 0)? `X`:`O`
    let name = ``;
    
    if (table[name] && table[name] !== "X" && table[name] !== "O") {
        putaran++
        table[name] = symbol;
        !check(symbol) ? main() : rl.close();
        } else {
            console.log("Pilihan tidak valid, coba lagi.");
        main();
        } */
	index = bot(putaran, index);
	table[index] = symbol;
	refresh();
	if (check(symbol)) {
		refresh();
		setTimeout(() => {
			alert(`${symbol} menang`);
		}, 10);
        endGame = true
		return;
	}
}
function check(symbol) {
	const teks = `${symbol} menang`;
	for (let i = 0; i < 3; i++) {
		if (
			// Periksa baris
			(table[i * 3] === table[i * 3 + 1] &&
				table[i * 3 + 1] === table[i * 3 + 2]) ||
			// Periksa kolom
			(table[i] === table[i + 3] && table[i + 3] === table[i + 6]) ||
			//periksa diagonal
			(table[0] === table[4] && table[4] === table[8]) ||
			(table[2] === table[4] && table[4] === table[6])
		) {
			// print(table);
			// console.log(teks);
			return true;
		}
	}

	return false;
}

function bot(putaran, index) {
	if (botOn) {
		if (putaran % 2 == 0) {
			let blankCel = table.filter((box) => box != `x`);
			blankCel = blankCel.filter((box) => box != `o`);
            let randomer = Math.round(Math.random() * (blankCel.length - 1))
			let random = blankCel[randomer];
			let name = table[random];
            // console.log(blankCel, name, random, randomer)
			return name;
		} else {
			return index;
		}
	} else {
		return index;
	}
}
