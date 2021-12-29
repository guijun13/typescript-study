export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = [];
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // listaNegociacoes(): ReadonlyArray<Negociacao>{ // dont allow edit array functions (e.g. pop())
    listaNegociacoes() {
        return this.negociacoes;
    }
}
