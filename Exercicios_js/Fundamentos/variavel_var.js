{
    {
        {
            {
                var sera = 'Sera'
                let sera2 = 'oi'
            }
        }
    }
}
console.log(sera) // var é visível (global)
//console.log(sera2) // let não é visível (local)

function teste() {
    var local = 123
}
teste()
//console.log(local) // não é visível

/* Var */
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// ^ sobrescreveu (variável com mesmo nome)


/* Let */
console.log('Let')
let numero2 = 1
{
    let numero2 = 2
    console.log('dentro =', numero2)
}
console.log('fora =', numero2)
// ^ não sobrescreveu (variável local)

