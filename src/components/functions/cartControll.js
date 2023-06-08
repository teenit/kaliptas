const productListKey = "cart-content";
export const EMPTY_VARIABLE_ID = "empty-var-id"

export function buy(id, variableId) {

    if (isVariablePresent(id, variableId)) {
        throw Error("Product must not be in cart. Id: " + id)
    } else if (variableId === undefined && isPresent(id)) {
        throw Error("Product must not be in cart. Id: " + id)
    }

    let cartMap = getCart();

    cartMap.push(new CartItem(id, 1, variableId));

    setCart(cartMap);
}

export function isVariablePresent(id, variableId) {
    let variable = findVariable(id,variableId);

    return (variable !== undefined) && variableId !== EMPTY_VARIABLE_ID;
}

export function isPresent(id) {
    return findSimple(id) !== undefined;
}

export function incrementById(id, variableId) {
    if ( ! (isPresent(id) || isVariablePresent(id, variableId))) {
        throw Error("No product in localStorage with id: " + id)
    }

    let cart = getCart();

    if (variableId !== undefined) {
        cart.forEach(item=>{
            if (item.id === id && item.variableId === variableId) {
                item.count++;
            }
        })
    } else {
        cart.forEach(item=>{
            if (item.id === id) {
                item.count++;
            }
        })
    }

    setCart(cart)
}

export function decrementById(id, variableId) {
    if ( ! (isPresent(id) || isVariablePresent(id, variableId))) {
        throw Error("No product in localStorage with id: " + id)
    }

    let cartMap = getCart();

    if (variableId !== undefined) {
        if (findVariable(id, variableId).count === 1) {
            deleteById(id, variableId)
            return;
        } else {
            cartMap.forEach(item =>{
                if (item.id === id && item.variableId === variableId) {
                    item.count--;
                }
            })
        }
    } else {
        if (findSimple(id).count === 1) {
            deleteById(id)
            return;
        } else {
            cartMap.forEach(item =>{
                if (item.id === id) {
                    item.count--;
                }
            })
        }
    }

    setCart(cartMap)
}

export function deleteById(id, variableId) {
    if ( ! (isPresent(id) || isVariablePresent(id, variableId))) {
        throw Error("No product in localStorage with id: " + id)
    }

    let check = window.confirm("Delete product from cart?")

    if (check) {
        let cartMap = getCart();
        setCart(cartMap.filter(item=>{
            return ! (item.id === id && (variableId !== undefined ? item.variableId === variableId : true))
        }));
    }
}

export function getCountById(id, variableId) {
    if (isVariablePresent(id,variableId) && variableId !== undefined) {
        return findVariable(id, variableId).count;
    }

    if (isPresent(id) && variableId === undefined) {
        return findSimple(id).count;
    }

    return 0;
}

export function getCart() {
    let cartMap = localStorage.getItem(productListKey);
    if (cartMap == null) {
        localStorage.setItem(productListKey, JSON.stringify([]));
        return [];
    }
    try {
        return [...JSON.parse(cartMap)].map((item) => {
            return new CartItem(item.id, item.count, item.variableId)
        });
    } catch (e) {
        localStorage.setItem(productListKey, JSON.stringify([]));
        return [];
    }
}

function findSimple(id) {
    return getCart().filter(item => item.id === id)[0];
}

function findVariable(id, variableId) {
    if (variableId === undefined) {
        return undefined;
    }
    return getCart().find(item => {
        return ((item.id === id) && (item.variableId === variableId))
    })
}

export function getCartItemsCount() {
    let total = 0;
    getCart().forEach((entry)=>{
        total += entry.count
    });
    return total;
}

export function setCart(cart) {
    localStorage.setItem(productListKey, JSON.stringify(cart));
}

export function clearCart() {
    setCart([])
}

export function getItemsList() {
    return getCart()
        .map((entry)=>{
            return {
                id: entry.id,
                count: entry.count,
                variableId: entry.variableId !== EMPTY_VARIABLE_ID ? entry.variableId : undefined
            }
    });
}

class CartItem {
    constructor(id, count, variableId) {
        this.variableId = variableId !== undefined ? variableId : EMPTY_VARIABLE_ID;
        this.id = id;
        this.count = count;
    }
    id
    count
    variableId
}