/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-named-as-default */
import { type Dispatch, useContext, useEffect, type SetStateAction } from 'react'
import * as yup from 'yup'
import keyBy from 'lodash/keyBy'
import produce from 'immer'
import { Student } from 'src/types/student.type'
import { useForm, type DefaultValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AppContext } from 'src/contexts/app.context'

const defaultValues: DefaultValues<Student> = {
  id: '',
  name: '',
  email: '',
  avatar: '',
  specialized: '',
  gioitinh: '',
  education_program: false,
  date: new Date(1990, 0, 1)
}

const schemaStudent = yup.object().shape({
  name: yup.string().trim().required('Tên là bắt buộc'),
  email: yup.string().trim().required('Email là bắt buộc'),
  avatar: yup.string().trim().required('Avatar là bắt buộc'),
  specialized: yup.string().required('Chuyên ngành là bắt buộc').nullable(),
  gioitinh: yup.string().trim().required('Giới tính là bắt buộc').nullable()
})

export default function useLogicStudent({
  students,
  setStudents
}: {
  students: Student[]
  setStudents: Dispatch<SetStateAction<Student[]>>
}) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors }
  } = useForm<Student>({
    defaultValues,
    resolver: yupResolver(schemaStudent)
  })

  const { currentStudent, extendedStudents, setCurrentStudent, setExtendedStudents, setEducation_programCheck } =
    useContext(AppContext)

  // Chức năng Add trong form:
  const addStudent = ({ name, email, specialized, gioitinh, education_program, date, avatar }: Student) => {
    const body = {
      id: new Date().toISOString(),
      name,
      email,
      avatar,
      specialized,
      gioitinh,
      education_program,
      date
    }
    setStudents((prev) => [...prev, body])

    // sau khi thêm clear dữ liệu trong ô input
    setValue('name', '')
    setValue('email', '')
    setValue('avatar', '')
    setValue('specialized', '')
    setValue('gioitinh', '')
    setValue('education_program', false)
    setValue('date', new Date(1990, 0, 1))
  }

  // update
  // currentStudent có dữ liệu
  const handleStartUpdate =
    ({ id, name, email, specialized, gioitinh, education_program, date, avatar }: Student) =>
    () => {
      const student = students.find((student) => student.id === id)
      if (student) {
        setCurrentStudent(student)
      }

      // sau khi bấm updatte thì đổ dữ liệu vào ô input
      setValue('name', name)
      setValue('email', email)
      setValue('avatar', avatar)
      setValue('specialized', specialized)
      setValue('gioitinh', gioitinh)
      setValue('education_program', education_program)
      setValue('date', date)
    }

  const handleBack = () => {
    setCurrentStudent(null)
    // sau khi bấm nút trở về thì clear dữ liệu trong ô input
    setValue('name', '')
    setValue('email', '')
    setValue('avatar', '')
    setValue('specialized', '')
    setValue('gioitinh', '')
    setValue('education_program', false)
    setValue('date', new Date(1990, 0, 1))
  }

  // Chức năng Edit trong form:
  const handleUpdate = ({ name, email, avatar, specialized, gioitinh, education_program, date }: Student) => {
    const _student = students.map((student) => {
      if (student.id === currentStudent?.id) {
        return {
          name,
          email,
          avatar,
          specialized,
          gioitinh,
          education_program,
          date,
          id: student.id
        }
      }
      return student
    })

    // sau khi update thì update vào array của state
    setStudents(_student)

    handleBack()
  }
  // delete
  const handleDelete = (id: string, index: number) => () => {
    // cách 1:
    // const index = students.findIndex((student) => student.id === id)
    // const _students = [...students]
    // _students.splice(index, 1)
    // setStudents(_students)
    // cách 2:
    setStudents(
      produce((draft) => {
        // console.log(draft)
        draft.splice(index, 1)
      })
    )
  }

  // onSubmit
  const onSubmit = handleSubmit((data) => {
    if (currentStudent) {
      handleUpdate(data)
    } else {
      addStudent(data)
    }
  })

  //
  useEffect(() => {
    setExtendedStudents((prev) => {
      const extendedStudentsObject = keyBy(prev, 'id')
      return (
        students?.map((student) => {
          return {
            ...student,
            disabled: false,
            checked: Boolean(extendedStudentsObject[student.id]?.checked)
          }
        }) || []
      )
    })
  }, [students])

  //
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    if (name === 'education_programCheck') {
      setEducation_programCheck(event.target.checked)
    }
  }

  const checkEducation_program = extendedStudents.filter((item) => item.education_program)

  return {
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
  }
}
