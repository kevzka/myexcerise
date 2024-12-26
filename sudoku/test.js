// function sudoku() {
// 	let numloop = 0;
// 	let ninebigboxnew = JSON.parse(JSON.stringify(ninebigbox));
// 	let rows;
// 	let columns;
// 	let random3 = 1;
// 	let next = 0;
// 	// tempat terisi
// 	let check = [];

// 	//tempat belum terisi
// 	let check2 = [];
// 	for (var i = 0; i < 9; i++) {
// 		for (var j = 0; j < 9; j++) {
// 			check2.push({ random1: i, random2: j, random3: `${i}x${j}` });
// 		}
// 	}

// 	function random() {
// 		//random angka
// 		let random1 = Math.round(Math.random() * check2.length - 1);
// 		let random2 = Math.round(Math.random() * 8);

// 		//memilih tempat yang tersisa
// 		// console.log(check2[random1].random1)
// 		random1 = check2[random1].random1
// 		random2 = check2[random1].random2

// 		let [rowindex1, rowindex2] = findRowsIndex(random1, random2);
// 		if (
// 			!ninebigboxnew[random1].includes(`${random3}`) &&
// 			!rows[rowindex1].includes(`${random3}`) &&
// 			!columns[rowindex2].includes(`${random3}`) &&
// 			!check2.find((item) => item.random1 == random1 && item.random2 == random2)
// 		) {
// 			check.push({ random1: random1, random2: random2, random3: random3 });
// 			// console.log(check2.findIndex(item => item.random1 == random1 && item.random2 == random2))
// 			// console.log(random1, random2)
// 			check2.splice(check2.findIndex(item => item.random1 == random1 && item.random2 == random2), 1);

// 			// next = 0;
// 			ninebigboxnew[random1][random2] = `${random3}`;
// 			ninebigboxnew.map((item) =>
// 				item.includes(`${random3}`) ? next++ : null
// 			);
// 			next = next;
// 			// console.log(random3);
// 		}
// 		// if (next > 8 && random3 < 9) {
// 		// 	console.log(next);
// 		// 	next = 0;
// 		// 	random3++;
// 		// }
// 	}

// 	//pengulangan random sampai kotak penuh
// 	while (
// 		// ninebigbox.some((row1) =>
// 		// 	row1.some((item1) => ninebigboxnew.some((row2) => row2.includes(item1)))
// 		// )
// 		numloop < 1000
// 	) {
// 		numloop++;
// 		rows = allrow(ninebigboxnew);
// 		columns = allcolumn(rows);
// 		try {
// 			random();
// 		} catch (error) {
// 			console.log(`eror pada pengulangan ke: `, numloop);
// 			console.log(check2.length)
// 			console.log(error);
// 		}
// 	}

// 	// debugging
// 	console.log(next);
// 	console.log(check);
// 	console.log(check2)
// 	console.log(check.length);
// 	console.log(check2.length)

// 	return {
// 		ninebigboxnew: ninebigboxnew,
// 		rows: rows,
// 		columns: columns,
// 	};
// }

// const random1 = Math.round(Math.random() * 8);
// console.log(random1)
// console.log(random1)

