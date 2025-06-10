import { introductionPage } from "./guide/introduction";
import { linuxInstallation} from "./guide/linuxInstallation";
import { termuxInstallation} from "./guide/termuxInstallation";
import { ishInstallation} from "./guide/iSHInstallation";
import { projectInitializationPage } from "./commands/projectInitialization";
import { scriptManagementPage } from "./commands/scriptManagement";
import { dependencyManagementPage } from "./commands/dependencyManagement";
import { dependencyAnalysisPage } from "./commands/analysis";
import { advancedToolsPage } from "./commands/advanced"
import { projectInsightsPage } from "./commands/projectInsights";
import { cleanupPage } from "./commands/cleanup";
import { updatesPage } from "./commands/updates";

export const pages = [
    {
        title: "Guide",
        links: [
            "Introduction",
            "Linux Installation",
            "Termux Installation",
            "IOS Installation"
        ],
    },
    {
        title: "Commands",
        links: [
            "Initialization",
            "Script Management",
            "Dependency Management",
            "Dependency Analysis",
            "Project Insights",
            "Cleanup",
            "Help and Support",
            "Advanced and Security"
        ],
    }
];

export const componentsMap = {
    Guide: {
        Introduction: introductionPage,
        Linux_Installation: linuxInstallation,
        Termux_Installation: termuxInstallation,
        IOS_Installation: ishInstallation
    },
    Commands: {
        Initialization: projectInitializationPage,
        Script_Management: scriptManagementPage,
        Dependency_Management: dependencyManagementPage,
        Dependency_Analysis: dependencyAnalysisPage,
        Project_Insights: projectInsightsPage,
        Cleanup: cleanupPage,
        Help_and_Support: updatesPage,
        Advanced_and_Security: advancedToolsPage
    }
};
