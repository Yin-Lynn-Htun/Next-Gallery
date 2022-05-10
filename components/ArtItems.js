import ArtItem from './ArtItem/ArtItem'
import Link from 'next/link'

const ArtItems = ({ artistProfile, arts }) => {
    return (
        <div className="flex flex-wrap gap-10 justify-center md:justify-between">
            {arts.map((art) => (
                <ArtItem key={art._id} {...art} artistProfile={artistProfile} />
            ))}
        </div>
    )
}

export default ArtItems
