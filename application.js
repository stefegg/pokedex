function pkmn1() {
  var audio = document.getElementById("audio");
  audio.play();
  var y = document.getElementById('pkmnPic');
  y.classList.remove('wobble');
  y.classList.remove('bounceInDown');
  y.classList.remove('animated');
  y.classList.remove('zoomInUp');
  y.classList.remove('lightSpeedIn');
  y.classList.remove('rubberBand');
  y.classList.remove('zoomInRight');
  void y.offsetWidth;
  y.classList.add('animated');
  y.classList.add('zoomInUp');
  y.src = pkmnPics.one;
  var x = document.getElementById('backHouse');
  x.style.backgroundImage="url('images/fire.png')";
  var z = document.getElementById('frontHouse');
  z.classList.remove('regBorder');
  z.style.backgroundImage="url('images/f-bg.jpg')";
  z.classList.add('fireBorder');
  var a = document.getElementById('pokeBorder');
  a.style.borderImage="url('images/pball.png')";
  a.style.borderImageOutset = "30px 30px";
}

function pkmn2() {
  var audio2 = document.getElementById("audio2");
  audio2.play();
  var y = document.getElementById('pkmnPic');
  y.classList.remove('wobble');
  y.classList.remove('bounceInDown');
  y.classList.remove('animated');
  y.classList.remove('zoomInUp');
  y.classList.remove('lightSpeedIn');
  y.classList.remove('rubberBand');
  y.classList.remove('zoomInRight');
  void y.offsetWidth;
  y.classList.add('animated');
  y.classList.add('wobble');
  y.src = pkmnPics.two;
  var x = document.getElementById('backHouse')
  x.style.backgroundImage="url('images/water.png')"
  var z = document.getElementById('frontHouse');
  z.style.backgroundImage="url('images/beach-bg.jpg')";
  var a = document.getElementById('pokeBorder');
  a.style.borderImage="url('images/pball-w.png')";
  a.style.borderImageOutset = "30px 30px";
}

function pkmn3() {
  var audio3 = document.getElementById("audio3");
  audio3.play();
  var y = document.getElementById('pkmnPic');
  y.classList.remove('wobble');
  y.classList.remove('bounceInDown');
  y.classList.remove('animated');
  y.classList.remove('zoomInUp');
  y.classList.remove('lightSpeedIn');
  y.classList.remove('rubberBand');
  y.classList.remove('zoomInRight');
  void y.offsetWidth;
  y.classList.add('animated');
  y.classList.add('bounceInDown');
  y.src = pkmnPics.three;
  var x = document.getElementById('backHouse');
  x.style.backgroundImage="url('images/electric.png')";
  var z = document.getElementById('frontHouse');
  z.style.backgroundImage="url('images/e-bg.jpg')";
  var a = document.getElementById('pokeBorder');
  a.style.borderImage="url('images/pball-e.png')";
  a.style.borderImageOutset = "30px 30px";
}

function pkmn4() {
  var audio4 = document.getElementById("audio4");
  audio4.play();
  var y = document.getElementById('pkmnPic');
  y.classList.remove('wobble');
  y.classList.remove('bounceInDown');
  y.classList.remove('animated');
  y.classList.remove('zoomInUp');
  y.classList.remove('lightSpeedIn');
  y.classList.remove('rubberBand');
  y.classList.remove('zoomInRight');
  void y.offsetWidth;
  y.classList.add('animated');
  y.classList.add('zoomInRight');
  y.src = pkmnPics.four;
  var x = document.getElementById('backHouse')
  x.style.backgroundImage="url('images/ground.png')"
  var z = document.getElementById('frontHouse');
  z.style.backgroundImage="url('images/g-bg.jpg')";
  var a = document.getElementById('pokeBorder');
  a.style.borderImage="url('images/pball-g.png')";
  a.style.borderImageOutset = "30px 30px";
}

function pkmn5() {
  var audio5 = document.getElementById("audio5");
  audio5.play();
  var y = document.getElementById('pkmnPic');
  y.classList.remove('wobble');
  y.classList.remove('bounceInDown');
  y.classList.remove('animated');
  y.classList.remove('zoomInUp');
  y.classList.remove('lightSpeedIn');
  y.classList.remove('rubberBand');
  y.classList.remove('zoomInRight');
  void y.offsetWidth;
  y.classList.add('animated');
  y.classList.add('rubberBand');
  y.src = pkmnPics.five;
  var x = document.getElementById('backHouse')
  x.style.backgroundImage="url('images/plant.png')"
  var z = document.getElementById('frontHouse');
  z.style.backgroundImage="url('images/p-bg.jpg')";
  var a = document.getElementById('pokeBorder');
  a.style.borderImage="url('images/pball-p.png')";
  a.style.borderImageOutset = "30px 30px";
}

function pkmn6() {
  var audio6 = document.getElementById("audio6");
  audio6.play();
  var y = document.getElementById('pkmnPic');
  y.classList.remove('wobble');
  y.classList.remove('bounceInDown');
  y.classList.remove('animated');
  y.classList.remove('zoomInUp');
  y.classList.remove('lightSpeedIn');
  y.classList.remove('rubberBand');
  y.classList.remove('zoomInRight');
  void y.offsetWidth;
  y.classList.add('animated');
  y.classList.add('lightSpeedIn');
  y.src = pkmnPics.six;
  var x = document.getElementById('backHouse')
  x.style.backgroundImage="url('images/ghost.png')"
  var z = document.getElementById('frontHouse');
  z.style.backgroundImage="url('images/gh-bg.jpg')";
  var a = document.getElementById('pokeBorder');
  a.style.borderImage="url('images/pball-gh.png')";
  a.style.borderImageOutset = "30px 30px";
}

pkmnPics = {
  one: 'images/' + 'charizard.png',
  two: 'images/' + 'Seadra.png',
  three: 'images/' + 'jolteon.png',
  four: 'images/' + 'sandslash.png',
  five: 'images/' + 'exeggutor.png',
  six: 'images/' + 'haunter.png',
}
