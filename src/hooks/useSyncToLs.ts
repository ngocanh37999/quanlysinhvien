import { useEffect } from 'react'
import { Student } from 'src/types/student.type'
import { useLocalStorage } from './useLocalStorage'
import { apiStudent } from 'src/apis/student.api'

export default function useSyncToLs() {
  const [studentToLs, setStudentToLs] = useLocalStorage<Student[]>('students', [])
  useEffect(() => {
    apiStudent.apiStudents().then((res) => setStudentToLs(res))
  }, [setStudentToLs])

  return {
    studentToLs,
    setStudentToLs
  }
}
