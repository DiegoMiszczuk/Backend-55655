class UserManager {
  static #users = [];

  constructor(data) {
    this.id =
      UserManager.#users.length === 0
        ? 1
        : UserManager.#users[UserManager.#users.length - 1].id + 1;
    this.name = data.name;
    this.photo = data.photo;
    
    this.email = data.email;
    UserManager.#users.push(this);
  }
  create(data) {
    const users = {
      id:
        UserManager.#users.length === 0
          ? 1
          : UserManager.#users[UserManager.#users.length - 1].id +
            1,
      name: data.name,
      photo: data.photo,
      email: data.email,
      
    };
    UserManager.#users.push(users);
  }
  read() {
    return UserManager.#users;
  }
  readOne(id) {
    // return console.log("Producto encontrado" + ProductManager.#products.find(Element => Element.id === id))}
    const buscado = UserManager.#users.find(
      (Element) => Element.id === id
    );

    if (buscado) {
      console.log("Usuario encontrado: ", buscado);
    } else {
      console.log("Usuario no encontrado");
    }
  }
}

const usuarios = new UserManager({
  name: "juan",
  photo: "foto.jpg",
  email: "juan@juan.com",
  
});

usuarios.create({
  name: "Leo",
  photo: "foto.jpg",
  email: "leo@leo.com",
});

usuarios.create({
  name: "Pedro",
  photo: "foto.jpg",
  email: "pedro@pedro.com",
});

usuarios.create({
  name: "Pablo",
  photo: "foto.jpg",
  email: "pablo@pablo.com",
});

usuarios.readOne(2);

console.table(usuarios.read());
