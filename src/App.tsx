import { useEffect, useState } from 'react'

type TrackType = {
    attributes: object
    id: string
    relationships: object
    type: string
}

function App() {
    const [selectedTrackId, setSelectedTrackId] = useState(null)
    const [tracks, setTracks] = useState<TrackType[] | null>(null)

    useEffect(() => {
        console.log('this is effect')

        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': 'b6e7c1da-779a-4e6a-81a7-c0ea69e72c3f',
            },
        })
            .then((res) => res.json())
            .then((json) => setTracks(json.data))
    }, [])

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
        <>
            <h1>Musicfun player</h1>
            <button
                onClick={() => {
                    setSelectedTrackId(null)
                }}
            >
                Reset
            </button>
            <ul>
                {tracks.map((track) => (
                    <li
                        key={track.id}
                        style={{
                            border: track.id === selectedTrackId ? '1px solid orange' : 'none',
                        }}
                    >
                        <div
                            onClick={() => {
                                setSelectedTrackId(track.id)
                            }}
                        >
                            {track.attributes.title}
                        </div>
                        <audio controls src={track.attributes.attachments[0].url}></audio>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
