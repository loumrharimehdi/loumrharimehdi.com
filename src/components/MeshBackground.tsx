export function MeshBackground() {
    return (
        <div className="mesh-bg" aria-hidden="true">
            <div className="mesh-blob mesh-blob-1" />
            <div className="mesh-blob mesh-blob-2" />
            <div className="mesh-blob mesh-blob-3" />
            <div className="mesh-blob mesh-blob-4" />
            <div className="mesh-blob mesh-blob-5" />
            <div className="mesh-blob mesh-blob-6" />
            <svg className="mesh-noise" xmlns="http://www.w3.org/2000/svg">
                <filter id="mesh-noise-filter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#mesh-noise-filter)" />
            </svg>
        </div>
    );
}
