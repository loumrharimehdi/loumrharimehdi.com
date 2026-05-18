type HeartsBackgroundProps = {
    count?: 2 | 4;
};

export function HeartsBackground({ count = 4 }: HeartsBackgroundProps) {
    return (
        <div className="hearts-bg" aria-hidden="true">
            {Array.from({ length: count }, (_, index) => (
                <div key={index} className={`heart heart-${index + 1}`}>
                    💗
                </div>
            ))}
        </div>
    );
}
