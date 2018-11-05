/* 
What we need:
  - button to start generator
  - 3 arrays, 3 types -> nouns, verbs, direct objects
  - function that picks randomly one item from each array 
  - function that puts the 3 items  together to form a sentence
  - render the sentence to the .html-file in the div with the id placeholder
*/

const firstGenerator = {
  nouns: ['Jennifer', 'Peter', 'He', 'She'],
  verbs: ['goes', 'swims', 'does'],
  objects: ['fishing', 'upstream', 'yoga'],
  selectItem: function(arr) {
    let randomNr = Math.floor(Math.random() * arr.length)
    return arr[randomNr]
  },
  formQuote: function() {
    const partOne = this.selectItem(this.nouns)
    const partTwo = this.selectItem(this.verbs)
    const partThree = this.selectItem(this.objects)

    const quote = `${partOne} ${partTwo} ${partThree}`
    return quote
  },
  renderQuote: function() {
    const quote = this.formQuote()
    const placeholder1 = document.querySelector('#placeholder1')
    placeholder1.innerHTML = ''
    placeholder1.insertAdjacentHTML(
      'beforeend',
      `<p>
      ${quote}
    </p>`,
    )
  },
}

const secondGenerator = {
  firstPersonNoun: ['I', 'We'],
  thirdPersonNoun: ['He', 'She', 'It', 'Peter'],
  firstPersonVerb: ['go', 'like', 'enjoy'],
  thirdPersonVerb: ['goes', 'likes', 'enjoys'],
  objects: ['fishing', 'swimming', 'yoga', 'sports'],

  selectItem: function(arr) {
    let randomNr = Math.floor(Math.random() * arr.length)
    return arr[randomNr]
  },
  formQuote: function(val) {
    let partOne = ''
    let partTwo = ''
    let partThree = ''

    if (val === '1') {
      partOne = this.selectItem(this.firstPersonNoun)
      partTwo = this.selectItem(this.firstPersonVerb)
      partThree = this.selectItem(this.objects)
    } else if (val === '2') {
      partOne = this.selectItem(this.thirdPersonNoun)
      partTwo = this.selectItem(this.thirdPersonVerb)
      partThree = this.selectItem(this.objects)
    }

    const quote = `${partOne} ${partTwo} ${partThree}`
    return quote
  },
  renderQuote: function(val, quoteNr) {
    const placeholder2 = document.querySelector('#placeholder2')
    placeholder2.innerHTML = ''
    for (let i = 0; i < quoteNr; i++) {
      quote = this.formQuote(val)
      placeholder2.insertAdjacentHTML(
        'beforeend',
        `<p>
      ${quote}
    </p>`,
      )
    }
  },
}

const button = document.querySelector('button')
const firstButton = document.querySelector('#firstButton')
const secondButton = document.querySelector('#secondButton')
const form = document.querySelector('form')

button.addEventListener('click', event => {
  event.preventDefault()
  firstGenerator.renderQuote()
})

firstButton.addEventListener('click', event => {
  event.preventDefault()
  secondGenerator.renderQuote('1', form.numberOfQuotes.value)
})

secondButton.addEventListener('click', event => {
  event.preventDefault()
  secondGenerator.renderQuote('2', form.numberOfQuotes.value)
})

/*function selectItem(arr) {
  let randomNr = Math.floor(Math.random() * arr.length)
  return arr[randomNr]
}

function formQuote() {
  const partOne = selectItem(nouns)
  const partTwo = selectItem(verbs)
  const partThree = selectItem(objects)

  const quote = `${partOne} ${partTwo} ${partThree}`
  return quote
}

function renderQuote() {
  const quote = formQuote()
  const placeholder = document.querySelector('#placeholder')
  placeholder.innerHTML = ''
  placeholder.insertAdjacentHTML(
    'beforeend',
    `<p>
      ${quote}
    </p>`,
  )
}*/
