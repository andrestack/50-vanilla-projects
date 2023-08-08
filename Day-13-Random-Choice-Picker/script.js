const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
  }
  randomSelect()
})
//
function createTags(input) {
  // create tags from input value and add to DOM
  const tags = input
    .split(',') // split input value by comma
    .filter((tag) => tag.trim() !== '') // remove empty tags
    .map((tag) => tag.trim()) // remove whitespace from tags
  console.log(tags)

  tagsEl.innerHTML = ''

  //   create tags and add to DOM
  tags.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
    console.log('foreach', tagEl)
  })
}

// random select
function randomSelect() {
  const times = 30 // number of times to highlight tags
  const interval = setInterval(() => {
    const randomTag = pickRandomTag() // pick random tag and highlight it for 100ms

    highlightTag(randomTag)

    setTimeout(() => {
      unhighlightTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval) // stop interval

    setTimeout(() => {//
      // pick random tag and highlight it for 100ms after interval stops
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag') // select all tags
  return tags[Math.floor(Math.random() * tags.length)] 
  // return a random tag from tags array using Math.random() and Math.floor() methods to get a random number between 0 and tags.length - 1
}

function highlightTag(tag) {
  tag.classList.add('highlight') // add highlight class to tag
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight') // remove highlight class from tag
}
