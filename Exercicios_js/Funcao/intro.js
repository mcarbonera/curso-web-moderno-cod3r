// forma literal
function fun1() { }

// armazenar uma variável
const fun2 = function() { }

// armazenar em array
const array = [function(a,b) { return a+b }, fun1, fun2]
console.log(array[0](2,3))
console.log('------------------------')

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'opa' }
console.log(obj.falar());
console.log('------------------------')

//passar função como parametro
function run(fun) {
    fun();
}
run(function() { console.log('executando') })
console.log('------------------------')

// uma função pode retornar/conter uma função
function soma(a,b) {
    return function (c) {
        console.log(a+b+c);
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4);
console.log('------------------------')

function area(largura,altura) {
    const area = largura * altura;
    if(area > 20) {
        console.log(`valor acima do permitido: ${area}m2.`);
    } else {
        return area;
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,15,16,17))
console.log(area(5,5))
console.log('------------------------')

function soma2() {
    let soma = 0;
    for(i in arguments) {
        soma+= arguments[i]
    }
    return soma
}

console.log(soma2())
console.log(soma2(1))
console.log(soma2(1.1,2.2,3.3))
console.log(soma2(1.1,2.2,"teste"))
console.log(soma2('a','b','c'))
console.log('------------------------')

function soma3(a,b,c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a+b+c;
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))
function soma4(a,b,c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;
    return a+b+c;
}
console.log(soma4(), soma4(3), soma4(1,2,3), soma4(0,0,0))
function soma5(a=1,b=1,c=1) {
    return a+b+c;
}
console.log(soma5(), soma5(3), soma5(1,2,3), soma5(0,0,0))

console.log('------------------------')