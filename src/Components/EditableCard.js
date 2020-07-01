import React from 'react';


const EditableCard = (props) => {
    const initial = props.person ? props.person.name : "";
    const [name, setName] = React.useState(initial);
   
    // random IDs are safer than sequential
    // https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html
    const randomId = () => 
      Math.round(Math.random()*10000000);
    
    const handleChange = (evt) => setName(evt.target.value);
    const save = (evt) => {
      evt.preventDefault();
      if (props.person) {
        props.save({...props.person, name})
      } else {
        props.save({
          id: randomId(),
          name
        });      
      }
    }
    
    return (
      <form className="edit-box" onSubmit={save}>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleChange}/>
        <button type="submit">Save</button>
      </form>
    );
  }

  export default EditableCard 