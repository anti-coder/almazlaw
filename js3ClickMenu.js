//Click menu//
//Выпадающее меню на JS DOM. Создадим функцию collapsElement (id). Элементы с идентификатором id 
//появляются и счезают при клике мыши. Функция getElementById(id) - встроенная.
 function collapsElement(id) {
 if ( document.getElementById(id).style.display != "none" ) {
 document.getElementById(id).style.display = 'none';
 }
 else {
 document.getElementById(id).style.display = '';
 }
 }


/*Выпадающее меню на jQuary.С помощью jQuery метода slideToggle плавно 
скрывать и отображать выбранные элементы (изменяем высоту выбранных элементов).
$(document).ready(function(){

   $("#menu1").click(function(){ $("#list1").slideToggle(500)});
   $("#menu1").toggle(function(){
      $("#img").attr("src","menudown.gif")}, function(){
      $("#img").attr("src","menuup.gif")
   });
   $("#menu1").mouseover(function(){ $("#menu1").css("background-color","#01939a")});
   $("#menu1").mouseout(function(){ $("#menu1").css("background-color","#006064")});

});  */                  