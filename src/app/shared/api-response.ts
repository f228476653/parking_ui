export class ApiResponse<T> {
    constructor(
        public data: T = null
        , public message = ''
        , public has_error = false
        , public error = false
    ) {}
}

