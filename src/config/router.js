import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CourseForm from '../Screens/CourseForm'
import InstituteForm from '../Screens/InstituteForm'
import StudentForm from '../Screens/StudentForm'
import TeacherForm from '../Screens/TeacherForm'
import StudentData from '../Screens/StudentData'
function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='CourseForm' element={<CourseForm />} />
                <Route path='InstituteForm' element={<InstituteForm />} />
                <Route path='StudentForm' element={<StudentForm />} />
                <Route path='StudentData' element={<StudentData />} />
                <Route path='/' element={<StudentForm />} />
                <Route path='TeacherForm' element={<TeacherForm />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter