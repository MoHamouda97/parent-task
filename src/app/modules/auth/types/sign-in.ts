export type SignIn = {
    email: string,
    password: string
}

export type SignInResponse = {
    token: string | null
}