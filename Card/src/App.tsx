
import { useState } from 'react';
import './App.css'
import Card from './Components/Card/Card.component'

const boys  = [{
  name : "Mohammad Salameen",
  Age : 22,
  Address : "Hebron",
  Phone : "0568541413"
},
{
  name : "Odai Salameen",
  Age : 24,
  Address : "Hebron",
  Phone : "0568541412"
},
{
  name : "Anas Salameen",
  Age : 26,
  Address : "Hebron",
  Phone : "0568541412"
},
{
  name : "Hussam Salameen",
  Age : 19,
  Address : "Hebron",
  Phone : "0568541412"
}
];
const girls = [{
  name : "Renad Salameen",
  Age : 12,
  Address : "Hebron",
  Phone : "null"
},
{
name : "Lama Salameen",
Age : 10,
Address : "Hebron",
Phone : "null"}]
function App() {
  const [state, setState] = useState(boys);
  const [girlState, setGirlState] = useState(girls);
  const handleDelete  = ( e: React.MouseEvent<SVGSVGElement, MouseEvent>, clickIndex : number) => {
    const deleteOperation = state.filter((e, i) => i !== clickIndex);
    console.log(deleteOperation);
    console.log(clickIndex);
    setState(deleteOperation);
  }
  return (
    <>
    <h1>Boys List : </h1>
      <Card namesList= {state} type = "men" onDelete ={  handleDelete} />
      <h1>Girls List :</h1>
      <Card namesList={girlState} type = "girl" onDelete = {handleDelete} />
    </>
  )
}

export default App
