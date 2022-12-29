/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseSyntheticEvent } from 'react'
import {
  Controller,
  type FieldErrorsImpl,
  type Control,
  type UseFormGetValues,
  type UseFormRegister
} from 'react-hook-form'
import Typed from 'react-typed'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import classNames from 'classnames'
import { GioiTinh, Student } from 'src/types/student.type'

export default function AddAndEditStudent({
  onSubmit,
  control,
  getValues,
  errors,
  register,
  currentStudent,
  handleBack
}: {
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
  control: Control<Student, any>
  getValues: UseFormGetValues<Student>
  errors: Partial<
    FieldErrorsImpl<{
      id: string
      name: string
      email: string
      avatar: string
      specialized: string
      gioitinh: string
      education_program: boolean
      date: Date
    }>
  >
  register: UseFormRegister<Student>
  currentStudent: Student | null
  handleBack: () => void
}) {
  return (
    <>
      <form noValidate onSubmit={onSubmit} className='mb-40 px-2'>
        {currentStudent === null && (
          <h2 className='mb-2 h-10 text-center text-4xl font-extrabold dark:text-white'>
            <Typed strings={['Add']} typeSpeed={400} loop showCursor={false} />
          </h2>
        )}
        {currentStudent !== null && (
          <h2 className='mb-2 h-10 text-center text-4xl font-extrabold dark:text-white'>
            <Typed strings={['Edit']} typeSpeed={400} loop showCursor={false} />
          </h2>
        )}

        {/*  Tên */}
        <div>
          <label htmlFor='title' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
            Tên:
          </label>
          <Controller
            name='name'
            control={control}
            render={({ field }) => {
              return (
                <input
                  type='text'
                  name='name'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
                  placeholder='Nhập tên'
                  onChange={field.onChange}
                  value={getValues('name')}
                />
              )
            }}
          />
          <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.name?.message}</div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor='title' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
            Email:
          </label>
          <Controller
            name='email'
            control={control}
            render={({ field }) => {
              return (
                <input
                  type='text'
                  name='email'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
                  placeholder='Nhập Email'
                  onChange={field.onChange}
                  value={getValues('email')}
                />
              )
            }}
          />
          <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.email?.message}</div>
        </div>

        {/* Avatar */}
        <div>
          <label htmlFor='title' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
            Avatar:
          </label>
          <Controller
            name='avatar'
            control={control}
            render={({ field }) => {
              return (
                <div className='flex items-center justify-center'>
                  <img src={field.value} alt='' className=' mr-2 h-10 w-10 rounded-full' />
                  <input
                    type='text'
                    name='avatar'
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
                    placeholder='Nhập URL'
                    onChange={field.onChange}
                    value={getValues('avatar')}
                  />
                </div>
              )
            }}
          />
          <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.avatar?.message}</div>
        </div>

        {/* Công Nghệ Thông Tin - Quản Trị Kinh Doanh */}
        <div>
          <label htmlFor='title' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
            Chuyên ngành:
          </label>
          <div className='flex items-center'>
            <input
              id='congnghethongtin'
              value='congnghethongtin'
              type='radio'
              {...register('specialized')}
              className='h-4 w-4 focus:ring-2 focus:ring-blue-500'
            />
            <label htmlFor='congnghethongtin' className='ml-2 text-sm font-medium text-gray-900'>
              Công Nghệ Thông Tin
            </label>
          </div>

          <div className='flex items-center'>
            <input
              id='quantrikinhdoanh'
              value='quantrikinhdoanh'
              type='radio'
              className='h-4 w-4 focus:ring-2 focus:ring-blue-500'
              {...register('specialized')}
            />
            <label htmlFor='quantrikinhdoanh' className='ml-2 text-sm font-medium text-gray-900'>
              Quản Trị Kinh Doanh
            </label>
          </div>
          <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.specialized?.message}</div>
        </div>

        {/* Giới tính */}
        <div className='mb-2 '>
          <label htmlFor='title' className=' mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
            Giới tính
          </label>
          <Controller
            name='gioitinh'
            control={control}
            render={({ field }) => {
              return (
                <>
                  <select
                    name='gioitinh'
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                    onChange={field.onChange}
                    value={getValues('gioitinh')}
                  >
                    <option value='' disabled>
                      Giới Tính
                    </option>
                    <option value={GioiTinh.male}>Nam</option>
                    <option value={GioiTinh.female}>Nữ</option>
                    <option value={GioiTinh.other}>Không xác định</option>
                  </select>
                </>
              )
            }}
          />
          <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.gioitinh?.message}</div>
        </div>

        {/* Hoàn thành / chưa hoàn thành */}
        <div>
          <label htmlFor='title' className=' mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
            Xác nhận hoàn thành chương trình đào tạo
          </label>
          <div className='flex items-center'>
            <Controller
              name='education_program'
              control={control}
              render={({ field }) => {
                // console.log(field)
                const isActive = field.value
                return (
                  <>
                    <input
                      id='education_program'
                      type='checkbox'
                      className='h-4 w-4 focus:ring-2 focus:ring-blue-500'
                      onChange={field.onChange}
                      checked={getValues('education_program')}
                    />
                    <label
                      htmlFor='education_program'
                      className={classNames(
                        'ml-2 text-sm font-medium',
                        {
                          ' text-red-600': isActive
                        },
                        { ' text-gray-900': !isActive }
                      )}
                    >
                      {isActive && <span>Hoàn thành chương trình đào tạo</span>}
                      {!isActive && <span>Chưa hoàn thành chương trình đào tạo</span>}
                    </label>
                  </>
                )
              }}
            />
          </div>
        </div>

        {/* datetime */}
        <div className='mt-3 mb-6 '>
          <label htmlFor='publishDate' className=' mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
            Publish Date...
          </label>
          <Controller
            name='date'
            control={control}
            render={({ field: { value, ...props } }) => {
              return (
                <ReactDatePicker
                  {...props}
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
                  placeholderText='Select date'
                  selected={value}
                />
              )
            }}
          />
        </div>

        {/* Sửa - Trở về - Thêm */}
        <div>
          {currentStudent && (
            <>
              <div className='flex'>
                <button
                  type='submit'
                  className='mr-1 block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Sửa
                </button>

                <button
                  onClick={handleBack}
                  type='button'
                  className='mr-1 block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Trở về
                </button>
              </div>
            </>
          )}

          {!currentStudent && (
            <>
              <button
                type='submit'
                className='mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Thêm
              </button>
            </>
          )}
        </div>
      </form>
    </>
  )
}
