document.addEventListener('click',function(e){
  // Hamburger menu
  if(e.target.classList.contains('hamburger-toggle')){
    e.target.children[0].classList.toggle('active');
  }
}) 

// // function markX(){
// //   document.innerHtml=""
  
// // }

// // <i class="fa-solid fa-xmark navbar-toggler" style="color: #ff0000;"></i>

const result = fetch("https://dummyjson.com/products")
 // fetch the data from the api
.then(function (result) {
  return result.json();
}) // convert it to json after fetch
.then(function (result) {
  displayData(result.products);

});




function displayData(arr){
  let num;
  for(let i =0;i<6;i++){
    let cardsArea =document.querySelector(".cards-area");

    num=`<div class="card swiper-slide" style="width: 18rem;">
    <img src= ${arr[i].images[0]} class="card-img-top" alt="...">
    <div class="card-body ro-card-hover text-center">
      <h5 class="card-title ro-card-title ">${arr[i].title}</h5>
      <p class="card-text">${arr[i].rating}</p>
      <p class="text-center">"$ ${arr[i].price}"</p>
    </div>
  </div>`
   cardsArea.innerHTML+=num;
   console.log(arr[i].images[0]);
  }
  }
  

var swiper = new Swiper(".slide-content", {
              slidesPerView: 4,
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
                900:{
                  slidesPerView: 3,

                },
                1200:{
                  slidesPerView: 4,

                }


              }
            });




