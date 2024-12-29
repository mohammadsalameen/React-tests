import MadeGoal from "../MadeGoal/MadeGoal.component";
import MissedGoal from "../MissedGoal/MissedGoal.component";

interface IProps{
  isGoal : boolean;
}
const Football = (props : IProps)=>{
     const handleOnClick = (a : string, b : React.MouseEvent<HTMLButtonElement, MouseEvent> )=>{
         alert(b.type);
        console.log(a);
    }
    return (
        <div>
            {
                props.isGoal ? <MadeGoal/> : <MissedGoal/>
            }   
            <button onClick={(e) => handleOnClick("Great Gool", e)}>Click me!</button>
        </div>
    )
}
export default Football;