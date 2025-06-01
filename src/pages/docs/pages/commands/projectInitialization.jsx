import Code from "../../../components/code";
import {User, Link, Chip} from "@heroui/react";

export const projectInitializationPage = {
    title: "Project Initialization and Structure",
    sections: [
        {
            id: "projectInitialization",
            name: "Project Initialization",
        },
        {
            id: "projectStructure",
            name: "Project Structure",
        },
        {
            id: "projectBackup",
            name: "Project Backup",
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
            <section id="projectInitialization">
                <h2>🚀 Project Initialization - Get Started Fast!</h2>
                <p>
                    Kickstart your next big idea with Neko-CLI! Use <Code fullWidth>meow init [--skip | -y]</Code> to quickly set up a new project.
                    The <code>--skip</code> or <code>-y</code> flags are your express pass ⚡ to bypass interactive questions for a super streamlined setup experience. No fuss, just code!
                </p>
            </section>

            <section id="projectStructure">
                <h2>🏗️ Project Structure - Your Blueprint for Success!</h2>
                <p>
                    Understand your project's architecture at a glance! With <Code fullWidth>meow struct</Code>, you can export your code's blueprint into a <code>meow-structure.yml</code> file. 📄
                    This provides a clear and organized overview of your project, making it particularly helpful for documentation, onboarding new team members, or seamless team collaboration. 🤝
                </p>
            </section>

            <section id="projectBackup">
                <h2>💾 Project Backup - Safeguard Your Masterpiece!</h2>
                <p>
                    Never lose a line of code again! 🛡️ The <Code fullWidth>meow backup</Code> command creates a comprehensive backup of your entire project.
                    It smartly excludes unnecessary directories like <code>.git</code> and <code>node_modules</code>, ensuring your backups are lean and efficient. This is your ultimate safety net for safeguarding your hard work before major changes or just for peace of mind! 😌
                </p>
            </section>
        </>
    ),
};