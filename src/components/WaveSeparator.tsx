type WaveSeparatorProps = {
    flip?: boolean;
};

export function WaveSeparator({ flip = false }: WaveSeparatorProps) {
    return <div className={`wave-separator${flip ? ' wave-separator-flip' : ''}`} aria-hidden="true" />;
}
