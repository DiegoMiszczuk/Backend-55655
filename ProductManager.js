class ProductManager {
  static #products = [];

  constructor(data) {
    this.id = ProductManager.#products.length === 0 ? 1 : ProductManager.#products[ProductManager.#products.length -1 ].id +1
    this.title = data.title;
    this.photo = data.photo;
    this.price = data.price;
    this.stock = data.stock;
    ProductManager.#products.push(this);
  }
  create(data) {
    const productos = {
      id: ProductManager.#products.length === 0 ? 1 : ProductManager.#products[ProductManager.#products.length -1 ].id +1,
      title: data.title,
      photo: data.photo,
      price: data.price,
      stock: data.stock,
    };
    ProductManager.#products.push(productos);
  }
  read() {
    return ProductManager.#products;
  }readOne(id){
   // return console.log("Producto encontrado" + ProductManager.#products.find(Element => Element.id === id))}
     const buscado = ProductManager.#products.find(Element => Element.id === id)

     if(buscado) {
      console.log("Producto encontrado: " , buscado);
         }else{
          console.log("Producto no encontrado")
         }
        }

}

const productos = new ProductManager({
  title: "Samsung",
  photo: "foto.jpg",
  price: 10,
  stock: 20,
});

productos.create({
  title: "Nokia",
  photo: "foto.jpg",
  price: 10,
  stock: 20,
});

productos.create({
  title: "Motorola",
  photo: "foto.jpg",
  price: 10,
  stock: 20,
});

productos.create({
  title: "Iphone",
  photo: "foto.jpg",
  price: 10,
  stock: 20,
});

productos.readOne(4)
console.table(productos.read());

