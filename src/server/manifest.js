module.exports = [
  {
    plugin: require('blipp'),
  },
  {
    plugin: require('@hapi/vision'),
  },
  {
    plugin: require('@hapi/inert'),
  },
  {
    plugin: require('@hapi/good'),
    options: {
      ops: {
        interval: 30 * 800,
      },
      reporters: {
        console: [
          {
            module: '@hapi/good-console',
            args: [{ log: '*', response: '*' }],
          },
          'stdout',
        ],
      },
    },
  },
  {
    plugin: require('hapi-router'),
    options: {
      routes: ['src/server/routes/**/*.js'],
    },
  },
]
