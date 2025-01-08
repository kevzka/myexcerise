const ninebigbox = Array.from({ length: 9 }, (_, i) =>
	Array.from({ length: 9 }, (_, j) => `${i + 1}x${j + 1}`)
);

function printBoard(box) {
	let output = "";
	for (let i = 0; i < 9; i++) {
		if (i % 3 === 0 && i > 0) output += "================================\n";
		for (let j = 0; j < 9; j++) {
			if (j % 3 === 0 && j > 0) output += "| ";
			output += box[i][j] + " ";
		}
		output += "\n";
	}
	console.log(output);
}

function findRowColIndex(row, col) {
	const rowGroup = Math.floor(row / 3) * 3;
	const colGroup = Math.floor(col / 3) * 3;
	return { rowGroup, colGroup };
}

function isValidPlacement(box, row, col, number) {
	for (let i = 0; i < 9; i++) {
		if (box[row][i] === number || box[i][col] === number) return false;
	}

	const { rowGroup, colGroup } = findRowColIndex(row, col);
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (box[rowGroup + i][colGroup + j] === number) return false;
		}
	}

	return true;
}

function fillSudoku() {
	const box = Array.from({ length: 9 }, () => Array(9).fill(0));

	function placeNumber() {
		for (let row = 0; row < 9; row++) {
			for (let col = 0; col < 9; col++) {
				if (box[row][col] === 0) {
					const numbers = Array.from({ length: 9 }, (_, i) => i + 1).sort(
						() => Math.random() - 0.5
					);

					for (const number of numbers) {
						if (isValidPlacement(box, row, col, number)) {
							box[row][col] = number;
							if (placeNumber()) return true;
							box[row][col] = 0;
						}
					}
					return false; // Backtrack
				}
			}
		}
		return true; // Solved
	}

	placeNumber();
	return box;
}

const sudokuBoard = fillSudoku();
printBoard(sudokuBoard);
