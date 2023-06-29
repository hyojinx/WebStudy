const image=['0.jpeg','1.jpeg','2.jpeg'];
const chosenImg=image[Math.floor(Math.random()*image.length)];

// $('body').css('background-image',`url('img/${chosenImg}')`);
$('body').attr('style',`background-image:url('img/${chosenImg}')`);
