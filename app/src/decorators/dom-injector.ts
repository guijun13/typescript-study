export function domInjector(seletor: string){
  return function(target: any, propertyKey: string){

    console.log(`Modificando proptype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);

    let elemento: HTMLElement;

    // tranforma a propriedade em getter
    const getter = function(){
      if(!elemento){
        elemento = <HTMLElement>document.querySelector(seletor);
        console.log(`Buscando elemento do DOM com ${seletor} para injetar em ${propertyKey}`)
      }
      return elemento;
    }

    Object.defineProperty(
      target, 
      propertyKey, 
      { get: getter }
    )
  }
}