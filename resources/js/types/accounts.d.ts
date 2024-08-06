interface Addresses {
    id?: number,
    name?: string
}

export interface IAccounts {
    code?: string,
    name?: string,
    addresses?: Addresses[],
    city?: string,
    state?: string,
    zip?: string,
    phone?: string,
    contact?: string
}