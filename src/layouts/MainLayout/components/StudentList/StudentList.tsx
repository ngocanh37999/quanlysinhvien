import { ChangeEvent, Fragment } from 'react'
import classNames from 'classnames'
import { ExtendedStudent, Student } from 'src/types/student.type'
import ReactTyped from 'react-typed'

export default function StudentList({
  extendedStudents,
  education_programCheck,
  handleChange,
  checkEducation_program,
  handleStartUpdate,
  handleDelete
}: {
  extendedStudents: ExtendedStudent[]
  education_programCheck: boolean
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  checkEducation_program: ExtendedStudent[]
  handleStartUpdate: ({ id, name, email, specialized, gioitinh, education_program, date }: Student) => () => void
  handleDelete: (id: string, index: number) => () => void
}) {
  return (
    <>
      <div className='flex flex-col px-2'>
        <h2 className='mb-2 h-10 text-center text-4xl font-extrabold dark:text-white'>
          <ReactTyped strings={['Thông tin sinh viên']} typeSpeed={400} loop showCursor={false} />
        </h2>
        <div className='-m-1.5 overflow-x-auto'>
          <div className='inline-block min-w-full p-1.5 align-middle'>
            <div className='divide-y divide-gray-200 rounded-lg border dark:divide-gray-700 dark:border-gray-700'>
              <div className='flex py-3 px-4'>
                <div className='flex items-center px-6'>
                  <input
                    id='education_programCheck'
                    type='checkbox'
                    name='education_programCheck'
                    checked={education_programCheck}
                    onChange={handleChange}
                    className='h-4 w-4 focus:ring-2 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='education_programCheck'
                    id='education_programCheck'
                    className={classNames(
                      'ml-2 text-sm font-medium',
                      {
                        ' text-red-600': education_programCheck
                      },
                      { ' text-gray-900': !education_programCheck }
                    )}
                  >
                    <span>
                      {checkEducation_program.length} sinh viên {education_programCheck && 'hoàn thành'}{' '}
                      {!education_programCheck && 'chưa hoàn thành'} chương trình đào tạo
                    </span>
                  </label>
                </div>
              </div>

              <div className='overflow-scroll-x max-h-[28rem]'>
                <table className=' divide-y divide-gray-200 dark:divide-gray-700'>
                  <thead className='bg-gray-50 dark:bg-gray-700'>
                    <tr>
                      <th scope='col' className=' px-2 py-3 text-center text-xs font-medium uppercase text-gray-500'>
                        STT
                      </th>
                      <th scope='col' className='px-6 py-3 text-center text-xs font-medium uppercase text-gray-500'>
                        Avatar / Tên
                      </th>
                      <th scope='col' className='px-6 py-3 text-center text-xs font-medium uppercase text-gray-500'>
                        Email
                      </th>
                      <th scope='col' className='px-6 py-3 text-center text-xs font-medium uppercase text-gray-500'>
                        Ngày Sinh
                      </th>
                      <th scope='col' className='px-2 py-3 text-center text-xs font-medium uppercase text-gray-500'>
                        Giới Tính
                      </th>
                      <th scope='col' className='px-6 py-3 text-center  text-xs font-medium uppercase text-gray-500'>
                        Chuyên ngành
                      </th>
                      <th scope='col' className='px-6 py-3 text-center text-xs font-medium uppercase text-gray-500'>
                        Xác nhận
                      </th>
                      <th scope='col' className='px-6 py-3 text-center text-xs font-medium uppercase text-gray-500'>
                        Thao tác
                      </th>
                    </tr>
                  </thead>

                  <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                    {extendedStudents.length > 0 && (
                      <>
                        {extendedStudents.map((student, index) => {
                          if (education_programCheck && !student.education_program) {
                            return
                          }
                          return (
                            <Fragment key={student.id}>
                              <tr>
                                <td className='py-3 pl-4'>{index + 1}</td>
                                <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200'>
                                  <div className='flex items-center justify-center'>
                                    <img src={student.avatar} alt={student.name} className=' h-10 w-10 rounded-full' />
                                    <span className='px-1'>{student.name}</span>
                                  </div>
                                </td>
                                <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200'>
                                  {student.email}
                                </td>
                                <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200'>
                                  {student.date.getUTCDate() +
                                    '/' +
                                    student.date.getUTCMonth() +
                                    '/' +
                                    student.date.getUTCFullYear()}
                                </td>

                                <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200'>
                                  {student.gioitinh === 'female' && 'Nữ'}
                                  {student.gioitinh === 'male' && 'Nam'}
                                </td>

                                <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200 '>
                                  {student.specialized === 'congnghethongtin' && 'Công Nghệ Thông Tin'}
                                  {student.specialized === 'quantrikinhdoanh' && 'Quản Trị Kinh Doanh'}
                                </td>

                                <td className='whitespace-nowrap px-6 py-4 text-center text-sm text-gray-800 dark:text-gray-200'>
                                  {Boolean(student.education_program) && 'Hoàn thành'}
                                  {Boolean(!student.education_program) && 'Chưa hoàn thành'}
                                </td>

                                <td className='flex whitespace-nowrap px-6 py-4 text-right text-sm font-medium'>
                                  <button
                                    onClick={handleStartUpdate(student)}
                                    type='button'
                                    className='mr-1 block  bg-blue-700 px-1.5 py-1.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                  >
                                    Sửa
                                  </button>
                                  <button
                                    onClick={handleDelete(student.id, index)}
                                    type='button'
                                    className='block bg-blue-700 px-1.5 py-1.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                  >
                                    Xóa
                                  </button>
                                </td>
                              </tr>
                            </Fragment>
                          )
                        })}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-3'>Có tất cả {extendedStudents.length} sinh viên</div>
      </div>
    </>
  )
}
