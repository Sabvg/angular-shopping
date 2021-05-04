export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description = '', price = 0, imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLqCKC3i7YSsA2g2UndoyVUwL3tC-V3rQ5RyhL7_rK6rwG8bBlfa9kRNv_Dg6cbRF0Qc-XTU&usqp=CAc') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
