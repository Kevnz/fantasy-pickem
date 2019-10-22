const bookshelf = require('../bookshelf')

module.exports = bookshelf.model('Team', {
  tableName: 'teams',
  idAttribute: 'id',
  league() {
    return this.belongsTo('League', 'leagueId', 'leagues.id')
  },
})
