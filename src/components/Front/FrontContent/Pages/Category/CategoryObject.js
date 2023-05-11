import {api} from "../../../../functions/api";
import {ProductObject} from "../../FrontProduct/ProductObject";
import {wait} from "@testing-library/user-event/dist/utils";

export class CategoryObject {

    constructor(category) {
        // console.log("Received category info: ", category)
        this.id = category.id;
        this.imageUrl = category.category.image;
        this.title = category.category.title.en;

        this.parenId = category.parentId;
    }

    static emptyCategory(id) {
        let empty = new CategoryObject(JSON.parse("{\"id\":\"19\",\"parent_id\":\"0\",\"category\":{\"title\":{\"en\":\"\",\"ru\":\"\",\"ge\":\"\"},\"description\":{\"en\":\"\",\"ru\":\"\",\"ge\":\"\"},\"image\":\"\"}}"));
        empty.id = id;
        return empty;
    }

    id;
    title;
    imageUrl;
    parenId;

    // loadProducts() {
    //
    //     let loaded = [];
    //
    //     api((response)=>{
    //         loaded = response.map((product)=>{
    //             return new ProductObject(product);
    //         })
    //     }, {
    //         catId: this.id
    //     // }, "content/products/get-all-products.php")
    //     }, "content/products/get-products-by-category-id.php")
    // }

    getParents() {
        return [
            {
                id:19,
                title: "Page 1"
            },
            {
                id: 22,
                title: "Page 2"
            }
        ]
    }
}