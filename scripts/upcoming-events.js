const containerCards= document.querySelector('.container-cards');

const renderCardsUpcoming=(arrayDatos,container)=>{
  let numberDate='';
  let numberDateCard='';
  let cardsPast='';

  // accediendo al objeto "data" del archivo data.js
  for (const obj in arrayDatos) {
  
  if(obj=='currentDate'){
    numberDate= arrayDatos[obj];
  }
  
  if(obj=='events'){
    
    for (const card of arrayDatos[obj]) {
    
    numberDateCard=card.date;

    //comparar el dato numerico de la fecha "currentDate" para saber cuales son los eventos pasados y renderizar
    if(numberDateCard>numberDate){
      
        cardsPast+= `<div class="card" style="width: 18rem;" id="card_1">
        <img src="${card.image}" class="card-img-top" alt="cinema">
        <div class="card-body">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-text">${card.description}</p>
          <div class="detaills">
            <p> <span class="detaills__price">Price: $${card.price}</span></p>
            <a href="./details.html" class="btn btn-primary">View more...</a>
          </div>
        </div>
      </div>`

      }
    
    }
  
  }

}
  containerCards.innerHTML= cardsPast;
}

renderCardsUpcoming(data,containerCards)








