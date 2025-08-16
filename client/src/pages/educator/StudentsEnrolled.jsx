import { useEffect, useState } from "react"
import { dummyStudentEnrolled } from "../../assets/assets"
import Loading from "../../components/student/Loading"
const StudentsEnrolled = () => {

  const [enrolledStudents, setEnrolledStudents] = useState(null)

  const fetchEnrolledStudentData =()=>{
    setEnrolledStudents(dummyStudentEnrolled)
  }

  useEffect(()=>{
    fetchEnrolledStudentData();
  },[])
  return enrolledStudents ? (
  <div className="min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
    <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
      <table className="table-fixed md:table-auto w-full overflow-hidden">
        <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left"> 
          <tr>
            <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">#</th>
            <th className="px-4 py-3 font-semibold">Student Name d</th>
            <th className="px-4 py-3 font-semibold">Course Title</th>
            <th className="px-4 py-3 font-semibold">Date</th>
          </tr>
        </thead>
        <tbody>
          {enrolledStudents.map((item , index)=>(
            <tr key={index} className="border-b border-gray-500/20">
              <td className="px-4 py-3 font-semibold text-center hidden sm:table-cell">{index+1}</td>
              <td>
                <img src={item.student.imageUrl} alt="Profile" className="w-9 h-9 rounded-full" />
                <span className="truncate">{item.student.name}</span>
                </td>
              <td className="px-4 py-3 truncate">{item.courseTitle}</td>
              <td className="px-4 py-3 truncate">{new Date(item.purchaseDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  ) : <Loading/>
}

export default StudentsEnrolled
