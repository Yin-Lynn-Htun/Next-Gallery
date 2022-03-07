import ArtItem from './ArtItem/ArtItem'

const dummy_arts = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1166&q=80',
        loveCount: 100,
        viewCount: 200,
    },

    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1245&q=80',
        loveCount: 170,
        viewCount: 20,
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
        loveCount: 90,
        viewCount: 15,
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=459&q=80',
        loveCount: 321,
        viewCount: 201,
    },
]

const ArtItems = () => {
    return (
        <div className="flex flex-wrap gap-4">
            {dummy_arts.map((art) => (
                <ArtItem key={art.id} {...art} />
            ))}
        </div>
    )
}

export default ArtItems
