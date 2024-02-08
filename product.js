fetch('https://dummyjson.com/products')
.then((response) => response.json())
.then((data) => {
    console.log(data["products"]);
    for(i=0; i<data["products"].length; i++){
        temp = document.createElement('div');
        temp.className = 'col-sm-6 col-lg-4 col-md-4 mb-5';
        temp.innerHTML =` <div class="product-list text-center">
        <div class="image-box mb-2"> 
        <img class="img-fluid" src=${data["products"][i]["images"][0]} alt="dfgv">
       </div> 
        <div class="content-box">
        <h3>${data["products"][i]["title"]}</h3>
     <p>${data["products"][i]["price"]}</p>
        <a href="#" class="buy">Buy Now</a>
        </div>
        </div>
        `
        document.getElementsByClassName("row")[0].appendChild(temp)
    }
})