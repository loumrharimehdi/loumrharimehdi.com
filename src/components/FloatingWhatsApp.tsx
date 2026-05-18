import { site } from '@/data/site';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FloatingWhatsApp() {
    return (
        <a
            href={site.whatsapp}
            className="whatsapp-float"
            target="_blank"
            rel="noopener"
            aria-label="Contacter sur WhatsApp"
        >
            <WhatsAppIcon size={28} />
        </a>
    );
}
