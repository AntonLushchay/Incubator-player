import { useEffect, useState } from 'react'
import type { DownloadedTrackDetailsType, TrackDetailsProps } from '../types'

export function TrackDetails({ selectedTrackId }: TrackDetailsProps) {
    const [downloadedTrackDetails, setDownloadedTrackDetails] =
        useState<DownloadedTrackDetailsType | null>(null)

    useEffect(() => {
        console.log('this is effect into TrackDetails')

        if (!selectedTrackId) {
            setDownloadedTrackDetails(null)
            return
        }

        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
            headers: {
                'api-key': 'b6e7c1da-779a-4e6a-81a7-c0ea69e72c3f',
            },
        })
            .then((res) => res.json())
            .then((json) => setDownloadedTrackDetails(json.data))
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
