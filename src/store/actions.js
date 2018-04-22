export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

export function LOGIN(data) {
    return {
        type: USER_LOGIN,
        data
    }
}
export function LOGOUT() {
    return {
        type: USER_LOGOUT
    }
}


// export const STORE_UPDATE = 'STORE_UPDATE'
export const STORE_ADD = 'STORE_ADD'
export const STORE_RM = 'STORE_RM'

// export function update(item) {
//     return {
//         type: STORE_UPDATE,
//         data:item
//     }
// }

export function ADD(item) {
    return {
        type: STORE_ADD,
        data:item
    }
}

export function RM(item) {
    return {
        type: STORE_RM,
        data: item
    }
}