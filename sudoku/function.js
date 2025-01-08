const [width, height, numbox] = [9, 9, 9];
class grid {
    constructor(){
        this.template = Array.from({ length: width * height }, (el, i) => i);
        this.rows = Array.from({ length: width }, (el, i) => this.template.slice(i * 9, (i + 1) * 9));
        this.miniboxes = Array.from({ length: numbox }, (el, i) => {
            let base = Math.floor(i / 3) * 27 + (i % 3) * 3; // Hitung indeks awal
            return [
                ...this.template.slice(base, base + 3), // Elemen 3 pertama
                ...this.template.slice(base + 9, base + 12), // Elemen 3 tengah
                ...this.template.slice(base + 18, base + 21), // Elemen 3 terakhir
            ];
        });
        this.columns = Array.from({length: height}, (el, i) => {
            let temp = []
            for(let j = 0; j < width; j++){
                temp.push(this.template[9*j+i]);
            }
            return temp
        })
    }
}

module.exports = {grid};