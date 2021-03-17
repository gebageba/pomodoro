window.addEventListener('load', () => {
  const f = document.getElementById('time');
  const h = document.getElementById('hour');
  const s = document.getElementById('second');
  const stop = document.getElementById('stop');
  let timerS;
  let timerH;
  let cntSecond = 59;
  let cntHour = 24; 

  f.addEventListener("click", startFunction)

  function startFunction() {
    f.innerHTML = "集中してください";
    timerS = setInterval(countDown,1000);
    timerH = setInterval(countDownHour, 60000);
    function countDown() {
      s.innerHTML = cntSecond--;
      if (cntSecond == 0 ){
        cntSecond = 59;
      }
    }
    function countDownHour() {
      h.innerHTML = cntHour--;
      if( cntHour < 0 ){
        confirm("5分間の休憩に入ってください");
        cntHour = 5;
      }
    }
  }
})

