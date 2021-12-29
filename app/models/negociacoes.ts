import { Negociacao } from "./negociacao.js";

export class Negociacoes{
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao){
    this.negociacoes.push(negociacao);
  }

  listaNegociacoes(): Array<Negociacao>{
    return this.negociacoes;
  }
}
