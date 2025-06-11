import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
export default function NumberLine({ className }) {
    const phoneNumber = '+14016777229';
    const displayPhoneNumber = '+1 (401) 677-7229';
    return (
        <div className={`
            fixed bottom-4 left-4 z-50
            flex items-center space-x-1 p-3
            bg-[#111827] text-white rounded-full
            transform transition-transform duration-300 hover:scale-105
            cursor-pointer group
            ${className}
        `}>
            {}
            <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center p-2 rounded-full bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
                aria-label={`Call us at ${displayPhoneNumber}`}
                title="Call Us"
            >
                <FaPhone size={18} />
            </a>
            {}
            <div className="
                flex items-center space-x-2
                overflow-hidden max-w-0 group-hover:max-w-xs
                transition-all duration-300 ease-in-out
            ">
                <span className="text-lg font-bold text-primary-200 whitespace-nowrap">
                    {displayPhoneNumber}
                </span>
                <a
                    href={`https://wa.me/${phoneNumber.replaceAll("+","")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200 flex-shrink-0"
                    aria-label={`Message us on WhatsApp at ${displayPhoneNumber}`}
                    title="Message us on WhatsApp"
                >
                    <FaWhatsapp size={18} />
                </a>
            </div>
        </div>
    );
}