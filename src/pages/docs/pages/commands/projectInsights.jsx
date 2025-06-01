import Code from "../../../components/code";
import {User, Link, Chip} from "@heroui/react";

export const projectInsightsPage = {
    title: "Project Insights",
    sections: [
        {
            id: "listDependencies",
            name: "List Dependencies",
        },
        {
            id: "binaryInfo",
            name: "Binary Information",
        },
        {
            id: "packageInfo",
            name: "Package Information",
        },
        {
            id: "languages",
            name: "Detected Languages",
        },
        {
            id: "checkErrors",
            name: "Error Detection",
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
                    Published on June 1, 2025 at 11:20 AM
                </p>
            </section>
            <section id="listDependencies">
                <h2>📦 List Dependencies - Unpack Your Project!</h2>
                <p>
                    Curious about what's inside your project's heart? ❤️ Use <Code fullWidth>meow list</Code> to get a comprehensive list of all installed dependencies. It's like peeking into your project's manifest!
                </p>
            </section>
            <section id="binaryInfo">
                <h2>💻 Binary Information - Where the Code Lives!</h2>
                <p>
                    Ever wonder where your project's core executables reside? 🤔 With <Code fullWidth>meow bin</Code>, you can quickly find the paths to all installed binaries, like Node.js. It's your map to the digital jungle! 🗺️
                </p>
            </section>
            <section id="packageInfo">
                <h2>🎁 Package Information - Deep Dive into Details!</h2>
                <p>
                    Need the nitty-gritty on a specific package? 🧐 Fetch all the juicy details with <Code fullWidth>meow info &lt;pkg&gt;</Code>. Get ready for a full report on your chosen dependency!
                </p>
            </section>
            <section id="languages">
                <h2>🗣️ Detected Languages - Speak Your Project's Tongue!</h2>
                <p>
                    What languages does your project speak? 🌍 Discover all the programming languages and files detected within your project using <Code fullWidth>meow languages</Code>. Understand your codebase's linguistic landscape!
                </p>
            </section>
            <section id="checkErrors">
                <h2>🐞 Error Detection - Squashing Bugs!</h2>
                <p>
                    Is something bugging your code? 🐛 Let Neko-CLI find it for you! Run <Code fullWidth>meow checkerrors</Code> to quickly detect and list any errors in your code. Keep your project purring smoothly! 🐾
                </p>
            </section>
        </>
    ),
};