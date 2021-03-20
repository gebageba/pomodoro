window.addEventListener('load', () => {
  const f = document.getElementById('time');
  const s = document.getElementById('second');
  const h = document.getElementById('hour');
  const stop = document.getElementById('stop');
  let timerS;
  let cntSecond = 1499;

  f.addEventListener("click", startFunction)

  function startFunction() {
    f.innerHTML = "集中してください";
    timerS = setInterval(countDown,1000);
    
    function countDown() {
      h.innerHTML = Math.floor(cntSecond/60);
      s.innerHTML = cntSecond%60;
      cntSecond--;
      
      if (cntSecond == 0 ){
        sound("sine", 10);
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
