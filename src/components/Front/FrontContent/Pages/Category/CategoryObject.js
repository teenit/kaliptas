import {api} from "../../../../functions/api";
import {ProductObject} from "../../FrontProduct/ProductObject";

export class CategoryObject {

    constructor(category, products, parents, language) {

        this.responseCategory = {...category};

        if (products !== undefined){
            this.responseProducts = [...products];
        }

        if (parents !== undefined) {
            this.responseParents = [...parents];
        }

        if (language !== undefined) {
            this.language = language;
        }

        this.products = this.responseProducts.map((product)=>{
            return new ProductObject(product, language);
        })

        this.parentCategories = this.parseParents(this.responseParents);

        this.id = category.id;
        this.imageUrl = category.category.image;
        this.title = category.category.title[language];
        this.parenId = category.parentId;
    }

    static getIdFromResponse(category) {
        return category.id;
    }

    responseCategory = [];
    responseParents = [];
    responseProducts = [];
    id;
    title;
    imageUrl;
    parenId;
    products = [];
    parentCategories = [];
    language = "en";

    parseParents(parents) {

        return parents.length > 0
            ? parents.map((parent)=>{
                return {
                    id: parent.id,
                    title: parent.value.title[this.language]
                }
            })
            : []
    }
}