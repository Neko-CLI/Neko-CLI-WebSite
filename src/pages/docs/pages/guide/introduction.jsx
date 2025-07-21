import {User, Link, Chip, Button} from "@heroui/react";

export const introductionPage = {
    title: "Introduction",
    sections: [
        {
            id: "depsNeko",
            name: "DepsNeko",
        },
        {
            id: "keyFeatures",
            name: "Key Features of Neko-CLI",
        },
        {
            id: "vscodePlugin",
            name: "VSCode Plugin for deps.neko",
        },
        {
            id: "installOnIOS",
            name: "Installation on iOS (via AltStore)",
        },
        {
            id: "documentation",
            name: "Documentation and Resources",
        },
        {
            id: "whyNekoCLI",
            name: "Why Developers Love Neko-CLI",
        },
        {
            id: "gettingStarted",
            name: "Ready to Get Started?",
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
            <section id="introduction">
                <p>
                    Welcome to <strong>Neko-CLI</strong> 🐱, your custom package manager for Node.js! Neko-CLI is
                    designed to simplify and optimize your project's dependency management, making it faster, more
                    efficient, and more secure. Whether you're initializing a new project, managing packages, or
                    keeping your codebase clean, Neko-CLI provides all the tools you need in one streamlined package. ✨
                </p>
            </section>

            <section id="depsNeko">
                <h2>🐾 deps.neko - The Native Package Manager of Neko CLI</h2>
                <p>
                    <strong>deps.neko</strong> is the beating heart ❤️ of Neko CLI—a lock file that tracks packages
                    and their versions for each project managed. It functions as a dedicated dependency manager,
                    much like `package.json` in npm, but with a fun feline twist. Every package added
                    via Neko CLI is recorded in deps.neko, allowing you to easily manage your project's dependencies
                    with confidence.
                </p>
                <p>Neko-CLI provides advanced features for managing dependencies, including:</p>
                <ul>
                    <li>
                        <strong>Automated Dependency Updates:</strong> Stay up-to-date with the latest versions of
                        your dependencies without manual intervention. 🔄
                    </li>
                    <li>
                        <strong>Conflict Resolution:</strong> Quickly identify and resolve versioning conflicts in
                        your dependency tree. 🧩
                    </li>
                </ul>
            </section>

            <section id="keyFeatures">
                <h2>🌟 Key Features of Neko-CLI</h2>
                <p>With Neko-CLI, you can effortlessly:</p>
                <ul>
                    <li>
                        <strong>Install and Remove Packages:</strong> Manage project dependencies with simple and
                        intuitive commands. ➕➖
                    </li>
                    <li>
                        <strong>Analyze Bundle Sizes:</strong> Keep track of your project's bundle size to optimize
                        performance. 📊
                    </li>
                    <li>
                        <strong>Scan for Vulnerabilities:</strong> Ensure security by regularly scanning your
                        dependencies for known issues. 🔒
                    </li>
                    <li>
                        <strong>Backup Projects:</strong> Secure your work with robust project backup tools. 💾
                    </li>
                    <li>
                        <strong>Ensure Compatibility:</strong> Guarantee compatibility with the latest Node.js
                        versions. ✅
                    </li>
                    <li>
                        <strong>Clean Up:</strong> Remove unnecessary files and dependencies to keep your project tidy. 🧹
                    </li>
                </ul>
            </section>

            <section id="vscodePlugin">
                <h2>💻 VSCode Extension for deps.neko</h2>
                <p>
                    Enhance your development workflow with the official <strong>Neko-CLI VSCode extension</strong> for <strong>deps.neko</strong>! This plugin provides seamless integration, offering features like syntax highlighting, auto-completion, and direct access to Neko-CLI commands right within your Visual Studio Code environment. Manage your `deps.neko` file with even greater ease and efficiency.
                </p>
                <p>
                    You can find the extension here: <Link isExternal href="https://marketplace.visualstudio.com/items?itemName=Neko-CLI.neko-cli-support">Neko-CLI Support for VSCode</Link> 🚀
                </p>
            </section>

            <section id="installOnIOS">
                <h2>📱 Installing the Neko-CLI App (for iOS) via AltStore</h2>
                <p>
                    While <strong>Neko-CLI</strong> is a powerful command-line tool for Node.js project management, the <strong>Neko-CLI App for iOS</strong> (if available) would be a dedicated mobile application you might want to install on your iPhone or iPad. Since it's not an app available on the official App Store, you can install it using <strong>AltStore</strong>, a tool that allows "sideloading" of unsigned iOS applications.
                </p>

                <h3>Part 1: Installing AltStore on your iPhone/iPad</h3>
                <p>
                    To begin, you'll need a computer (Windows or macOS) and your iOS device.
                </p>
                <ol>
                    <li>
                        <strong>Prepare your Computer:</strong>
                        <ul>
                            <li><strong>For Windows:</strong> Download and install the latest versions of <strong>iTunes</strong> (from Apple's website, not the Microsoft Store) and <strong>iCloud</strong>. Make sure to restart your computer after installation to ensure everything functions correctly.</li>
                            <li><strong>For macOS:</strong> Ensure <strong>iTunes</strong> (or <strong>Finder</strong>, on macOS Catalina and later) is updated.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Download AltServer:</strong> Visit the official AltStore website.
                        <Button
                            color="cyan"
                            onClick={() => window.open("https://altstore.io/", "_blank")}
                            className="ml-2"
                        >
                            Download AltServer
                        </Button>
                        . Download and install <strong>AltServer</strong> for your operating system (Windows or macOS).
                    </li>
                    <li>
                        <strong>Launch AltServer:</strong>
                        <ul>
                            <li><strong>On Windows:</strong> AltServer will run in the system tray (bottom-right corner).</li>
                            <li><strong>On macOS:</strong> AltServer will appear in the menu bar (top-right corner).</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Connect your iOS Device:</strong> Connect your iPhone or iPad to your computer using a USB cable. If prompted, "Trust" the computer on your device.
                    </li>
                    <li>
                        <strong>Install AltStore to your device:</strong>
                        <ul>
                            <li><strong>On Windows:</strong> Click the AltServer icon in the system tray, then "Install AltStore" and select your device.</li>
                            <li><strong>On macOS:</strong> Click the AltServer icon in the menu bar, then "Install AltStore" and select your device.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Enter your Apple ID:</strong> You'll be prompted to enter your Apple ID and password. This information is sent directly to Apple for signing purposes and is not stored by AltStore.
                    </li>
                    <li>
                        <strong>Check your Device:</strong> The AltStore icon should now appear on your iPhone/iPad's home screen.
                    </li>
                    <li>
                        <strong>Trust the Developer Profile:</strong> Before opening AltStore, go to your iOS device's settings: <code>Settings &gt; General &gt; VPN &amp; Device Management</code>. Find your Apple ID, tap it, and then tap "Trust [Your Apple ID]".
                    </li>
                    <li>
                        You can now open AltStore on your device. Keep in mind that AltStore apps expire after 7 days and require you to connect to AltServer on your computer (via Wi-Fi or USB) to refresh them.
                    </li>
                </ol>

                <h3>Part 2: Installing the Neko-CLI App (.ipa file) via AltStore</h3>
                <p>
                    <strong>Important Note:</strong> This guide assumes you have the <code>.ipa</code> file for the Neko-CLI iOS application.
                </p>
                <ol>
                    <li>
                        <strong>Download the Neko-CLI App IPA:</strong> You can download the <code>.ipa</code> file for the Neko-CLI iOS application from this link:
                        <Button
                            color="cyan"
                            onClick={() => window.open("https://github.com/Neko-CLI/Neko-CLI-IOS-APP/releases/download/latest/NekoCLI.ipa", "_blank")}
                            className="ml-2"
                        >
                            Download NekoCLI.ipa
                        </Button>
                        . Save it to your iPhone/iPad (e.g., in the Files app, or download it directly on your device).
                    </li>
                    <li>
                        <strong>Open AltStore:</strong> Launch the AltStore app on your iPhone/iPad.
                    </li>
                    <li>
                        <strong>Go to "My Apps":</strong> Tap on the "My Apps" tab at the bottom of the AltStore screen.
                    </li>
                    <li>
                        <strong>Add New App:</strong> Tap the "+" icon in the top-left corner.
                    </li>
                    <li>
                        <strong>Select the IPA:</strong> Browse to the location where you saved the <code>NekoCLI.ipa</code> file and select it.
                    </li>
                    <li>
                        <strong>Enter Apple ID (if prompted):</strong> You may be asked to re-enter your Apple ID and password.
                    </li>
                    <li>
                        <strong>Installation Process:</strong> AltStore will now begin installing the Neko-CLI app. This may take a few moments.
                    </li>
                    <li>
                        <strong>Launch Neko-CLI:</strong> Once the installation is complete, the Neko-CLI app icon will appear on your home screen. You can now launch and use it.
                    </li>
                    <li>
                        <strong>Refresh Apps:</strong> Remember to periodically connect your iPhone/iPad to the computer running AltServer (either via USB or on the same Wi-Fi network) and open AltStore to refresh your installed apps and prevent them from expiring after 7 days. You can refresh by going to "My Apps" and tapping "Refresh All".
                    </li>
                </ol>
                <p>
                    For further assistance with AltStore, please refer to the <Link isExternal href="https://altstore.io/faq/" className="text-link">https://altstore.io/faq/</Link>.
                </p>
            </section>


            <section id="documentation">
                <h2>📘 Documentation and Resources</h2>
                <p>
                    Neko-CLI is well-documented, offering resources for both beginners and advanced users. Explore
                    detailed guides, API references, and tips to get the most out of Neko-CLI. 📚
                </p>
                <p>
                    Additionally, the Neko-CLI community is active and supportive. Join discussions, share best practices,
                    and stay informed about the latest updates. 💬
                </p>
            </section>

            <section id="whyNekoCLI">
                <h2>💖 Why Developers Love Neko-CLI</h2>
                <p>
                    <strong>Neko-CLI</strong> stands out because it's built with developers in mind. It's fast, flexible,
                    and designed to simplify the challenges of modern development. Whether you're working on a personal
                    project or leading a team, Neko-CLI adapts to your needs. 🎯
                </p>
            </section>

            <section id="gettingStarted">
                <h2>🚀 Ready to Get Started?</h2>
                <p>
                    For more information, updates, and detailed documentation, visit the
                    <Link isExternal href="https://neko-cli.com" className="text-link">
                        official Neko-CLI website
                    </Link>
                    .
                    <strong>Get ready to streamline your development process with Neko-CLI! 🐾</strong>
                </p>
            </section>
        </>
    ),
};