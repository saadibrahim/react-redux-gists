import {create} from 'apisauce'

const api = create({
  baseURL: 'https://api.github.com'
})

export default api