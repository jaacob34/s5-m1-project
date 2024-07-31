function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('section div')
  widgets.forEach(widget => widget.classList.add('widget'))

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const quoteOfTheDay = document.querySelector('.quoteoftheday')
  let num = Math.floor(Math.random() * 10)


  let addQuotes = () => {
    const quote = document.createElement('div')
    const authorAndDate = document.createElement('div')
    quote.textContent = quotes[num].quote

    if (!quotes[num].date) {
      authorAndDate.textContent = `${quotes[num].author} in an unknown date`
    } else {
      authorAndDate.textContent = `${quotes[num].author} in ${quotes[num].date}`
    }

    quoteOfTheDay.append(quote)
    quoteOfTheDay.append(authorAndDate)
  }
  addQuotes()

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  
  const corporateSpeak = document.querySelector('.corporatespeak')
  const speech = document.createElement('p')
  corporateSpeak.append(speech)


  const verb1 = verbs[Math.floor(Math.random() * 10)]
  const verb2 = verbs[Math.floor(Math.random() * 10)]
  const noun1 = nouns[Math.floor(Math.random() * 10)]
  const noun2 = nouns[Math.floor(Math.random() * 10)]
  const adverb1 = adverbs[Math.floor(Math.random() * 10)]
  const adverb2 = adverbs[Math.floor(Math.random() * 10)]

  speech.textContent = `We need to ${verb1} our ${noun1} ${adverb1} in order to ${verb2} our ${noun2} ${adverb2}.`

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdown = document.querySelector('.countdown')
  const countP = document.createElement('p')
  countdown.append(countP)
  const countdownArr = ['Liftoff! 🚀', 'T-minus 1...', 'T-minus 2...', 'T-minus 3...', 'T-minus 4...', 'T-minus 5...']

  let count = countdownArr.length - 1
  function countLoop() {
    countP.textContent = countdownArr[count]
    count--
    if (count >= 0) {
      setTimeout(countLoop, 1000)
    }
  }
  countLoop()

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  const friendWidget = document.querySelector('.friends')
  friendP = document.createElement('p')
  friendWidget.append(friendP)

  const randomPerson = people[Math.floor(Math.random() * people.length)]
  const birthYear = randomPerson.dateOfBirth.substring(0, 4)
  let sentence = `${randomPerson.fname} ${randomPerson.lname} was born in ${birthYear} `

  if (!randomPerson.friends.length) {
    sentence += 'and has no friends.'
  } else {
    sentence += 'and is friends with '
    for (let idx = 0; idx < randomPerson.friends.length; idx++) {
      const friendId = randomPerson.friends[idx]
      const friend = people.find(p => p.id === friendId)
      const fullName = `${friend.fname} ${friend.lname}`
      let isLastIdx = idx === randomPerson.friends.length - 1
      let isNextToLastIdx = idx === randomPerson.friends.length - 2
      if (isLastIdx) {
        sentence += `${fullName}.`
      } else if (isNextToLastIdx) {
        sentence += `${fullName} and `
      } else {
        sentence += `${fullName}, `
      }
    }
  }

  friendP.textContent = sentence

  // const friendWidget = document.querySelector('.friends')
  // const friendP = document.createElement('p')
  // friendWidget.append(friendP)
  
  // const randomPerson = people[Math.floor(Math.random() * people.length)]
  // const birthYear = randomPerson.dateOfBirth.substring(0, 4)
  // const friendIds = randomPerson.friends

  // const randomFriends = people
  //   .filter(person => friendIds.includes(person.id))
  //   .map(person => `${person.fname} ${person.lname}`)
  //   console.log(friendIds)
  //   console.log(randomFriends)

  // friendP.textContent = `${randomPerson.fname} ${randomPerson.lname} was born in ${birthYear}`

  // if (!randomFriends.length) {
  //   friendP.textContent += ' and has no friends.'
  // } else {
  //   for (let i = randomFriends.length; i >= 0; i--) {

  //     if (i === randomFriends.length - 1) {
  //       friendP.textContent += ` and is friends with ${randomFriends[i]}.`
  //     } else if (i === 0) {
  //       friendP.textContent += ` and ${randomFriends[i]}.`
  //     } else if (i < randomFriends.length - 1) {
  //       friendP.textContent += `, ${randomFriends[i]}`
  //     }
  //   }
  // }


  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  quoteOfTheDay.setAttribute('tabindex', '1')
  corporateSpeak.setAttribute('tabindex', '2')
  countdown.setAttribute('tabindex', '3')
  friendWidget.setAttribute('tabindex', '4')

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
