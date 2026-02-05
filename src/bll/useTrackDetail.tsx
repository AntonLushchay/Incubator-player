import { useEffect, useState } from 'react'
import type { TrackDetailsProps, TrackDetailsResource } from '../types'
import { getTrack } from '../dal/api'

export function useTrackDetail({ trackId }: TrackDetailsProps) {
    const [downloadedTrackDetails, setDownloadedTrackDetails] =
        useState<TrackDetailsResource | null>(null)

    useEffect(() => {
        if (!trackId) {
            setDownloadedTrackDetails(null)
            return
        }

        getTrack(trackId).then((json) => setDownloadedTrackDetails(json.data))
    }, [trackId])

    return { downloadedTrackDetails }
}
