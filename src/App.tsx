import { Header } from './ui/Header.tsx'
import { SideBar } from './ui/Side-bar.tsx'
import { TracksList } from './ui/TracksList.tsx'
import { TrackDetails } from './ui/TrackDetails.tsx'
import { Footer } from './ui/Footer.tsx'
import { useState } from 'react'

export function App() {
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
    const handleSelectedTrack = (id: string | null): void => setSelectedTrackId(id)

    return (
        <>
            <Header />
            <SideBar />
            <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
                <TracksList
                    selectedTrackId={selectedTrackId}
                    onSelectedTrack={handleSelectedTrack}
                />
                <TrackDetails selectedTrackId={selectedTrackId} />
            </div>
            <Footer />
        </>
    )
}
