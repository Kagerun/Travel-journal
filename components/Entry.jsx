export function Entry(props){
    return (
        <article className="entry">
            <div className="entry-image-container">
            <img src={props.img.src} alt={props.img.alt} className="entry-image" />
            </div>
            <div className="entry-content">
                <header className="entry-header">
                    <img src="/images/marker.png" alt="marker" className="entry-marker" />
                    <span className="entry-location">{props.country}</span>
                    <a href={props.googleMapsLink} target="_blank" className="entry-map-link">View on Google Maps</a>
                </header>
                <h2 className="entry-title">{props.title}</h2>
                <p className="entry-date">{props.dates}</p>
                <p className="entry-description">
                    {props.text}
                </p>
            </div>
        </article>
    )
}