import type { TrackDetailsProps } from '../types'
import { useTrackDetail } from '../bll/useTrackDetail'

export function TrackDetails({ trackId }: TrackDetailsProps) {
    const { downloadedTrackDetails } = useTrackDetail({
        trackId,
    })

    return (
        <div>
            <h2>Details</h2>
            {trackId && downloadedTrackDetails && trackId !== downloadedTrackDetails.id ? (
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
            ) : trackId ? (
                <p>Loading...</p>
            ) : (
                <p>Track is not selected</p>
            )}
        </div>
    )
}
