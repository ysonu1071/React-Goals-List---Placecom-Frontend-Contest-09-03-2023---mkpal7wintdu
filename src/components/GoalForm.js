import React, { useState } from "react";

const GoalForm = ({getGoal}) => {
    const [formData, setFormData] = useState({
      goal: "",
      by: ""
    });
  
    const handleInput = (e) => {
      let name = e.target.name;
      let value = e.target.value;

      setFormData({...formData,[name]:value});
    }

    const handleAdd = (e) => {
      e.preventDefault();
      getGoal(formData);
      setFormData({
        goal: "",
        by: ""
      })
    }
    return (
      <>
        <h1>My Goals</h1>
        <form>
          <input 
            type="text" 
            name='goal' 
            placeholder='Goal...'
            value={formData.goal}
            onChange={handleInput} 
          />
          <input 
            type="text"
            name="by"
            placeholder='By...'
            value={formData.by}
            onChange={handleInput} 
          />
          <button onClick={handleAdd}>Add</button>
        </form>
      </>
    )
}

export default GoalForm;