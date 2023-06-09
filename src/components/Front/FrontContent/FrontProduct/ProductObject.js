import {EMPTY_VARIABLE_ID} from "../../../functions/cartControll";
import {getLanguageForRootLink} from "../../../functions/getLanguage";

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

    isDiscountPresent(variableId){
        if (variableId !== undefined && variableId !== EMPTY_VARIABLE_ID) {
            return this.variables.find(item=>item.id === variableId).discount !== ""
        }

        return this.isVariable ? this.variables[0].discount !== "" : this.discount !== "";
    }

    getPriceWithDiscount(variableId) {
        if (variableId !== undefined && variableId !== EMPTY_VARIABLE_ID) {
            return this.variables.find(item=>item.id === variableId).discount
        }

        return this.isVariable ? this.variables[0].discount : this.discount;
    }

    getPrice(variableId) {
        if (variableId !== undefined && variableId !== EMPTY_VARIABLE_ID) {
            return this.variables.find(item=>item.id === variableId).price
        }

        return this.isVariable ? this.variables[0].price : this.price;
    }

    getPriceForCard() {
        let varId = this.isVariable ? this.variables[0].id : undefined;

        return this.getPrice(varId);
    }

    getDiscountForCard() {
        let varId = this.isVariable ? this.variables[0].id : undefined;

        return this.getPriceWithDiscount(varId);
    }

    isDiscountPresentForCard() {
        let varId = this.isVariable ? this.variables[0].id : undefined;

        return this.isDiscountPresent(varId);
    }

    getFirstVariableId() {
        return this.variables[0].id;
    }

    static getIdFromLink(link) {
        return link.slice(0, link.indexOf("-"))
    }

    getProductPageLink() {
        return getLanguageForRootLink() + "/product/" + this.getLink();
    }

    getVariableById(id) {
        return this.variables.find(item => item.id === id);
    }
}

export class Variable {
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