let test = {
	box: [
		{ index1: 0, index2: 0, number: "1x1" },
		{ index1: 0, index2: 1, number: "1x2" },
		{ index1: 0, index2: 2, number: "1x3" },
		{ index1: 0, index2: 4, number: "1x5" },
		{ index1: 0, index2: 5, number: "1x6" },
		{ index1: 0, index2: 6, number: "1x7" },
		{ index1: 0, index2: 7, number: "1x8" },
		{ index1: 0, index2: 8, number: "1x9" },
		{ index1: 1, index2: 0, number: "2x1" },
		{ index1: 1, index2: 2, number: "2x3" },
		{ index1: 1, index2: 3, number: "2x4" },
		{ index1: 1, index2: 4, number: "2x5" },
		{ index1: 1, index2: 5, number: "2x6" },
		{ index1: 1, index2: 6, number: "2x7" },
		{ index1: 1, index2: 7, number: "2x8" },
		{ index1: 1, index2: 8, number: "2x9" },
		{ index1: 2, index2: 0, number: "3x1" },
		{ index1: 2, index2: 1, number: "3x2" },
		{ index1: 2, index2: 2, number: "3x3" },
		{ index1: 2, index2: 4, number: "3x5" },
		{ index1: 2, index2: 5, number: "3x6" },
		{ index1: 2, index2: 6, number: "3x7" },
		{ index1: 2, index2: 7, number: "3x8" },
		{ index1: 2, index2: 8, number: "3x9" },
		{ index1: 3, index2: 0, number: "4x1" },
		{ index1: 3, index2: 1, number: "4x2" },
		{ index1: 3, index2: 2, number: "4x3" },
		{ index1: 3, index2: 4, number: "4x5" },
		{ index1: 3, index2: 5, number: "4x6" },
		{ index1: 3, index2: 6, number: "4x7" },
		{ index1: 3, index2: 7, number: "4x8" },
		{ index1: 3, index2: 8, number: "4x9" },
		{ index1: 4, index2: 0, number: "5x1" },
		{ index1: 4, index2: 1, number: "5x2" },
		{ index1: 4, index2: 2, number: "5x3" },
		{ index1: 4, index2: 3, number: "5x4" },
		{ index1: 4, index2: 4, number: "5x5" },
		{ index1: 4, index2: 5, number: "5x6" },
		{ index1: 4, index2: 7, number: "5x8" },
		{ index1: 4, index2: 8, number: "5x9" },
		{ index1: 5, index2: 0, number: "6x1" },
		{ index1: 5, index2: 1, number: "6x2" },
		{ index1: 5, index2: 2, number: "6x3" },
		{ index1: 5, index2: 3, number: "6x4" },
		{ index1: 5, index2: 5, number: "6x6" },
		{ index1: 5, index2: 6, number: "6x7" },
		{ index1: 5, index2: 7, number: "6x8" },
		{ index1: 5, index2: 8, number: "6x9" },
		{ index1: 6, index2: 0, number: "7x1" },
		{ index1: 6, index2: 1, number: "7x2" },
		{ index1: 6, index2: 2, number: "7x3" },
		{ index1: 6, index2: 3, number: "7x4" },
		{ index1: 6, index2: 4, number: "7x5" },
		{ index1: 6, index2: 5, number: "7x6" },
		{ index1: 6, index2: 6, number: "7x7" },
		{ index1: 6, index2: 8, number: "7x9" },
		{ index1: 7, index2: 0, number: "8x1" },
		{ index1: 7, index2: 1, number: "8x2" },
		{ index1: 7, index2: 2, number: "8x3" },
		{ index1: 7, index2: 3, number: "8x4" },
		{ index1: 7, index2: 4, number: "8x5" },
		{ index1: 7, index2: 5, number: "8x6" },
		{ index1: 7, index2: 7, number: "8x8" },
		{ index1: 7, index2: 8, number: "8x9" },
		{ index1: 8, index2: 0, number: "9x1" },
		{ index1: 8, index2: 1, number: "9x2" },
		{ index1: 8, index2: 2, number: "9x3" },
		{ index1: 8, index2: 3, number: "9x4" },
		{ index1: 8, index2: 4, number: "9x5" },
		{ index1: 8, index2: 6, number: "9x7" },
		{ index1: 8, index2: 7, number: "9x8" },
		{ index1: 8, index2: 8, number: "9x9" },
	],
	rows: [
		["1x1", "1x2", "1x3", "2x1", "2x2", "2x3", "3x1", "3x2", "3x3"],
		["1x4", "1x5", "1x6", "2x4", "2x5", "2x6", "3x4", "3x5", "3x6"],
		["1x7", "1x8", "1x9", "2x7", "2x8", "2x9", "3x7", "3x8", "3x9"],
		["4x1", "4x2", "4x3", "5x1", "5x2", "5x3", "6x1", "6x2", "6x3"],
		["4x4", "4x5", "4x6", "5x4", "5x5", "5x6", "6x4", "6x5", "6x6"],
		["4x7", "4x8", "4x9", "5x7", "5x8", "5x9", "6x7", "6x8", "6x9"],
		["7x1", "7x2", "7x3", "8x1", "8x2", "8x3", "9x1", "9x2", "9x3"],
		["7x4", "7x5", "7x6", "8x4", "8x5", "8x6", "9x4", "9x5", "9x6"],
		["7x7", "7x8", "7x9", "8x7", "8x8", "8x9", "9x7", "9x8", "9x9"],
	],
	columns: [],
};

test = `{"index1":0,"index2":0,"number":"1x1"}`
test = JSON.parse(test)
console.log(test.index1)
