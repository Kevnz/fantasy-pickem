const bookshelf = require('../bookshelf')

module.exports = bookshelf.model('Matchup', {
  tableName: 'matchups',
  idAttribute: 'id',
  teamA: function() {
    return this.hasOne('Team', 'teamAId', 'teams.id')
  },
  teamB: function() {
    return this.hasOne('Team', 'teamBId', 'teams.id')
  },
  winner: function() {
    return this.hasOne('Team', 'winnerId', 'teams.id')
  },
})
