

//hide div above nav
function hide() {
  let navHeader = document.querySelector('.ro-nav-head');
  navHeader.innerHTML = ``;
}




//convert burger menu button from bar to X 
  function closeMark(icon) {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars")
    icon.classList.add("fa-x")
    document.querySelector('#closeColor').style.color="red"  
  }

  else {
    icon.classList.remove("fa-x")
    icon.classList.add("fa-bars")
    document.querySelector('#closeColor').style.color="black"  


  }}
  




//fixed button to top
const scrollTop = document.querySelector('.toTop');
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",

  });
});



// new arrival section

// pring data from fetch
const result = fetch("https://dummyjson.com/products")
  .then(function (result) {
    return result.json();
  })
  .then(function (result) {
    displayData(result.products);
  });

function displayData(arr) {
  let num;
  for (let i = 1; i < 7; i++) {
    let cardsArea = document.querySelector(".cards-area");
    let rate =Math.ceil(Number((arr[i].rating) * 20))
    num = `<div class="card swiper-slide">
      <img src= ${arr[i].images[0]} class="card-img-top ro-swiper-img img-fluid" alt="...">
      <div class="card-body ro-card-body text-center">
        <h5 class="card-title  ">${arr[i].title}</h5>
        <p class="card-text ro-arrivalP">Rating : ${Math.ceil(Number((arr[i].rating) * 20))} %</p>
        <div class="stars-outer">
        <div class="stars-inner" style="width: ${rate}%;"></div>
        </div>
        <p class="text-center">Price : $ ${arr[i].price}</p>
      </div>
    </div>`
    // document.querySelector('.stars-inner').style.width="50px";

    cardsArea.innerHTML += num;
    console.log(arr[i].images[0]);
  }
}

//to cards slider
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
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    700: {
      slidesPerView: 2,

    },
    925: {
      slidesPerView: 3,

    }


  }
});








