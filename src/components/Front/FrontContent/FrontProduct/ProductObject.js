export class ProductObject{
    constructor(product, language) {
        if (product === undefined) {
            return;
        }

        this.id = product.productID
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
        this.photos = product.product.images
        this.mainPhoto = product.product.image
        this.inStock = product.product.inStock
    }

    id
    price
    discount
    title
    article
    description
    photos
    properties
    mainPhoto
    inStock = false;
}
