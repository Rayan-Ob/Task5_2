document.addEventListener('click',function(e){
    // Hamburger menu
    if(e.target.classList.contains('hamburger-toggle')){
      e.target.children[0].classList.toggle('active');
    }
  }) 

  // function markX(){
  //   document.innerHtml=""
    
  // }

  // <i class="fa-solid fa-xmark navbar-toggler" style="color: #ff0000;"></i>
  
 
  const result = fetch("https://dummyjson.com/products")
   // fetch the data from the api
  .then(function (result) {
    return result.json();
  }) // convert it to json after fetch
  .then(function (result) {
    displayData(result.products);
  }); 

  // 
 
  
  function displayData(arr) {
    // loop in each item within the products
    arr.forEach(function (item) {
      // get cards area
      const cardsArea = document.querySelector(".cards-area");
  
      // get the first div
      const div1 = document.createElement("div");
  
      // give it classes
      div1.classList = "col-lg-4";
  
      // get the second div and give it classes
      const div2 = document.createElement("div");
      div2.classList = "card";
      div2.style="width: 18rem;"
  
      // get the image and put the source in it, and give it classes
      const img = document.createElement("img");
      img.src = item.images[1];
      img.classList = "card-img-top";
  
      // get the third element and give it the classes
      const div3 = document.createElement("div");
      div3.classList = "card-body";
  
      // get the h5 and give it the inner text and classes
      const h5 = document.createElement("h5");
      h5.classList = "card-title";
      h5.innerText = item.title;
  
      // get the p and give it the inner text and classes
      const p = document.createElement("p");
      p.classList = "card-text";
      p.innerText = item.rating;
  
      const p2 = document.createElement("p");
      p2.classList = "card-text";
      p2.innerText =`$ ${item.price}`;
  
      // put h5 and p inside div3
      div3.append(h5);
      div3.append(p);
      div3.append(p2);

    
  
      // put img and div3 inside div2
      div2.append(img);
      div2.append(div3);
  
      // put div2 inside div1
      div1.append(div2);
  
      // put all code now inside cards area as a new card
      cardsArea.append(div1);
  
      //////////////////////////////////////////////////  ANOTHER WAY TO PUT THE DATA /////////////////////
      /*
              cardsArea.append(
              <div class="col-md-4 col-sm-12">
                  <div class="card">
                      <img src="${item.images[0]}" class="card-img-top">
                      <div class="card-body">
                          <h5 class="card-title">${item.title}</h5>
                          <p class="card-text">${item.description}</p>
                      </div>
                  </div>
              </div>
              `);
      */
    });

     // loop in each item within the products
     arr.forEach(function (item) {
      // get cards area
      const cardsArea = document.querySelector(".cards-area-2");
      const div1 = document.createElement("div");
  
      // give it classes
      div1.classList = "col-lg-4";
  
      // get the second div and give it classes
      const div2 = document.createElement("div");
      div2.classList = "card";
      div2.style="width: 18rem;"
  
      // get the image and put the source in it, and give it classes
      const img = document.createElement("img");
      img.src = item.images[1];
      img.classList = "card-img-top";
  
      // get the third element and give it the classes
      const div3 = document.createElement("div");
      div3.classList = "card-body";
  
      // get the h5 and give it the inner text and classes
      const h5 = document.createElement("h5");
      h5.classList = "card-title";
      h5.innerText = item.title;
  
      // get the p and give it the inner text and classes
      const p = document.createElement("p");
      p.classList = "card-text";
      p.innerText = item.rating;
  
      const p2 = document.createElement("p");
      p2.classList = "card-text";
      p2.innerText =`$ ${item.price}`;
  
      // put h5 and p inside div3
      div3.append(h5);
      div3.append(p);
      div3.append(p2);

    
  
      // put img and div3 inside div2
      div2.append(img);
      div2.append(div3);
  
      // put div2 inside div1
      div1.append(div2);
  
      // put all code now inside cards area as a new card
      cardsArea.append(div1);
     });}
     
      // get the first div
      
      //////////////////////////////////////////////////  ANOTHER WAY TO PUT THE DATA /////////////////////
      /*
              cardsArea.append(`
              <div class="col-md-4 col-sm-12">
                  <div class="card">
                      <img src="${item.images[0]}" class="card-img-top">
                      <div class="card-body">
                          <h5 class="card-title">${item.title}</h5>
                          <p class="card-text">${item.description}</p>
                      </div>
                  </div>
              </div>
              `);
      */
    
  


  

  