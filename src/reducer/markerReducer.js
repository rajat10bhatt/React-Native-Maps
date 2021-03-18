import { actionType } from '../constants'
const RESTAURANTS = [
    {
        key: 'Cafe Sydney',
        title: 'Cafe Sydney',
        description: 'Customs House, 31 Alfred St, Sydney NSW 2000',
        latLong: {
            latitude: -33.861924,
            longitude: 151.210891,
        },
    },
    {
        key: 'Four Frogs Creperie',
        title: 'Four Frogs Creperie',
        description: '1 Macquarie Pl, Sydney NSW 2000',
        latLong: {
            latitude: -33.861755,
            longitude: 151.209941,
        },
    },
    {
        key: 'Tapavino',
        title: 'Tapavino',
        description: '6 Bulletin Pl, Sydney NSW 2000',
        latLong: {
            latitude: -33.862512,
            longitude: 151.209490,
        },
    },
];

export default markerReducer = (state = RESTAURANTS, action) => {
    if(action.type === actionType.add) {
        return[...state, action.payload]
    }
    return state
}