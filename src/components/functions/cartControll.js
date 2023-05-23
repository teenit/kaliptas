
const productListKey = "cart-content"

export function buy(id) {
    if (isPresent(id)) {
        throw Error("Product must not be in cart. Id: " + id)
    }

    let cartMap = getCart();

    cartMap[id] = 1;

    setCart(cartMap);
}

export function isPresent(id) {
    return (localStorage.getItem(productListKey) !== null)
        ? (JSON.parse(localStorage.getItem(productListKey))[id] !== undefined)
        : false;
}

export function incrementById(id) {
    if ( ! isPresent(id)) {
        throw Error("No product in localStorage with id: " + id)
    }

    let cartMap = getCart();
    cartMap[id] = cartMap[id] + 1;
    setCart(cartMap);
}

export function decrementById(id) {
    if ( ! isPresent(id)) {
        throw Error("No product in localStorage with id: " + id)
    }

    let cartMap = getCart();

    if (cartMap[id] > 1) {
        cartMap[id] = cartMap[id] - 1;
        setCart(cartMap);
    } else {
        deleteById(id);
    }
}

export function setCountById(id, count) {
    if ( ! isPresent(id)) {
        throw Error("No product in localStorage with id: " + id)
    }

    let cartMap = getCart();

    cartMap[id] = count;

    setCart(cartMap);
}

export function deleteById(id) {
    if ( ! isPresent(id)) {
        throw Error("No product in localStorage with id: " + id)
    }

    let check = window.confirm("Delete product from cart?")

    if (check) {
        let cartMap = getCart();
        delete cartMap[id];
        setCart(cartMap);
    }
}

export function getCountById(id) {
    if ( ! isPresent(id)) {
        return 0;
    }

    return getCart()[id];
}

export function getCart() {
    let cartMap = localStorage.getItem(productListKey);
    if (cartMap == null) {
        localStorage.setItem(productListKey, JSON.stringify({}));
        return {};
    }
    return JSON.parse(cartMap);
}

export function getCartItemsCount() {
    let total = 0;
    Object.entries(getCart()).forEach((entry)=>{
        total += entry[1]
    });
    return total;
}

export function setCart(cart) {
    localStorage.setItem(productListKey, JSON.stringify(cart));
}