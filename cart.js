let cartbox = document.getElementById("carts-item");
let cartcount = document.getElementById("count");
let totalprice = document.getElementById("totalprice");

function getItemsFromLS() {
  return JSON.parse(localStorage.getItem("cart"));
}

let count = getItemsFromLS().length;
cartcount.innerText = count;

function viewcart() {
  let LScartitem = JSON.parse(localStorage.getItem("cart"));
  console.log(LScartitem);
  LScartitem.map((item, i) => {
    cartbox.innerHTML += `
              <div class="row border-top item">
                <div class="col-lg-2 item-img">
                    <img
                      src="${item.Image}"
                      alt=""
                    />
                </div>
                <div class="col-lg-10 item-detail">
                    <h4>${item.Name}</h4>
                    <p>x1</p>
                    <div class="d-flex justify-content-between" >
                    <p >Amount:${item.Price}</p>
                    <button class = "btn btn-danger py-1" onclick ="removecart(${i})">Remove </button>
                    </div>
                </div>
              </div>`;
  });
}
viewcart();

function removecart(index) {
  let data = getItemsFromLS();
  data.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(data));
  price();
  location.reload();
}

function price() {
  let data = getItemsFromLS();
  let amount = data.reduce((acc, item, i) => {
    return item.Price + acc;
  }, 0);
  console.log(amount);

  totalprice.innerText = `${amount}`;
}
price();
