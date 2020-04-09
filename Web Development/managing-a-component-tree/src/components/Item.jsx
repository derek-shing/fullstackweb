import React from 'react';

function Item(props){
  const [isDone,setIsDone]=React.useState(false);

  function updateIsDone(){
    console.log(props.index);
    if (isDone){
      setIsDone(false);
    } else {
      setIsDone(true);
    }
  }

  return (
    <li style={{textDecoration: isDone ? "line-through":"none"}} onClick={()=>{props.onCheck(props.position)}}> {props.text} </li>
  );
}

export default Item;
