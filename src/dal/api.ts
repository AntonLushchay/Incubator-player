import type { GetTrackListOutput, GetTrackDetailsOutput } from '../types'

export const getTrack = (trackId: string) => {
    return fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
        headers: {
            'api-key': 'b6e7c1da-779a-4e6a-81a7-c0ea69e72c3f',
        },
    }).then((res) => res.json() as Promise<GetTrackDetailsOutput>)
}

export const getTracksList = () => {
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            'api-key': 'b6e7c1da-779a-4e6a-81a7-c0ea69e72c3f',
        },
    }).then((res) => res.json() as Promise<GetTrackListOutput>)
}
