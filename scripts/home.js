const containerCards= document.querySelector('.container-cards');

const renderCards= (arrayDatos,conteiner)=>{

  let cards='';
    // accediendo al objeto "data" del archivo data.js
  for (const obj in arrayDatos) {
    
    // accediendo a eventos
  if(obj=='events'){
    for (const card of arrayDatos[obj]) {

        cards+= `<div class="card" style="width: 18rem;" id="card_1">
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
  containerCards.innerHTML=cards;
}

renderCards(data,containerCards)

