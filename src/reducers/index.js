import { ADD_FEATURE, REMOVE_FEATURE } from './../actions/index';
//import action tyupe


const initialState = {//self explanatory
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  




export const featureReducer = (state = initialState, action) => {
    switch(action.type){

        //what we want to do here
        //1) REMOVE an object in additionalFeatures because we dont want to be able to add it twice, 
        //2) ADD the object to car.features
        //3) and UPDATE car.price (+)
        case ADD_FEATURE:
            return {
                ...state, //destructure inital state
                car: {
                    ...state.car, //saving name and image
                    price: state.car.price + action.payload.price,//when we click we get action, and this is the ACTION.PAYLOAD
                    features: [...state.car.features, action.payload], //add the whole object to the array
                },
             additionalFeatures: state.additionalFeatures.filter(el => el.id !== action.payload.id)//filters out the matching ID of item added to return everything remaining   
            };
        
        
        //what we want to do here
        //1) ADD an object back in additionalFeatures
        //2) REMOVE the object from car.features
        //3) UPDATE car.price (-)
        
        case REMOVE_FEATURE:
          return{
            ...state,
            car: {
              ...state.car,
              price: state.car.price - action.payload.price,
              features: state.car.features.filter(el => el.id !== action.payload.id)
            },
              additionalFeatures: [...state.additionalFeatures, action.payload]
          }    



        //default is last, always last to cover all use cases and return state
        default: 
            return state;
    }

 
}