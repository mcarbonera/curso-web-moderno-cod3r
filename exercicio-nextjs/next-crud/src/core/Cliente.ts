export default class Cliente {
    private id: string
    private nome: string
    private idade: number

    constructor(nome: string, idade: number, id: string = null) {
        this.id = id
        this.nome = nome
        this.idade = idade
    }

    static clienteBuilder() {
        return new Cliente('', 0)
    }

    get getId() {
        return this.id
    }

    get getNome() {
        return this.nome
    }

    get getIdade() {
        return this.idade
    }
}