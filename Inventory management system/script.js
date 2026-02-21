
let warehouse = [
    { nameProduct: "مانیتور جی پلاس", price: "7500000", inventor: "4" },
    { nameProduct: "موس گیمینگ", price: "850000", inventor: "0" },
    { nameProduct: "کیبورد مکانیکی", price: "2300000", inventor: "12" },
    { nameProduct: "هدفون بیسیم", price: "1900000", inventor: "7" },
    { nameProduct: "کابل", price: "150000", inventor: "0" },
]
var showProducts = document.getElementById("products");
var showResult = document.getElementById("showResult");


// Show all products in the table
warehouse.forEach((item, index) => {
    showProducts.innerHTML += "<tr> <td>" + (index + 1) + "</td> <td>" + item.nameProduct + "</td> <td>" + item.price + "</td> <td>" + item.inventor + "</td> </tr>";
});


// Show all unavailable products
function finishedProducts() {
    showResult.innerHTML = "";
    let outOfStock = warehouse.filter((item) => { return item.inventor == 0 })
    outOfStock.forEach((a) => { showResult.innerHTML += a.nameProduct + " " + "ناموجود!" + "<br>" });
}

// Calculate the total value of the warehouse
function totalWarehouseValue() {
    var sumPrice = 0;
    warehouse.forEach((product) => {
        sumPrice += Number(product.price) * Number(product.inventor);
    })
    showResult.innerHTML = sumPrice + " " + "تومان";
}

// Product search by name
function searchByNameProduct() {
    var productName = document.querySelector("#productName").value;
    var result = false;
    var pName, pPrice, pInventor;
    if (productName == "") {
        showResult.innerHTML = "لطفا ابتدا نام محصول را وارد کنید.";
    }
    else {
        warehouse.forEach((a) => {
            if (productName == a.nameProduct) {
                result = true;
                pName = a.nameProduct;
                pPrice = a.price;
                pInventor = a.inventor;
            }
        });


        if (result == true) {
            showResult.innerHTML = "نام محصول:" + " " + pName + "<br>" + "قیمت:" + " " + pPrice + "<br>" + "موجودی:" + " " + pInventor;
        }
        else {
            showResult.innerHTML = "محصول مورد نظر یافت نشد.";
        }
    }

}

