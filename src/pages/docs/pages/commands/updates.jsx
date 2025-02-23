import Code from "../../../components/code";

// FINITO

export const updatesPage = {
    title: "Updates and Help",
    sections: [
        {
            id: "updates",
            name: "Updates",
        },
        {
            id: "help",
            name: "Help and Support",
        },
    ],
    content: (
        <>
            <section id="updates">
                <h2>Updates</h2>
                <p>
                    Update MEOW CLI using <Code fullWidth>meow update</Code> <br></br> And check your version with <Code fullWidth>meow version</Code>.
                </p>
            </section>
            <section id="help">
                <h2>Help and Support</h2>
                <p>
                    Access the help guide using <Code fullWidth>meow help</Code>
                </p>
            </section>
        </>
    ),
};
