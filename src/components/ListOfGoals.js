import React from "react";

const ListOfGoals = ({allGoals}) => {
    return (
      <ul>
          {allGoals.map((obj)=> <li><p>My goal is to {obj.goal}, by {obj.by}.</p></li>)}
      </ul>
    );
}

export default ListOfGoals;