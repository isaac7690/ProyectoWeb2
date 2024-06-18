let a=0;
function parpadear(){
   var colores=["red","forestgreen","black","darkblue"];
   document.getElementsByClassName("home-title")[0].style.color=colores[a];
   a++;
   if(a>=4)a=0;
   setTimeout(parpadear,1000);
}

var x=0;
//carrusel
function carrusel(){
   var imagenes=["./src/images/banner.jpg","./src/assets/img-slider/banner1.jpg","./src/assets/img-slider/banner2.jpg","./src/assets/img-slider/banner3.jpg"]; 
   document.querySelector(".slider").src=imagenes[x];
   x++;
   if(x>=imagenes.length)x=0;
   setTimeout(carrusel,1500);
}
// el form tiene nombre registro
//el registro.nombre es el name del input 
const nombre =document.registro.txtnombres;
const celular =document.registro.telefono;
const correo =document.registro.email;
const nomMascota =document.registro.mascota;
const fecha= document.registro.fechas;
const combo=document.getElementById("box");
const txtArea=document.registro.textarea;


//key press cuando presionas la tecla
//a nombre le aplicamos un addEventListener con evento keypress(cuando presionas tecla)
//aplicamos evento keypress y funcion flecha con parametro e, e representa el evento q se aplicara 
nombre.addEventListener("keypress",(e)=>{
   //e.key devuelve el valor de la tecla presionada
   // \d es digito y ^a-zA-Z esto significa que si es todo excepto los de a-zA-Z entonces con prevent default lo evita
   if(/[^a-zA-Z\s]/.test(e.key)){
      // si es digito o numero preventDefault evita q se haga 
      e.preventDefault();
   }

});

celular.addEventListener("keypress",(e)=>{
   //e.key devuelve el valor de la tecla presionada
   // \D busca cualquier caracter que no sea digito, entonces con prevent default lo evita
   //entonce si el presskey obtiene una letra o simbolo y no es digito entonces prevent default lo evita
   if(/\D/.test(e.key)){
      // si es digito o numero preventDefault evita q se haga 
      e.preventDefault();
   }
   //si el valor de celular su longitud es 9
   if(celular.value.length==9){
      e.preventDefault();

   }

});

