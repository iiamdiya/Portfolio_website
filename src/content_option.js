const logotext = "Diya";
const meta = {
    title: "Diya",
    description: "I’m Diya Front-End Developer,currently working in Toronto",
};

const introdata = {
    title: "I’m Diya",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I love designing",
    },
    description: "Web Development Professional with a Strong Drive to Push the Boundaries of User-Facing Applications | Skilled in a Variety of Technologies, Focused on Creating Intuitive and Visually Appealing Websites",

};

const dataabout = {
    title: "About myself",
    aboutme: "As a highly motivated and skilled frontend developer, I am always eager to push the boundaries of what is possible with user-facing web applications. With a strong passion for creating visually appealing and intuitive websites, I have spent the past few years honing my skills in a variety of technologies. Whether working as part of a team or individually, I am committed to delivering top-quality results and constantly seeking out new opportunities to learn and grow as a developer. Thank you for taking the time to visit my portfolio and learn more about my work and experience.",
};
const worktimeline = [{
        jobtitle: "Junior Frontend Developer",
        where: "Toronto",
        date: "January 2023, Present",
    },
    {
        jobtitle: "IT Order Entry",
        where: "Toronto",
        date: "January 2023, Present",
    }
];

const skills = [{
        name: "JavaScript",
        value: 65,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "HTML",
        value: 85,
    },
    {
        name: "CSS",
        value: 80,
    },
    {
        name: "MongoDB",
        value: 70,
    },
    {
        name: "NextJS",
        value: 50,
    },
];


const dataportfolio = [{
        img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1294&q=80",
        description: `"Map your workouts" using Javascript`,
        link: "https://iiamdiya.github.io/workout_map/",
    },
    {
        img: "https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
        description: `"Transform your text with a single click with ConvertCase!"`,
        link: "https://iiamdiya.github.io/convertCaseDeployed/",
    },
    {
        img: "https://images.unsplash.com/photo-1517849443514-73aa552d55bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: `"Unleash Your Inner Wordsmith with My Daily Blogs"`,
        link: "https://github.com/iiamdiya/My-Blog",
    },
    {
        img: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: `"Simplify your page design with React - Lay it out, React it up!"`,
        link: "https://lnkd.in/gR53tHkr",
    },
    {
        img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: `"Find the right person, in the right place, with the power of Next.js!"`,
        link: "https://people-listings-esfhxpwcl-iiamdiya.vercel.app/",
    },
    {
        img: "https://images.unsplash.com/photo-1650892243335-a0934906798c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        description: `"Get ready to drum up a storm with our virtual drumkit!"`,
        link: "https://iiamdiya.github.io/DrumKit/",
    },

    {
        img: "https://images.unsplash.com/photo-1588992370249-1b0fcaf6249b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: `"Elevate your style game with the ultimate clothing shopping template."`,
        link: "https://lnkd.in/gHeHCyPZ",
    },
    {
        img: "https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80",
        description: `"Shop Simplified HTML Template ~ the perfect fit for your online store!"`,
        link: "https://zrxp30it62ixx91yyxleyq.on.drv.tw/winter/",
    },
    {
        img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: `"Shop smarter, not harder with our e-commerce solution."`,
        link: "https://zrxp30it62ixx91yyxleyq.on.drv.tw/www.leeloo.com/E.HTML",
    },
];

const contactConfig = {
    YOUR_EMAIL: "diyagupta0717@gmail.com",
    YOUR_FONE: "437-992-0717",
    description: "Connect with me and let's create innovative and visually appealing web experiences together. My passion for user-centered design and strong technical skills make me a valuable asset for any web development project. Reach out to discuss how we can bring your ideas to life.",
    // create an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_z5l32ro",
    YOUR_TEMPLATE_ID: "template_l9ay1wb",
    YOUR_USER_ID: "wU1P8DGDWxg9RnQCB",
};

const socialprofils = {
    github: "https://github.com/iiamdiya",
    facebook: "https://www.facebook.com/profile.php?id=100006100215858",
    linkedin: "https://www.linkedin.com/in/diya-diya-b921031b8/",
    twitter: "https://twitter.com/search?q=iiamdiya&src=typed_query",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};