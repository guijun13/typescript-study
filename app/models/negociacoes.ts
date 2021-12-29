import { Negociacao } from "./negociacao.js";

export class Negociacoes{
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao){
    this.negociacoes.push(negociacao);
  }

  listaNegociacoes(): ReadonlyArray<Negociacao>{ // dont allow edit array functions (e.g. pop())
    return this.negociacoes;
  }
}
