var img_content = document.getElementById('box');
var image = ['1','2','3','4','5'];
var i=image.length;


function nextimge(){
   if (i<image.length) {
       i=i+1;
   }else{
     i=1;  
   }
  img_content.innerHTML = "<img src="+image[i-1]+"https://i.imgur.com/se4uMAf.png>";  
    
}

function prewimge(){
   if (i<image.length+1 && i>1) {
       i=i-1;
   }else{
     i=image.length;  
   }
  img_content.innerHTML = "<img src="+image[i-1]+"https://i.imgur.com/se4uMAf.png>";  
    
}

setInterval( nextimge , 500);