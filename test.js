const Contenedor = require('../Backend 2/PioCaceres.js');

const products = new contenedor ('products.txt')

const test = async () => {
    let save = await products.save({
        title: "coderhouse",
        price: 12345,
        thumbnail: 'https:asdl31231'
    });
    let getAll = await products.getAll();
    let getById = await products.getById(5);
    let deleteById = await products.deleteById(2);
    let deleteAll = await products.deleteAll();
    console.log(save);
    console.log(getAll);
    console.log(getById);
    console.log(deleteById);
    console.log(deleteAll);
};
test();