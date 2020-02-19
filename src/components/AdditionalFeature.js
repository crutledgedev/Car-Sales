import React from 'react';
import {add} from './../actions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  console.log(props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.add(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


//onClick => add (add is the action creator that we import from actions, action creator creates action) => reducer (changes state) => change UI
//props.feature is the whole object containing car information that we're trying to add or remove


//connect takes 3 things 1) function 2) object 3) components


export default connect(null, {add})(AdditionalFeature);
