import { RefObject } from "react";

export interface SidebarProps {
    scrollToSection: (element: HTMLElement | null) => void,
    refs: {
        about: RefObject<HTMLInputElement | null>;
        experience: RefObject<HTMLInputElement| null>;
        projects: RefObject<HTMLInputElement| null>;
        stack: RefObject<HTMLInputElement| null>;
    }
}

export interface AboutProps {
    aboutRef: RefObject<HTMLInputElement | null>;
}

export interface ExperienceProps {
    experienceRef: RefObject<HTMLInputElement | null>;
}

export interface ProjectsProps {
    projectsRef: RefObject<HTMLInputElement | null>;
}

export interface StackProps {
    stackRef: RefObject<HTMLInputElement | null>;
}
