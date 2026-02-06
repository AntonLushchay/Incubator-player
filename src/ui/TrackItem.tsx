import type { ItemsProps } from '../types'
import s from '../styles/TrackItem.module.css'
import clsx from 'clsx'

export function TrackItem({ track, isSelected, onTrackSelectedChange }: ItemsProps) {
    const handleClick = () => onTrackSelectedChange(track.id)

    return (
        <li
            className={clsx({ [s.track]: true, [s['track--selected']]: isSelected })}
            key={track.id}
        >
            <div onClick={handleClick}>{track.attributes.title}</div>
            <audio controls src={track.attributes.attachments[0].url}></audio>
        </li>
    )
}
