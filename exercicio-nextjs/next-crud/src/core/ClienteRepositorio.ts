import Cliente from "./Cliente";

export default interface ClienteRepositorio {
    salvar(salvar: Cliente): Promise<Cliente>
    excluir(salvar: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
}