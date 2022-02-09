import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel{ // implementa a interface Imprimivel
  // private negociacoes: Array<Negociacao> = [];
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao){
    this.negociacoes.push(negociacao);
  }

  // listaNegociacoes(): ReadonlyArray<Negociacao>{ // dont allow edit array functions (e.g. pop())
  public listaNegociacoes(): readonly Negociacao[]{
    return this.negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }
}
