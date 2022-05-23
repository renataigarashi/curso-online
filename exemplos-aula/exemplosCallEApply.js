const user = {
  nome: "Renata",
  email: 'r@r.com',
  nascimento: '1983/08/05',
  role: 'admin',
  exibirInfos: function(){
    console.log(this.nome, this.email)
  }
}

// user.exibirInfos();

const exibir = function(){
  console.log(this.nome, this.email)
}

//o bind "prendeu" a vo valor "this da função exibir com o user, que vai dar contexto na função
const exibirNome = exibir.bind(user)
exibirNome();

const user2 = {
  nome: 'Mariana',
  email: 'm@m.com'
 }

//  // O método call() executa a função passando valores e parâmetros específicos para serem usados como contexto do this. Ou seja, é possível atribuir um this diferente do contexto atual ao executar a função.
// exibir.call(user2)

function User(nome, email) {
  this.nome = nome
  this.email = email
 
  this.exibeInfos = function(){
    console.log(this.nome, this.email)
  }
 }

 const newUser = new User('mariana', 'm@m.com')

 const outroUser = {
  nome: 'Rodrigo',
  email: 'r@r.com'
 }
 
 newUser.exibeInfos() //mariana m@m.com
 newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com



 console.log('====  vinculando dados da mensagem a um objeto com dados de usuarios')

// Também é possível passar parâmetros para call(), como no exemplo a seguir.

// Temos uma função que monta uma determinada mensagem a partir dos parâmetros nome e email. Se quiséssemos vincular os dados da mensagem a um objeto com dados de usuários, podemos usar call() passando como primeiro parâmetro o contexto a ser considerado como this (no caso, objeto user) e a partir do segundo parâmetro definimos quais os argumentos.

 function exibeMensagem(nome, email) {
  console.log(`usuário: ${nome}, email: ${email}`)
 }
  const usuario = {
  nome: 'Mariana',
  email: 'm@m.com',
  executaFuncao: function(fn) {
    fn.call(usuario, this.nome, this.email)
    // Nesse caso, a função que será executada também está sendo passada como parâmetro de executaFuncao e usamos call() para “chamar” a função com um contexto (this) específico e também argumentos específicos.
  }
 }
 
 usuario.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com


 console.log('')
 console.log('============== Apply ============')
 console.log('')

 function exibeMensagem(nome, email) {
  console.log(`usuário: ${nome}, email ${email}`)
 }
  const usuario2 = {
  nome: 'Mariana',
  email: 'm@m.com',
  executaFuncao: function(fn) {
    fn.apply(usuario2, [this.nome, this.email])
  }
 }
  usuario2.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com