export default function SoundButtons() {
  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong ']
  sounds.forEach((sound) => {
    const btn = (
      <button
        className="btn"
        onClick={() => {
          stopSongs()
          document.getElementById(sound).play()
        }}
      >
        {sound}
      </button>
    )
    document.getElementById('buttons').appendChild(btn)
  })

  function stopSongs() {
    sounds.forEach((sound) => {
      const song = document.getElementById(sound)
      song.pause()
      song.currentTime = 0
    })
  }
}
