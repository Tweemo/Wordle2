exports.seed = function (knex) {
  return knex('WordList')
    .del()
    .then(() => {
      return knex('WordList').insert([
        { id: 1, word: 'Abuse' },
        { id: 2, word: 'Adult' },
        { id: 3, word: 'Agent' },
        { id: 4, word: 'Anger' },
        { id: 5, word: 'Apple' },
      ])
    })
}
