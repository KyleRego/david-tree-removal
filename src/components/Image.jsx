export default function Image({src, text: caption, w}) {
    return <figure title={caption} style={{width: w}}>
        <img style={{maxWidth: "100%"}} src={src} />

        <figcaption>
            {caption}
        </figcaption>
    </figure>;
}