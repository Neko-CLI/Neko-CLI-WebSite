import Code from "../../../components/code";

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
            <section id="flush">
                <h2>Flush Scripts</h2>
                <p>
                    Run scripts using the cats framework with <Code fullWidth>meow flush</Code>
                </p>
            </section>
            <section id="devScript">
                <h2>Development Script</h2>
                <p>
                    <Code fullWidth>meow dev</Code> Use to execute the development script for your project.
                </p>
            </section>
        </>
    ),
};
