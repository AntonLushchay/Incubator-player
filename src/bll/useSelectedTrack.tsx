import { useState } from 'react'

export function useSelectedTrack() {
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
    const handleSetSelectedTrack = (id: string | null): void => setSelectedTrackId(id)

    return { selectedTrackId, handleSetSelectedTrack }
}
