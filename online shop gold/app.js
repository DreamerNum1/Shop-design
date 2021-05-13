import products from './product.js'

  const input = document.querySelector('#input');
  // const select = document.querySelector('#select');
  // const select1 = document.querySelector('#select1');
  // const option = document.querySelector('#value');
  const formSelect = document.querySelector('.form-select');
  // const selectBtn = document.querySelector('.selectBtn');
  // const selectBtn2 = document.querySelector('.selectBtn2');
  const formSelect2 = document.querySelector('.second'); 
  const formSelect3 = document.querySelector('.third');
  // const selectBtn3 = document.querySelector('.selectBtn3');
  const row = document.querySelector('.row');
  const handsome = document.querySelector('#handsome');
  const btn3 = document.querySelector('#third-btn');
  const btn4 = document.querySelector('#fourth-btn');


  // selectBtn.addEventListener('click', ()=>{
  //   let searchBrand = formSelect.value;
    
  // })
  let btn = document.querySelector('#btn');
  let second = document.querySelector('#second-btn');
  let current_page = 1;
  let rows = 6;

  /* slice va splice bu arrayni kesish uchun ishlatiladi */

  function loadData(products, wrapper, rows, current_page){
    current_page--
    let html = ``
    let start = current_page * rows;
    let end = start + rows;
    let pagination = products.slice(start, end);
    displaydata(pagination) 
    // console.log(pagination);    
}




/* //////////////////////////////////// */


function displayButton(products, wrapper, rows) {
  let numberOfBtn = Math.ceil( products.length / rows );
  // console.log(array.length)
  // console.log(numberOfBtn)
  for (let i = 1; i <= numberOfBtn; i++) {
      creatBtn(i)
      
  }
}

function creatBtn(i) {
  let button = document.createElement('button');
  console.log(button);


  button.addEventListener('click', ()=> {
      current_page = i;
      loadData( products, row, rows, current_page);
    
  })
  button.innerHTML = i;
  handsome.appendChild(button);
}


displayButton(products, row, rows);

/* //////////////////////////////// */






