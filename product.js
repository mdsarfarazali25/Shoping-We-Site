let id = location.search.split("=")[1];
let productitem = document.getElementById("product-item");
let productdata;
let cartcount = document.getElementById("count");
axios
  .get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`)
  .then((res) => {
    productdata = res.data;
    productitem.innerHTML = `<div class="col-lg-4 left-column">
            <img
            id = "small-bigimg"
              src="${res.data.preview}"
              alt=""
            />
          </div>
          <div class="col-lg-8">
            <div class="right-column">
              <div class="product-description">
                <h1>${res.data.name}</h1>
                <h4 id="brand">${res.data.brand}</h4>
                <h3>Price: Rs <span>${res.data.price} </span></h3>
                <div class="description">
                  <h3>Description</h3>
                  <p id="description">
                  ${res.data.description}
                  </p>
                </div>
                <div class="product-preview">
                  <h3>Product Preview</h3>
                  <div class="previewImg">${res.data.photos.map((item) => {
                    return `<img  src="${item}" alt="" onclick="smallimg('${item}')"/>`;
                  })}
                   
                  </div>
                </div>
              </div>
              <div class="cart-btn">
                <button id="add-to-cart" onclick="addcart()">Add to Cart</button>
              </div>
            </div>
          </div>`;
  });

function smallimg(id) {
  let smallbigimg = document.getElementById("small-bigimg");
  smallbigimg.src = id;
}

function getItemsFromLS() {
  return JSON.parse(localStorage.getItem("cart"));
}

function addcart() {
  console.log(productdata);
  let localcart = getItemsFromLS();
  if (localcart == null) {
    let cart = [];
    cart.push({
      Image: productdata.preview,
      Name: productdata.name,
      Price: productdata.price,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    recount();
  } else {
    localcart.push({
      Image: productdata.preview,
      Name: productdata.name,
      Price: productdata.price,
    });
    localStorage.setItem("cart", JSON.stringify(localcart));
    recount();
  }
}
function recount() {
  let count = getItemsFromLS().length;
  cartcount.innerText = count;
}
recount();
