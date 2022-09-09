import StreetsBackend from '../backend/StreetsBackend'

export const getStreets = () => {
    return StreetsBackend.getStreets()
}

export const deleteStreet = (id) => {
    return StreetsBackend.deleteStreetById(id)
}

export const updateStreet = (id, payload) => {
    return StreetsBackend.updateStreetList(id, payload)
}

export const createStreet = (id, payload) => {
    return StreetsBackend.createCard(id, payload)
}

export default {
    createStreet,
    deleteStreet,
    getStreets,
    updateStreet
}
