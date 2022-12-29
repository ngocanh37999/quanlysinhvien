import { createContext, useState } from 'react'
import { ExtendedStudent, Student } from 'src/types/student.type'

interface AppContextInterface {
  currentStudent: Student | null
  setCurrentStudent: React.Dispatch<React.SetStateAction<Student | null>>
  education_programCheck: boolean
  setEducation_programCheck: React.Dispatch<React.SetStateAction<boolean>>
  extendedStudents: ExtendedStudent[]
  setExtendedStudents: React.Dispatch<React.SetStateAction<ExtendedStudent[]>>
}

export const getInitialAppContext: () => AppContextInterface = () => ({
  currentStudent: null,
  setCurrentStudent: () => null,
  education_programCheck: false,
  setEducation_programCheck: () => null,
  extendedStudents: [],
  setExtendedStudents: () => null
})
const initialAppContext = getInitialAppContext()
export const AppContext = createContext<AppContextInterface>(initialAppContext)
export const AppProvider = ({
  children,
  defaultValue = initialAppContext
}: {
  children: React.ReactNode
  defaultValue?: AppContextInterface
}) => {
  const [currentStudent, setCurrentStudent] = useState<Student | null>(defaultValue.currentStudent)
  const [education_programCheck, setEducation_programCheck] = useState<boolean>(defaultValue.education_programCheck)
  const [extendedStudents, setExtendedStudents] = useState<ExtendedStudent[]>(defaultValue.extendedStudents)

  return (
    <AppContext.Provider
      value={{
        currentStudent,
        setCurrentStudent,
        education_programCheck,
        setEducation_programCheck,
        extendedStudents,
        setExtendedStudents
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
