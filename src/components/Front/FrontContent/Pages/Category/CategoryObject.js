import {api} from "../../../../functions/api";
import {ProductObject} from "../../FrontProduct/ProductObject";

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
    //     }, {}, "content/products/get-all-products.php")
    //
    //     return loaded;
    // }

    loadProducts() {
        if (this.id === "22") {
            return []
        }

        return [{
            imgUrl: "",
            imgAlt: "Мягкая игрушка",
            title: "Мягкая игрушка мопс-бревно Валера",
            id: 1,
            reviews: 17,
            price: 1000,
            dopPrice: 10,
        },{
            imgUrl: "",
            imgAlt: "Мягкая игрушка",
            title: "Мягкая игрушка мопс-бревно Валера",
            id: 1,
            reviews: 17,
            price: 2000,
            dopPrice: 10,
        },{
            imgUrl: "",
            imgAlt: "Мягкая игрушка",
            title: "Мягкая игрушка мопс-бревно Валера",
            id: 1,
            reviews: 17,
            price: 3000,
            dopPrice: 10,
        },{
            imgUrl: "",
            imgAlt: "Мягкая игрушка",
            title: "Мягкая игрушка мопс-бревно Валера",
            id: 1,
            reviews: 17,
            price: 4000,
            dopPrice: 10,
        },{
            imgUrl: "",
            imgAlt: "Мягкая игрушка",
            title: "Мягкая игрушка мопс-бревно Валера",
            id: 1,
            reviews: 17,
            price: 5000,
            dopPrice: 10,
        },
        ]
    }

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
