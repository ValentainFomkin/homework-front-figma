import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            return state.sort((a, b) => {
                if (action.payload === 'up') {
                    return a.name < b.name ? -1 : 1
                } else {
                    return a.name > b.name ? -1 : 1
                }
            }) // need to fix
        }
        case 'check': {
            const filteredObj = state.filter(e => e.age >= 18)
            return filteredObj.sort((a, b) => a.name < b.name ? -1 : 1) // need to fix
        }
        default:
            return state
    }
}
