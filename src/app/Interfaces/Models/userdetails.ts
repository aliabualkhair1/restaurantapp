export interface _Userdetails {
  userId: string,
  firstName:string,
  lastName:string
  userName: string,
  email:string,
  nationalId:string
  phoneNumber:string
  roles:string[]
}
export interface Updatedetails {
  firstName:string,
  lastName:string,
  phoneNumber:string,
  email: string
}
export interface RestoreUser {
  nationalId: string,
  username: string,
  email:string,
  password: string
}
export interface ResetPass {
   CurrentPassword :string
   NewPassword :string
   ConfirmPassword :string
}
export interface ResetPass {
   CurrentPassword :string
   NewPassword :string
   ConfirmPassword :string
}
export interface checkuser{
nationalId:string
username:string
email:string
}
export interface ForgetPassword {
username:string
password : string
confirmPassword:string
}