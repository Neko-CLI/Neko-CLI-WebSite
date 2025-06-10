import Code from "../../../components/code";
import {User, Link, Chip} from "@heroui/react";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    DatePicker,
    TimeInput,
    Textarea
} from "@heroui/react";
import React, { useState } from 'react';

export const updatesPage = {
    title: "Help and Support",
    sections: [
        {
            id: "updates",
            name: "Updates",
        },
        {
            id: "help",
            name: "Help and Support",
        },
        {
            id: "news",
            name: "News",
        },
        {
            id: "contact",
            name: "Request a Callback",
        },
    ],
    content: (
        <>
        <section id="author">
                <User
                    avatarProps={{
                        src: "https://i.ibb.co/zVXk5wqg/image.png",
                    }}
                    description={
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Link isExternal href="https://github.com/Frig1" size="sm">
                                @Frig1
                            </Link>
                            <Chip
                                color="danger"
                                variant="bordered"
                                size="sm"
                                startContent={
                                    <img
                                        src="https://img.icons8.com/glyph-neue/64/F25081/user-shield.png"
                                        alt="user-shield"
                                        style={{ width: 14, height: 14 }}
                                    />
                                }
                            >
                                Admin
                            </Chip>
                        </span>
                    }
                    name="Elia Frigerio"
                />
                <p style={{ fontSize: '0.9em', color: '#666', marginTop: '8px' }}>
                    Published on June 1, 2025 at 13:40 AM
                </p>
            </section>
            <section id="updates">
                <h2>🚀 Updates</h2>
                <p>
                    Keep your MEOW CLI purring 🐾 with the latest features and fixes! Update your CLI using: <Code fullWidth>meow update</Code>
                    <br></br>
                    Want to know what version you're on? Check it with: <Code fullWidth>meow version</Code>. ✨
                </p>
            </section>
            <section id="help">
                <h2>📚 Help and Support</h2>
                <p>
                    Stuck? Don't fret! 🆘 Access the comprehensive help guide right from your terminal: <Code fullWidth>meow help</Code>
                </p>
            </section>
            <section id="news">
                <h2>📣 Exciting News!</h2>
                 <div className="news-card">
                    <p>
                        Big news for our Neko-CLI community! 🎉 We're thrilled to announce that <strong>24/7 phone support</strong> will be available starting <strong>August 20, 2025</strong>! 📞
                    </p>
                    <p className="text-sm text-default-500 mt-2">
                        Get ready for round-the-clock assistance whenever you need it. 🕰️ Stay tuned for more details on the dedicated helpline number. 🔜
                    </p>
                </div>
            </section>

            <section id="contact">
                <h2>🤝 Request a Callback</h2>
                <p className="mb-4">
                    Need personalized assistance? Fill out the form below and our support team will get in touch with you at your preferred time. We're here to help you get the most out of Neko-CLI!
                </p>
                <CallbackModal />
            </section>
        </>
    ),
};

function CallbackModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [preferredDate, setPreferredDate] = useState(null);
    const [preferredTime, setPreferredTime] = useState(null);
    const [description, setDescription] = useState('');
    const [buttonText, setButtonText] = useState('Submit Request');
    const [buttonColor, setButtonColor] = useState('primary');
    const [buttonVariant, setVariant] = useState('ghost')
    const [buttonIcon, setButtonIcon] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);


    const WEBHOOK_URL = "https://discord.com/api/webhooks/1378506387880935434/QeeQiC7U_APZk9cHXnP6jCsXWYiM0QAhDUCjPfl_YCq3OpuzgtNUJxsNmEVYT5gd2UAj";

    const handleSubmit = async (onCloseCallback) => {
        if (!firstName || !lastName || !email || !phone || !preferredDate || !preferredTime) {
            setButtonText('Submit Request');
            setButtonColor('primary');
            setVariant('ghost')
            setButtonIcon(null);
            return;
        }

        setIsSubmitting(true);
        setButtonText('Sending...');

        const formattedDate = preferredDate ? `${preferredDate.year}-${String(preferredDate.month).padStart(2, '0')}-${String(preferredDate.day).padStart(2, '0')}` : 'Not specified';
        const formattedTime = preferredTime ? `${String(preferredTime.hour).padStart(2, '0')}:${String(preferredTime.minute).padStart(2, '0')}` : 'Not specified';

        const payload = {
            content: "📞 New Neko-CLI Callback Request!",
            embeds: [
                {
                    title: "Callback Request Details",
                    description: "A user has requested a callback. Please contact them at their preferred time.",
                    color: 2169933,
                    fields: [
                        { name: "👤 Full Name", value: `${firstName} ${lastName}` },
                        { name: "📧 Email", value: email },
                        { name: "📱 Phone", value: phone },
                        { name: "🗓️ Preferred Date", value: formattedDate },
                        { name: "⏰ Preferred Time", value: formattedTime },
                        { name: "📝 Reason for Call", value: description || "No description provided." }
                    ],
                    footer: {
                        text: "Neko-CLI Support System"
                    },
                    timestamp: new Date().toISOString()
                }
            ]
        };

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setButtonText('Sent!');
                setButtonColor('success');
                setVariant('ghost');
                setButtonIcon('✔');
                setTimeout(() => {
                    onCloseCallback();
                    setFirstName('');
                    setLastName('');
                    setEmail('');
                    setPhone('');
                    setPreferredDate(null);
                    setPreferredTime(null);
                    setDescription('');
                    setButtonText('Submit Request');
                    setButtonColor('primary');
                    setVariant('ghost');
                    setButtonIcon(null);
                    setIsSubmitting(false);
                }, 2000);
            } else {
                const errorText = await response.text();
                console.error('Failed to send webhook:', response.status, errorText);
                setButtonText('Failed');
                setButtonColor('danger');
                setVariant('ghost');
                setButtonIcon('✖');
                setTimeout(() => {
                    setButtonText('Submit Request');
                    setButtonColor('primary');
                    setVariant('ghost');
                    setButtonIcon(null);
                    setIsSubmitting(false);
                }, 2000);
            }
        } catch (error) {
            console.error('Error sending webhook:', error);
            setButtonText('Error');
            setButtonColor('danger');
            setVariant('ghost')
            setButtonIcon('✖');
            setTimeout(() => {
                setButtonText('Submit Request');
                setButtonColor('primary');
                setVariant('ghost');
                setButtonIcon(null);
                setIsSubmitting(false);
            }, 2000);
        }
    };

    return (
        <>
            <Button onPress={onOpen} color="primary" variant="ghost" className="mt-4">
                Request a Callback 📞
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" className="bg-[#111827]" isDismissable={false}>
                <ModalContent className="bg-[#111827] text-white">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-white">
                                Request a Callback 📞
                            </ModalHeader>
                            <ModalBody>
                                <p className="mb-4 text-sm text-gray-200">
                                    Please fill in your details and preferred contact time. Our team will reach out to you.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input
                                        label="First Name"
                                        isRequired
                                        placeholder="Your first name"
                                        variant="bordered"
                                        className="text-white"
                                        labelPlacement="outside"
                                        classNames={{
                                            input: "text-white",
                                            inputWrapper: "bg-gray-700/50 group-data-[focused=true]:bg-gray-700/80 border-gray-600 hover:border-gray-500",
                                            label: "text-gray-300"
                                        }}
                                        value={firstName}
                                        onValueChange={setFirstName}
                                    />
                                    <Input
                                        label="Last Name"
                                        isRequired
                                        placeholder="Your last name"
                                        variant="bordered"
                                        className="text-white"
                                        labelPlacement="outside"
                                        classNames={{
                                            input: "text-white",
                                            inputWrapper: "bg-gray-700/50 group-data-[focused=true]:bg-gray-700/80 border-gray-600 hover:border-gray-500",
                                            label: "text-gray-300"
                                        }}
                                        value={lastName}
                                        onValueChange={setLastName}
                                    />
                                    <Input
                                        label="Email"
                                        type="email"
                                        isRequired
                                        placeholder="your.email@example.com"
                                        className="md:col-span-2 text-white"
                                        variant="bordered"
                                        labelPlacement="outside"
                                        classNames={{
                                            input: "text-white",
                                            inputWrapper: "bg-gray-700/50 group-data-[focused=true]:bg-gray-700/80 border-gray-600 hover:border-gray-500",
                                            label: "text-gray-300"
                                        }}
                                        value={email}
                                        onValueChange={setEmail}
                                    />
                                    <Input
                                        label="Phone Number"
                                        type="tel"
                                        isRequired
                                        placeholder="e.g., +1234567890"
                                        className="md:col-span-2 text-white"
                                        variant="bordered"
                                        labelPlacement="outside"
                                        classNames={{
                                            input: "text-white",
                                            inputWrapper: "bg-gray-700/50 group-data-[focused=true]:bg-gray-700/80 border-gray-600 hover:border-gray-500",
                                            label: "text-gray-300"
                                        }}
                                        value={phone}
                                        onValueChange={setPhone}
                                    />
                                    <DatePicker
                                        isRequired
                                        label="Preferred Date"
                                        className="w-full text-white"
                                        variant="bordered"
                                        labelPlacement="outside"
                                        classNames={{
                                            base: "text-white",
                                            label: "text-gray-300",
                                            inputWrapper: "bg-gray-700/50 group-data-[focused=true]:bg-gray-700/80 border-gray-600 hover:border-gray-500",
                                            input: "text-white",
                                            popoverContent: "bg-[#212F4D] text-white",
                                        }}
                                        value={preferredDate}
                                        onChange={setPreferredDate}
                                    />
                                    <TimeInput
                                        isRequired
                                        label="Preferred Time"
                                        className="w-full text-white"
                                        variant="bordered"
                                        labelPlacement="outside"
                                        classNames={{
                                            base: "text-white",
                                            label: "text-gray-300",
                                            inputWrapper: "bg-gray-700/50 group-data-[focused=true]:bg-gray-700/80 border-gray-600 hover:border-gray-500",
                                            input: "text-white"
                                        }}
                                        value={preferredTime}
                                        onChange={setPreferredTime}
                                    />
                                    <Textarea
                                        label="Reason for Call (Optional)"
                                        placeholder="Briefly describe why you'd like a callback..."
                                        variant="bordered"
                                        className="md:col-span-2 text-white"
                                        labelPlacement="outside"
                                        classNames={{
                                            input: "text-white",
                                            inputWrapper: "bg-gray-700/50 group-data-[focused=true]:bg-gray-700/80 border-gray-600 hover:border-gray-500",
                                            label: "text-gray-300"
                                        }}
                                        value={description}
                                        onValueChange={setDescription}
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="ghost" onPress={onClose} isDisabled={isSubmitting}>
                                    Cancel
                                </Button>
                                <Button color={buttonColor} variant={buttonVariant} onPress={() => handleSubmit(onClose)} isDisabled={isSubmitting}>
                                    {buttonIcon && <span className="mr-2">{buttonIcon}</span>}
                                    {buttonText}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}