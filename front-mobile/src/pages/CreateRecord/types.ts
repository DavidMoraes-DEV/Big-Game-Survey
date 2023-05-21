export type GamePlatform = 'XBOX' | 'PC' | 'PLAYSTATION';
export type Game = {
    id: number,
    tittle: string,
    platform: GamePlatform,
    label: string,
    value: number
}