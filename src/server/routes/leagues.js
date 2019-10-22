const { League, User } = require('../models')
const { getUserIdFromRequest } = require('../utils/auth')

module.exports = [
  {
    method: 'graphql',
    path: '/getLeagues',
    config: {
      handler: async (r, h) => {
        const leagues = await new League().fetchPage({
          pageSize: 15,
          page: r.payload.skip / 15 + 1,
        })

        const l = leagues.toJSON()

        return {
          total: leagues.pagination.rowCount,
          leagues: l,
        }
      },
    },
  },
  {
    method: 'graphql',
    path: '/getLeague',
    config: {
      handler: async (r, h) => {
        const user = await new League({
          id: r.payload.id,
        }).fetch()
        return user.toJSON()
      },
    },
  },
  {
    method: 'graphql',
    path: '/updateLeague',
    config: {
      handler: async (r, h) => {
        await League.forge(r.payload.updateLeagueInput).save()
        return {
          success: true,
          message: 'Updated',
        }
      },
    },
  },
  {
    method: 'graphql',
    path: '/joinLeague',
    config: {
      handler: async (r, h) => {
        const user = await new User({
          id: getUserIdFromRequest(r),
        }).fetch()
        // TODO: Add a user_to_league table
        // await League.forge(r.payload.updateLeagueInput).save()
        return {
          success: true,
          message: 'Updated',
        }
      },
    },
  },
]
