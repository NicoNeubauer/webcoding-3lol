// for å finne ting letter å for å korte med koden , peker på html elemnter 
const tr        = document.createElement("tr");
const tabel     = document.getElementById("table1")
const studenterdiv     = document.getElementById("kontaktListe")

//henter datane fra server  
fetch('http://folk.ntnu.no/oeivindk/imt1441/storage/getAll.php?store=andreneub')
 .then(res=>res.json())
 .then(data=>{


// lisner om det blir skrivd noe i input felte 
document.getElementById('search').addEventListener('input', e=>{
if(e.target.value!=""){
  visStudenter(data.data.filter(filter));
}else{
  tabel.innerHTML="";
}
});
//filtrerer resultantene
function filter(kontakt) {
const namel = kontakt.lastName.toLowerCase().indexOf(document.getElementById('search').value.toLowerCase())>-1;
const namef = kontakt.givenName.toLowerCase().indexOf(document.getElementById('search').value.toLowerCase())>-1;

return namel||namef;

}

//lager lista 
function visStudenter(data) {
  tabel.innerHTML = '';
  data.forEach(kontakt=>{
    console.log(kontakt)
    const tr = document.createElement('TR');


    tr.innerHTML = `<td>${kontakt.givenName}</td> <td>${kontakt.lastName}</td> <td>${kontakt.Email}</td> <td>${kontakt.tlfo}</td> <td>${kontakt.gate}</td> <td>${kontakt.postNummer}</td> <td>${kontakt.sted}</td> `;
    tabel.appendChild (tr);


  });

}

const fornavn   = document.getElementById("input11");
const etternavn   = document.getElementById("input21");
const epost   = document.getElementById("input31");
const tlf   = document.getElementById("input41");
const Gate   = document.getElementById("input51");
const Postnummer   = document.getElementById("input61");
const Sted   = document.getElementById("input71");

document.querySelector("table").addEventListener("click", e=>{
  fornavn.value = [e.path[1].children[0].innerHTML];
  etternavn.value =[e.path[1].children[1].innerHTML];
  epost.value =[e.path[1].children[2].innerHTML];
  tlf.value =[e.path[1].children[3].innerHTML];
  Gate.value =[e.path[1].children[4].innerHTML];
  Postnummer.value =[e.path[1].children[5].innerHTML];
  Sted.value =[e.path[1].children[6].innerHTML];
  

  //document.getElementById("editK").innerHTML=`<a href="http://folk.ntnu.no/oeivindk/imt1441/storage/remove.php?store=andreneub&tlfo='${[e.path[1].children[3].innerHTML]}'"></a>`

   
});
document.getElementById("editK").addEventListener("click", e=>{ //event lisen på knapen nederst


    var formData = new FormData();
    formData.append("store", "andreneub");//hviken stor den sender til (Andre)
    //det som blir sent , som jason data
    formData.append("data", JSON.stringify({
      "givenName":`${fornavn.value}` ,
      "lastName":`${etternavn.value}` ,
      "Email":`${epost.value}` ,
      "tlfo":`${tlf.value}`,
      "gate":`${Gate.value}`,
      "postNummer":`${Postnummer.value}`,
      "sted":`${Sted.value}`
    }));
    fetch("http://folk.ntnu.no/oeivindk/imt1441/storage/add.php", { //adresen til server storen
      method: "POST",
      body: formData
      //for å kunne se at ting blir sent korecte
    }).then(res=>res.json())
    .then(data=>{
        console.log (data);
    })
    // for og slette all skrivt i feltene 
    fornavn.value = "";
    etternavn.value = "";
    epost.value = ""
    tlf.value = "";
    Gate.value = "";
    Postnummer.value = "";
    Sted.value = "";
  })

});
