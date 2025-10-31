import { Header } from './components/Header.tsx'
import { SideBar } from './components/Side-bar.tsx'
import { TracksList } from './components/TracksList.tsx'
import { TrackDetails } from './components/TrackDetails.tsx'
import { Footer } from './components/Footer.tsx'
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
