export class ProductObject{
    constructor(product, language) {
        if (product === undefined) {
            return;
        }

        this.isVariable = product.product.type.variable
        this.id = product.productID
        this.tag = product.link
        this.description = product.product.description[language]
        this.title = product.product.title[language]
        this.article = product.article
        this.price = product.product.price.price;
        this.discount = product.product.price.discount;
        this.properties = product.product.characteristic.map((ch)=>{
            return {
                title: ch.title[language],
                value: ch.value[language]
            }
        })
        if (this.isVariable) {
            this.variables = product.product.prices.map((obj)=>{
                return new Variable(obj, language);
            })
        }
        this.photos = product.product.images
        this.mainPhoto = product.product.image
        this.inStock = product.product.inStock.amount > 0;
    }

    id
    variables
    isVariable = false;
    tag
    price
    discount
    title
    article
    description
    photos
    properties
    mainPhoto
    inStock = false;

    getLink() {
        return this.id + "-" + this.tag;
    }

    isDiscountPresent(){
        return this.discount !== "";
    }

    getPriceWithDiscount() {
        return this.discount;
    }

    getPriceForCard() {
        if (this.isVariable) {
            return this.variables[0].price;
        }

        return this.price;
    }

    getDiscountForCard() {
        if (this.isVariable) {
            return this.variables[0].discount;
        }

        return this.discount;
    }

    isDiscountPresentForCard() {
        if (this.isVariable) {
            return this.variables[0].discount;
        }

        return this.isDiscountPresent();
    }

    getFirstVariableId() {
        return this.variables[0].id;
    }

    static getIdFromLink(link) {
        return link.slice(0, link.indexOf("-"))
    }
}

class Variable {
    constructor(obj, language) {
        this.price = obj.price;
        this.discount = obj.discountPrice;
        this.title = obj.variable[language];
        this.id = obj.id;
    }

    price;
    discount;
    id;
    title;
}
