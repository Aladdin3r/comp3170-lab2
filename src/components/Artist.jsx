function Artist(props){

    const {artist} = props;

    return(
        <div className="artist">
            <div className="artist-image">
            <img src={artist.image} alt="" />
            </div>
            <p>
              <span className="artist-name">{artist.name}</span>
              <span className="artist-country"><b>Country:</b> {artist.country}</span>
              <span className="artist-years"><b>Years active:</b> {artist.years}</span>
            </p>
        </div>
    )
}

export default Artist;