export class ProductObject{
    constructor(product, language) {
        this.description = product.product.description[language]
        this.title = product.product.title[language]
        this.article = product.article
        this.price = product.product.price.price;
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

    price
    title
    article
    description
    photos
    properties
    mainPhoto
    inStock = false;
}
