const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputValue = e.target.children[1].value;

    fetch(`http://localhost:3000/movies/${inputValue}`)
    .then(res => res.json())
    .then(data => {
      const title = document.getElementById('movieDetails').children[0];
      const summary = document.getElementById('movieDetails').children[1];

      title.innerText = data.title;
      summary.innerText = data.summary;
    })
  });
}

document.addEventListener('DOMContentLoaded', init);