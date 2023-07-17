const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    const url = 'https://icanhazdadjoke.com/'
    const config = {headers: {Accept: 'application/json'}}

    const res = await fetch(url, config)
    const data = await res.json()

    jokeElement.innerHTML = data.joke

}
