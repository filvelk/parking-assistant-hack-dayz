import Axios from 'axios'

class BaseBackend {
  constructor() {
    this.axios = Axios.create({
      baseURL: '/'
    })
  }

  delete(url, data, config) {
    return this.axios({
      method: 'DELETE',
      url,
      data,
      ...config
    })
  }

  get(url, params, config) {
    return this.axios({
      method: 'GET',
      url,
      params,
      ...config
    })
  }

  post(url, data, config) {
    return this.axios({
      method: 'POST',
      url,
      data,
      ...config
    })
  }

  put(url, data, config) {
    return this.axios({
      method: 'PUT',
      url,
      data,
      ...config
    })
  }
}

export default BaseBackend
