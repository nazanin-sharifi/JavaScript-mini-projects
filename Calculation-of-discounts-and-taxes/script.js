function calculator() {
    const tax = 10;
    var price = Number(document.getElementById("price").value);
    var discount = Number(document.getElementById("discount").value);

    try {

        let discountCalculation = price - (price * discount) / 100;
        let taxCalculation = (discountCalculation * tax) / 100;
        var result = discountCalculation + taxCalculation;
        
        if (price == "") {
            document.getElementById("result").innerHTML = "لطفا ابتدا قیمت را وارد کنید";
        } else if (isNaN(price)) {
            document.getElementById("result").innerHTML = "قیمت وارد شده عدد نمیباشد";
        } else if (discount == "") {
            document.getElementById("result").innerHTML = "لطفا ابتدا تخفیف را وارد کنید";
        } else if (isNaN(discount)) {
            document.getElementById("result").innerHTML = "تخفیف وارد شده عدد نمیباشد";
        }
        else {
            document.getElementById("show-discount").innerHTML = discount + "%";
            document.getElementById("result").innerHTML = result;
        }

    } catch (err) {
        window.alert(err.message)
    }


}