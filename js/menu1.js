
//fetcher jason datan hvor den finne de andre js filnavn og andre navn
fetch("js/menu.json")
.then(res=>res.json())
.then(data=>{
    const menu =document.querySelector("nav ul");
    data.forEach((menuItem, idx)=> {
        const li = document.createElement("li");
        let active = "";
        if (idx==0){
            active = 'class="active"';
        }
        // adder texten til nav baren 
        li.innerHTML = `<a data-scriptsrc="${menuItem.scriptsrc}" data-id="${menuItem.id}" href=""${active}>${menuItem.html}</a>`;
        menu.appendChild(li);
    });
    // adder de andre scripts 
    document.querySelectorAll("nav a").forEach(menuItem=>{
        menuItem.addEventListener("click", e=>{
            localStorage.setItem('activePage', e.target.dataset.id); //storer pagen du er på
            e.preventDefault();
            if (e.target.dataset.scriptsrc!="") {
                if(document.querySelector(`[src="${e.target.dataset.scriptsrc}"]`)==null){
                    const script = document.createElement("SCRIPT");
                    script.src =e.target.dataset.scriptsrc;
                    document.querySelector("head").appendChild(script);
                }
            }
            // for å byte hvem del som blir vist
            document.querySelectorAll("body>section>section").forEach(section=>{
                if (e.target.dataset.id==section.id) {
                    section.classList.add("active");
                }
            // for at ikke to blir vist 
                else{
                    section.classList.remove("active");
                }
            })
            //for å byte farge på nav baren
            document.querySelectorAll("nav a").forEach(menuItem=>{
                if (menuItem==e.target) {
                    menuItem.classList.add("active");
                }
            //for at ikke to er grøn på en gang 
                else {
                    menuItem.classList.remove("active");
                }
            })
        })
    })
    if (localStorage.getItem('activePage')!=null) { //see hva brukern valgte sist 
        document.querySelector(`nav a[data-id="${localStorage.getItem('activePage')}"]`).click(); // trykkkl på det bruken valgte sist 
      } else { document.querySelector(`nav a`).click(); // vis ingen velg den første
    }
});