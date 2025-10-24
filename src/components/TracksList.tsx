import type { TrackType } from '../types'

import { useEffect, useState } from 'react'
import { TrackItem } from './TrackItem'

export function TracksList({
    selectedTrackId,
    onSelectedTrack,
}: {
    selectedTrackId: string | null
    onSelectedTrack: (id: string | null) => void
}) {
    const [tracks, setTracks] = useState<TrackType[] | null>(null)
    const handleTrackSelectedChange = (id: string | null) => onSelectedTrack?.(id)

    useEffect(() => {
        console.log('this is effect useEffect into TracksList')

        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': 'b6e7c1da-779a-4e6a-81a7-c0ea69e72c3f',
            },
        })
            .then((res) => res.json())
            .then((json) => setTracks(json.data))
    }, [])

    if (tracks === null) {
        return (
            <>
                <h1>Musicfun player</h1>
                <h2>Loading...</h2>
            </>
        )
    } else if (tracks.length === 0) {
        return (
            <>
                <h1>Musicfun player</h1>
                <h2>No tracks</h2>
            </>
        )
    }

    return (
        <div>
            <h1>Musicfun player</h1>
            <button onClick={() => handleTrackSelectedChange(null)}>Reset</button>
            <div style={{ display: 'flex', gap: '30px' }}>
                <ul>
                    {tracks.map((track) => {
                        return (
                            <TrackItem
                                key={track.id}
                                track={track}
                                isSelected={track.id === selectedTrackId}
                                onTrackSelectedChange={handleTrackSelectedChange}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
