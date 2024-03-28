import {
  IDZ,
  Galanto,
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
  Mobile_AR_Development,
  Junior_Programmer,
  Unity_Essentials,
  Creative_Core,
  cosmosgame,
  Rollerballgame,
  Katanagame,
  Artifact,
  AR_Mark,
  RollerBaller,
  Click_Champ,
  AR_Dart,
  Open_Door,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Work",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Gameplay Programmer",
      icon: Junior_Programmer,
    },
    {
      title: "Unity Developer",
      icon: Creative_Core,
    },
    {
      title: "Game Designer",
      icon: Unity_Essentials,
    },
    {
      title: "Mobile AR Developer",
      icon: Mobile_AR_Development,
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
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Trello",
      icon: trello,
    },
  ];
  
  const experiences = [

    {
      title: "Game Developer",
      company_name: "Galanto Innovations",
      icon: Galanto,
      iconBg: "#ffffff",
      date: "February 2023 - May 2023",
      points: [

        "Develop and maintain virtual exercise games using Unity, C#, Blender, etc. for healthcare.",
        "Collaborate with Android developers to ensure high-quality game creation.",
        "Address engagement and motivation pain points to enhance exercise program effectiveness.",
      ],
    },
    {
      title: "Game Developer",
      company_name: "IDZ Digital Private Limited",
      icon: IDZ,
      iconBg: "#ffffff",
      date: "September 2023 - Present",
      points: [

        "Develop engaging 2D Unity games for kids, mixing learning with play.",
        "Work with artists, content creators, and fellow developers to find innovate creative solutions for kids' games.",
        "Ensure seamless cross-tablet compatibility for Android and iOS devices through responsive design implementation.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Working with Kevin was a delight - dedicated, and impressively skilled in Unity and C# programming, with remarkable creativity and quick learning.",
      name: "Chandan Kumar Jha",
      designation: "Co-founder",
      company: "Galanto Innovations",
      image: Galanto,
    },
  ];
  
  const projects = [
    {
      name: "Open Door",
      description:
        "This is a puzzle game where you collect three crystals, solve puzzles, and reach the door to win.",
      tags: [
        {
          name: "Unreal",
          color: "white-text-gradient",
        },
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Visual Studio",
          color: "green-text-gradient",
        },
      ],
      image: Open_Door,
      source_code_link: "https://github.com/Enjoy0099/First-Unreal-Game",
    },
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
          color: "orange-text-gradient",
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
      name: "The Artifact",
      description:
        "Protect artifact and bushes from the wolf. Heal artifact with bush fruits to win. Player and artifact health are linked - if artifact falls, you lose.",
      tags: [
        {
          name: "Unity2D",
          color: "blue-text-gradient",
        },
        {
          name: "Csharp",
          color: "pink-text-gradient",
        },
      ],
      image: Artifact,
      source_code_link: "https://github.com/Enjoy0099/The-Artifact",
    },
    {
      name: "AR Marker",
      description:
        "A marker-based app, where the device recognizes a specific image and projects an interactive 3D model on top of it.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "AR",
          color: "white-text-gradient",
        },
      ],
      image: AR_Mark,
      source_code_link: "https://github.com/Enjoy0099/AR-Marker-Unity",
    },
    {
      name: "Roller-Baller",
      description:
        "Navigate 3D ball, where you collect coins while avoiding enemies and lava. Gather all coins in time, or it's game over.",
      tags: [
        {
          name: "Unity3D",
          color: "pink-text-gradient",
        },
        {
          name: "Visual Studio",
          color: "green-text-gradient",
        },
        {
          name: "Csharp",
          color: "orange-text-gradient",
        },
      ],
      image: RollerBaller,
      source_code_link: "https://github.com/Enjoy0099/Roller-Baller",
    },
    {
      name: "Click Champ",
      description:
        "It's a basic 2D game. Click on targets appearing from the bottom. Destroy good targets, avoid the bad ones.",
      tags: [
        {
          name: "Unity3D",
          color: "orange-text-gradient",
        },
        {
          name: "Visual Studio",
          color: "blue-text-gradient",
        },
        {
          name: "Csharp",
          color: "green-text-gradient",
        },
      ],
      image: Click_Champ,
      source_code_link: "https://github.com/Enjoy0099/Click-Champ",
    },
    {
      name: "AR Dart Game",
      description:
        "AR Dart is an augmented reality game. Find flat surfaces, place a dartboard, and throw darts at it.",
      tags: [
        {
          name: "Unity3D",
          color: "green-text-gradient",
        },
        {
          name: "AR",
          color: "white-text-gradient",
        },
        {
          name: "Csharp",
          color: "blue-text-gradient",
        },
      ],
      image: AR_Dart,
      source_code_link: "https://github.com/Enjoy0099/My_AR_App",
    },
    {
      name: "Katana-Rush",
      description:
        "2D infinite running game! you dodge obstacles and enemies in a never-ending race. Aim to surpass your highest score and unlock exciting new characters along the way.",
      tags: [
        {
          name: "Unity2D",
          color: "green-text-gradient",
        },
        {
          name: "Krita",
          color: "orange-text-gradient",
        },
        {
          name: "Csharp",
          color: "blue-text-gradient",
        },
      ],
      image: Katanagame,
      source_code_link: "https://github.com/Enjoy0099/Katana-Rush",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };