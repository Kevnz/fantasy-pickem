const bookshelf = require('../bookshelf')

module.exports = bookshelf.model('League', {
  tableName: 'leagues',
  idAttribute: 'id',
  virtuals: {
    createdOn: function() {
      return this.get('created_at')
    },
  },
  teams: function() {
    return this.hasMany('Team', 'teamId')
  },
})
