const fs = require('fs')
const layoutData = './data/layout.json'
const groupsData = './data/groups.json'

const request = (dataFile, status) => {
  return function (req, res, next) {
    try {
      fs.readFile(dataFile, 'utf8', (err, jsonData) => {
        if (err) { throw err }
        res.status(status).send(JSON.parse(jsonData))
      })
    } catch (error) {
      console.error(error)
      next(error)
    }
  }
}

const get = (dataFile) => request(dataFile, 200)

module.exports = function (router) {
  // user routes
  router.get('/layout', get(layoutData))
  router.get('/groups', get(groupsData))

  router.get('/*', (req, res) => {
    console.error('404:', req.url)
    res.status(404).send()
  })
}
