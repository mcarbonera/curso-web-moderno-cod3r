console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola'

console.log(obj1)
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome

    this.exec = function() {
        console.log("exec")
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2)
console.log(obj3)
obj2.exec()