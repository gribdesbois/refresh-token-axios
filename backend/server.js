const app = require('express')()

app.get('/access', (req, res) => {
  if (req.headers.access_token !== 'good') {
    res.status(401)
    res.json({
      status: false,
    })
  } else {
    res.status(200)
    res.json({
      status: true,
    })
  }
})

app.get('/refresh', (req, res) => {
  res.json({
    access_token: 'good',
    refresh_token: 'refresh',
  })
})

app.listen(3535, () => {
  console.log('Server is running')
})
