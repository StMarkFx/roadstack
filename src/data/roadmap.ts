export const roadmaps = {
    web_dev: {
      title: "Web Development",
      description: "Learn HTML, CSS, JS, and React.",
      stages: [
        {
          name: "Beginner",
          skills: [
            { id: "html", name: "HTML Basics", resources: [{ title: "MDN HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" }] },
            { id: "css", name: "CSS Basics", resources: [{ title: "CSS Tricks", url: "https://css-tricks.com" }] }
          ],
          projects: [{ name: "Build a Portfolio", difficulty: "Beginner" }]
        }
      ]
    },
    data_science: {
      title: "Data Science",
      description: "Learn Python, Pandas, and ML.",
      stages: [
        {
          name: "Beginner",
          skills: [
            { id: "python", name: "Python Basics", resources: [{ title: "Python Docs", url: "https://docs.python.org/3/" }] },
            { id: "pandas", name: "Pandas for Data Analysis", resources: [{ title: "Pandas Guide", url: "https://pandas.pydata.org/docs/" }] }
          ],
          projects: [{ name: "Analyze a Dataset", difficulty: "Beginner" }]
        }
      ]
    }
  };
  