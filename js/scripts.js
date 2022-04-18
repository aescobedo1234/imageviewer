/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



var panzoom1 = Panzoom(document.querySelector(".zoom-area1"), {
    maxScale: 6
  });
  
  document.getElementById('zoomin').addEventListener("click", function(ev){
    ev.preventDefault()

    panzoom1.zoomIn()
  });


  document.getElementById('zoomout').addEventListener("click", function(ev){
    ev.preventDefault()

    panzoom1.zoomOut()
  });


  var button = document.querySelector(".wwdimg");
  var img = document.querySelector(".zoom-area1");


  document.getElementById('opacity').addEventListener("click", function(ev){
    ev.preventDefault()

    img.style.opacity  =  "0.5";
  });

  document.getElementById('reset').addEventListener("click", function(ev){
    ev.preventDefault()
    img.style.opacity  =  "1";
  });

  
  function changeImg() {
    var image = document.getElementById('myImg');
    if (image.src.match("assets/image2.jpg")) {
        image.src = "assets/image1.jpg";
    }
    else if(image.src.match("assets/image1.jpg")){
      image.src = "assets/image3.jpg";
    }
    else {
        image.src = "assets/image2.jpg";
    }
}