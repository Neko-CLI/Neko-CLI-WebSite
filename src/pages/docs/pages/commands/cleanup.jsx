import Code from "../../../components/code";

export const cleanupPage = {
    title: "Cleanup and Compatibility",
    sections: [
        {
            id: "clean",
            name: "Clean Project",
        },
        {
            id: "compatibility",
            name: "Check Compatibility",
        },
    ],
    content: (
        <>
            <section id="clean">
                <h2>Clean Project</h2>
                <p>
                    <Code fullWidth>meow clean</Code> Use it to remove logs, backups, and unused files.
                </p>
            </section>
            <section id="compatibility">
                <h2>Check Compatibility</h2>
                <p>
                    Verify dependency compatibility with <Code fullWidth>meow compatibility</Code>
                </p>
            </section>
        </>
    ),
};
