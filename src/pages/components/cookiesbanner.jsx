import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";

const CONSENT_KEY = 'cookie_consent_accepted';

export default function CookieConsentBanner() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();

    const [declineButtonText, setDeclineButtonText] = useState('Decline');
    const [declineButtonIcon, setDeclineButtonIcon] = useState('😔');
    const [isDeclineButtonDisabled, setIsDeclineButtonDisabled] = useState(false);

    const randomDeclineMessages = [
        "Why close me? 😢",
        "I'm just a cookie! 🍪💔",
        "Oh, the sadness... 🥺",
        "Are you sure? 😞",
        "My crumbs are falling... 😭",
        "Don't leave me! 🏃‍♀️💨",
        "My heart is crumbling! 💔",
        "A tear for every click... 💧",
        "So lonely without you... 🫂",
        "But we could have been friends! 🤝",
        "My digital soul aches... 😔✨",
        "Consider my feelings! 🥺💖",
        "You wound me! 💔🩹",
        "Is this goodbye? 👋😭",
        "My purpose... gone. 👻",
    ];

    useEffect(() => {
        // Prevent the banner from showing on privacy or terms of service pages
        if (location.pathname.startsWith('/privacy') || location.pathname.startsWith('/tos')) {
            return;
        }

        const consentGiven = localStorage.getItem(CONSENT_KEY);
        if (!consentGiven) {
            onOpen();
        }
        // Always set the necessary cookie, regardless of consent for other cookies
        setNecessaryCookie();
    }, [onOpen, location.pathname]);

    const setNecessaryCookie = () => {
        document.cookie = `session_preference=true; max-age=31536000; path=/; SameSite=Lax`;
    };

    const handleAcceptAll = () => {
        localStorage.setItem(CONSENT_KEY, 'true');
        onClose();
        window.location.reload();
    };

    const handleDecline = () => {
        setIsDeclineButtonDisabled(true);
        const randomMessage = randomDeclineMessages[Math.floor(Math.random() * randomDeclineMessages.length)];
        setDeclineButtonText(randomMessage);
        setDeclineButtonIcon('');

        setTimeout(() => {
            setDeclineButtonText('Decline');
            setDeclineButtonIcon('😔');
            setIsDeclineButtonDisabled(false);
        }, 2000);
    };

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onClose}
            hideCloseButton={true}
            isDismissable={false}
            className="bg-gray-900 text-white"
        >
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-lg font-bold text-white">
                            Your Privacy Matters ✨
                        </ModalHeader>
                        <ModalBody className="text-gray-300">
                            <p>
                                This website uses cookies to enhance your browse experience and for analytics.
                                Strictly necessary cookies are already active and essential for the site's functionality. 🍪
                            </p>
                            <p className="mt-2">
                                By clicking "Accept All", you consent to the use of analytical cookies that help us understand
                                how you use our site and improve it. 📈
                            </p>
                            <p className="mt-2">
                                You can read more about our data practices in our
                                <a href="/privacy" className="text-blue-400 hover:text-blue-300 ml-1 underline">
                                    Privacy Policy 🔒
                                </a>
                                and our
                                <a href="/tos" className="text-blue-400 hover:text-blue-300 ml-1 underline">
                                    Terms of Service 📜
                                </a>.
                            </p>
                        </ModalBody>
                        <ModalFooter className="flex justify-end gap-2">
                            <Button
                                onPress={handleDecline}
                                isDisabled={isDeclineButtonDisabled}
                                color="danger"
                                variant="bordered"
                                startContent={declineButtonIcon ? <span>{declineButtonIcon}</span> : null}
                                className="px-6 py-2 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
                            >
                                {declineButtonText}
                            </Button>
                            <Button
                                onPress={handleAcceptAll}
                                color="primary"
                                variant="bordered"
                                endContent={<span className="text-green">✅</span>}
                                className="px-6 py-2 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
                            >
                                Accept All
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}