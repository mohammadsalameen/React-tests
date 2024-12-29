import './courses.css'
interface IProps{
    list : string[];
}
const CoursesList = (props : IProps) =>{
    return(
        <div>
            <ul>
            {
                    props.list.map((item, index) =><li key={item + index}>{item}</li>)
                }
            </ul>
        </div>
    )
}
export default CoursesList;