export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    is_connected: boolean;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
