const detailsCards= data.events.map(element =>{
  let aux={};
  aux.image= element.image;
  aux.name= element.name;
  aux.description= element.description;
  aux.price= element.price;
  aux.place= element.place;
  aux.date=element.date;
  aux._id=element._id;
  return aux
})

console.log(detailsCards);

const querySearch = document.location.search;

const id = new URLSearchParams(querySearch).get("id")

const events = detailsCards.find(personaje => personaje._id == id)

const containerDetails = document.querySelector('.card-container');

console.log(containerDetails)

containerDetails.innerHTML = `
<div class="card-container__card">
  <img src="${events.image} class="img-details" alt="">
</div>

<div class="card-container__detaills">
  <h5>${events.name}</h5>
  <p>${events.description}</p>
  <p><span class="span_detaills">Date:</span> ${events.date}</p>
  <p><span class="span_detaills">Place:</span> ${events.place}</p>
  <p><span class="span_detaills">Price:</span> $${events.price}</p>
</div>`