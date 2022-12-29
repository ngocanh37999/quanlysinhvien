export interface Student {
  id: string
  name: string
  email: string
  avatar: string
  specialized: string
  gioitinh: string
  education_program: boolean
  date: Date
}

export enum GioiTinh {
  female = 'female',
  male = 'male',
  other = 'other'
}

export interface ExtendedStudent extends Student {
  disabled: boolean
  checked: boolean
}
