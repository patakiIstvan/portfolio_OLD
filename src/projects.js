import portfolioPic from './assets/images/project_portfolio.png';
import kartyasPic from './assets/images/project_kartyas.png';
import pomodoroPic from './assets/images/project_gpomodoro.png';
import smartcityPic from './assets/images/project_smartcity.png';
const projectData = [
    {
      title: "Personal portfolio",
      desc: "A brief introduction of me and my projects, which I intend to keep up to date",
      github: "https://github.com/patakiIstvan/portfolio",
      pic: portfolioPic,
      tech: ["HTML", "CSS/SCSS", "javascript", "react.js"],
      category: ["mydesign"]
    },
    {
      title: "Fancy cards",
      desc: "I followed a design which included some fancy cards",
      github: "https://github.com/patakiIstvan/fancy-cards",
      pic: kartyasPic,
      tech: ["HTML", "CSS/PostCSS", "javascript"],
      category: ["notmydesign"]
    },
    {
      title: "Pomodoro timer",
      desc: "Its a customizable timer which helps you stay focused",
      github: "https://github.com/patakiIstvan/pomodoro",
      pic: pomodoroPic,
      tech: ["HTML", "CSS/SASS", "javascript", "react.js"],
      category: ["mydesign"]
    },
    {
      title: "Smart city",
      desc: "A smaller landing page, which is browser compatible",
      github: "https://github.com/patakiIstvan/Smart-city-landpage/tree/master",
      pic: smartcityPic,
      tech: ["HTML", "CSS/SASS", "javascript", "react.js"],
      category: ["notmydesign"]
    }
  ]

  export default projectData;