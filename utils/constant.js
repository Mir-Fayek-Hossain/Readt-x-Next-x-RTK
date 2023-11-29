//navigation section
export const navigation = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About Us",
        link: "/about-us",
    },
    {
        name: "Apps",
        link: "/apps",
        child: [
            {
                name: "Shopify Mobile App",
                link: "/shopify-mobile-app-development",
            },
            {
                name: "Custom Mobile App",
                link: "/custom-mobile-app-development",
            },
        ],
    },
    {
        name: "Web",
        link: "/web",
        child: [{ name: "Frontend", link: "/frontend-development-service" }],
    },
    {
        name: "Contact",
        link: "/contact-us",
    },
    // {
    //     name: "blog",
    //     link: "/blog",
    // },
];
// faq data
export const faqData = [
    {
        question: "What Codecony need to start ?",
        answer: "We need your ux ui source file like figma, adobe xd, PSD, Sketch or Any Source you have done.",
    },
    {
        question: "What if I don't have UI ?",
        answer: "Sorry ! Without your UI UX file we can’t process it.",
    },
    {
        question: "What will be the cost of project ?",
        answer: "It depends on your project size and technical stack. So for this you can set a meeting to discuss for a price quotations.",
    },
    {
        question: "Can I see live progress of my Project ?",
        answer: "Yes, If you are want to see the progress we can make a test deployment on our server and can share the link to you.",
    },
    {
        question: "Can I see Demo work ?",
        answer: "We deliver the source code through Github, GitLab, BitBucket and Zip Upload. But We don’t prefer ZIP upload.",
    },
];

// why chose codecony reasons
export const reasons = [
    {
        title: "One-time Purchase with Source Code",
        description:
            "This means that you will have complete control over the source deo, with the ability to view and potentially modify the underlying code to fit your specific needs and preferences.",
    },
    {
        title: "Proper Project Management",
        description:
            "To effectively manage a project, it’s impossible ignore those essential elements when it comes to arrange resources and distribute the budget for each phase of the plan.",
    },
    {
        title: "On Time Delivery",
        description:
            "We have implemented strict project management processes and use agile methodologies to ensure that we stay on track and meet deadlines.We are committed to delivering on our promises and exceeding your expectations.",
    },
];

// shopify app grid
export const shopifyAppGridDetails = [
    {
        imgUrl: "/app development/shopify.jpg",
        title: "Market Place Integration",
        description:
            "Whether you need Shopify mobile app for your customers to access your products or services, or a more complex app with multiple features and integrations.",
    },
    {
        imgUrl: "/app development/testing.jpg",
        title: "Testing & QA",
        description:
            "Ensuring that your app is bug-free and performs well on all devices is critical to its success. Our team of testers and QA professionals will thoroughly test.",
    },
    {
        imgUrl: "/app development/shopify-app.jpg",
        title: "Android & iOS Support",
        description:
            "We have some pre-ready mobile app templates where you can easily integrate your shopify store. It will work dynamically with your shopify backend.",
    },
];

// custom app grid
export const customAppGridDetails = [
    {
        imgUrl: "/app development/custom.jpg",
        title: "Custom Mobile App Development",
        description:
            " A close-up of a programmer's hands typing on a computer keyboard while working on a mobile app development project.",
    },
    {
        imgUrl: "/app development/testing.jpg",
        title: "Mobile Commerce App",
        description:
            " Transform your online store into a native mobile commerce app with our custom development services.",
    },
    {
        imgUrl: "/app development/shopify-app.jpg",
        title: "Development for All Devices",
        description:
            "A collage of several different mobile devices, including iOS and Android, with a custom mobile app displayed on each screen.",
    },
];

export const slides = [
    {
        description:
            "Identify and assess the necessary requirements for achieving set goals.",
        img: "/slider-image-1.jpg",
    },
    {
        description:
            "Refine and adjust the plans, documents, and materials to optimize their effectiveness.",
        img: "/slider-image-2.jpg",
    },
    {
        description:
            "Finalize the approach and methods as needed to ensure the successful execution of each phase.",
        img: "/slider-image-3.jpg",
    },
    {
        description:
            "Supervisors provide feedback on necessary changes to align with agile principles.",
        img: "/slider-image-4.jpg",
    },
    {
        description: "The final step before delivery is go through  QA TEST.",
        img: "/slider-image-5.jpg",
    },
];
