let clothitem = document.getElementById("colthing-section");
let accessoriesitem = document.getElementById("accessoriessection");
let cartcount = document.getElementById("count");

axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then((res) => {
  res.data.map((item) => {
    if (item.isAccessory == false) {
      clothitem.innerHTML += `<div class="col-10 col-sm-8 col-md-6 col-lg-3 col-xl-2 px-2  ">
                <div class="card" onclick="navigationpage(${item.id})">
                <img
                    src=${item.preview}
                    alt="Product"
                  />
                  <div class="card-body cloth-item-details ps-3 pb-0">
                    <h5>${item.name}</h5>
                    <p>${item.brand}</p>
                    <h5><span>RS : ${item.price}</span></h5>
                  </div>
                </div>
                
              </div>`;
      clothitem.innerHTML += `<div class="col-10 col-sm-8 col-md-6 col-lg-3 col-xl-2 px-2  ">
                <div class="card" onclick="navigationpage(${item.id})">
                <img
                    src=${item.preview}
                    alt="Product"
                  />
                  <div class="card-body cloth-item-details ps-3 pb-0">
                    <h5>${item.name}</h5>
                    <p>${item.brand}</p>
                    <h5><span>RS : ${item.price}</span></h5>
                  </div>
                </div>
                
              </div>`;
    } else {
      accessoriesitem.innerHTML += `<div class="col-10 col-sm-8 col-md-6 col-lg-3 col-xl-2 px-2">
                <div class="card" onclick="navigationpage(${item.id})">
                <img
                    src=${item.preview}
                    alt="Product"
                  />
                  <div class="card-body cloth-item-details ps-3 pb-0">
                    <h5>${item.name}</h5>
                    <p>${item.brand}</p>
                    <h5><span>RS : ${item.price}</span></h5>
                  </div>
                
                </div>
              </div>`;
    }
  });
});

function navigationpage(id) {
  location.assign(`./product.html?id=${id}`);
}
function getItemsFromLS() {
  return JSON.parse(localStorage.getItem("cart"));
}

function recount() {
  let count = getItemsFromLS().length;
  cartcount.innerText = count;
}
recount();
