import CoursesList from '../Courses/courses.component';
import './student.css'
interface IProps{
    name : string;
    age : number;
    isGraduated : boolean;
    coursesList : string[];
}
const Student = (props : IProps)=>{
    return(
        <div className='std-wrapper'>
            <b>Student :</b>{props.name.toUpperCase()}
            <br />
            <b>Age : </b>{props.age}
            <br />
            <b>Is Graduated : </b>{props.isGraduated ? "Yes" : "No"}
            <CoursesList list ={props.coursesList}/>
        </div>
    )
}
export default Student