import React, { useEffect } from 'react'

export default function JokeGenerator() {
  useEffect(() => {
    generateJoke()
  }, [])

  async function generateJoke() {
    const url = 'https://icanhazdadjoke.com/'
    const config = { headers: { Accept: 'application/json' } }

    const response = await fetch(url, config)
    const data = await response.json()

    document.getElementById('joke').innerHTML = data.joke
  }

  return (
    <div>
      <div id="joke"></div>
      <button id="jokeBtn" onClick={generateJoke}>
        Generate Joke
      </button>
    </div>
  )
}
