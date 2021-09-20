const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome, indice) {
    console.log(`${indice+1}. ${nome}`)
}
fabricantes.forEach(imprimir);

console.log('----------------------------')
fabricantes.forEach(function(a) {
    console.log(a)
});

console.log('----------------------------')
fabricantes.forEach(fabricante => console.log(fabricante));

console.log('----------------------------')
const notas = [1,2,3,4,5,6,7,8,9,10];

// sem callback:
let notasBaixas1 = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}

// com callback:
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
});

notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas1);
console.log(notasBaixas2);
console.log(notasBaixas3);