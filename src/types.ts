export type TracksListType = {
    id: string
    attributes: {
        lyrics: string | null
        title: string
        attachments: Array<{
            url: string
        }>
    }
}

export type ListProps = {
    selectedTrackId: string | null
    onSelectedTrack: (id: string | null) => void
}

export type ItemsProps = {
    track: TracksListType
    isSelected: boolean
    onTrackSelectedChange: (id: string) => void
}

export type TrackDetailsProps = {
    selectedTrackId: string | null
}
