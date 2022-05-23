class User {
  constructor (nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email
    this.nascimento = nascimento
    this.role = role || 'estudante'
    this.ativo = ativo
  }
  exibirInfos() {
    return `${this.nome}, ${this.email}`
  }
}

const novoUser = new User('Renata', 'r@r.com', '1983/05/08')
console.log(novoUser)
console.log(novoUser.exibirInfos())

console.log(User.prototype.isPrototypeOf(novoUser))