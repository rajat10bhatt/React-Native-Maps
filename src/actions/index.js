import { actionType } from '../constants'
const addMarkerAction = (marker) => ({
    type: actionType.add,
    payload: marker
})

export { addMarkerAction }