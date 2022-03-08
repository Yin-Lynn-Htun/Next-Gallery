import ArtItem from './ArtItem/ArtItem'

const ArtItems = ({ artistProfile, arts }) => {
    return (
        <div className="flex flex-wrap gap-5 justify-between">
            {arts.map((art) => (
                <ArtItem key={art.id} {...art} artistProfile={artistProfile} />
            ))}
        </div>
    )
}

export default ArtItems
