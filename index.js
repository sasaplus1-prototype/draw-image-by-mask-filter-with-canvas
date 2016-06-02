(function(){

  'use strict';

  var image = document.getElementById('js-image'),
      canvas1 = document.getElementById('js-canvas-1'),
      canvas2 = document.getElementById('js-canvas-2');

  var isDrag = false;

  canvas1.addEventListener('dblclick', function() {
    var context1, context2;
    
    context1 = canvas1.getContext('2d');
    context2 = canvas2.getContext('2d');

    context1.clearRect(0, 0, canvas1.width, canvas1.height);
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
  }, false);

  canvas1.addEventListener('mousedown', function() {
    isDrag = true;
  }, false);

  canvas1.addEventListener('mousemove', function(event) {
    var context1, context2, x, y;

    if (!isDrag) {
      return;
    }

    context1 = canvas1.getContext('2d');
    context2 = canvas2.getContext('2d');

    x = event.offsetX;
    y = event.offsetY;

    context1.beginPath();
    context1.fillStyle = 'black';
    context1.arc(x, y, 10, 0, Math.PI * 2);
    context1.fill();

    context2.globalCompositeOperation = 'source-over';
    context2.drawImage(image, 0, 0, canvas1.width, canvas1.height);

    context2.globalCompositeOperation = 'destination-in';
    context2.drawImage(canvas1, 0, 0, canvas1.width, canvas1.height);
  }, false);

  canvas1.addEventListener('mouseup', function() {
    isDrag = false;
  }, false);

  canvas1.addEventListener('mouseleave', function() {
    isDrag = false;
  }, false);

}());
