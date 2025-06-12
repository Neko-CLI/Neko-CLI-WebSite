import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappFloatingButton({ className }) {
    const phoneNumber = '14016777229';
    const displayPhoneNumber = '+1 (401) 677-7229';

    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                fixed bottom-12 left-4 z-50
                flex items-center p-3
                bg-green-500 text-white rounded-full
                transform transition-all duration-300 ease-in-out
                hover:scale-90
                cursor-pointer group
                ${className}
            `}
            aria-label={`Message us on WhatsApp at ${displayPhoneNumber}`}
            title="Message us on WhatsApp"
        >
            <FaWhatsapp size={24} />
            <span className="
                text-lg font-semibold whitespace-nowrap opacity-0 max-w-0
                group-hover:opacity-100 group-hover:max-w-xs
                transition-all duration-300 ease-in-out
                group-hover:ml-3
            ">
                Message Us
            </span>
        </a>
    );
}