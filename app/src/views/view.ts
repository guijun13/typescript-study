// classe view abstrata -> nao pode criar uma instacia diretamente dela,

import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

// somente se um filho herda uma instancia dela
export abstract class View<T>{ // tipo "generics", é definido nas classes filhas
  
  protected elemento: HTMLElement;

  constructor(seletor: string){ // com '?', o parametro 'escapar' é opcional
    const elemento = document.querySelector(seletor);
    if(elemento){
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} nao existe no DOM`);
    }
  }

  protected abstract template(model: T): string; // com abstract, obriga que as classes filhas
                                                // utilizem o metodo 'template' nelas
                                                // com protected, somente o pai e as filhas podem usar o metodo

  @inspect // executa esse primeiro
  @logarTempoDeExecucao(true) // depois esse
  public update(model: T): void{
    let template = this.template(model);
    this.elemento.innerHTML = template;
  }
}