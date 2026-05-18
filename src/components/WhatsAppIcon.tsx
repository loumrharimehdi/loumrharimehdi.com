type WhatsAppIconProps = {
    size?: number;
};

export function WhatsAppIcon({ size = 22 }: WhatsAppIconProps) {
    return (
        <svg width={size} height={size} fill="currentColor" aria-hidden="true" focusable="false">
            <use href="#icon-wa" />
        </svg>
    );
}
