import path from 'path'

export default function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'))
  })
  app.get('/#', function (req, res) {
    console.log('hi')
  })
}
