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