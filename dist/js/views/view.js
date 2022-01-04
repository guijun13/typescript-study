// classe view abstrata -> nao pode criar uma instacia diretamente dela,
// somente se um filho herda uma instancia dela
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    // utilizem o metodo 'template' nelas
    // com protected, somente o pai e as filhas podem usar o metodo
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
