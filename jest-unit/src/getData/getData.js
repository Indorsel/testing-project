const axios = require('axios')
const mapArrToStrings = require('../mapToArrToStrings/mapToArrToStrings')

const getData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const userIds = response.data.map(user => user.id)
    return mapArrToStrings(userIds)
    // return userIds
  } catch (error) {
    
  }
}

module.exports = getData