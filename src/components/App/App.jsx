import {useState} from 'react';
import axios from 'axios'



function App () {
  

  const toDoData = [
    {name :'Groceries', completed: 'false'},
    {name : 'Homework', completed: 'false'},
    {name: 'Chores', completed: 'true'}
  ];

  const [toDolist, setToDoList] = useState(toDoData)

  return (
    <div>
      <h1>TO DO APP</h1>
      <button >Delete</button>
      <button>Complete</button>
    </div>
    
  );


  const fetch = () => {
    axios.get('/api/creature')
    .then((response) =>{
      setCreatureList(response.data)
      console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    })
  }
  
  
}


export default App
