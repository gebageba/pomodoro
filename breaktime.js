window.addEventListener('load', () => {
  const f = document.getElementById('time2');
  const s = document.getElementById('second2');
  const stop = document.getElementById('stop2');
  let timerS;
  let sound;
  let cntSecond = 299;


  f.addEventListener("click", startFunction)
  
  function startFunction() {
    f.innerHTML = "休憩してください";
    timerS = setInterval(countDown,1000);
    function countDown() {
      s.innerHTML = cntSecond--;
      if (cntSecond == 0 ){
        sound('sawtooth', 10);
      }
    }
    
    function sound(type, sec) {
      var AudioContext = window.AudioContext || window.webkitAudioContext,
      ctx = new AudioContext();
      var oscillator = ctx.createOscillator();
      var gainNode = ctx.createGain();
      oscillator.detune.value = 0; // 音の高さとか調整？
      oscillator.frequency.value = 174; // 周波数 880Hz
      gainNode.gain.value = 0.05; // 音量
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.start();
      oscillator.stop(sec);
    }
  }
})

