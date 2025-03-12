import React, { useState } from 'react';

const TechRoadmapApp = () => {
  const [selectedField, setSelectedField] = useState(null);
  
  // Tech fields with their respective roadmaps
  const techFields = [
    { id: 'web-dev', name: 'Web Development' },
    { id: 'data-science', name: 'Data Science & ML' },
    { id: 'backend', name: 'Backend Engineering' },
    { id: 'frontend', name: 'Frontend Engineering' },
    { id: 'devops', name: 'DevOps & Cloud' },
    { id: 'mobile', name: 'Mobile Development' }
  ];
  
  // Roadmap data structure
  const roadmaps = {
    'web-dev': {
      title: 'Web Development Roadmap',
      stages: [
        {
          name: 'Fundamentals',
          skills: [
            { name: 'HTML5', resources: [
              { type: 'Course', title: 'MDN Web Docs: HTML', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML' },
              { type: 'GitHub', title: 'HTML5 Boilerplate', url: 'https://github.com/h5bp/html5-boilerplate' }
            ]},
            { name: 'CSS3', resources: [
              { type: 'Course', title: 'CSS - The Complete Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS' },
              { type: 'GitHub', title: 'Awesome CSS Learning', url: 'https://github.com/micromata/awesome-css-learning' }
            ]},
            { name: 'JavaScript', resources: [
              { type: 'Course', title: 'JavaScript.info', url: 'https://javascript.info/' },
              { type: 'GitHub', title: 'JavaScript Algorithms', url: 'https://github.com/trekhleb/javascript-algorithms' }
            ]}
          ],
          projects: [
            { name: 'Personal Portfolio', description: 'Create a responsive personal portfolio website with HTML/CSS' },
            { name: 'Interactive Landing Page', description: 'Build a landing page with interactive JavaScript elements' }
          ]
        },
        {
          name: 'Frontend Frameworks',
          skills: [
            { name: 'React.js', resources: [
              { type: 'Course', title: 'React Official Docs', url: 'https://react.dev/' },
              { type: 'GitHub', title: 'Awesome React', url: 'https://github.com/enaqx/awesome-react' }
            ]},
            { name: 'Next.js', resources: [
              { type: 'Course', title: 'Next.js Learn', url: 'https://nextjs.org/learn' },
              { type: 'GitHub', title: 'Next.js Examples', url: 'https://github.com/vercel/next.js/tree/canary/examples' }
            ]},
            { name: 'CSS Frameworks', resources: [
              { type: 'Course', title: 'Tailwind CSS Tutorial', url: 'https://tailwindcss.com/docs' },
              { type: 'GitHub', title: 'Awesome Tailwind CSS', url: 'https://github.com/aniftyco/awesome-tailwindcss' }
            ]}
          ],
          projects: [
            { name: 'React Todo App', description: 'Create a task management app with React hooks' },
            { name: 'Next.js Blog', description: 'Build a blog platform with Next.js and a CMS' }
          ]
        },
        {
          name: 'Backend Integration',
          skills: [
            { name: 'Node.js & Express', resources: [
              { type: 'Course', title: 'Node.js Documentation', url: 'https://nodejs.org/en/docs/' },
              { type: 'GitHub', title: 'Express.js Examples', url: 'https://github.com/expressjs/express' }
            ]},
            { name: 'API Development', resources: [
              { type: 'Course', title: 'RESTful API Design', url: 'https://restfulapi.net/' },
              { type: 'GitHub', title: 'Public APIs', url: 'https://github.com/public-apis/public-apis' }
            ]},
            { name: 'Databases', resources: [
              { type: 'Course', title: 'SQL and NoSQL Basics', url: 'https://www.mongodb.com/nosql-explained' },
              { type: 'GitHub', title: 'Supabase Tutorial', url: 'https://github.com/supabase/supabase' }
            ]}
          ],
          projects: [
            { name: 'Full-stack CRUD App', description: 'Build a CRUD application with React frontend and Node.js backend' },
            { name: 'RESTful API', description: 'Create a RESTful API with Express and MongoDB' }
          ]
        },
        {
          name: 'Advanced Topics',
          skills: [
            { name: 'Authentication', resources: [
              { type: 'Course', title: 'Auth0 Documentation', url: 'https://auth0.com/docs/' },
              { type: 'GitHub', title: 'Passport.js', url: 'https://github.com/jaredhanson/passport' }
            ]},
            { name: 'Testing', resources: [
              { type: 'Course', title: 'Jest Testing Guide', url: 'https://jestjs.io/docs/getting-started' },
              { type: 'GitHub', title: 'Testing Library', url: 'https://github.com/testing-library/react-testing-library' }
            ]},
            { name: 'Deployment', resources: [
              { type: 'Course', title: 'Netlify Deployment', url: 'https://docs.netlify.com/' },
              { type: 'GitHub', title: 'Vercel Deployment', url: 'https://github.com/vercel/vercel' }
            ]}
          ],
          projects: [
            { name: 'E-commerce Platform', description: 'Build a full-featured e-commerce site with auth, cart, and payment processing' },
            { name: 'SaaS Application', description: 'Create a subscription-based web application with user roles and access control' }
          ]
        }
      ]
    },
    'data-science': {
      title: 'Data Science & Machine Learning Roadmap',
      stages: [
        {
          name: 'Fundamentals',
          skills: [
            { name: 'Python', resources: [
              { type: 'Course', title: 'Python for Data Science', url: 'https://www.python.org/doc/' },
              { type: 'GitHub', title: 'Awesome Python', url: 'https://github.com/vinta/awesome-python' }
            ]},
            { name: 'Mathematics', resources: [
              { type: 'Course', title: 'Linear Algebra Essentials', url: 'https://www.khanacademy.org/math/linear-algebra' },
              { type: 'GitHub', title: 'Mathematics for ML', url: 'https://github.com/mml-book/mml-book.github.io' }
            ]},
            { name: 'Data Manipulation', resources: [
              { type: 'Course', title: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/' },
              { type: 'GitHub', title: 'Pandas Examples', url: 'https://github.com/jvns/pandas-cookbook' }
            ]}
          ],
          projects: [
            { name: 'Data Cleaning Project', description: 'Clean and analyze a messy dataset' },
            { name: 'Exploratory Data Analysis', description: 'Perform EDA on a real-world dataset with visualization' }
          ]
        },
        {
          name: 'ML Fundamentals',
          skills: [
            { name: 'Scikit-Learn', resources: [
              { type: 'Course', title: 'Scikit-Learn Tutorials', url: 'https://scikit-learn.org/stable/tutorial/' },
              { type: 'GitHub', title: 'Scikit-Learn Examples', url: 'https://github.com/scikit-learn/scikit-learn' }
            ]},
            { name: 'Data Visualization', resources: [
              { type: 'Course', title: 'Matplotlib & Seaborn', url: 'https://matplotlib.org/stable/tutorials/index.html' },
              { type: 'GitHub', title: 'Python Visualization', url: 'https://github.com/rougier/python-visualization-landscape' }
            ]},
            { name: 'ML Algorithms', resources: [
              { type: 'Course', title: 'Machine Learning Crash Course', url: 'https://developers.google.com/machine-learning/crash-course' },
              { type: 'GitHub', title: 'ML From Scratch', url: 'https://github.com/eriklindernoren/ML-From-Scratch' }
            ]}
          ],
          projects: [
            { name: 'Classification Project', description: 'Build a model to classify data (e.g., spam detection, image classification)' },
            { name: 'Regression Analysis', description: 'Develop a model to predict continuous values' }
          ]
        },
        {
          name: 'Deep Learning',
          skills: [
            { name: 'Neural Networks', resources: [
              { type: 'Course', title: 'Deep Learning Specialization', url: 'https://www.deeplearning.ai/' },
              { type: 'GitHub', title: 'Neural Networks Tutorial', url: 'https://github.com/tensorflow/tensorflow' }
            ]},
            { name: 'TensorFlow/PyTorch', resources: [
              { type: 'Course', title: 'TensorFlow Documentation', url: 'https://www.tensorflow.org/tutorials' },
              { type: 'GitHub', title: 'PyTorch Examples', url: 'https://github.com/pytorch/examples' }
            ]},
            { name: 'Computer Vision', resources: [
              { type: 'Course', title: 'Stanford CS231n', url: 'http://cs231n.stanford.edu/' },
              { type: 'GitHub', title: 'OpenCV Tutorials', url: 'https://github.com/opencv/opencv' }
            ]}
          ],
          projects: [
            { name: 'Image Recognition', description: 'Build and train a CNN for image classification' },
            { name: 'Natural Language Processing', description: 'Create a text generation or sentiment analysis model' }
          ]
        },
        {
          name: 'MLOps & Advanced Topics',
          skills: [
            { name: 'Model Deployment', resources: [
              { type: 'Course', title: 'ML System Design', url: 'https://ml-system-design.com/' },
              { type: 'GitHub', title: 'ML Production Examples', url: 'https://github.com/chiphuyen/machine-learning-systems-design' }
            ]},
            { name: 'MLOps', resources: [
              { type: 'Course', title: 'MLOps Fundamentals', url: 'https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning' },
              { type: 'GitHub', title: 'Awesome MLOps', url: 'https://github.com/visenger/awesome-mlops' }
            ]},
            { name: 'Specialized Fields', resources: [
              { type: 'Course', title: 'Reinforcement Learning', url: 'https://www.deepmind.com/learning-resources' },
              { type: 'GitHub', title: 'Generative AI Examples', url: 'https://github.com/microsoft/generative-ai-for-beginners' }
            ]}
          ],
          projects: [
            { name: 'End-to-End ML System', description: 'Deploy a model with monitoring and retraining pipeline' },
            { name: 'Specialized AI Application', description: 'Build a project in a specialized field like GANs, RL, or time series' }
          ]
        }
      ]
    },
    'backend': {
      title: 'Backend Engineering Roadmap',
      stages: [
        {
          name: 'Fundamentals',
          skills: [
            { name: 'Programming Language', resources: [
              { type: 'Course', title: 'Python Backend Development', url: 'https://docs.python.org/3/tutorial/' },
              { type: 'GitHub', title: 'Node.js Essentials', url: 'https://github.com/goldbergyoni/nodebestpractices' }
            ]},
            { name: 'Web Basics', resources: [
              { type: 'Course', title: 'HTTP Protocol', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP' },
              { type: 'GitHub', title: 'Web Fundamentals', url: 'https://github.com/vasanthk/web-security-basics' }
            ]},
            { name: 'Git & Terminal', resources: [
              { type: 'Course', title: 'Git & GitHub Tutorial', url: 'https://www.atlassian.com/git/tutorials' },
              { type: 'GitHub', title: 'Command Line Tools', url: 'https://github.com/jlevy/the-art-of-command-line' }
            ]}
          ],
          projects: [
            { name: 'Simple CLI Tool', description: 'Create a command-line application with core language features' },
            { name: 'Basic API', description: 'Build a simple RESTful API that performs CRUD operations' }
          ]
        },
        {
          name: 'Server Development',
          skills: [
            { name: 'Backend Framework', resources: [
              { type: 'Course', title: 'Express.js Guide', url: 'https://expressjs.com/en/guide/routing.html' },
              { type: 'GitHub', title: 'FastAPI Examples', url: 'https://github.com/tiangolo/fastapi' }
            ]},
            { name: 'Databases', resources: [
              { type: 'Course', title: 'SQL Fundamentals', url: 'https://www.postgresql.org/docs/current/tutorial.html' },
              { type: 'GitHub', title: 'MongoDB Examples', url: 'https://github.com/mongodb/mongo' }
            ]},
            { name: 'API Design', resources: [
              { type: 'Course', title: 'RESTful API Design', url: 'https://restfulapi.net/' },
              { type: 'GitHub', title: 'GraphQL Tutorials', url: 'https://github.com/graphql/graphql-js' }
            ]}
          ],
          projects: [
            { name: 'Full CRUD API', description: 'Build a robust API with multiple resources and relationships' },
            { name: 'Authentication System', description: 'Implement a secure user authentication system' }
          ]
        },
        {
          name: 'Advanced Backend',
          skills: [
            { name: 'ORM/ODM', resources: [
              { type: 'Course', title: 'Sequelize ORM', url: 'https://sequelize.org/master/' },
              { type: 'GitHub', title: 'Mongoose ODM', url: 'https://github.com/Automattic/mongoose' }
            ]},
            { name: 'Caching', resources: [
              { type: 'Course', title: 'Redis Documentation', url: 'https://redis.io/documentation' },
              { type: 'GitHub', title: 'Caching Strategies', url: 'https://github.com/redis/redis' }
            ]},
            { name: 'Background Jobs', resources: [
              { type: 'Course', title: 'Message Queues', url: 'https://www.rabbitmq.com/getstarted.html' },
              { type: 'GitHub', title: 'Job Queue Examples', url: 'https://github.com/OptimalBits/bull' }
            ]}
          ],
          projects: [
            { name: 'Scalable API', description: 'Build an API with caching, rate limiting, and background processing' },
            { name: 'Microservice', description: 'Create a specific microservice with well-defined responsibilities' }
          ]
        },
        {
          name: 'DevOps & Scaling',
          skills: [
            { name: 'Containerization', resources: [
              { type: 'Course', title: 'Docker Basics', url: 'https://docs.docker.com/get-started/' },
              { type: 'GitHub', title: 'Docker Compose Examples', url: 'https://github.com/docker/awesome-compose' }
            ]},
            { name: 'CI/CD', resources: [
              { type: 'Course', title: 'GitHub Actions', url: 'https://docs.github.com/en/actions' },
              { type: 'GitHub', title: 'Jenkins Pipelines', url: 'https://github.com/jenkinsci/pipeline-examples' }
            ]},
            { name: 'Cloud Services', resources: [
              { type: 'Course', title: 'AWS for Backend', url: 'https://aws.amazon.com/getting-started/' },
              { type: 'GitHub', title: 'Serverless Examples', url: 'https://github.com/serverless/examples' }
            ]}
          ],
          projects: [
            { name: 'Containerized App', description: 'Containerize an application with Docker and orchestrate with Docker Compose' },
            { name: 'Serverless API', description: 'Build a serverless API using cloud functions and managed services' }
          ]
        }
      ]
    }
  };
  
  const FieldSelector = () => (
    <div className="p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-xl mb-8">
      <h2 className="text-2xl font-bold mb-4">Choose Your Tech Path</h2>
      <p className="mb-4">Select the field you're interested in to see a personalized learning roadmap</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {techFields.map(field => (
          <button
            key={field.id}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg text-white font-semibold transition"
            onClick={() => setSelectedField(field.id)}
          >
            {field.name}
          </button>
        ))}
      </div>
    </div>
  );

  const RoadmapDisplay = ({ roadmapId }) => {
    const roadmap = roadmaps[roadmapId];
    
    if (!roadmap) {
      return <div className="text-center p-4">Roadmap coming soon! Check back later.</div>;
    }
    
    return (
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
          <h2 className="text-2xl font-bold">{roadmap.title}</h2>
          <p className="mt-2 opacity-90">Follow this path to become proficient in {techFields.find(f => f.id === roadmapId)?.name}</p>
        </div>
        
        <div className="p-6">
          {roadmap.stages.map((stage, index) => (
            <div key={index} className="mb-12 relative">
              {/* Timeline connector */}
              {index < roadmap.stages.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-1 bg-indigo-200"></div>
              )}
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-lg shadow-md z-10">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold ml-4 text-indigo-700">{stage.name}</h3>
              </div>
              
              <div className="ml-16">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-700">Skills to Master</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {stage.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h5 className="font-semibold text-indigo-600 mb-2">{skill.name}</h5>
                        <div className="space-y-2">
                          {skill.resources.map((resource, resourceIndex) => (
                            <div key={resourceIndex} className="flex items-center text-sm">
                              <span className={`mr-2 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center 
                                ${resource.type === 'GitHub' ? 'bg-black text-white' : 'bg-indigo-100 text-indigo-600'}`}>
                                {resource.type === 'GitHub' ? 'G' : 'C'}
                              </span>
                              <a href={resource.url} target="_blank" rel="noopener noreferrer" 
                                className="text-blue-600 hover:underline truncate">
                                {resource.title}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-700">Recommended Projects</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {stage.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                        <h5 className="font-semibold text-indigo-700">{project.name}</h5>
                        <p className="text-gray-600 text-sm mt-1">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Tech Career Roadmap
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Find your path in tech with curated learning resources and project recommendations
        </p>
      </header>
      
      <main className="max-w-6xl mx-auto">
        {!selectedField ? (
          <FieldSelector />
        ) : (
          <div>
            <button 
              onClick={() => setSelectedField(null)}
              className="mb-4 flex items-center text-indigo-600 hover:text-indigo-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to all fields
            </button>
            <RoadmapDisplay roadmapId={selectedField} />
          </div>
        )}
      </main>
      
      <footer className="max-w-6xl mx-auto mt-12 text-center text-gray-500 text-sm">
        <p>Designed for technology learners and career changers. All resources are curated by experts.</p>
      </footer>
    </div>
  );
};

export default TechRoadmapApp;