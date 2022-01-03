// classe view abstrata -> nao pode criar uma instacia diretamente dela,
// somente se um filho herda uma instancia dela
export abstract class View<T>{ // tipo "generics", é definido nas classes filhas
  
  protected elemento: HTMLElement;

  constructor(seletor: string){
    this.elemento = document.querySelector(seletor);
  }

  abstract template(model: T): string; // com abstract, obriga que as classes filhas
                                       // utilizem o metodo 'template' nelas

  update(model: T): void{
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}