import React, { useState } from 'react'
import '../styles/App.css';
import GoalForm from './GoalForm';
import ListOfGoals from './ListOfGoals';

const App = () => {

  const [allGoals, setAllGoals] = useState([]);

  const getGoal = (obj) => {
    setAllGoals([...allGoals, obj]);
  }

  return (
    <div id="main">
      <GoalForm getGoal={getGoal}/>
      <ListOfGoals allGoals={allGoals}/>
    </div>
  )
  
}


export default App;
