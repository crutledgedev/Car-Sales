export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";



export const add = (delivery) => {
    return { type: ADD_FEATURE, payload: delivery }
}

export const remove = (delivery) => {
    return { type: REMOVE_FEATURE, payload: delivery }
}