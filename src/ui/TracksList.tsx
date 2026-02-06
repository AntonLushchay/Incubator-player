import { useTracksList } from '../bll/useTracksList'
import type { ListProps } from '../types'
import s from '../styles/TrackList.module.css'

import { TrackItem } from './TrackItem'

export function TracksList({ selectedTrackId, onSelectedTrack }: ListProps) {
    const { tracks } = useTracksList()
    const handleTrackSelectedChange = (id: string | null) => onSelectedTrack?.(id)

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
        <div className={s.tracksListSection}>
            <h1>Musicfun player</h1>
            <button className={s.resetButton} onClick={() => handleTrackSelectedChange(null)}>
                Reset
            </button>
            <div>
                <ul className={s.trackList}>
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
