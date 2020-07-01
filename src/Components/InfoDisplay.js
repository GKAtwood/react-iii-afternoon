import React from 'react';
import EditableCard  from './EditableCard'
import InfoCard from '../InfoCard'
import data from '../data';



const InfoDisplay = (props) => {

   
    // state
    const [isAddingNew, setIsAddingNew] = React.useState(false);
    const [isEditable, setIsEditable] = React.useState(false);
    const [data, setData] = React.useState(data || []);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [currentInfo, setCurrentInfo] = React.useState(data[currentIndex]);
    
    // handlers
    const increment = () => 
      setCurrentIndex((currentIndex + 1) % data.length);
    const decrement = () => {
      let nextIndex = currentIndex - 1;
      if (nextIndex < 0) {
        nextIndex = data.length - 1;
      }
      setCurrentIndex(nextIndex);
    }
    const deleteInfo = () => {
      data.splice(currentIndex, 1);
      increment();
      setData(data);
    }
    const toggleEditMode = () => setIsEditable(!isEditable);
    const toggleIsAddingNew = () => setIsAddingNew(!isAddingNew);
    const saveEdit = (next) => {
      data.splice(currentIndex, 1, next);
      setData(data);
      setCurrentInfo(data[currentIndex]);
      toggleEditMode();
    }
    const saveNew = (newInfo) => {
      data.push(newInfo);
      setData(data);
      toggleIsAddingNew();
      setCurrentIndex(data.length-1);
    }
    
    // effects
    React.useEffect(() => {
      // update personInfo to current index in case it changed
      setCurrentInfo(data[currentIndex])
    }, [currentIndex, data]);
    
    const info = isEditable
      ? <EditableCard  person={currentInfo} save={saveEdit}/>
      : isAddingNew
        ? <EditableCard  save={saveNew}/>
        : <InfoCard personInfo={currentInfo}/>
    
    return (
      <div className="display-wrapper">
        <div className="info-display">
          <div className="indexer">{currentIndex+1}/{data.length}</div>
          { info }
        </div>
        <div className="controls">
          <button onClick={decrement}>{"<="}</button>
          <div className="controls spaced">
            <button onClick={toggleIsAddingNew}>
              { isAddingNew ? 'Cancel': 'New' }
            </button>
            <button onClick={toggleEditMode}>
              { isEditable ? 'Cancel' : 'Edit' }
            </button>
            <button onClick={deleteInfo}>Delete</button>
          </div>
          <button onClick={increment}>{"=>"}</button>
        </div>
      </div>
    );
  }

  export default InfoDisplay;
