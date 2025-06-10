import Code from "../../../components/code";
import { User, Link, Chip } from "@heroui/react";
export const advancedToolsPage = {
  title: "Advanced and Security",
  sections: [
    {
      id: "stale",
      name: "Stale Dependency Check",
    },
    {
      id: "sandbox",
      name: "Isolated Sandbox Environment",
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
          Published on June 10, 2025 at 13:08 AM
        </p>
      </section>
      <section id="stale">
        <h2>⏳ Stale Dependency Check - Keep Your Project Fresh!</h2>
        <p>
          Don't let your project rely on forgotten code! 🕵️‍♂️ The{" "}
          <Code>meow stale</Code> command helps you identify dependencies that
          might be unmaintained or inactive. It checks their last publish date
          on npm and their GitHub repository for recent commits.
        </p>
        <Code fullWidth>meow stale</Code>
        <p>
          This is crucial for preventing **security vulnerabilities** and
          ensuring your project uses **well-supported packages**. Keep your
          project vibrant and secure! ✨🛡️
        </p>
      </section>
      <section id="sandbox">
        <h2>📦 Isolated Sandbox Environment - Test with Confidence!</h2>
        <p>
          Need to test a command or script in a truly clean environment? 🧪 The
          <Code>meow sandbox</Code> command creates a temporary, isolated
          workspace for your project and provides an interactive shell.
        </p>
        <Code fullWidth>meow sandbox</Code>
        <p>
          Once inside, you can run any command in this clean setup. Use
          <Code>sandbox destroy</Code> to clean up the environment or{" "}
          <Code>sandbox open</Code> to view its directory. 🚀📁
        </p>
      </section>
    </>
  ),
};
