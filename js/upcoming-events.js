const containerCards= document.querySelector('.container-cards');

const form = document.querySelector('.category__search');

const input = document.querySelector('.space-search');

const containerChecks = document.querySelector('.category__check');

//dato currendate
let numberDate = data.currentDate;

//renderiza las cards
function renderCardsPast(arrayDatos,container) {
  if(arrayDatos.length == 0){
      container.innerHTML = `<div class="containerNotFound" >
                    <img src='../Img/no-result-found-icon.svg' alt='image not found'>
                  <h2 class='notFound'>RESULT NOT FOUND</h2>
                </div>
          `
      return;
  }
  let cards = ''
  arrayDatos.forEach(element => {
    if(element.date>numberDate){
      cards += `<div class="card all ${element.category}" style="width: 18rem;" id="card_1">
      <img src="${element.image}" class="card-img-top" alt="cinema">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.description}</p>
        <div class="detaills">
          <p> <span class="detaills__price">Price: $${element.price}</span></p>
          <a href="./details.html?id=${element._id}" class="btn btn-primary">View more...</a>
        </div>
      </div>
    </div>`
  }
  })
  container.innerHTML = cards;
}


//Previene la recarga del search por formulario
form.addEventListener('submit',(e)=>{
  e.preventDefault();
});


//muestra los chekbox

function renderChecks(arrayDatos,container){
  let checks='';
  let repeatingcategory = arrayDatos.map(element => element.category);
  let category = new Set(repeatingcategory);

  category.forEach(element=>{
    checks+=`<div class="form-check">
    <input class="form-check-input" type="checkbox" value="${element}" id="${element}">
    <label class="form-check-label" for="${element}">
    ${element}
    </label>
  </div>
 `
  })

  container.innerHTML=checks;
}

//Obtiene el dato por input
function textFilter(arrayDatos, text){
  let filterArray = arrayDatos.filter(element => element.name.toLowerCase().includes(text.toLowerCase()));
  return filterArray;
}

//filtra por categoria
function filterChecks(arraydata){
  let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let arrayChecks = Array.from(checkboxes);
    
    let checksChecked = arrayChecks.filter(check => check.checked);
    if(checksChecked.length == 0){
        return arraydata;
    }
    let checkValues = checksChecked.map(check => check.value);;
    let filterArray = arraydata.filter(element => checkValues.includes(element.category));

    return filterArray;
  }
  
  

//combina el search y checkbox
function mixFilter(){
  let filterArray1 = textFilter(data.events, input.value);
  let filterArray2 = filterChecks(filterArray1);
  renderCardsPast(filterArray2,containerCards);
}

//activar funciones
renderCardsPast(data.events,containerCards);

renderChecks(data.events,containerChecks);

filterChecks(data.events);

containerChecks.addEventListener('change',mixFilter)
input.addEventListener('input',mixFilter)












