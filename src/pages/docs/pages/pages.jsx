import { introductionPage } from "./guide/introduction";
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
        links: ["Introduction"],
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
