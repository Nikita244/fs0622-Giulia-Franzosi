export interface AuthResponse {
    accessToken: string,
    user: {
        email: string,
        nome: string,
        id: number
    }
}

export interface RegisterRequest {
    nome:string,
    email:string,
    password:string
}

export interface LoginRequest {
    email:string,
    password:string
}



export interface Movie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: [],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    trailer_path:string
}

export interface User{
    nome:string,
    email:string,

}

export interface favMovie {
    movieId: number,
    userId: number,
    id?: number
}
