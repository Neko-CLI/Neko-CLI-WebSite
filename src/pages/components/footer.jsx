import React from 'react';

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
        </footer>
    );
}