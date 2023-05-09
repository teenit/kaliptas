export class CategoryObject {

    constructor(id) {
        this.id = id;
        let categoryData = this.loadCategory()
        this.title = categoryData.title;
        this.categoryParentQueue = categoryData.categoryPath;
        this.categoryName = categoryData.categoryName;
        this.imageUrl = categoryData.imageUrl;
    }

    id;
    title;
    imageUrl;
    categoryParentQueue;
    categoryName;

    loadCategory() {
        return {
            title: "temp title " + this.id,
            imageUrl: "https://www.textures4photoshop.com/tex/thumbs/fireworks-png-transparent-background-thumb36.png",
            categoryPath: this.toQueue("some/link"),
            categoryName: "category"+this.id
        }
    }

    toQueue(link) {
        let queue = [];
        while (link.indexOf("/") !== -1) {
            let index = link.indexOf("/");
            let subLink = link.substring(0, index);
            if (subLink.length > 0 && subLink !== "/"){
                queue.push(subLink);
            }

            link = link.substring(index + 1)
        }

        if (link.length > 0 && link !== "/"){
            queue.push(link);
        }

        return queue;
    }

    loadProducts() {
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
}
