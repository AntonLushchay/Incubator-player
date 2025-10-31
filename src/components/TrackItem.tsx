import type { ItemsProps } from '../types'

export function TrackItem({ track, isSelected, onTrackSelectedChange }: ItemsProps) {
    const handleClick = () => onTrackSelectedChange(track.id)

    return (
        <li
            key={track.id}
            style={{
                border: isSelected ? '1px solid orange' : 'none',
            }}
        >
            <div onClick={handleClick}>{track.attributes.title}</div>
            <audio controls src={track.attributes.attachments[0].url}></audio>
        </li>
    )
}
