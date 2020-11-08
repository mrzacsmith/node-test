// parseData is a function that takes two parameters
// (data) which is the JSON passed to endpoint
// (url) which is req.originalURL for logic

const parseData = (data, url) => {
  // split the data, then assign to an obj
  let data1 = data.split('0')
  data1 = Object.assign({}, data1)

  // remove the empty key:value pairs
  Object.keys(data1).forEach(
    (k) => !data1[k] && data1[k] !== undefined && delete data1[k]
  )

  // use url =>req.originalUrl to determine return
  if (url == '/api/v1/parse') {
    let list = {
      firstName: data1['0'] + '0000',
      lastName: data1['4'] + '000',
      clientId: data1['7'],
    }
    return list
  } else if (url == '/api/v2/parse') {
    let list = {
      firstName: data1['0'],
      lastName: data1['4'],
      clientId: data1['7'],
    }
    return list
  }
}

module.exports = parseData
