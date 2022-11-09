class slideshow {
  constructor(selector, images) {
  this.img = images;

  const slideshow = document.querySelector(selector);
  this.slide1 = document.createElement('DIV');
  slideshow.appendChild(this.slide1);
  this.slide2 = document.createElement('DIV');
  slideshow.appendChild(this.slide2);
  this.addStyles(selector);
  this.slide1.style.backgroundImage = `url('${this.img[0]}')`;
  


  setTimeout(()=>{
    this.slide1.style.opacity = 1;
  }, 1);                          
   
 this.currentSlide = 1;   
  this.nextSlide();
  
  this.slide2.addEventListener('transitionend',this.changeImage.bind(this))
}            

  nextSlide() {
    setTimeout(()=>{
      this.slide2.style.backgroundImage = this.slide1.style.backgroundImage;
      this.slide2.style.opacity = 1;
    }, 7000); 
  }

  changeImage(){
    if (this.slide2.style.backgroundImage==this.slide1.style.backgroundImage) { 
      this.slide1.style.backgroundImage = `url('${this.img[this.currentSlide]}')`;
      this.slide2.style.opacity = 0;                                       
      this.currentSlide++;     
      this.currentSlide = this.currentSlide%this.img.length; 
      this.nextSlide();        
    }
  }
//adder riktig css styling 
  addStyles(selector){
    const style = document.createElement("style");
    style.innerHTML = `
    ${selector} div {
      /*
      Det er to DIV tagger inne i den som inneholder slideshowet, en ligger over
      den andre og den nærmest brukeren brukes for å fade mellom to bilder.
      */
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      background-color: #FFF;
      opacity: 0;
      transition: opacity 4s;
    }

    ${selector}>div:first-child {
      /*
      Dette er den bakerste
      */
      z-index: 0;
    }

    ${selector}>div:last-child {
      /*
      Dette er den fremste (den som fades inn)
      */
      z-index: 1;
    }`;
    document.querySelector("head").appendChild(style);
  }
}
//detter e på same stede for at jeg kan bruke menu.js for å kun loge det en gang 
const images = ["img/682px-Kitten_in_Rizal_Park,_Manila.jpg",
                "img/9343-a-cute-orange-kitten-isolated-on-a-white-background-pv.jpg",
                "img/kittens-2641211_960_720.jpg",
                "img/kittens-2677249_960_720.jpg"]

new slideshow('.slideshow' , images);
