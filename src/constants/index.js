import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    meta,
    starbucks,
    tesla,
    galanto,
    shopify,
    carrent,
    jobit,
    tripguide,
    cosmosgame,
    Rollerballgame,
    Katanagame,
    blender,
    cp,
    csharp,
    cpp,
    figma,
    krita,
    photoshop,
    python,
    trello,
    unity,
    unreal,
    visualStudio,
    vscode,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Gameplay Programmer",
      icon: web,
    },
    {
      title: "Unity Developer",
      icon: mobile,
    },
    {
      title: "Game Designer",
      icon: backend,
    },
    {
      title: "3D Modeller",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "VsCode",
      icon: vscode,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Blender",
      icon: blender,
    },
    {
      name: "Unreal",
      icon: unreal,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Visual Studio",
      icon: visualStudio,
    },
    {
      name: "Krita",
      icon: krita,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Photoshop",
      icon: photoshop,
    },
    // {
    //   name: "HTML",
    //   icon: html,
    // },
    // {
    //   name: "CSS",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    // {
    //   name: "Python",
    //   icon: python,
    // },
    // {
    //   name: "Trello",
    //   icon: trello,
    // },
  ];
  
  const experiences = [

    {
      title: "Game Developer",
      company_name: "Galanto Innovations",
      icon: galanto,
      iconBg: "#ffffff",
      date: "February 2023 - May 2023",
      points: [

        "Develop and maintain virtual exercise games using Unity, C#, Blender, and other relevant technologies for healthcare.",
        "Collaborate with cross-functional teams, including Android developers, to create high-quality games.",
        "Address Engagement and Motivation pain points to design a more effective and sustainable exercise program.",
        "Ensure cross-tablet compatibility with responsive design for the developed games.",
        "Provide constructive documentation for future developers to facilitate understanding and development.",
      ],
    },
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Working with Kevin was a delight - dedicated, and impressively skilled in Unity and C# programming, with remarkable creativity and quick learning.",
      name: "Chandan Kumar Jha",
      designation: "Co-founder",
      company: "Galanto Innovations",
      image: galanto,
      //image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Cosmos Combat",
      description:
        "It's a 2D wave-based space shooting game! you battle against enemy ships and meteors. Destroying enemies and meteors will grant you valuable loot such as weapons and health to aid in your survival.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "Visual Studio",
          color: "green-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: cosmosgame,
      source_code_link: "https://github.com/Enjoy0099/Cosmos-Combat",
    },
    {
      name: "Rollerball Rampage",
      description:
        "In this arcade-style Sumo battle!, your objective is to knock off increasingly challenging waves of enemies from a floating island. Use power-ups strategically to gain temporary advantages.",
      tags: [
        {
          name: "Csharp",
          color: "blue-text-gradient",
        },
        {
          name: "Blender",
          color: "green-text-gradient",
        },
        {
          name: "Unity3D",
          color: "pink-text-gradient",
        },
      ],
      image: Rollerballgame,
      source_code_link: "https://github.com/Enjoy0099/Rollerball-Rampage",
    },
    {
      name: "Katana-Rush",
      description:
        "2D infinite running game! you dodge obstacles and enemies in a never-ending race. Aim to surpass your highest score and unlock exciting new characters along the way.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "Krita",
          color: "green-text-gradient",
        },
        {
          name: "Csharp",
          color: "pink-text-gradient",
        },
      ],
      image: Katanagame,
      source_code_link: "https://github.com/Enjoy0099/Katana-Rush",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };