const coupons = [{name: "Magic", discount: 10}, {name: "Arena", discount: 25}, {name: "Amazon", discount: 50}];
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = precio * porcentajePrecioConDescuento / 100;
    return precioConDescuento;
}
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("input-price");
    const priceValue = inputPrice.value;
    const coupon = document.getElementById("input-coupon");
    const couponValue = coupon.value;
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    }
    const couponUser = coupons.find(isCouponValueValid);
    if (!couponUser) {
        alert(`El cupon ${couponValue} no es valido`);
    } else {
        priceDiscount = calcularPrecioConDescuento(priceValue, couponUser.discount);
        const resultPrice = document.getElementById("result-price");
        resultPrice.innerText = `El precio con descuento son $${priceDiscount}`;
    }
}