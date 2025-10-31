export interface Project {
    id: string;
    title: string;
    description: string;
    link: string;
    github?: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}