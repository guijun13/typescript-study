import { Negociacao } from "./negociacao.js";

export class Negociacoes{
  // private negociacoes: Array<Negociacao> = [];
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao){
    this.negociacoes.push(negociacao);
  }

  // listaNegociacoes(): ReadonlyArray<Negociacao>{ // dont allow edit array functions (e.g. pop())
  public listaNegociacoes(): readonly Negociacao[]{
    return this.negociacoes;
  }
}
