import React, { useEffect } from 'react';

function JokeGenerator(): JSX.Element {
  useEffect(() => {
    generateJoke();
  }, []);

  async function generateJoke(): Promise<void> {
    const url = 'https://icanhazdadjoke.com/';
    const config = { headers: { Accept: 'application/json' } };

    const res = await fetch(url, config);
    const data = await res.json();

    (document.getElementById('joke') as HTMLParagraphElement).innerHTML = data.joke;
  }

  return (
    <div>
      <button id="jokeBtn" onClick={generateJoke}>
        Generate Joke
      </button>
      <p id="joke"></p>
    </div>
  );
}

export default JokeGenerator;
