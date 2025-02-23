import Code from "../../../components/code";

// FINITO

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
            <section id="projectInitialization">
                <h2>Project Initialization</h2>
                <p>
                    <Code fullWidth>meow init [--skip | -y]</Code> Using this command you can quickly set up a new project.
                    The <code>--skip</code> or <code>-y</code> flags allow you to bypass interactive questions for a streamlined
                    experience.
                </p>
            </section>

            <section id="projectStructure">
                <h2>Project Structure</h2>
                <p>
                    <Code fullWidth>meow struct</Code> Then, with this command you can export your code into a <code>meow-structure.yml</code> file,
                    providing a clear and organized overview of your project. 
                    This is particularly helpful for documentation or team collaboration.
                </p>
            </section>

            <section id="projectBackup">
                <h2>Project Backup</h2>
                <p>
                    <Code fullWidth>meow backup</Code> And if you need a backup, this command to creates a comprehensive backup of your project. It 
                    automatically excludes unnecessary directories like <code>.git</code> and 
                    <code>node_modules</code>, making it ideal for safeguarding your work before major changes.
                </p>
            </section>
        </>
    ),
};
