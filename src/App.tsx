import { Header } from './ui/Header.tsx'
import { SideBar } from './ui/Side-bar.tsx'
import { TracksList } from './ui/TracksList.tsx'
import { TrackDetails } from './ui/TrackDetails.tsx'
import { Footer } from './ui/Footer.tsx'
import { useSelectedTrack } from './bll/useSelectedTrack.tsx'

export function App() {
    const { selectedTrackId, handleSetSelectedTrack } = useSelectedTrack()

    return (
        <>
            <Header />
            <div className='main-content'>
                <SideBar />
                <div className='tracks-content'>
                    <TracksList
                        selectedTrackId={selectedTrackId}
                        onSelectedTrack={handleSetSelectedTrack}
                    />
                    <TrackDetails trackId={selectedTrackId} />
                </div>
            </div>
            <Footer />
        </>
    )
}
