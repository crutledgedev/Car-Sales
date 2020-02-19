export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
// we build index.js in actions and reducers to make it easy when importing these in other components
//for example, these two above can be imported as 
// import {ADD_FEATURE, REMOVE_FEATURE} from './actions




//////////////////////////////////

//action creator : create action
//just a plain object but it has to have a value of type, otherwise it's not an action

export const add = (delivery) => {
    return { type: ADD_FEATURE, payload: delivery }
}

//this 'delivery', in this assignment, it is the FEATURE that we're trying to add in Car Sales, it is an object containing features information of the car

export const remove = (delivery) => {
    return { type: REMOVE_FEATURE, payload: delivery }
}