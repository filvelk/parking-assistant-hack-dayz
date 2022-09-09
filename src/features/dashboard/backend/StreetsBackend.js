import BaseBackend from '../../../backend/BaseBackend'

class StreetsBackend extends BaseBackend {
  constructor() {
    super()
  }

  getStreets() {
    return this.get('/streets')
  }

  createStreet(payload) {
    return this.post('/street', payload)
  }

  updateStreetById(id, payload) {
    return this.put(`/street/${id}`, payload)
  }

  deleteStreet(id) {
    return this.delete(`/1/boards/${id}`)
  }
}

export default new StreetsBackend()
