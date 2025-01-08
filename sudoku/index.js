const {grid} = require('./function')
const grid1 = new grid();



function print(){
    let temp = ``
    for(row in rows){
        for(el in rows[row]){
            if(String(rows[row][el]).length < 2){
                rows[row][el] = String(rows[row][el]).padStart(2, 0);
            }
            if(el%3==2){
                rows[row][el] += ' '
            }
        }
        if(row%3==0){
            temp += ' \n'
        }
        temp += rows[row] + "\n";
    }
    console.log(temp);
}
console.log(grid1);
// print()
// console.log(columns)