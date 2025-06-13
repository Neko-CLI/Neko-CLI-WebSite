import React from 'react';
import { FaYoutube, FaDiscord, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
export default function Footer({ className }) {
    return (
        <footer className={`w-full text-center text-xs text-primary-400 font-medium py-2 ${className}`}>
            <a
                href="https://app.copyrighted.com/website/8XBdQv5I7h8pMvpP/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
            >
                © 2024–2025 Neko-CLI
            </a>{' '}
            · All rights reserved<br />
            <a
                href="/tos"
                className="hover:underline mx-1"
            >
                Terms of Services
            </a>{' '}
            ·{' '}
            <a
                href="/privacy"
                className="hover:underline mx-1"
            >
                Privacy Policy
            </a>
            <br />
            <span className="text-[10px] text-primary-500 tracking-wide">Business ID: MZSFLUH3</span>
            <div className="flex justify-center mt-2 space-x-3">
                <a href="https://x.com/NekoCLI" target="_blank" rel="noopener noreferrer" aria-label="Neko-CLI on X">
                    <FaXTwitter size={14} className="text-primary-400 hover:text-primary-300 transition-colors duration-200" /> {}
                </a>
                <a href="https://www.youtube.com/@Neko-CLI" target="_blank" rel="noopener noreferrer" aria-label="Neko-CLI on YouTube">
                    <FaYoutube size={14} className="text-primary-400 hover:text-primary-300 transition-colors duration-200" /> {}
                </a>
                <a href="https://discord.com/invite/5wuywh8zcb" target="_blank" rel="noopener noreferrer" aria-label="Neko-CLI on Discord">
                    <FaDiscord size={14} className="text-primary-400 hover:text-primary-300 transition-colors duration-200" /> {}
                </a>
                <a href="https://www.instagram.com/nekocliofficial/" target="_blank" rel="noopener noreferrer" aria-label="Neko-CLI on Instagram">
                    <FaInstagram size={14} className="text-primary-400 hover:text-primary-300 transition-colors duration-200" /> {}
                </a>
                <a href="https://wa.me/14016777229" target="_blank" rel="noopener noreferrer" aria-label="Message us on WhatsApp">
                    <FaWhatsapp size={14} className="text-primary-400 hover:text-primary-300 transition-colors duration-200" />
                </a>
            </div>
        </footer>
    );
}