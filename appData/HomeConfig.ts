export type HomeConfig = {
    "episode_items": Episode[]
}

export type Episode = {
    title: string,
    creator: string,
    description: string,
    previewUrl: string
}