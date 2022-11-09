
const mymap = L.map('mapid').setView([60.788938, 10.681592], 15);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib2tvbGxvZW4iLCJhIjoiY2p0dHVqNjkzMHhzejRkbW1uOThuOGNnMyJ9.ZghCItafslYo45FTIpaZsw', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> '+
  'contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '+
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 17,
id: 'mapbox.streets',
accessToken: 'pk.eyJ1Ijoib2tvbGxvZW4iLCJhIjoiY2p0dHVqNjkzMHhzejRkbW1uOThuOGNnMyJ9.ZghCItafslYo45FTIpaZsw'
}).addTo(mymap);

function feil (feil) {
  console.log (feil);
}

document.querySelector("table").addEventListener("click", e=>{
  let sted = [e.path[1].children[4].innerHTML]+`+`+[e.path[1].children[6].innerHTML]+`+`
  // let sted = encodeURIComponent(Gate.value+' '+by.vlaue);
   // sted = encodeURIComponent(sted);
     console.log(sted)
    fetch(`https://nominatim.openstreetmap.org/search?q=${sted}&format=json&polygon=1&addressdetails=1`)
    .then(res=>res.json())
    .then(data=>{

     (data);    
    mymap.setView([data[0].lat, data[0].lon], 17);

  

    })
})
