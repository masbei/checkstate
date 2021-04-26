import React from 'react'
import { Card } from 'react-bootstrap';

const profile = (props) => {
   
        const handelName = (props) => {
              alert(`Hello I am ${props.fullName}`);
        };
    
    return (
        <div>
       <div className="card" >
  <img src={props.photo} className="card-img-top" alt="mas"/>
  <div classNameName="card-body">
    <p classNameName="card-text">Profession:<span>{props.profession}</span></p>
  </div>
  <div classNameName="card-body">
    <p classNameName="card-text">Fullname:<span>{props.fullName}</span></p>
  </div>
  <div classNameName="card-body">
    <p classNameName="card-text">Age:<span>{props.Age}</span></p>
  </div>
</div>

        </div>
    )
};

export default profile
