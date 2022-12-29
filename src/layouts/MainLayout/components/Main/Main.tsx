import { useContext } from 'react'
import StudentList from '../StudentList'
import AddAndEditStudent from '../AddAndEditStudent'
import { AppContext } from 'src/contexts/app.context'
import Xs from 'src/responsive/Xs'
import Sm from 'src/responsive/Sm'
import Md from 'src/responsive/Md'
import Lg from 'src/responsive/Lg'
import Xl from 'src/responsive/Xl'
import TwoXl from 'src/responsive/TwoXl'
import useSyncToState from 'src/hooks/useSyncToState'
import useLogicStudent from 'src/hooks/useLogicStudent'
import useSyncToLs from 'src/hooks/useSyncToLs'

export default function Main() {
  const { currentStudent, extendedStudents, education_programCheck } = useContext(AppContext)

  //////////  lưu trên state:
  const { students, setStudents } = useSyncToState()
  const {
    register,
    control,
    getValues,
    errors,
    checkEducation_program,
    handleStartUpdate,
    handleDelete,
    handleChange,
    handleBack,
    onSubmit
  } = useLogicStudent({ students: students, setStudents: setStudents })

  // // //  lưu trên localStorage:
  // const { studentToLs, setStudentToLs } = useSyncToLs()
  // const {
  //   register,
  //   control,
  //   getValues,
  //   errors,
  //   checkEducation_program,
  //   handleStartUpdate,
  //   handleDelete,
  //   handleChange,
  //   handleBack,
  //   onSubmit
  // } = useLogicStudent({ students: studentToLs, setStudents: setStudentToLs })

  const addAndEditStudent = (
    <AddAndEditStudent
      onSubmit={onSubmit}
      control={control}
      getValues={getValues}
      errors={errors}
      register={register}
      currentStudent={currentStudent}
      handleBack={handleBack}
    />
  )

  const listStudent = (
    <StudentList
      extendedStudents={extendedStudents}
      education_programCheck={education_programCheck}
      handleChange={handleChange}
      checkEducation_program={checkEducation_program}
      handleStartUpdate={handleStartUpdate}
      handleDelete={handleDelete}
    />
  )

  return (
    <div>
      <Xs>
        {addAndEditStudent}
        {listStudent}
      </Xs>

      <Sm>
        {addAndEditStudent} {listStudent}
      </Sm>

      <Md>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-4 h-auto'>{addAndEditStudent}</div>
          <div className='col-span-8 '>{listStudent}</div>
        </div>
      </Md>

      <Lg>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-4 h-auto'>{addAndEditStudent}</div>
          <div className='col-span-8 '>{listStudent}</div>
        </div>
      </Lg>

      <Xl>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-4 h-auto'>{addAndEditStudent}</div>
          <div className='col-span-8 '>{listStudent}</div>
        </div>
      </Xl>

      <TwoXl>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-4 h-auto'>{addAndEditStudent}</div>
          <div className='col-span-8 '>{listStudent}</div>
        </div>
      </TwoXl>
    </div>
  )
}
