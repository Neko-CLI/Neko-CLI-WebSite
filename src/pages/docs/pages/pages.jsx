import { introductionPage } from "./guide/introduction";
import { linuxInstallation} from "./guide/linuxInstallation";
import { termuxInstallation} from "./guide/termuxInstallation";
import { ishInstallation} from "./guide/iSHInstallation";
import { projectInitializationPage } from "./commands/projectInitialization";
import { scriptManagementPage } from "./commands/scriptManagement";
import { dependencyManagementPage } from "./commands/dependencyManagement";
import { dependencyAnalysisPage } from "./commands/analysis";
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
            "Script management",
            "Dependency management",
            "Dependency analysis",
            "Project insights",
            "Cleanup",
            "Help and support",
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
        Script_management: scriptManagementPage,
        Dependency_management: dependencyManagementPage,
        Dependency_analysis: dependencyAnalysisPage,
        Project_insights: projectInsightsPage,
        Cleanup: cleanupPage,
        Help_and_support: updatesPage,
    }
};
