export interface Item {
    name: string;
    description: string;
}

export interface Category {
    title: string;
    description: string;
    items: Item[];
}

export const usesData: Category[] = [
    {
        title: 'Hardware',
        description: 'The physical tools that power my daily workflow',
        items: [
            {
                name: 'Apple MacBook Pro 16" (M4 Max)',
                description:
                    'I once promised myself that I\'d never be a Mac user and would stick to my Linux setup forever. Well, here we are. There is a quote from Game of Thrones which I think perfectly describes my journey from Linux to Mac: "I fought, I lost. Now I rest. But you, my dear friend, you\'ll be fighting Linux drivers forever." (Modified version).',
            },
            {
                name: 'Logitech MX Master 3S',
                description: 'Super comfortable, insane battery life, wireless and matches perfectly with Space Black MacBook Pro.',
            },
            {
                name: 'Logitech MX Keys Mini',
                description: 'Just like the mouse, it is super comfortable, insane battery life, wireless and matches perfectly with Space Black MacBook Pro.',
            },
            {
                name: 'Apple AirPods 4',
                description: "By far the best product Apple has ever made. Not a fan of the silicon ear tips on the AirPods Pro's so these are my go-tos.",
            },
        ],
    },
    {
        title: 'Software',
        description: 'Applications and tools that make development a joy',
        items: [
            {
                name: 'VSCode (Including Forks)',
                description:
                    'The only editor that strikes a good balance between having good defaults, being highly configurable and also lightweight. Every other editor I have tried either takes 20 seconds to open up, is a nightmare to configure or does not provide any sensible defaults.',
            },
            {
                name: 'TablePlus',
                description: 'The best database management tool out there. Native application (most competitors are Chromium based), looks beautiful and intuitive to use.',
            },
            {
                name: 'Figma',
                description: 'Thank you for not making me pay for Adobe products. Easy to use, developer friendly and now has great integration with Cursor through their MCP.',
            },
            {
                name: 'Railway',
                description:
                    'My absolute favourite platform for hosting web applications. I have tried it all, Heroku, Render, Netlify, Vercel and many others, none of them come close to Railway in my opinion. You can get started with $0 - $5 and easily deploy multiple full stack web apps and have observability, logs handled for you. Configuring CI, CDN, CF Tunnels is also a breeze.',
            },
        ],
    },
    {
        title: 'Other Awesome Products',
        description: 'Things that make life better outside of code',
        items: [
            {
                name: 'Vans Old Skool Sneakers',
                description:
                    'I can walk, run, workout, hike, play sports, go to work or wear them at a fancy event. You can do basically everything in those shoes. Unless it is snowing or there is heavy rain, then you are screwed.',
            },
            {
                name: 'IKEA Markus Chair',
                description: 'As a 196cm tall guy, it is basically impossible to find a comfortable chair that actually feels suitable for you and does not cost 6000 euros. This is a rare gem.',
            },
        ],
    },
];
