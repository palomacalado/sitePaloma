type User = {
    name:string,
    email: string,
    password:string,
    confirmPassword?:string,
    bio: string,
    photo: string,
    showPassword?: boolean,
    showConfirmPassword?: boolean,
}