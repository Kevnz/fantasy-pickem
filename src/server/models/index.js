const bookshelf = require('../bookshelf')
const User = require('./user')
const League = require('./league')

const Users = bookshelf.Collection.extend({
  model: User,
})

const Leagues = bookshelf.Collection.extend({
  model: League,
})

module.exports = {
  League,
  Leagues,
  User,
  Users,
}
