export type AllUsers = UserPages & {
    data: User[]
}

export type UserPages = {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
}

export type User = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export type UserDTO = {
    name: string,
    job: string
}

export type UserResponse = {
    name: string,
    job: string,
    id: number,
    createdAt: Date
}