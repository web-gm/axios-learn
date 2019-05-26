import contactApi from './contactApi'

const BASE_URL = 'http://localhost:9000/api/'

// 联系人api
const contactService = {
  host: BASE_URL,
  ...contactApi
}

export default {
  contactService
}
