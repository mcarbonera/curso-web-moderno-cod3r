/* função construtora */
function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    }
}

console.log(criarPessoa('Marcelo','Carbonera'));
console.log(criarPessoa('Joanna','Campos'));

/* classe construtora */
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log('Meu nome é ' + this.nome + ' ' + this.sobrenome);
    }
}
const p1 = new Pessoa('Marcelo', 'Carbonera')
const p2 = new Pessoa('Joanna', 'Campos')

p1.falar();
p2.falar();

const Pessoa2 = nome => {
    return {
        falar: () => console.log('Eu sou o ' + nome)
    }
}

const p3 = Pessoa2('Marcelão')
p3.falar();