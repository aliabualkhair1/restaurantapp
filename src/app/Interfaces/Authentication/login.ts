export interface Login {
    Email:string,
    Password:string,
}
export interface LoginResponse {
    token:string,
    refreshtoken:string,
    expire:string
}

