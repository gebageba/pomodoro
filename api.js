window.addEventListener('load', () => {
  const n = document.getElementById('newlist');
  const v = document.getElementById('lists');

  n.addEventListener("click", makeList)
  const text = document.getElementById('text');
  function makeList() {
    v.innerHTML += text.value;
    console.log(text.value)
  }

})