//key press cuando presionas la tecla
//a nombre le aplicamos un addEventListener con evento keypress(cuando presionas tecla)
//aplicamos evento keypress y funcion flecha con parametro e, e representa el evento q se aplicara 
nomMascota.addEventListener("keypress",(e)=>{
   //e.key devuelve el valor de la tecla presionada
   // \d es digito y ^a-zA-Z esto significa que si es todo excepto los de a-zA-Z entonces con prevent default lo evita
   if(/[^a-zA-Z\s]/.test(e.key)){
      // si es digito o numero preventDefault evita q se haga 
      e.preventDefault();
   }

});
txtArea.addEventListener("keypress",(e)=>{
   //e.key devuelve el valor de la tecla presionada
   // \d es digito y ^a-zA-Z esto significa que si es todo excepto los de a-zA-Z entonces con prevent default lo evita
   if(/[^a-zA-Z\s]/.test(e.key)){
      // si es digito o numero preventDefault evita q se haga 
      e.preventDefault();
   }

});
//para el submit
document.registro.addEventListener("submit", (e)=>{
   //evaluar el nombre primero
   //si inicia o termina con espacio \s dara error
   if(/^\s*$/.test(nombre.value)){
      e.preventDefault();
      document.getElementsByClassName("span")[0].innerHTML="Ingrese su nombre correctamente";
      //alert("Ingrese su nombre correctamente");
      //para q coja el error
      nombre.select();
      //return si hay algun error entonces corrigeme el primero q encuentre
      return;
   }
   //caso contrario si esta bien y enviamos limpiar
   else{
      document.getElementsByClassName("span")[0].innerHTML="";
   }
     //que inicie con 9 y que \d cualquier digito {8} esto es 8 veces
   //colocamos ! si devuelve true, lo cambia a false
   if(!/^9\d{8}$/.test(celular.value)){
      //al ser !(F) se convierte en V entonces haces lo demas de abajo
      //al ser !(V) se convierte en F entones no haces lo de abajo
      // con el ! hago q se active cuando no este correcto
      e.preventDefault();
      document.getElementsByClassName("span")[1].innerHTML="Ingrese un número válido";
      //alert("Ingrese un número válido");
      celular.select();
      return; 
   }
   //caso contrario si esta bien y enviamos limpiar
   else{
      document.getElementsByClassName("span")[1].innerHTML="";
   }
   // \w acepta a-z A-Z y 0(numeros) y _  luego \. es para solo el punto
   // la cantidad de caracteres antes del @ , le ponemos +(se puede 1 o muchas veces el caracter)
   if(!/^[\w\.-]+@[\w\.-]+\.[a-z]{2,3}$/.test(correo.value)){
      // si es !(V) se convierte en F , entonces realiza lo de abajo
      e.preventDefault();
      document.getElementsByClassName("span")[2].innerHTML="Ingrese un correo válido";
      //alert("Ingrese un correo válido");
      correo.select();
      return;
   }
   //caso contrario si esta bien y enviamos limpiar
   else{
      document.getElementsByClassName("span")[2].innerHTML="";
   }
     //evaluar el nomMascota
   //si inicia o termina con espacio \s dara error
   if(/^\s*$/.test(nomMascota.value)){
      e.preventDefault();
      document.getElementsByClassName("span")[3].innerHTML="Ingrese el nombre de su mascota correctamente";
      //alert("Ingrese el nombre de su mascota correctamente");
      //para q coja el error
      nomMascota.select();
      //return si hay algun error entonces corrigeme el primero q encuentre
      return;

   }
   //caso contrario si esta bien y enviamos limpiar
   else{
      document.getElementsByClassName("span")[3].innerHTML="";
   }
   //evaluar la fecha

  
   if(!/^([0-9]{2}\/[0-9]{2}\/[0-9]{4})$/.test(fecha.value)){

      e.preventDefault();
      document.getElementsByClassName("span")[4].innerHTML="Ingrese su fecha correctamente";
      //para q coja el error
      fecha.select();
      //return si hay algun error entonces corrigeme el primero q encuentre
      return;
   }
   //caso contrario si esta bien y enviamos limpiar
   else{
    document.getElementsByClassName("span")[4].innerHTML="";
   }
  
   if(combo.value==0 || combo.value==""){
      e.preventDefault();
      document.getElementsByClassName("span")[5].innerHTML="Seleccione el tipo de servicio por favor!";
      //alert("Ingrese su consulta correctamente");
      //para q coja el error
      combo.focus();
      //return si hay algun error entonces corrigeme el primero q encuentre
      return;

   }
   //caso contrario si esta bien y enviamos limpiar
   else{
      document.getElementsByClassName("span")[5].innerHTML="";
   }


     //evaluar el nomMascota
   //si inicia o termina con espacio \s dara error
   if(/^\s*$/.test(txtArea.value)){
      e.preventDefault();
      document.getElementsByClassName("span")[6].innerHTML="Ingrese su consulta correctamente";
      //alert("Ingrese su consulta correctamente");
      //para q coja el error
      txtArea.select();
      //return si hay algun error entonces corrigeme el primero q encuentre
      return;

   }
   //caso contrario si esta bien y enviamos limpiar
   else{
      document.getElementsByClassName("span")[6].innerHTML="";
   }

 
   //si estos if no se cumplen es decir q todo esta ok envia este alert
   alert("Datos registrados");
});

function entre(c){
   let im=["../src/images/imagenes-blog/categoria-2-0.jpg","../src/images/imagenes-blog/categoria-1-0.jpg","../src/images/imagenes-blog/categoria-3-0.jpg"];
   document.getElementsByClassName("img-nosotros")[c].src=im[c];
   }
function fue(d){
   let imx=["../src/images/imagenes-blog/categoria-2.jpg","../src/images/imagenes-blog/categoria-1.jpg","../src/images/imagenes-blog/categoria-3.jpg"];
   document.getElementsByClassName("img-nosotros")[d].src=imx[d];
   }
function reloj(){
   let time=new Date();
    let hora=time.getHours();
    let minutos=time.getMinutes();
   let segundos=time.getSeconds();
    if(minutos<10){
         minutos="0"+minutos
      }
   if(segundos<10){
         segundos="0"+segundos
      }
   document.getElementById("reloj").innerHTML=hora + ":" + minutos + ":" +segundos;
   setTimeout(reloj,1000); 
   }


   function redesOn1(){
      document.getElementsByClassName("imag-redes")[0].style.width="60px";
      document.getElementsByClassName("imag-redes")[0].style.height="60px";
   }
   function redesOn2(){
      document.getElementsByClassName("imag-redes")[1].style.width="60px";
      document.getElementsByClassName("imag-redes")[1].style.height="60px";
   }
   function redesOn3(){
      document.getElementsByClassName("imag-redes")[2].style.width="60px";
      document.getElementsByClassName("imag-redes")[2].style.height="60px";
   }
   function redesOut1(){
      document.getElementsByClassName("imag-redes")[0].style.width="50px";
      document.getElementsByClassName("imag-redes")[0].style.height="50px";
   }
   function redesOut2(){
      document.getElementsByClassName("imag-redes")[1].style.width="50px";
      document.getElementsByClassName("imag-redes")[1].style.height="50px";
   }
   function redesOut3(){
      document.getElementsByClassName("imag-redes")[2].style.width="50px";
      document.getElementsByClassName("imag-redes")[2].style.height="50px";
   }
   


