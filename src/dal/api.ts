import type { GetTrackListOutput, GetTrackDetailsOutput } from '../types'

export const getTrack = (trackId: string) => {
    return fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
        headers: {
            'api-key': '2d1b595b-91ab-465c-8749-de2bc629b2e9',
        },
    }).then((res) => res.json() as Promise<GetTrackDetailsOutput>)
}

export const getTracksList = () => {
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            'api-key': '2d1b595b-91ab-465c-8749-de2bc629b2e9',
        },
    }).then((res) => res.json() as Promise<GetTrackListOutput>)
}
