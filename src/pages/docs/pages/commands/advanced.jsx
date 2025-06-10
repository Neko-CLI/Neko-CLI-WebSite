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
                    Published on June 10, 2025 at 13:08 AM
                </p>
            </section>

      <section id="stale">
        <h2>⏳ Stale Dependency Check - Keep Your Project Fresh!</h2>
        <p>
          Don't let your project rely on forgotten code! 🕵️‍♂️ The `meow stale` command helps you identify dependencies that
          might be unmaintained or inactive. It checks their last publish date on npm and
          their GitHub repository for recent commits.
        </p>
        {/* The Code component is now outside the <p> tag */}
        <Code fullWidth>meow stale</Code>
        <p>
          This is crucial for preventing security vulnerabilities and ensuring your project
          uses well-supported packages. You can adjust the "staleness" threshold (default 180 days)
          with <Code>--threshold &lt;days&gt;</Code> and use a GitHub token with{" "}
          <Code>--github-token &lt;token&gt;</Code> to avoid API rate limits.
        </p>
        <Code fullWidth>meow stale --threshold 365 --github-token your_gh_token</Code>
      </section>

      <section id="sandbox">
        <h2>📦 Isolated Sandbox Environment - Test with Confidence!</h2>
        <p>
          Need to test a command or script in a truly clean environment? 🧪 The `meow sandbox` command creates a temporary,
          isolated workspace for your project. It copies your `package.json`, installs dependencies,
          and then executes your specified command within that clean setup.
        </p>
        {/* The Code component is now outside the <p> tag */}
        <Code fullWidth>meow sandbox &lt;command&gt; [args...]</Code>
        <p>
          This is perfect for:
          <ul>
            <li>Running tests or builds without affecting your main `node_modules`.</li>
            <li>Debugging dependency conflicts.</li>
            <li>Ensuring consistent results across different environments (CI/CD).</li>
          </ul>
          By default, it installs only production dependencies. Use <Code>--dev</Code> to include
          development dependencies, and <Code>--keep</Code> to prevent the sandbox from being
          automatically deleted after execution (useful for debugging). You can also force
          `npm` or `yarn` installation with <Code>--npm</Code> or <Code>--yarn</Code>.
        </p>
        <Code fullWidth>meow sandbox npm test --dev --keep</Code>
        <Code fullWidth>meow sandbox webpack -- --config webpack.prod.js</Code>
      </section>
    </>
  ),
};