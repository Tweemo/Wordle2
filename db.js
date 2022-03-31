const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

let randNum = Math.floor(Math.random() * 5)

// console.log(word)
// console.log(randNum)

function getRandWord(word, db = connection) {
  return db('wordList').column('id', 'word')

  console.log(word)
  // word == {guess: houre}
}

module.exports = {
  getRandWord,
}
