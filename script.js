var start = Math.floor(Date.now() / 1000);


function randomColors() {


   var letters = '0123456789ABCDEF'.split('');
   
   var color = '#';

   for (var i = 0;  i < 6; i++){

       color += letters[Math.floor(Math.random() *16)];
   }

   return color;
}

function appearingShape() {

   var to = Math.random() * 400;

   var lef = Math.random() * 400;

   var widt = (Math.random() * 200) + 100;

   if (Math.random() > 0.5) {

       document.getElementById("shape").style.borderRadius = "50%";
   }

   else {

       document.getElementById("shape").style.borderRadius = "0";
       
   }

   document.getElementById("shape").style.backgroundColor = randomColors ();
   
   document.getElementById("shape").style.width = widt + "px";

   document.getElementById("shape").style.height = widt + "px";

   document.getElementById("shape").style.top = to + "px";

   document.getElementById("shape").style.left = lef + "px";


   document.getElementById("shape").style.display = "block";

   start = Math.floor(Date.now() / 1000);

   
   
}

function appearAfter(){

setTimeout(appearingShape, Math.random() * 3000);
}

appearAfter();

document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
   var end = Math.floor(Date.now() / 1000);

   var timePassed = end - start;


   document.getElementById("taken").innerHTML = timePassed +"s";

   appearAfter();

   


  
}