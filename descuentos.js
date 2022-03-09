const coupons = [10, 25, 50];
function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = precio * porcentajePrecioConDescuento / 100;
    return precioConDescuento;
}
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("input-price");
    const priceValue = inputPrice.value;
    const coupon = document.getElementById("coupons");
    const couponValue = parseInt(coupon.value);
    priceDiscount = calcularPrecioConDescuento(priceValue, coupons[couponValue]);
    const resultPrice = document.getElementById("result-price");
    resultPrice.innerText = `El precio con descuento son $${priceDiscount}`;
}