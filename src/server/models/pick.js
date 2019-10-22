const bookshelf = require('../bookshelf')

module.exports = bookshelf.model('Pick', {
  tableName: 'picks',
  idAttribute: 'id',
  matchup: function() {
    return this.hasOne('Matchup', 'matchupId', 'matchups.id')
  },
  pickedBy: function() {
    return this.hasOne('User', 'userId', 'users.id')
  },
  teamPicked: function() {
    return this.hasOne('Team', 'teamPickedId', 'teams.id')
  },
})
