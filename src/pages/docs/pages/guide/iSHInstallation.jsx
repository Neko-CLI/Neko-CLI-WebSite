import Code from "../../../components/code";
import VideoEmbed from "../../../components/videoEmbed";
import { User, Link, Chip } from "@heroui/react";

export const ishInstallation = {
  title: "Neko-CLI for iSH 🍏 (IOS)",
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
            src: "https://i.ibb.co/zVXk5wqg/image.png",
          }}
          description={
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
        <p style={{ fontSize: "0.9em", color: "#666", marginTop: "8px" }}>
          Published on June 1, 2025 at 13:40 AM
        </p>
      </section>
      <section id="quick-start">
        <h2>Quick Start ⚡</h2>
        <p>
          Get <strong>Neko-CLI</strong> running quickly on your{" "}
          <strong>iPhone or iPad</strong> using iSH!
        </p>

        <h3>Prerequisites:</h3>
        <p>
          You'll need <strong>iSH</strong> installed. Download it directly from
          the{" "}
          <a
            href="https://apps.apple.com/us/app/ish-shell/id1436902243"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Apple App Store
          </a>
          .
        </p>
        <p>
          Once iSH is installed, open it. iSH emulates an Alpine Linux
          environment, so you'll use the `apk` package manager. First, update
          your package lists and install Node.js (which includes npm) by running
          these commands:
          <br />
          <Code>apk update</Code>
          <br />
          <Code>apk add nodejs npm</Code>
        </p>
        <p>Verify your installations: `node -v` and `npm -v`.</p>

        <h3>Installation:</h3>
        <p>Now, install Neko-CLI globally using npm:</p>
        <Code>npm i -g neko-cli</Code>
        <p>
          The `-g` flag ensures a <strong>global install</strong>, letting you
          use `meow` commands anywhere in iSH! 🚀
        </p>

        <h3>Verify Install:</h3>
        <p>Confirm it's working by checking the version:</p>
        <Code>meow version</Code>
        <p>
          A version number means you're all set! 🎉 Type `meow help` to explore!
          😉
        </p>
      </section>

      <hr />

      <section id="video-tutorial">
        <h2>Video Guide 📺</h2>
        <p>
          Prefer a visual walkthrough? This video demonstrates the Neko-CLI
          installation process for iSH:
        </p>
        <VideoEmbed
          videoId="KnHd_RqEcRU"
          title="Neko-CLI iSH Installation Tutorial"
        />
        <p className="text-sm mt-4 text-gray-500 text-center"></p>
      </section>
    </>
  ),
};
