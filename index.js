const weather = require('yahoo-weather')
const url = require('url')

module.exports = async request => {
  const query = url.parse(request.url, true).query

  if (!query.text) {
    return 'Cityを指定してください！'
  }

  const weatherInfo = await weather(query.text.toLowerCase())
  const temperature = weatherInfo.item.condition.temp

  return `現在 ${query.text} の温度は、${temperature}℃  です!`
}
