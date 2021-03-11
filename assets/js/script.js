
/**
 * Acessando o DOM
 * Javascript Linguagem Case Sensitive
 *  
 *      tag = getElementByTag()
 *      id = getElementById()
 *      Nome = getElementsByName()
 *      Classes = getElementsByClassName()
 *      Seletor = querySelector()
 */
 let nome = window.document.getElementById('nome')
 let email = document.querySelector('#email')
 let assunto = document.querySelector('#assunto')
 let mapa = document.querySelector('#mapa')
 let nomeOK = false
 let emailOK = false
 let assuntoOK = false

 nome.style.width = '100%'
 email.style.width = '100%'

 function validaNome()
 {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length <3){
        /*alert('nome invalido')*/
        txtNome.innerHTML = 'Nome invalido'
        txtNome.style.color = 'red'


    }else{
        txtNome.innerHTML = 'Nome valido'
        txtNome.style.color = 'green'
        nomeOK = true
    }

 }


 function validaEmail()
 {
    let txtEmail = document.querySelector('#txtEmail')   
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)
    {
        txtEmail.innerHTML = "Email invalido"
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = "Email valido"
        txtEmail.style.color = 'green'
        emailOK = true

    }

 }

 function validaAssunto()
 {
    let txtAssunto = document.querySelector('#txtAssunto') 
    if(assunto.value.length >=100)
    {
        txtAssunto.innerHTML = ' Digite no maximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display ='block'
        alert('Erro')
    }else
    {
        txtAssunto.style.display ='none'
        assuntoOK = true
    }
 }


 function enviar()
 {
     if(nomeOK == true && emailOK == true)
     {
        alert('Formulario enviado com sucesso')
     }else{
         alert('Preencha o formulario corretamente')
     }
 }


 function mapaZoom(){
     mapa.style.width = '800 px'
     mapa.style.height = '600 px'
    
 }
 function mapaNormal(){
    mapa.style.width =  '400 px'
    mapa.style.height = '300 px'
}