for(i=0; i<customers.results.length; i++){

const template = `

<div class="boxsize">
  <img src="${customers.results[i].picture.large}" alt="">
  <h2>${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
  <p>${customers.results[i].location.street}</p>
  <p>${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}</p>
  <p>${customers.results[i].cell}</p>
  <p>${customers.results[i].id.value}</p>
</div>

`;

document.querySelector(".container").innerHTML += template;
}
