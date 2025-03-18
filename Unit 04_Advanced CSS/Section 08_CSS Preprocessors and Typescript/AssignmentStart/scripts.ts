let x : number = 5
let y : number = 6

function add(x: number, y: number): number {
    return x + y;
}

document.getElementById("stuff").innerText = String(add(x, y));