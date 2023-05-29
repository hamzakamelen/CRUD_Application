import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CourseForm from '../Screens/CourseForm'
import InstituteForm from '../Screens/InstituteForm'
import StudentForm from '../Screens/StudentForm'
import TeacherForm from '../Screens/TeacherForm'
import StudentData from '../Screens/StudentData'
import InstituteData from '../Screens/InstituteData'
import CourseData from '../Screens/CourseData'
import TeacherData from '../Screens/TeacherData'
import Err404 from '../Err404'
function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<StudentData />} />

                {/* ***********Forms*************** */}
                <Route path='CourseForm' element={<CourseForm />} />
                <Route path='InstituteForm' element={<InstituteForm />} />
                <Route path='StudentForm' element={<StudentForm />} />
                <Route path='TeacherForm' element={<TeacherForm />} />
                {/* ************************************** */}

                {/* ************Data***************** */}
                <Route path='InstituteData' element={<InstituteData />} />
                <Route path='CourseData' element={<CourseData />} />
                <Route path='TeacherData' element={<TeacherData />} />
                
                <Route path='StudentData' element={<StudentData />} />
                {/* ************************************** */} 

                {/* ***********Public***************** */}
                <Route path="*" element={<Err404 />} />
                {/* ************************************** */}
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter