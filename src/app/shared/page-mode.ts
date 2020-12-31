
export enum PageMode {
    add = 1 ,
    edit = 2 ,
    view = 3 ,
    device = 4 ,
    fee = 5
}
export enum KeystorePageMode {
    add = 1,
    edit = 2,
    request = 3
}

export class PageData<T, U> {
    constructor(public data: T, public mode: U) {}
}
