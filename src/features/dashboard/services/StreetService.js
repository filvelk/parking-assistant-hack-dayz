import StreetsBackend from '../backend/StreetsBackend'

export const getStreets = () => {
    return StreetsBackend.getStreets()
}

export const deleteStreet = (id) => {
    return StreetsBackend.deleteStreet(id)
}

export const updateStreet = (id, payload) => {
    return StreetsBackend.updateStreet(id, payload)
}

export const createStreet = (payload) => {
    return StreetsBackend.createStreet(payload)
}

export default {
    createStreet,
    deleteStreet,
    getStreets,
    updateStreet
}
