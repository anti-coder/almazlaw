"use strict"
/* Как только страничка загрузилась */
window.onload = function () { 
  /* проверяем поддерживает ли браузер FormData */
if(!window.FormData) { alert("Браузер не поддерживает загрузку файлов на этом сайте"); } }

const registerUrl="../mail.php";
let form=document.forms;
let registerForm=form.register;
let contactnameField=registerForm.elements.contactname;
let emailField=registerForm.elements.email;
let userMessageField=document.getElementById('message');


registerForm.addEventListener('submit', (event)=>{
  event.preventDefault();


let contactname=registerForm.contactname.value;
let email=registerForm.email.value;
let userMessage=userMessageField.value; 

let userFormData = new FormData(registerForm);//конструктор, который позволяет доставать данные из формы и удобно отправлять их на сервер

for (let field of userFormData) {
  console.log(field);
}


let resultPromise = new Promise ((resolve, reject) => {//промис
fetch(registerUrl, {  //дожидается fetch-отправки данных на сервер; 
  method: 'POST',
    body: userFormData
    
})
.then(responce => {
  resolve(responce.text());// метод, resolve - функция, которая будет выполнена, когда произойдет fetch-отправка данных на сервер (не проверяет состояние сервера!)
})
.catch(error => {
reject(error.message);  
})
});

//ответ от сервера - когда срабатывает обработчик промиса

resultPromise
.then(responce => {
  alert('Спасибо, сообщение   отправлено! В ближайшее время мы Вам ответим.')//функция-обработчик

})
.catch(error => alert('Ошибка! Сообщение не отправлено!'))
});