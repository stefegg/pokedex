var y = document.getElementById('pkmnPic');
function removeAnimation() {
y.classList.remove('wobble');
y.classList.remove('bounceInDown');
y.classList.remove('animated');
y.classList.remove('zoomInUp');
y.classList.remove('lightSpeedIn');
y.classList.remove('rubberBand');
y.classList.remove('zoomInRight');
y.classList.remove('tada');
void y.offsetWidth;
};

var z = document.getElementById('frontHouse');
function removeBorder() {
  z.classList.remove('regBGfix');
  z.classList.remove('beachBgfix');
  z.classList.remove('regBorder');
  z.classList.remove('ghostBorder');
  z.classList.remove('plantBorder');
  z.classList.remove('electBorder');
  z.classList.remove('waterBorder');
  z.classList.remove('groundBorder');
  z.classList.remove('fireBorder');
};


function pkmn1() {
  var audio = document.getElementById("audio");
  audio.play();
  removeAnimation();
  y.classList.add('animated');
  y.classList.add('zoomInUp');
  y.src = pkmnPics.one;
  var x = document.getElementById('backHouse');
  x.style.backgroundImage="url('images/fire.png')";
  z.style.backgroundImage="url('images/f-bg.jpg')";
  removeBorder();
  z.classList.add('fireBorder');
  var a = document.getElementById('pokeBorder');
  a.style.borderImage="url('images/pball.png')";
  a.style.borderImageOutset = "30px 30px";
  hideMoves();
  iChooseyou(0);
}

function pkmn2() {
  var audio2 = document.getElementById("audio2");
  audio2.play();
  removeAnimation();
  y.classList.add('animated');
  y.classList.add('wobble');
  y.src = pkmnPics.two;
  var x = document.getElementById('backHouse')
  x.style.backgroundImage="url('images/water.png')"
  var z = document.getElementById('frontHouse');
  z.style.backgroundImage="";
  z.classList.add('beachBgfix');
  void z.offsetWidth
  removeBorder();
  z.classList.add('waterBorder');
  var a = document.getElementById('pokeBorder');
  a.style.borderImage="url('images/pball-w.png')";
  a.style.borderImageOutset = "30px 30px";
  hideMoves();
  iChooseyou(4);
}

function pkmn3() {
  var audio3 = document.getElementById("audio3");
  audio3.play();
  removeAnimation();
  y.classList.add('animated');
  y.classList.add('bounceInDown');
  y.src = pkmnPics.three;
  var x = document.getElementById('backHouse');
  x.style.backgroundImage="url('images/electric.png')";
  var z = document.getElementById('frontHouse');
  z.style.backgroundImage="url('images/e-bg.jpg')";
  removeBorder();
  z.classList.add('electBorder');
  var a = document.getElementById('pokeBorder');
  a.style.borderImage="url('images/pball-e.png')";
  a.style.borderImageOutset = "30px 30px";
  hideMoves();
  iChooseyou(5);
}

function pkmn4() {
  var audio4 = document.getElementById("audio4");
  audio4.play();
  removeAnimation();
  y.classList.add('animated');
  y.classList.add('zoomInRight');
  y.src = pkmnPics.four;
  var x = document.getElementById('backHouse')
  x.style.backgroundImage="url('images/ground.png')"
  var z = document.getElementById('frontHouse');
  z.style.backgroundImage="url('images/g-bg.jpg')";
  removeBorder();
  z.classList.add('groundBorder');
  var a = document.getElementById('pokeBorder');
  a.style.borderImage="url('images/pball-g.png')";
  a.style.borderImageOutset = "30px 30px";
  hideMoves();
  iChooseyou(1);
}

function pkmn5() {
  var audio5 = document.getElementById("audio5");
  audio5.play();
  removeAnimation();
  y.classList.add('animated');
  y.classList.add('rubberBand');
  y.src = pkmnPics.five;
  var x = document.getElementById('backHouse')
  x.style.backgroundImage="url('images/plant.png')"
  var z = document.getElementById('frontHouse');
  z.style.backgroundImage="url('images/p-bg.jpg')";
  removeBorder();
  z.classList.add('plantBorder');
  var a = document.getElementById('pokeBorder');
  a.style.borderImage="url('images/pball-p.png')";
  a.style.borderImageOutset = "30px 30px";
  hideMoves();
  iChooseyou(3);
}

function pkmn6() {
  var audio6 = document.getElementById("audio6");
  audio6.play();
  removeAnimation();
  y.classList.add('animated');
  y.classList.add('lightSpeedIn');
  y.src = pkmnPics.six;
  var x = document.getElementById('backHouse')
  x.style.backgroundImage="url('images/ghost.png')"
  var z = document.getElementById('frontHouse');
  z.style.backgroundImage="url('images/gh-bg.jpg')";
  removeBorder();
  z.classList.add('ghostBorder');
  var a = document.getElementById('pokeBorder');
  a.style.borderImage="url('images/pball-gh.png')";
  a.style.borderImageOutset = "30px 30px";
  hideMoves();
  specialSnowflake(2);
}

