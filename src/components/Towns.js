import React from 'react';
import Cities from './Cities';

export default function Towns(props) {
  return <div className="townSpace">{props.town.name}</div>;
}