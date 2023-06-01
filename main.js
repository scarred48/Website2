const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const emojis = '＄';

const alphabet = katakana + latin + nums + emojis;

const fontSize = 16;
const columns = canvas.width;


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = 'rgba(0,0,0,0.05)'
  context.fillRect(0,0, canvas.width, canvas.height);
  
    context.fillStyle = '#107210';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}

setInterval(draw, 25);

function copy() {
  var discord = document.getElementsByClassName("hide-discord");
  navigator.clipboard.writeText(discord[0].textContent);
  console.log(discord[0].textContent);
  alert("Copied! " + discord[0].textContent)
}


window.onload = () => {
  function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = hours + ':' + minutes + ':' + seconds;
    document.querySelector('.clock').textContent = timeString;
  }
  setInterval(updateClock, 1);
  const sources = [
    { src: 'https://www.dropbox.com/s/8hi2dedm1q486om/Juice%20WRLD%20-%20We%20Don%27t%20Get%20Along%20%28unreleased%29%20%28lyrics%29%20%281%29.mp3?dl=1'/*, type: 'audio/mpeg'*/ },
    { src: 'https://www.dropbox.com/s/fkzhhr5ou5p90di/Had_To.m4a?dl=1'/*, type: 'audio/mpeg'*/ },
    //{ src: '', type: 'audio/mpeg' }
  ];
  const audio = document.getElementById('myAudio');
  audio.volume = 0.02;
  audio.loop = true;
  
  function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * sources.length);
    const randomSource = sources[randomIndex];
    audio.src = randomSource.src;
    audio.type = randomSource.type;
    audio.play();
  }
    
  document.addEventListener('click', () => {
    if (!audio.paused) {
      audio.pause();
    } else {
      playRandomSong();
    }
  });
  
  audio.addEventListener('click', () => {
    if (!audio.paused) {
      audio.pause();
    } else {
      playRandomSong();

    }
  });
};

var promise = audio.play();

if (promise!== undefined) {
  promise.then(function() {
  }).catch(function(error) {
    console.log(error);
  });
}



  


