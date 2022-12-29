import { useEffect, useState } from 'react'
import { apiStudent } from 'src/apis/student.api'
import { Student } from 'src/types/student.type'

export default function useSyncToState() {
  const [students, setStudents] = useState<Student[]>([])
  useEffect(() => {
    apiStudent.apiStudents().then((res) => setStudents(res))
  }, [])

  return {
    students,
    setStudents
  }
}
