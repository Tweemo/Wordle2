const express = require('express')

const db = require('./db')

const router = express.Router()

let randNum = Math.floor(Math.random() * 5)
const guesses = { guesses: [] }
let counter = 0

router.get('/', (req, res) => {
  res.render('home')
})

router.post('/home', (req, res) => {
  if (req.body.guess.length > 5) {
    res.render('tryAgain')
  } else if (req.body.guess.length < 5) {
    res.render('tryAgain')
  } else if (req.body.guess.length == 5)
    db.getRandWord(req.body).then((word) => {
      guesses.guesses.push(req.body.guess)
      counter++
      console.log(guesses)
      if (counter > 6) {
        res.send(
          `Unluggy too many guesses. The answer is ${word[randNum].word}`
        )
      } else if (counter <= 6) {
        res.render('home', guesses)
      }

      if (word[randNum].word == req.body.guess) {
        res.send('noice')
      }
      return
    })
})

router.post('/tryAgain', (req, res) => {
  res.redirect('/')
})

router.get('/tryAgain', (req, res) => {
  res.render('/')
})

module.exports = router
