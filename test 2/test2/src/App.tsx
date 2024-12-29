import './App.css'
import Football from './Component/Football/Football.component'
import Garage from './Component/Garage/Garage.component'
function App() {
  return (
    <>
    <h2>I have a Four cars </h2>
      <Garage/>
      <Football isGoal = {false}/>
    </>
  )
}

export default App
