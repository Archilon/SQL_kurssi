import axios from 'axios'
const baseUrl = 'https://sql-reminder.herokuapp.com/api/reminders'

const getAll = () => {
  const request = axios.get(baseUrl).catch(error => console.log(error.request));
  return request.then(response => { return response.data })
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject).catch(error => console.log(error.request));
  return request.then(response => { return response.data })
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject).catch(error => console.log(error.request));
  return request.then(response => { return response.data })
}

export default { getAll, create, update }
