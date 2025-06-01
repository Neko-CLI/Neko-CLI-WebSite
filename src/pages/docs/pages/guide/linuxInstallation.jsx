import React, { useState, useEffect } from 'react';
import Code from "../../../components/code";
import VideoEmbed from "../../../components/videoEmbed";
import {User, Link, Chip} from "@heroui/react";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";


export const linuxInstallation = {
    title: "Neko-CLI for Linux 🐧",
    sections: [
        {
            id: "quick-start",
            name: "Quick Start ⚡",
        },
        {
            id: "video-tutorial",
            name: "Video Guide 📺",
        },
    ],
    content: (
        <>
            <section id="author">
                <User
                    avatarProps={{
                        src: "https://i.ibb.co/sp2J0s99/image.png",
                    }}
                    description={
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Link isExternal href="https://github.com/StrayVibes" size="sm">
                                @StrayVibes
                            </Link>
                            <Chip
                                color="danger"
                                variant="bordered"
                                size="sm" // Make the chip slightly smaller to fit better in description
                                startContent={
                                    <img
                                        src="https://img.icons8.com/glyph-neue/64/F25081/user-shield.png"
                                        alt="user-shield"
                                        style={{ width: 14, height: 14 }} // Adjust icon size
                                    />
                                }
                            >
                                Admin
                            </Chip>
                        </span>
                    }
                    name="Thomas Garau"
                />
                <p style={{ fontSize: '0.9em', color: '#666', marginTop: '8px' }}>
                    Published on June 1, 2025 at 11:35 AM
                </p>
            </section>
            <section id="quick-start">
                <h2>Quick Start ⚡</h2>
                <p>
                    Get Neko-CLI running on your Linux machine in no time!
                </p>

                <DependenciesModal />

                <h3>Prerequisites:</h3>
                <p>
                    You'll need <strong>Node.js</strong> (v16+ recommended) and either <strong>npm</strong> or <strong>Yarn</strong> installed.
                </p>
                <p>
                    Check if you have them: <code>node -v</code>, <code>npm -v</code>, <code>yarn -v</code>.
                </p>

                <h3>Installation:</h3>
                <p>
                    Open your terminal and choose your preferred package manager:
                </p>
                <ul>
                    <li>
                        <strong>npm:</strong>
                        <Code>npm i -g neko-cli</Code>
                    </li>
                    <li>
                        <strong>Yarn:</strong>
                        <Code>yarn global add neko-cli</Code>
                    </li>
                </ul>
                <p>
                    The <code>-g</code> flag ensures a global install, letting you use <code>meow</code> commands anywhere! 🚀
                </p>

                <h3>Verify Install:</h3>
                <p>
                    Confirm it's working:
                </p>
                <Code>meow --version</Code>
                <p>
                    A version number means you're all set! 🎉 Try <code>meow help</code> to explore! 😉
                </p>
            </section>

            <hr />

            <section id="video-tutorial">
                <h2>Video Guide 📺</h2>
                <p>
                    Prefer a visual walkthrough? This video demonstrates the Neko-CLI installation process on Linux:
                </p>
                <VideoEmbed videoId="gW3rS8N2DSc" title="Neko-CLI Linux Installation Tutorial" />
                <p className="text-sm mt-4 text-gray-500 text-center"></p>
            </section>
        </>
    ),
};

function DependenciesModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [nodeVersion, setNodeVersion] = useState('...');
    const [loadingNodeVersion, setLoadingNodeVersion] = useState(true);
    const [nodeVersionError, setNodeVersionError] = useState(null);

    useEffect(() => {
        if (isOpen && loadingNodeVersion) {
            fetch('https://nodejs.org/dist/index.json')
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    return res.json();
                })
                .then(data => {
                    const latestLTS = data.find(release => release.lts && release.lts !== false);
                    if (latestLTS) {
                        setNodeVersion(latestLTS.version);
                    } else {
                        setNodeVersionError("Could not find latest LTS version.");
                    }
                })
                .catch(err => {
                    console.error("Failed to fetch Node.js version:", err);
                    setNodeVersionError("Failed to fetch version. Please check nodejs.org.");
                })
                .finally(() => setLoadingNodeVersion(false));
        } else if (!isOpen) {
            setLoadingNodeVersion(true);
            setNodeVersionError(null);
            setNodeVersion('...');
        }
    }, [isOpen, loadingNodeVersion]);

    return (
        <>
            <Button onPress={onOpen} color="primary" variant="ghost" className="my-4">
                Dependencies 📦
            </Button>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="bg-[#111827] text-white"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-white">Required Dependencies 📦</ModalHeader>
                            <ModalBody className="text-white">
                                <p className="mb-6">
                                    To run <strong>Neko-CLI</strong>, you need the following dependencies:
                                </p>

                                <div className="flex flex-col gap-4">
                                    <div className="border border-white rounded-lg p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <div className="text-lg font-semibold flex items-center gap-2 text-white">
                                            Node.js
                                        </div>
                                        <div className="text-sm text-white">
                                            LTS Version: {" "}
                                            {loadingNodeVersion ? (
                                                <span className="text-white">Loading...</span>
                                            ) : nodeVersionError ? (
                                                <span className="text-red-500">{nodeVersionError}</span>
                                            ) : (
                                                <strong>{nodeVersion}</strong>
                                            )}
                                        </div>
                                        <Button
                                            as="a"
                                            href="https://nodejs.org/en/download/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            color="primary"
                                            variant="ghost"
                                            className="w-full sm:w-auto"
                                        >
                                            Download <span className="hidden sm:inline">Node.js</span>
                                        </Button>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="ghost" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}