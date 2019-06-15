const Hapi = require('@hapi/hapi')
const Path = require('path')

const getAirports = function (request, h) {
  const countryCode = request.params.countryCode || 'us';
  const dataFile = Path.resolve(__dirname, `data/airports_${countryCode}.json`)
  
  return h.file(dataFile)
}

const start = async () => {

  const server = Hapi.server({
    port: 3002,
    host: 'localhost',
    routes: { cors: true }
  })

  await server.register(require('@hapi/inert'));

  server.route({
    method: 'GET',
    path: '/{countryCode}',
    handler: getAirports
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {

    console.log(err)
    process.exit(1)
})

start()