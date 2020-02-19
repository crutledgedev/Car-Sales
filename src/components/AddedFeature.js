import React from 'react';
import { connect } from 'react-redux';
import { remove } from '../actions';

const AddedFeature = props => {
  console.log("addedFeature", props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=> props.remove(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {remove})(AddedFeature);
