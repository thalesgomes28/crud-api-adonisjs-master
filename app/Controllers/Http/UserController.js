"use strict"
//const nodemailer = require("nodemailer")
const User = use("App/Models/User")
const Mail = use('Mail')




class UserController {

  

  async index({ response }) {
    const users = User.all()
    
    return (users)
  }

  async create({ request }) {
      
          
    const data = request.only(["username", "email", "password", "permission"])
    const user = await User.create(data)

      await Mail.send('emails.welcome', user.toJSON(), (message) => {
        message
          .to('thalesgomes28@gmail.com')// colocar o nome de quem foi criado depois
          .from('<devjs2021@gmail.com>')
          .subject('Welcome to yardstick')
      })   
  return (user)        
  }

  async login ({ request, auth }) {
    const { email, password } = request.all()
  
    const token = await auth.attempt(email, password)
                                                            // retorna o tipo de usuário
                                                            // let  user = User.query().where('email',email).fetch(); // NAO USAR
                                                            // const user = await User.findBy('email', email)                                                              
                                                            // Declaração de um objeto que vai fundir as informações de token e permission 
                                                            // const object = {} 
                                                            // object.token = token;
                                                            // object.permission = user.permission;    
                                                            // return (object)
   return token
  }

  async permission({request}){
    const { email } = request.all()
    // busca a permissão do usuário pelo email
    const user = await User.findBy('email', email)    
    //console.log(user.permission)
    return (user.permission)
  }


  async getID({params}){
   console.log(params.email)
    // busca a permissão do usuário pelo email
    const user = await User.findBy('email', params.email)    
    //console.log(user.permission)
    return (user.id)
  }



  async show ({ params }) {
    const user = await User.findOrFail(params.id)

     // carrega as informações de providers    
    switch (user.permission) {
      case 2:        
        break;
      case 1: 
        await user.load('provider')
        await user.load('providers_insurance')
        await user.load('providers_customer')
        break;
      case 0:
        await user.load('customer') 
        await user.load('customers_insurance')
    
      default:
        break;
    }   

    var userString = JSON.stringify( user ) //Mágica
    var userJson = JSON.parse(userString)
    //var provider = JSON.stringify( await User.query().with('provider').fetch())
    //provider = JSON.parse(provider)

    return (userJson)
  }



  /* BUSCAR USUÁRIOS POR EMAIL CPF..
  async show ({params, request, response, view}){
    const user_username = await User.findBy('username', params.username)
    console.log(params)
    if(user_username === null){
        const user_CPF = await User.findBy('cpf', params.id)
        if (user_CPF === null){
          const user_email = await User.findBy('email', params.id)
          return user_email;
        }
        return user_CPF;
        
    }
        return user_username;
  }
*/
    
  async update ({ params, request }) {
    const user = await User.findOrFail(params.id)
    const data = request.only(["username", "email", "password", "permission"])
    user.merge(data)
    await user.save()
    return user
  }


  async destroy ({ params }) {
    const user = await User.findOrFail(params.id)
    await user.delete()
  }


  async count ({ params }) {
    let total = await User.getCount();
    let ativos = await User
    .query()
    .where('permission', 1) // busca somente provedores
    .getCount()
    let vetor = [ativos, total]
    return (vetor)
  }

}

module.exports = UserController



      /*  var transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // upgrade later with STARTTLS
          auth: {
            user: "devjs2021@gmail.com",
            pass: "Dev123321"
          }
        });

        var message = {
          from: " Devjs<devjs2021@gmail.com>",
          to: "Thales Gomes <thalesgomes28@gmail.com>",
          subject: "Novo Cadastro",
          

          html:('<p>oi</p>', { path : 'resources/views/emails/welcome.html'}),
         

         
        };

        transporter.sendMail(message).then(message=>{
          console.log(message);
        }).catch(err => {
          console.log(err);
        })
         
   */