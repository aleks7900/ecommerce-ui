export interface CurrentUser {

    id: string;

    email: string;

    firstName: string;

    lastName: string;

    roles: string[];

    createdAt: string;
}

export interface UserProfile {

    id: string;

    email: string;

    firstName: string;

    lastName: string;

    avatarUrl: string;

    roles: string[];

    createdAt: string;

    lastLogin: string;

    ordersCount: number;

    totalSpent: number;
}