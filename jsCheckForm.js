//jsCheckForm//
 
function validate(){
   //Считаем значения из полей name и email в переменные x и y
   var x=document.forms['form']['name'].value;
   var y=document.forms['form']['email'].value;
  

   //Если поле name пустое выведем сообщение и предотвратим отправку формы
   if (x.length==0){
      /*document.getElementById('namef').innerHTML='Как Вас зовут?';*/
      return false;
   }
   //Если поле email пустое выведем сообщение и предотвратим отправку формы
  if (y.length==0){
     /* document.getElementById('emailf').innerHTML='Не зная Ваш e-mail, я не смогу Вам ответить!';*/
      return false;
   }
  

   //Проверим содержит ли значение введенное в поле email символы @ и .
   at=y.indexOf("@");
   dot=y.indexOf(".");
   //Если поле не содержит эти символы знач email введен не верно
   if (at<1 || dot <1){
      /*document.getElementById('emailf').innerHTML='Пожалуйста, проверьте Ваш email, возможно, 
      Вы ошиблись!';*/
      return false;
   }


   else (alert('Спасибо, вопрос принят. В ближайшее время мы ответим Вам по email.'))
   }

//document.write('Спасибо, вопрос принят. В ближайшее время мы ответим Вам по e-mail.');

function validate1(){
   //Считаем значения из полей name и phone в переменные x и y
   var x=document.forms['form1']['name'].value;
   var z=document.forms['form1']['phone'].value;
  

   //Если поле name пустое выведем сообщение и предотвратим отправку формы
   if (x.length==0){
      /*document.getElementById('namef').innerHTML='Как Вас зовут?';*/
      return false;
   }
   //Если поле email пустое выведем сообщение и предотвратим отправку формы
  if (z.length==0){
      /*document.getElementById('emailf').innerHTML='Не зная Ваш phone, я не смогу Вам ответить!';*/
      return false;
   }
  

   else (alert('Спасибо, вопрос принят. В ближайшее время мы Вам перезвоним.'))
   }

//Сообщаем, что вопрос принят