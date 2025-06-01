import Code from "../../../components/code";
import {User, Link, Chip} from "@heroui/react";

export const scriptManagementPage = {
    title: "Script Management",
    sections: [
        {
            id: "flush",
            name: "Flush Scripts",
        },
        {
            id: "devScript",
            name: "Development Script",
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
            <section id="flush">
                <h2>🌊 Flush Scripts - Clear the Way!</h2>
                <p>
                    Ready to give your scripts a fresh start? Use the powerful cats framework to run your scripts with a clean slate! Just type: <Code fullWidth>meow flush</Code>
                    It's like a refreshing wave for your codebase! 🏄‍♀️
                </p>
            </section>
            <section id="devScript">
                <h2>👨‍💻 Development Script - Build and Innovate!</h2>
                <p>
                    Ignite your development workflow! 🚀 Execute your project's development script with ease. This command is your go-to for bringing your ideas to life: <Code fullWidth>meow dev</Code>
                    Get ready to code! ✨
                </p>
            </section>
        </>
    ),
};