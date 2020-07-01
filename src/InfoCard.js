import React from 'react';


const InfoCard = ({personInfo}) => {
    return (
        <div className="info-card">
          <label>ID:</label> {personInfo.id}
          <br/>
          <label>Name:</label> {personInfo.name}
        </div>
    );
  }

  export default InfoCard;