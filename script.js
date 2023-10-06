


function hide(){
  let navHeader =document.querySelector('.ro-nav-head');
  navHeader.innerHTML=``;
}

  let closeMark = function (icon){
    let close=document.querySelector('.ro-close');
    if(close.classList.contains("fa-bars")){
    
    close.innerHTML = ` <i class="fa-solid fa-times navbar-toggler ro-close" style="color: #ff0000;"></i>`;
    }

    else if(close.classList.contains("fa-times")){
      close.classList.replace("fa-bars" , "fa-times")
    
      }
    
  }
   const scrollTop =document.querySelector('.toTop');
   scrollTop.addEventListener("click" , () =>{
    window.scrollTo({
      top:0,
      behavior:"smooth",

    });
   });


   const result = fetch("https://dummyjson.com/products")
   
  .then(function (result) {
    return result.json();
  }) 
  .then(function (result) {
    displayData(result.products);

  });


  

  function displayData(arr){
    let num;
    for(let i =1;i<7;i++){
      let cardsArea =document.querySelector(".cards-area");

      num=`<div class="card swiper-slide">
      <img src= ${arr[i].images[0]} class="card-img-top ro-swiper-img img-fluid" alt="...">
      <div class="card-body ro-card-body text-center">
        <h5 class="card-title  ">${arr[i].title}</h5>
        <p class="card-text">Rating : ${Math.ceil(Number((arr[i].rating) *20))} %</p>
        <p class="text-center">Price : $ ${arr[i].price}</p>
      </div>
    </div>`
     cardsArea.innerHTML+=num;
     console.log(arr[i].images[0]);
    }
    }
    
  
var swiper = new Swiper(".slide-content", {
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                breakpoints:{
                  0:{
                    slidesPerView: 1,

                  },
                  700:{
                    slidesPerView: 2,

                  },
                  925:{
                    slidesPerView: 3,

                  }


                }
              });


  

  



  

  