import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes =  new Negociacoes();
  private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemView: MensagemView = new MensagemView('#mensagemView');

  constructor(){
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona() : void{
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    this.limparFormulario();
    this.atualizaView();
  }

  private criaNegociacao(): Negociacao{
    const exp = /-/g;
    const data = new Date(this.inputData.value.replace(exp, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(data, quantidade, valor);
  }

  private limparFormulario(): void{
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }

  private atualizaView(): void{
    this.negociacoesView.update(this.negociacoes); // atualiza a view-tabela
    this.mensagemView.update('Negociacao adicionada com sucesso!'); // atualiza a mensagem criada
  }
}