
import './App.css'
import Student from './components/student/student.component'

interface IStudent{
  id : string
  name : string;
  age : number;
  isGraduated : boolean;
  coursesList : string[];
}
const coursesList = ["html", "css", "js"];
const studentsList : IStudent[]= [
  {
    id : "2401",
    name: 'Mohammad Salameen',
    age: 22,
    isGraduated: false,
    coursesList: coursesList,
  },
  {
    id : "2402",
    name: 'anas Salameen',
    age: 26,
    isGraduated: true,
    coursesList: ["English", "Network"],
  },
  {
    id : "2403",
    name: 'odai Salameen',
    age: 24,
    isGraduated: true,
    coursesList: ["english", "accounting"],
  },
  {
    id : "2404",
    name: 'hussam Salameen',
    age: 19,
    isGraduated: false,
    coursesList: ["Arabic"],
  },
];

function App() {
  return (
    <>
      <h1>React</h1>
      {
        studentsList.map((student) =>(
          <div>
          <Student
          key = {student.id} 
          name = {student.name}
          age = {student.age} 
          isGraduated = {student.isGraduated}
          coursesList={student.coursesList}/>
          </div>
    
        )) 
      }
    </>
  )
}

export default App
