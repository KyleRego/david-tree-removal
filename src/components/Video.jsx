export default function Video({src, w, caption}) {
    return <div title={src}>
            <video controls style={{width: w}} autoPlay loop muted playsInline>
                <source src={src} type="video/mp4" />
            </video>
            <p>
                {caption}
            </p>
        </div>;
}
