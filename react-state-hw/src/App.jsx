import './Student.css';
import {StudentCard} from './components/StudentCard';
import Students from './API/Students'

function App() {

   const allStudents = Students.map((el,i) =>{
     
      return (

      <StudentCard key={`${i}`} StudentName={el}/>

        )
   })
  
  return (
    
    <div className="container">
      
      {allStudents}
      
    </div>
    
    
  )
}

export default App;
