const ADD_FEATURE = "ADD_FEATURE";
const REMOVE_FEATURE = "REMOVE_FEATURE"



export const add = () => {
    return { type: ADD_FEATURE, payload: addFeature }
}

export const remove = () => {
    return { type: REMOVE_FEATURE, payload: removeFeature }
}