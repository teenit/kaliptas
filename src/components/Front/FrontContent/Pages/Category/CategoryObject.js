export class CategoryObject {

    constructor(category) {
        console.log("Received category info: ", category)
        this.id = category.id;
        this.imageUrl = category.category.image;
        this.title = category.category.title.en;

        this.parenId = category.parentId;
    }

    static emptyCategory() {
        return new CategoryObject(JSON.parse("{\"id\":\"19\",\"parent_id\":\"0\",\"category\":{\"title\":{\"en\":\"Sports, recreation, tourism\",\"ru\":\"Спорт, отдых, туризм\",\"ge\":\"სპორტი, დასვენება, ტურიზმი\"},\"description\":{\"en\":\"\",\"ru\":\"\",\"ge\":\"\"},\"image\":\"https://kaliptas.people-ua.org/manage/categories/uploads/1683424040sport.png\"}}"));
    }

    id;
    title;
    imageUrl;
    parenId;

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
                id: 20,
                title: "Page 2"
            }
        ]
    }
}
