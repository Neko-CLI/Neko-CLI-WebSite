import Code from "../../../components/code";
import VideoEmbed from "../../../components/videoEmbed";
import {User, Link, Chip} from "@heroui/react";

export const termuxInstallation = {
    title: "Neko-CLI for Termux 📱",
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
                    name="Thomas Garau"
                />
                <p style={{ fontSize: '0.9em', color: '#666', marginTop: '8px' }}>
                    Published on June 1, 2025 at 11:20 AM
                </p>
            </section>
            <section id="quick-start">
                <h2>Quick Start ⚡</h2>
                <p>
                    Get <strong>Neko-CLI</strong> running quickly on your <strong>Android device</strong> using Termux!
                </p>

                <h3>Prerequisites:</h3>
                <p>
                    You'll need <strong>Termux</strong> installed. We recommend downloading it from<a href="https://f-droid.org/packages/com.termux/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">F-Droid</a> for the most stable experience.
                </p>
                <p>
                    Once Termux is installed, open it and set up Node.js LTS (which includes npm) by running these commands:
                     <br />
                    <Code>pkg update && pkg upgrade -y</Code>
                     <br />
                    <Code>pkg install nodejs-lts -y</Code>
                </p>
                <p>
                    Verify your installations: `node -v` and `npm -v`.
                </p>

                <h3>Installation:</h3>
                <p>
                    Now, install Neko-CLI globally using npm:
                </p>
                <Code>npm i -g neko-cli</Code>
                <p>
                    The `-g` flag ensures a <strong>global install</strong>, letting you use `meow` commands anywhere in Termux! 🚀
                </p>

                <h3>Verify Install:</h3>
                <p>
                    Confirm it's working by checking the version:
                </p>
                <Code>meow version</Code>
                <p>
                    A version number means you're all set! 🎉 Type `meow help` to explore! 😉
                </p>
            </section>

            <hr />

            <section id="video-tutorial">
                <h2>Video Guide 📺</h2>
                <p>
                    Prefer a visual walkthrough? This video demonstrates the Neko-CLI installation process for Termux:
                </p>
                <VideoEmbed videoId="tE4_2GsbklA" title="Neko-CLI Termux Installation Tutorial" />
                <p className="text-sm mt-4 text-gray-500 text-center"></p>
            </section>
        </>
    ),
};