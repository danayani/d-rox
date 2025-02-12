/*
There are two kinds of approaches for enforcing strings value.
Literals const string vs String Enums.
It’s the simplest way to use string literals meaning:
”ios” | “android” | “web
But I am personally prefer to use Enums for readability in the code usage itself.
 */
export enum OperatingSystem {
    ios,
    android,
    web
}

export interface Game {
    id: number
    title: string
    img_url: string
    description: string
    os: OperatingSystem
    badges: string[]
    payout: number
    bonusPayout?: number
}

export interface GamesResponse {
    games: Game[]
    hasMore: boolean
}