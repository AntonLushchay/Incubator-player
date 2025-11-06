import type { TracksListType, ListProps } from '../types'

import { useEffect, useState } from 'react'
import { TrackItem } from './TrackItem'
import { getTracksList } from '../dal/api'

export function TracksList({ selectedTrackId, onSelectedTrack }: ListProps) {
    const [tracks, setTracks] = useState<Array<TracksListType> | null>(null)
    const handleTrackSelectedChange = (id: string | null) => onSelectedTrack?.(id)

    useEffect(() => {
        getTracksList().then((json) => setTracks(json.data))
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
