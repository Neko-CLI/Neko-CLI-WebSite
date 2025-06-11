import Code from "../../../components/code";
import { User, Link, Chip } from "@heroui/react";

export const nekoCliWindowsInstallation = {
  title: "Neko-CLI for Windows 💻",
  sections: [
    {
      id: "quick-start",
      name: "Quick Start ⚡",
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
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
        <p style={{ fontSize: "0.9em", color: "#666", marginTop: "8px" }}>
          Published on June 11, 2025 at 09:30 AM
        </p>
      </section>
      <section id="quick-start">
        <h2>Quick Start ⚡</h2>
        <p>
          Get <strong>Neko-CLI</strong> up and running on your <strong>Windows</strong> machine quickly!
        </p>

        <h3>Prerequisites:</h3>
        <p>
          To use Neko-CLI, you'll need <strong>Node.js</strong> installed on your system. Node.js comes bundled with <strong>npm</strong> (Node Package Manager), which we'll use to install Neko-CLI.
        </p>
        <p>
          If you don't have Node.js installed, download the <strong>Windows Installer</strong> directly from the official Node.js website:
          <br />
          <Link isExternal href="https://nodejs.org/en/download/" size="sm">
            Download Node.js for Windows
          </Link>
          <strong> or</strong>
          <Link isExternal href="https://github.com/UnStackss/Neko-CLI/releases/download/0.0.1/Neko-CLI-Installer.exe" size="sm">
            Download Neko-CLI Installer
          </Link>
        </p>
        <p>
          Follow the instructions in the installer. We recommend choosing the <strong>LTS (Long Term Support)</strong> version for stability.
        </p>
        <p>
          After installing Node.js, open your <strong>Command Prompt</strong> or <strong>PowerShell</strong> and verify the installation by checking the Node.js and npm versions:
          <br />
          <Code>node -v</Code>
          <br />
          <Code>npm -v</Code>
        </p>
        <p>You should see version numbers for both, confirming they are installed correctly.</p>

        <h3>Installation:</h3>
        <p>
          Once Node.js and npm are set up, you can install <strong>Neko-CLI</strong> globally using npm. This allows you to use the <Code>meow</Code> command from any directory in your terminal.
        </p>
        <Code>npm install -g neko-cli</Code>
        <p>
          The <Code>-g</Code> flag ensures a <strong>global install</strong>, making the <Code>meow</Code> command accessible system-wide. 🚀
        </p>

        <h3>Verify Install:</h3>
        <p>
          To confirm Neko-CLI is installed and working, check its version:
        </p>
        <Code>meow version</Code>
        <p>
          If a version number is displayed, you're all set! 🎉 You can now type <Code>meow help</Code> to explore all the available commands. 😉
        </p>
      </section>
    </>
  ),
};