import { Student } from 'src/types/student.type'

class ApiStudent {
  public apiStudents: () => Promise<Student[]>
  private fakeApiStudent: {
    id: string
    name: string
    email: string
    specialized: string
    gioitinh: string
    education_program: boolean
    date: Date
    avatar: string
  }[]
  constructor() {
    this.fakeApiStudent = [
      {
        id: '1',
        name: 'Hoàng Văn Nam',
        email: 'abc@gmail.com',
        specialized: 'congnghethongtin',
        gioitinh: 'male',
        education_program: true,
        date: new Date(1999, 10, 8),
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Facebook_default_male_avatar.gif'
      },
      {
        id: '2',
        name: 'Nguyễn Mai Anh',
        email: 'abcd@gmail.com',
        specialized: 'quantrikinhdoanh',
        gioitinh: 'female',
        education_program: false,
        date: new Date(1997, 8, 8),
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Facebook_default_female_avatar.gif'
      }
    ] as Student[]
    this.apiStudents = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.fakeApiStudent)
        }, 2000)
      })
  }
}

export const apiStudent = new ApiStudent()
