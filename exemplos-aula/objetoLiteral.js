const user = {
  nome: "Renata",
  email: 'r@r.com',
  nascimento: '1983/08/05',
  role: 'estudante',
  exibirInfos: function(){
    console.log(this.nome, this.email)
  }
}

const admin = {
  nome: 'Mariana',
  email: 'm@m.com',
  role: 'admin',
  criarCurso(){
    console.log('Curso criado!')
  }
}

// setPrototypeOf vai definir o prototipo, primeiro paramentra, obj que vai herdar propriedades e o segundo obj que vai "ceder propriedades"
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();