btn.addEventListener('click', ()=>{
    current_page++
    loadData(products, row, rows, current_page)
})
second.addEventListener('click', ()=>{   
    current_page--
    loadData(products, row, rows, current_page)
}) 
loadData(products, row, rows, current_page);
btn3.addEventListener('click', ()=> {
  current_page = 1
  loadData(products, row, rows, current_page)
})
loadData(products, row, rows, current_page);
btn4.addEventListener('click', ()=>{
  current_page[current_page.length - 1]    
  loadData(products, row, rows, current_page);
})
loadData(products, row, rows, current_page);

  
input.addEventListener('keyup',() => {
      let searchItem = input.value;
      let filteredData = products.filter(el => {
        return el.name.includes(searchItem)
      })
      displaydata(filteredData)
  })
  formSelect.addEventListener('change',()=>{
    let searchBrand = formSelect.value;
    let filteredData = products.filter(el => {
      return el.brand.includes(searchBrand)
    })
    displaydata(filteredData)
  })
  formSelect2.addEventListener('change',()=>{
    let searchPrice = formSelect2.value;
    let filteredData = products.filter(el =>{
      console.log()
      return el.price  ==  searchPrice
    })
    displaydata(filteredData)
  })
  formSelect3.addEventListener('change',()=>{
    let searchCategory = formSelect3.value;
    let filteredData = products.filter(el =>{
      return el.category == searchCategory
    })
    displaydata(filteredData)
  })
 


  // /*    *//////////////////////////////////////////////////////////////////////

 
  function displaydata(products){
    let html = `` 
    products.forEach(el=>{
      
      if (el.rating == 3 && el.countInStock > 0) {
        html += `

          <div id ="box-in">
            <img class="img" src="${el.image}">
            <p id="p1">${el.name}</p>
            <p id="p2">${el.price + '$'}</p>
            <h4 id= "h4">${el.rating}</h4>
            <div id="icons">
                <i class="fas fa-star fa-2x"></i>
                <i class="fas fa-star fa-2x"></i>
                <i class="fas fa-star fa-2x"></i>          
            </div>
            <button id = "btn">buy the item</button>
            <div id="icons2">
                <i id="cart" class="fas fa-cart-arrow-down fa-2x"></i>
                <i id="heart" class="fas fa-heart fa-2x"></i>
                <i id="book" class="fas fa-book fa-2x"></i>
            </div>
            <button id="btn2121"> Read</button>
          </div>

        `
      }else if (el.rating == 3.5 && el.countInStock > 0) {
        html += `

          <div id ="box-in">
            <img class="img" src="${el.image}">
            <p id="p1">${el.name}</p>
            <p id="p2">${el.price + '$'}</p>
            <h4 id= "h4">${el.rating}</h4>
            <div id="icons">
                <i class="fas fa-star fa-2x"></i>
                <i class="fas fa-star fa-2x"></i>
                <i class="fas fa-star fa-2x"></i>  
                <i class="fas fa-star-half fa-2x"></i>    
            </div>
            <button id = "btn">buy the item</button>
            <div id="icons2">
                <i id="cart" class="fas fa-cart-arrow-down fa-2x"></i>
                <i id="heart" class="fas fa-heart fa-2x"></i>
                <i id="book" class="fas fa-book fa-2x"></i>
            </div>
            <button id="btn2121"> Read</button>
          </div>

        `
      }else if (el.rating == 4.0 && el.countInStock > 0) {
        html += ` 

          <div id ="box-in">
            <img class="img" src="${el.image}">
            <p id="p1">${el.name}</p>
            <p id="p2">${el.price + '$'}</p>
            <h4 id= "h4">${el.rating}</h4>
            <div id="icons">
                <i class="fas fa-star fa-2x"></i>
                <i class="fas fa-star fa-2x"></i>
                <i class="fas fa-star fa-2x"></i> 
                <i class="fas fa-star fa-2x"></i>          
            </div>
            <button id = "btn">buy the item</button>
            <div id="icons2">
                <i id="cart" class="fas fa-cart-arrow-down fa-2x"></i>
                <i id="heart" class="fas fa-heart fa-2x"></i>
                <i id="book" class="fas fa-book fa-2x"></i>
            </div>
            <button id="btn2121"> Read</button>
          </div>

        `
      }else if (el.rating == 4.5 && el.countInStock > 0) {
        html += `

          <div id ="box-in">
            <img class="img" src="${el.image}">
            <p id="p1">${el.name}</p>
            <p id="p2">${el.price + '$'}</p>
            <h4 id= "h4">${el.rating}</h4>
            <div id="icons">
                <i class="fas fa-star fa-2x"></i>
                <i class="fas fa-star fa-2x"></i>
                <i class="fas fa-star fa-2x"></i>  
                <i class="fas fa-star fa-2x"></i> 
                <i class="fas fa-star-half fa-2x"></i>
            </div>
            <button id = "btn">buy the item</button>
            <div id="icons2">
                <i id="cart" class="fas fa-cart-arrow-down fa-2x"></i>
                <i id="heart" class="fas fa-heart fa-2x"></i>
                <i id="book" class="fas fa-book fa-2x"></i>
            </div>
            <button id="btn2121"> Read</button>
          </div>

        `
      }else if (el.rating == 5 && el.countInStock > 0) {
        html += `

          <div id ="box-in">
            <img class="img" src="${el.image}">
            <p id="p1">${el.name}</p>
            <p id="p2">${el.price + '$'}</p>
            <h4 id= "h4">${el.rating}</h4>
            <div id="icons">
                <i class="fas fa-star fa-2x"></i>
                <i class="fas fa-star fa-2x"></i>
                <i class="fas fa-star fa-2x"></i> 
                <i class="fas fa-star fa-2x"></i>    
                <i class="fas fa-star fa-2x"></i>         
            </div>
            <button id = "btn">buy the item</button>
            <div id="icons2">
                <i id="cart" class="fas fa-cart-arrow-down fa-2x"></i>
                <i id="heart" class="fas fa-heart fa-2x"></i>
                <i id="book" class="fas fa-book fa-2x"></i>
            </div>
            <button id="btn2121"> Read</button>
          </div>

        `
      }else{
        html += `
          <div id ="box-in">
            <img class="img" src="${el.image}">
            <p id="p1">${el.name}</p>
            <p id="p2">${el.price + '$'}</p>
            <h4 id= "h4">${el.rating}</h4>
            <div id="icons">
                <i class="fas fa-star fa-2x"></i>
                <i class="fas fa-star fa-2x"></i>
                <i class="fas fa-star fa-2x"></i> 
                <i class="fas fa-star fa-2x"></i>   
                <i class="fas fa-star-half fa-2x"></i> 
            </div>
            <button id = "btn1">you can't buy it</button>
            <div id="icons2">
                <i id="cart" class="fas fa-cart-arrow-down fa-2x"></i>
                <i id="heart" class="fas fa-heart fa-2x"></i>
                <i id="book" class="fas fa-book fa-2x"></i>
            </div>
            <button id="btn2121"> Read</button>
          </div>
        `
      }
  
    row.innerHTML = html;

    })
  }



  