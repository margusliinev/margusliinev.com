export interface WorkExperience {
    company: string;
    role: string;
    logo: string;
    startDate: string;
    endDate: string | null;
}

export const workExperience: WorkExperience[] = [
    {
        company: 'Opus',
        role: 'Software Developer',
        logo: '/images/opus.jpg',
        startDate: '2025-10',
        endDate: null,
    },
    {
        company: 'Pipedrive',
        role: 'Software Engineer',
        logo: '/images/pipedrive.png',
        startDate: '2024-06',
        endDate: '2025-10',
    },
    {
        company: 'Kuehne+Nagel',
        role: 'Frontend Developer Internship',
        logo: '/images/kuehnenagel.jpg',
        startDate: '2023-10',
        endDate: '2023-12',
    },
    {
        company: 'Starship Technologies',
        role: 'Customer Support',
        logo: '/images/starship.jpeg',
        startDate: '2022-03',
        endDate: '2024-05',
    },
];
