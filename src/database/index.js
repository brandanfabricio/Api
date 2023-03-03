const { v4 } = require('uuid');


const usuarios = [
  {
    id: v4(),
    user: 'user',
    password: '1234'
  },
  {
    id: v4(),
    user: 'admin',
    password: '4321'
  }
];


let categoria = [];

let producto = [];


module.exports = { usuarios, categoria, producto }