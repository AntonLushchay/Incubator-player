import { useEffect, useState } from 'react'
import type { TracksListType } from '../types'
import { getTracksList } from '../dal/api'

export function useTracksList() {
    const [tracks, setTracks] = useState<Array<TracksListType> | null>(null)

    useEffect(() => {
        getTracksList().then((json) => setTracks(json.data))
    }, [])

    return { tracks }
}