function reset() {
  var audio = document.getElementById("audio7");
  audio.play();
  removeAnimation();
  y.classList.add('animated');
  y.classList.add('tada');
  y.src = pkmnPics.seven;
  var x = document.getElementById('backHouse');
  x.style.backgroundImage="url('images/pball.png')";
  var z = document.getElementById('frontHouse');
  z.style.backgroundImage="";
  void z.offsetWidth
  z.classList.add('regBGfix');
  z.classList.remove('beachBgfix');
  removeBorder();
  z.classList.add('regBorder');
  var a = document.getElementById('pokeBorder');
  a.style.borderImage="url('images/pball.png')";
  a.style.borderImageOutset = "30px 30px";
  iResetyou();
  hideMoves();
}

pkmnPics = {
  one: 'images/' + 'charizard2.png',
  two: 'images/' + 'Seadra.png',
  three: 'images/' + 'jolteon.png',
  four: 'images/' + 'sandslash.png',
  five: 'images/' + 'exeggutor.png',
  six: 'images/' + 'haunter.png',
  seven: 'images/' + 'stef.png'
}

teamStef = [];
pokeStuff = [];

class Pokeball {
	constructor(pokemon){
      this.pokemon = pokemon;
		axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}/`)
		.then((response) => {
        pokeStuff = response.data;
        teamStef.push(pokeStuff);
        teamStef.sort(function (a, b) {
          return a.id - b.id;
        });
    })
	}
}

class Trainer {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }
  all() {
    return this.pokemon;
  }
  get(name) {
    for(let i = 0; i < this.pokemon.length; i++) {
      if(name === this.pokemon[i].name) {
        return this.pokemon[i];
      }
    }
  }
}

firePoke = new Pokeball(6);
groundPoke = new Pokeball(28);
ghostPoke = new Pokeball(93);
plantPoke = new Pokeball(103);
waterPoke = new Pokeball(117);
elecPoke = new Pokeball(135);
Stef = new Trainer(teamStef);

function iChooseyou(id){
  document.getElementById('pokename').innerHTML = teamStef[id].name;
  let pokeHp = teamStef[id].stats[5].base_stat;
  document.getElementById('hp').innerHTML = `Hit Points: ${pokeHp}`;
  let pokeAtk = teamStef[id].stats[4].base_stat;
  document.getElementById('attack').innerHTML = `Attack: ${pokeAtk}`;
  let pokeDef = teamStef[id].stats[3].base_stat;
  document.getElementById('defense').innerHTML = `Defense: ${pokeDef}`;
  let pokeAb1 = teamStef[id].abilities[0].ability.name.toUpperCase();
  document.getElementById('ability1').innerHTML = `Ability One: ${pokeAb1}`;
  let pokeAb2 = teamStef[id].abilities[1].ability.name.toUpperCase();
  document.getElementById('ability2').innerHTML = `Ability Two: ${pokeAb2}`;
  let pokeMove = teamStef[id].moves[0].move.name.toUpperCase();
  let pokeMove2 = teamStef[id].moves[1].move.name.toUpperCase();
  document.getElementById('moves').innerHTML = `Moves: ${pokeMove} , ${pokeMove2}`;
}

function specialSnowflake(id){
  document.getElementById('pokename').innerHTML = teamStef[id].name;
  let pokeHp = teamStef[id].stats[5].base_stat;
  document.getElementById('hp').innerHTML = `Hit Points: ${pokeHp}`;
  let pokeAtk = teamStef[id].stats[4].base_stat;
  document.getElementById('attack').innerHTML = `Attack: ${pokeAtk}`;
  let pokeDef = teamStef[id].stats[3].base_stat;
  document.getElementById('defense').innerHTML = `Defense: ${pokeDef}`;
  let pokeAb1 = teamStef[id].abilities[0].ability.name.toUpperCase();
  document.getElementById('ability1').innerHTML = `Ability One: ${pokeAb1}`;
  document.getElementById('ability2').innerHTML ='';
  let pokeMove = teamStef[id].moves[10].move.name.toUpperCase();
  let pokeMove2 = teamStef[id].moves[16].move.name.toUpperCase();
  document.getElementById('moves').innerHTML = `Moves: ${pokeMove} , ${pokeMove2}`;
}

function iResetyou(){
  document.getElementById('pokename').innerHTML = 'Welcome to my Pokedex';
  document.getElementById('hp').innerHTML = 'Click on a PokeBall above to see my team!';
  document.getElementById('attack').innerHTML = '';
  document.getElementById('defense').innerHTML ='';
  document.getElementById('ability1').innerHTML = '';
  document.getElementById('ability2').innerHTML = '';
  document.getElementById('moves').innerHTML = '';
}

function sprite6(){
  document.getElementById('spriteBox').src = teamStef[2].sprites.front_default;
}

function sprite5(){
  document.getElementById('spriteBox').src = teamStef[3].sprites.front_default;
}

function sprite4(){
  document.getElementById('spriteBox').src = teamStef[1].sprites.front_default;
}

function sprite3(){
  document.getElementById('spriteBox').src = teamStef[5].sprites.front_default;
}

function sprite2(){
  document.getElementById('spriteBox').src = teamStef[4].sprites.front_default;
}

function sprite1(){
  document.getElementById('spriteBox').src = teamStef[0].sprites.front_default;
}

function sprite0(){
  document.getElementById('spriteBox').src = pkmnPics.seven;
}

function showMoves(){
  document.getElementById('moves').classList.remove('hidden');
}

function hideMoves(){
  document.getElementById('moves').classList.add('hidden');
}
