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

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())
  console.log(tags)

  tagsEl.innerHTML = ''

  //   create tags
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
  const times = 30
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    highlightTag(randomTag)

    setTimeout(() => {
      unhighlightTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval) // stop interval

    setTimeout(() => {
      // pick random tag
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag') // select all tags
  return tags[Math.floor(Math.random() * tags.length)] // return a random tag
}

function highlightTag(tag) {
  tag.classList.add('highlight') // add highlight class to tag
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight') // remove highlight class from tag
}
