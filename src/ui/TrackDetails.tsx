import { useEffect, useState } from 'react'
import type { TrackDetailsResource, TrackDetailsProps } from '../types'
import { getTrack } from '../dal/api'

export function TrackDetails({ selectedTrackId }: TrackDetailsProps) {
    const [downloadedTrackDetails, setDownloadedTrackDetails] =
        useState<TrackDetailsResource | null>(null)

    useEffect(() => {
        if (!selectedTrackId) {
            setDownloadedTrackDetails(null)
            return
        }

        getTrack(selectedTrackId).then((json) => setDownloadedTrackDetails(json.data))
    }, [selectedTrackId])

    return (
        <div>
            <h2>Details</h2>
            {selectedTrackId &&
            downloadedTrackDetails &&
            selectedTrackId !== downloadedTrackDetails.id ? (
                <p>Loading...</p>
            ) : (
                false
            )}

            {downloadedTrackDetails ? (
                <div>
                    <h3>{downloadedTrackDetails.attributes.title}</h3>
                    <h4>Lyrics</h4>
                    <p>{downloadedTrackDetails.attributes.lyrics || 'No lyrics'}</p>
                </div>
            ) : selectedTrackId ? (
                <p>Loading...</p>
            ) : (
                <p>Track is not selected</p>
            )}
        </div>
    )
}
