import services from './api.config'
import { Toast } from 'vant'
import axios from 'axios'
const https = require('https')

const Agent = new https.Agent({
  rejectUnauthorized: false
})
let itAxios = axios.create({
  timeout: 5000,
  withCredentials: false,
  httpsAgent: Agent,
})

const Http = {}

for (let i in services) {
  let service = services[i]
  let serviceHost = service['host']
  Http[i] = {}
  for (let ind in service) {
    if (ind === 'host') {
      continue
    }
    let api = service[ind]
    Http[i][ind] = async function(
      params,
      isFormData = false,
      headers = {}
    ) {
      let apiUrl = api.url
      let newParams = {}
      if (params && !isFormData) {
        newParams = params
        console.log(newParams)
      } else {
        newParams = new FormData()
        for (var key in params) {
          newParams.append(key, params[key])
        }
      }
      let data = newParams
      let response = {}
      let config = {
        headers: {...headers, }
      }
      if (api.method === 'put' || api.method === 'post' || api.method === 'patch') {
        try {
          response = await itAxios[api.method](serviceHost + apiUrl, data, config)
        } catch (e) {
          response = e.response
        }
      }else if (api.method === 'delete') {
        try {
          response = await itAxios[api.method](serviceHost + apiUrl, {...config,data})
        } catch (e) {
          response = e.response
        }
      }else{
        config.params = newParams
        try {
          response = (await itAxios[api.method](serviceHost + apiUrl, config))
        } catch (e) {
          response = e.response
        }
      }
      return response
    }
  }
}

itAxios.interceptors.request.use(config => {
  // 给所有请求添加自定义header
  Toast.loading({
    mask: false,
    duration: 0,
    forbidClick: true,
    message: '加载中...'
  })
  return config
})

export default Http
