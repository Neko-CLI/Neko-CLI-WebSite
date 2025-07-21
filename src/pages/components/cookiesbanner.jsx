import { useEffect } from 'react';
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
const DECLINE_KEY = 'cookie_consent_declined';

export default function CookieConsentBanner() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.startsWith('/privacy') || location.pathname.startsWith('/tos')) {
            return;
        }

        const consentGiven = localStorage.getItem(CONSENT_KEY);
        const consentDeclined = localStorage.getItem(DECLINE_KEY);
        if (!consentGiven && !consentDeclined) {
            onOpen();
        }
        setNecessaryCookie();

    }, [onOpen, location.pathname]);

    const setNecessaryCookie = () => {
        document.cookie = `session_preference=true; max-age=31536000; path=/; SameSite=Lax`;
    };

    const handleAcceptAll = () => {
        localStorage.setItem(CONSENT_KEY, 'true');
        localStorage.removeItem(DECLINE_KEY);
        onClose();
        window.location.reload();
    };

    const handleDecline = () => {
        localStorage.setItem(DECLINE_KEY, 'true');
        localStorage.removeItem(CONSENT_KEY);
        onClose();
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
                                This website uses cookies to enhance your Browse experience and for analytics.
                                Strictly necessary cookies are already active and are essential for site functionality. 🍪
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
                                color="danger"
                                variant="bordered"
                                startContent={<span>😔</span>}
                                className="px-6 py-2 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
                            >
                                Decline
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