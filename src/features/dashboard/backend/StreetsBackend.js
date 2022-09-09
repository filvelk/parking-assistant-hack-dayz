import BaseBackend from "../../../backend/BaseBackend";

class StreetsBackend extends BaseBackend {
  constructor() {
    super();
  }

  getStreets() {
    return this.get("/parking-locations");
  }

  createStreet(payload) {
    return this.post("/parking-locations", payload);
  }

  updateStreet(id, payload) {
    return this.put(`/parking-locations/${id}`, payload);
  }

  deleteStreet(id) {
    return this.delete(`/parking-locations/${id}`);
  }
}

export default new StreetsBackend();
