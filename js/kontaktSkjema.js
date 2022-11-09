document.getElementById("newK").addEventListener("click", e=>{ //event lisen på knapen nederst


  //noen konst for å forkorte resten
  //henger alle samen med et for element 
    const fornavn   = document.getElementById("input1");
    const etternavn   = document.getElementById("input2");
    const epost   = document.getElementById("input3");
    const tlf   = document.getElementById("input4");
    const Gate   = document.getElementById("input5");
    const Postnummer   = document.getElementById("input6");
    const Sted   = document.getElementById("input7");

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
