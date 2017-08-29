for(i=0; i<customers.results.length; i++){

const template = `

<div class="boxsize">
  <img src="${customers.results[i].picture.large}" alt="">
  <h2>${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
  <p class="email">${customers.results[i].email}</p>
  <div>${customers.results[i].location.street}</div>
  <div>${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}</div>
  <div>${customers.results[i].cell}</div>
  <p class= "ssnum">${customers.results[i].id.value}</p>
</div>

`;

document.querySelector(".container").innerHTML += template;
}
