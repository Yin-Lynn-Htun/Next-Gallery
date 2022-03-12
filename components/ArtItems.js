import ArtItem from './ArtItem/ArtItem'
import Link from 'next/link'

const ArtItems = ({ artistProfile, arts }) => {
    return (
        <div className="flex flex-wrap gap-5 justify-between">
            {arts.map((art) => (
                <Link key={art.id} href={`/arts/${art.id}`}>
                    <a>
                        <ArtItem {...art} artistProfile={artistProfile} />
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default ArtItems
