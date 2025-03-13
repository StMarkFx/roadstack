// src/data/roadmaps/ai-engineering.ts
import { Roadmap } from '../../types/roadmap';

const aiEngineeringRoadmap: Roadmap = {
  id: 'ai-engineering',
  title: 'AI Engineering Roadmap',
  description: 'A comprehensive path to become proficient in building and deploying AI systems',
  estimatedTime: '12-18 months',
  careerPaths: ['AI Engineer', 'Machine Learning Engineer', 'MLOps Engineer', 'AI Researcher'],
  recommendedPrerequisites: ['Programming basics', 'Statistics fundamentals'],
  stages: [
    {
      id: 'fundamentals',
      name: 'Fundamentals',
      description: 'Master the foundational knowledge required for AI engineering',
      skills: [
        {
          id: 'python-programming',
          name: 'Python Programming',
          isEssential: true,
          resources: [
            {
              type: 'Course',
              title: 'Python for Data Science and Machine Learning',
              url: 'https://www.coursera.org/specializations/python-data-science',
              isPaid: true,
              level: 'Beginner'
            },
            {
              type: 'GitHub',
              title: 'Awesome Python',
              url: 'https://github.com/vinta/awesome-python',
              level: 'Beginner'
            },
            {
              type: 'Documentation',
              title: 'Python Official Documentation',
              url: 'https://docs.python.org/3/',
              level: 'Beginner'
            }
          ]
        },
        {
          id: 'mathematics',
          name: 'Mathematics for AI',
          isEssential: true,
          resources: [
            {
              type: 'Course',
              title: 'Mathematics for Machine Learning Specialization',
              url: 'https://www.coursera.org/specializations/mathematics-machine-learning',
              isPaid: true,
              level: 'Intermediate'
            },
            {
              type: 'GitHub',
              title: 'Mathematics for Machine Learning',
              url: 'https://github.com/mml-book/mml-book.github.io',
              level: 'Intermediate'
            },
            {
              type: 'Book',
              title: 'Deep Learning Book - Mathematical Chapters',
              url: 'https://www.deeplearningbook.org/',
              level: 'Advanced'
            }
          ]
        },
        {
          id: 'data-manipulation',
          name: 'Data Manipulation & Analysis',
          resources: [
            {
              type: 'Course',
              title: 'Pandas for Data Analysis',
              url: 'https://www.datacamp.com/courses/pandas-foundations',
              isPaid: true,
              level: 'Beginner'
            },
            {
              type: 'Documentation',
              title: 'Pandas Documentation',
              url: 'https://pandas.pydata.org/docs/',
              level: 'Beginner'
            },
            {
              type: 'GitHub',
              title: 'Pandas Cookbook',
              url: 'https://github.com/jvns/pandas-cookbook',
              level: 'Intermediate'
            }
          ]
        },
        {
          id: 'ml-fundamentals',
          name: 'Machine Learning Fundamentals',
          isEssential: true,
          resources: [
            {
              type: 'Course',
              title: 'Andrew Ng\'s Machine Learning Specialization',
              url: 'https://www.coursera.org/specializations/machine-learning-introduction',
              isPaid: true,
              level: 'Beginner'
            },
            {
              type: 'GitHub',
              title: 'Machine Learning for Beginners',
              url: 'https://github.com/microsoft/ML-For-Beginners',
              level: 'Beginner'
            },
            {
              type: 'Book',
              title: 'Hands-On Machine Learning with Scikit-Learn and TensorFlow',
              url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/',
              isPaid: true,
              level: 'Intermediate'
            }
          ]
        }
      ],
      projects: [
        {
          id: 'data-analysis-project',
          name: 'Exploratory Data Analysis',
          description: 'Analyze a complex dataset and derive insights with visualizations',
          difficulty: 'Beginner',
          skills: ['python-programming', 'data-manipulation'],
          githubRepo: 'https://github.com/examples/exploratory-data-analysis'
        },
        {
          id: 'ml-algorithm-implementation',
          name: 'ML Algorithm from Scratch',
          description: 'Implement a basic ML algorithm (e.g., linear regression) from scratch',
          difficulty: 'Intermediate',
          skills: ['python-programming', 'mathematics', 'ml-fundamentals']
        }
      ]
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning',
      description: 'Learn core ML algorithms and model development',
      skills: [
        {
          id: 'supervised-learning',
          name: 'Supervised Learning',
          isEssential: true,
          resources: [
            {
              type: 'Course',
              title: 'Supervised Machine Learning: Regression and Classification',
              url: 'https://www.coursera.org/learn/machine-learning',
              isPaid: true,
              level: 'Intermediate'
            },
            {
              type: 'GitHub',
              title: 'Scikit-Learn Tutorials',
              url: 'https://github.com/scikit-learn/scikit-learn',
              level: 'Intermediate'
            },
            {
              type: 'Documentation',
              title: 'Scikit-Learn Documentation',
              url: 'https://scikit-learn.org/stable/supervised_learning.html',
              level: 'Intermediate'
            }
          ]
        },
        {
          id: 'unsupervised-learning',
          name: 'Unsupervised Learning',
          resources: [
            {
              type: 'Course',
              title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
              url: 'https://www.coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning',
              isPaid: true,
              level: 'Intermediate'
            },
            {
              type: 'Article',
              title: 'Unsupervised Learning Explained',
              url: 'https://towardsdatascience.com/unsupervised-learning-explained-5c2a97df7451',
              level: 'Intermediate'
            }
          ]
        },
        {
          id: 'feature-engineering',
          name: 'Feature Engineering',
          resources: [
            {
              type: 'Course',
              title: 'Feature Engineering for Machine Learning',
              url: 'https://www.coursera.org/learn/feature-engineering',
              isPaid: true,
              level: 'Intermediate'
            },
            {
              type: 'GitHub',
              title: 'Feature Engine',
              url: 'https://github.com/feature-engine/feature_engine',
              level: 'Intermediate'
            },
            {
              type: 'Book',
              title: 'Feature Engineering for Machine Learning',
              url: 'https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/',
              isPaid: true,
              level: 'Advanced'
            }
          ]
        },
        {
          id: 'model-evaluation',
          name: 'Model Evaluation & Validation',
          isEssential: true,
          resources: [
            {
              type: 'Course',
              title: 'Advanced Learning Algorithms',
              url: 'https://www.coursera.org/learn/advanced-learning-algorithms',
              isPaid: true,
              level: 'Intermediate'
            },
            {
              type: 'Article',
              title: 'A Comprehensive Guide to Model Validation',
              url: 'https://towardsdatascience.com/a-comprehensive-guide-to-model-validation-f815d3235d6a',
              level: 'Intermediate'
            },
            {
              type: 'Documentation',
              title: 'Scikit-Learn Model Evaluation',
              url: 'https://scikit-learn.org/stable/model_selection.html',
              level: 'Intermediate'
            }
          ]
        }
      ],
      projects: [
        {
          id: 'classification-project',
          name: 'Multi-class Classification Project',
          description: 'Build and optimize a classification model with feature engineering',
          difficulty: 'Intermediate',
          skills: ['supervised-learning', 'feature-engineering', 'model-evaluation']
        },
        {
          id: 'clustering-project',
          name: 'Customer Segmentation',
          description: 'Use clustering algorithms to segment customers based on behavior',
          difficulty: 'Intermediate',
          skills: ['unsupervised-learning', 'data-manipulation']
        }
      ]
    },
    {
      id: 'deep-learning',
      name: 'Deep Learning',
      description: 'Master neural networks and deep learning architectures',
      skills: [
        {
          id: 'neural-networks',
          name: 'Neural Networks Fundamentals',
          isEssential: true,
          resources: [
            {
              type: 'Course',
              title: 'Deep Learning Specialization',
              url: 'https://www.coursera.org/specializations/deep-learning',
              isPaid: true,
              level: 'Advanced'
            },
            {
              type: 'GitHub',
              title: 'Neural Networks from Scratch',
              url: 'https://github.com/alnasirashid/Neural-Network-from-scratch',
              level: 'Intermediate'
            },
            {
              type: 'Book',
              title: 'Deep Learning Book',
              url: 'https://www.deeplearningbook.org/',
              level: 'Advanced'
            }
          ]
        },
        {
          id: 'frameworks',
          name: 'Deep Learning Frameworks',
          isEssential: true,
          resources: [
            {
              type: 'Course',
              title: 'TensorFlow Developer Certificate',
              url: 'https://www.tensorflow.org/certificate',
              isPaid: true,
              level: 'Intermediate'
            },
            {
              type: 'Documentation',
              title: 'PyTorch Documentation',
              url: 'https://pytorch.org/docs/stable/index.html',
              level: 'Intermediate'
            },
            {
              type: 'GitHub',
              title: 'Awesome PyTorch List',
              url: 'https://github.com/bharathgs/Awesome-pytorch-list',
              level: 'Intermediate'
            }
          ]
        },
        {
          id: 'computer-vision',
          name: 'Computer Vision',
          resources: [
            {
              type: 'Course',
              title: 'CS231n: Convolutional Neural Networks',
              url: 'http://cs231n.stanford.edu/',
              level: 'Advanced'
            },
            {
              type: 'GitHub',
              title: 'PyTorch Vision Models',
              url: 'https://github.com/pytorch/vision',
              level: 'Advanced'
            },
            {
              type: 'Documentation',
              title: 'OpenCV Documentation',
              url: 'https://docs.opencv.org/master/',
              level: 'Intermediate'
            }
          ]
        },
        {
          id: 'nlp',
          name: 'Natural Language Processing',
          resources: [
            {
              type: 'Course',
              title: 'Natural Language Processing Specialization',
              url: 'https://www.coursera.org/specializations/natural-language-processing',
              isPaid: true,
              level: 'Advanced'
            },
            {
              type: 'GitHub',
              title: 'HuggingFace Transformers',
              url: 'https://github.com/huggingface/transformers',
              level: 'Advanced'
            },
            {
              type: 'Documentation',
              title: 'SpaCy Documentation',
              url: 'https://spacy.io/usage',
              level: 'Intermediate'
            }
          ]
        }
      ],
      projects: [
        {
          id: 'image-classification',
          name: 'Image Classification with CNNs',
          description: 'Build an image classifier using convolutional neural networks',
          difficulty: 'Advanced',
          skills: ['neural-networks', 'frameworks', 'computer-vision']
        },
        {
          id: 'sentiment-analysis',
          name: 'Sentiment Analysis',
          description: 'Create a model to analyze sentiment in text using transformers',
          difficulty: 'Advanced',
          skills: ['neural-networks', 'frameworks', 'nlp']
        }
      ]
    },
    {
      id: 'mlops',
      name: 'MLOps & Deployment',
      description: 'Learn to deploy and manage AI systems in production',
      skills: [
        {
          id: 'ml-pipelines',
          name: 'ML Pipelines',
          isEssential: true,
          resources: [
            {
              type: 'Course',
              title: 'MLOps Specialization',
              url: 'https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops',
              isPaid: true,
              level: 'Advanced'
            },
            {
              type: 'GitHub',
              title: 'Awesome MLOps',
              url: 'https://github.com/visenger/awesome-mlops',
              level: 'Advanced'
            },
            {
              type: 'Tool',
              title: 'MLflow',
              url: 'https://mlflow.org/docs/latest/index.html',
              level: 'Intermediate'
            }
          ]
        },
        {
          id: 'containerization',
          name: 'Containerization & Orchestration',
          resources: [
            {
              type: 'Course',
              title: 'Docker and Kubernetes for ML',
              url: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/',
              isPaid: true,
              level: 'Intermediate'
            },
            {
              type: 'Documentation',
              title: 'Docker Documentation',
              url: 'https://docs.docker.com/',
              level: 'Intermediate'
            },
            {
              type: 'GitHub',
              title: 'Kubeflow',
              url: 'https://github.com/kubeflow/kubeflow',
              level: 'Advanced'
            }
          ]
        },
        {
          id: 'model-serving',
          name: 'Model Serving',
          isEssential: true,
          resources: [
            {
              type: 'Article',
              title: 'Model Serving in PyTorch',
              url: 'https://pytorch.org/serve/',
              level: 'Intermediate'
            },
            {
              type: 'GitHub',
              title: 'TensorFlow Serving',
              url: 'https://github.com/tensorflow/serving',
              level: 'Advanced'
            },
            {
              type: 'Documentation',
              title: 'FastAPI Documentation',
              url: 'https://fastapi.tiangolo.com/',
              level: 'Intermediate'
            }
          ]
        },
        {
          id: 'monitoring',
          name: 'Monitoring & Maintenance',
          resources: [
            {
              type: 'Course',
              title: 'MLOps Monitoring and Logging',
              url: 'https://www.coursera.org/learn/mlops-deployment-monitoring',
              isPaid: true,
              level: 'Advanced'
            },
            {
              type: 'GitHub',
              title: 'Evidently AI',
              url: 'https://github.com/evidentlyai/evidently',
              level: 'Intermediate'
            },
            {
              type: 'Tool',
              title: 'Prometheus',
              url: 'https://prometheus.io/docs/introduction/overview/',
              level: 'Intermediate'
            }
          ]
        }
      ],
      projects: [
        {
          id: 'ml-pipeline',
          name: 'End-to-end ML Pipeline',
          description: 'Build a complete ML pipeline from data ingestion to model serving',
          difficulty: 'Advanced',
          skills: ['ml-pipelines', 'containerization']
        },
        {
          id: 'model-api',
          name: 'Model API with Monitoring',
          description: 'Deploy a model as an API with monitoring and logging',
          difficulty: 'Advanced',
          skills: ['model-serving', 'monitoring']
        }
      ]
    },
    {
      id: 'specialized-ai',
      name: 'Specialized AI Topics',
      description: 'Explore advanced AI topics and applications',
      skills: [
        {
          id: 'generative-ai',
          name: 'Generative AI',
          resources: [
            {
              type: 'Course',
              title: 'Generative AI with Large Language Models',
              url: 'https://www.coursera.org/learn/generative-ai-with-llms',
              isPaid: true,
              level: 'Advanced'
            },
            {
              type: 'GitHub',
              title: 'Hugging Face Diffusers',
              url: 'https://github.com/huggingface/diffusers',
              level: 'Advanced'
            },
            {
              type: 'Documentation',
              title: 'OpenAI API Documentation',
              url: 'https://platform.openai.com/docs/introduction',
              level: 'Intermediate'
            }
          ]
        },
        {
          id: 'reinforcement-learning',
          name: 'Reinforcement Learning',
          resources: [
            {
              type: 'Course',
              title: 'Reinforcement Learning Specialization',
              url: 'https://www.coursera.org/specializations/reinforcement-learning',
              isPaid: true,
              level: 'Advanced'
            },
            {
              type: 'GitHub',
              title: 'Stable Baselines3',
              url: 'https://github.com/DLR-RM/stable-baselines3',
              level: 'Advanced'
            },
            {
              type: 'Book',
              title: 'Reinforcement Learning: An Introduction',
              url: 'http://incompleteideas.net/book/the-book-2nd.html',
              level: 'Advanced'
            }
          ]
        },
        {
          id: 'responsible-ai',
          name: 'Responsible AI & Ethics',
          isEssential: true,
          resources: [
            {
              type: 'Course',
              title: 'AI Ethics: Global Perspectives',
              url: 'https://aiethics.princeton.edu/course/',
              level: 'Intermediate'
            },
            {
              type: 'Article',
              title: 'Responsible AI Practices',
              url: 'https://ai.google/responsibilities/responsible-ai-practices/',
              level: 'Intermediate'
            },
            {
              type: 'GitHub',
              title: 'Awesome Fairness in AI',
              url: 'https://github.com/datamllab/awesome-fairness-in-ai',
              level: 'Intermediate'
            }
          ]
        },
        {
          id: 'ai-research',
          name: 'AI Research & Paper Implementation',
          resources: [
            {
              type: 'Article',
              title: 'How to Read AI Research Papers',
              url: 'https://towardsdatascience.com/how-to-read-scientific-papers-quickly-and-effectively-9c4ce642593',
              level: 'Advanced'
            },
            {
              type: 'GitHub',
              title: 'Papers With Code',
              url: 'https://github.com/zziz/pwc',
              level: 'Advanced'
            },
            {
              type: 'Tool',
              title: 'Arxiv Sanity',
              url: 'https://arxiv-sanity-lite.com/',
              level: 'Advanced'
            }
          ]
        }
      ],
      projects: [
        {
          id: 'generative-project',
          name: 'Generative AI Application',
          description: 'Build an application using generative models (text, image, or audio)',
          difficulty: 'Advanced',
          skills: ['generative-ai', 'frameworks', 'model-serving']
        },
        {
          id: 'responsible-ai-audit',
          name: 'AI System Ethical Audit',
          description: 'Evaluate and improve the fairness and transparency of an ML system',
          difficulty: 'Advanced',
          skills: ['responsible-ai', 'ml-fundamentals']
        }
      ]
    }
  ]
};

export default aiEngineeringRoadmap;