// function User(nome, email){
//   this.nome = nome;
//   this.email = email

//   this.exibirInfos = function(){
//     return `${this.nome}, ${this.email}`
//   }
// }

// const newUser = new User('Renata', 'r@r.com')
// console.log(newUser.exibirInfos())

// function Admin(role){
//   User.call(this, 'Renata', 'r@r.com')
//   this.role = role || 'estudante'
// }
// // passou pra dentro do prototype do admin a propriedade prototipo de User
// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin');
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role)

const user = {
  init: function(nome, email){
    this.nome = nome
    this.email = email
  },
  exibirInfos: function(){
    return `${this.nome}, ${this.email}`
  }
}

const novoUser = Object.create(user)
novoUser.init('Renata', 'r@r.com')
console.log(novoUser.exibirInfos())
// console.log(user.isPrototypeOf(novoUser))

