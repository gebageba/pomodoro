window.addEventListener('load', () => {
  
  
  const octokit = new Octokit({ auth: `personal-access-token123` });

  const n = document.getElementById('newlist');
  const v = document.getElementById('lists');

  const result = await octokit.request('GET /orgs/{org}/repos', {
    org: 'org'
  })

 console.log(result);

  n.addEventListener("click", makeList)
  const text = document.getElementById('text');
  function makeList() {
    v.innerHTML += text.value;
    console.log(text.value)
  }

})

