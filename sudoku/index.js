const { json } = require('stream/consumers');
const {...func} = require('./function')
const [width, height, numbox] = [9, 9, 9];
// const template = Array.from({ length: width * height }, (el, i) => i);
const grid1 = new func.grid({width: width, height: height, numbox: numbox});

async function main(grid = grid1){
    // console.clear();
    console.log(grid.template)
    grid = new func.grid({width: width, height: height, numbox: numbox, template: grid.template})
    func.print(grid)
    let pos = await func.question('masukan posisi');
    if(Number(pos)){
        newGrid = JSON.parse(JSON.stringify(grid))
        newGrid.template[pos] = 'XX'
        main(newGrid)
    }
}
// console.log(grid1);
//token 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
main();
// console.log(columns)