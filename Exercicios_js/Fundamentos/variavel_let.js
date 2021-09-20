/* ESCOPO */
let numero = 1
{
    let numero = 2
    console.log('dentro: ', numero)
}
console.log('fora: ', numero)

/* LET EM FOR*/
let j = 0;
for(; j<5; j++) {
    console.log(j);
}
console.log('j=',j);

/* VAR EM FOR */
for(var i = 0; i<5; i++) {
    console.log(i);
}
console.log('i=',i);

/* PONTEIRO DE FUNÇÃO ? VAR */
const funcs = []
for(var i = 0; i<10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}
funcs[1]();
funcs[2]();

/* PONTEIRO DE FUNÇÃO ? LET */
const funcs2 = []
for(let i = 0; i<10; i++) {
    funcs2.push(function() {
        console.log(i);
    })
}

funcs2[1]();
funcs2[2]();
