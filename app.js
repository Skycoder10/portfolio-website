// Data
const data = {
  experiences: [
    {
      id: 1,
      title: "Specialist Programmer",
      company: "Infosys",
      location: "Bangalore, Karnataka",
      startDate: "Aug 2022",
      endDate: "Present",
      techLogos: [
        { name: "Java",           icon: "devicon-java-plain colored",              logo: "",                                      emoji: "☕" },
        { name: "Spring",         icon: "devicon-spring-plain colored",            logo: "",                                      emoji: "🍃" },
        { name: "Spring Boot",    icon: "devicon-spring-plain colored",            logo: "",                                      emoji: "🍃" },
        { name: "Spring Batch",   icon: "",                                        logo: "https://spring.io/img/projects/spring-batch.svg",                                      emoji: "🌀" }, // no devicon/simpleicon
      
        {
          name: "Python",
          icon: "devicon-python-plain colored",
          logo: "",
          emoji: "🐍"
        },
        {
          name: "FastAPI",
          icon: "",
          logo: "https://cdn.simpleicons.org/fastapi",
          emoji: "⚡"
        },
        {
          name: "Go",
          icon: "devicon-go-plain colored",
          logo: "",
          emoji: "🐹"
        }        
        ,
        // Big Data / Apache stack
        {
          name: "Apache Hadoop",
          icon: "",
          logo: "https://cdn.simpleicons.org/apachehadoop",
          emoji: "🐘"
        },        
        { name: "Apache Storm",   icon: "",                                        logo: "https://cdn.simpleicons.org/apachestorm",   emoji: "🌩️" },
        { name: "Apache HBase",   icon: "",                                        logo: "https://cdn.simpleicons.org/apachehbase",   emoji: "📊" },
        { name: "Apache Kafka",   icon: "devicon-apachekafka-original colored",    logo: "",                                      emoji: "🚀" },
        // For Camel, better to download SVG and serve from your own assets:
        { name: "Apache Camel", icon: "", logo: "https://www.svgrepo.com/show/353403/apache-camel.svg" },
 
        { name: "Apache Spark",   icon: "devicon-apachespark-plain colored",       logo: "",                                      emoji: "✨" },
        { name: "Apache Hive",    icon: "",                                        logo: "https://cdn.simpleicons.org/apachehive",   emoji: "🐝" },
      
        // DB & Cache
        { name: "MySQL",          icon: "devicon-mysql-plain colored",             logo: "",                                      emoji: "🗄️" },
        { name: "Redis",          icon: "devicon-redis-plain colored",             logo: "",                                      emoji: "🔴" },
      
        // Cloud
        { name: "AWS",            icon: "devicon-amazonwebservices-plain colored", logo: "",                                      emoji: "☁️" },
      
        // Frontend
        { name: "Angular",        icon: "devicon-angular-plain colored",           logo: "",                                      emoji: "🅰️" },
        { name: "TypeScript",     icon: "devicon-typescript-plain colored",        logo: "",                                      emoji: "🔷" },
      
        // CI / VCS
        { name: "Jenkins",        icon: "devicon-jenkins-line colored",            logo: "",                                      emoji: "🧪" },
        { name: "SVN",            icon: "",                                        logo: "https://cdn.simpleicons.org/subversion",   emoji: "📁" },
        { name: "Git",            icon: "devicon-git-plain colored",               logo: "",                                      emoji: "🔧" },
      
        // Observability / infra
        { name: "Kubernetes",     icon: "devicon-kubernetes-plain colored",        logo: "",                                      emoji: "🐳" },
        { name: "Kibana",         icon: "",                                        logo: "https://cdn.simpleicons.org/kibana",       emoji: "📈" },
        {
          name: "Grafana",
          icon: "", 
          logo: "https://cdn.simpleicons.org/grafana",
          emoji: "📉"
        },        
        {
          name: "Prometheus",
          icon: "",
          logo: "https://cdn.simpleicons.org/prometheus",
          emoji: "🔥"
        },
        
        { name: "Nginx",          icon: "devicon-nginx-plain colored",             logo: "",                                      emoji: "🟢" },
      
        // Testing
        { 
          name: "Mockito", 
          icon: "",                // no font-icon class  
          logo: "https://raw.githubusercontent.com/mockito/mockito.github.io/master/img/logo%402x.png", 
          emoji: "🧪"              // fallback emoji (optional)  
        },        
       { name: "JUnit",          icon: "",                                        logo: "https://cdn.simpleicons.org/junit5",       emoji: "⚖️" }
      ],            
      projects: [
        {
          id: 1,
          name: "Invoice Management System (IMS)",
          description: "Built IMS from scratch in the GST system.",
          metrics: ["88% faster", "9M users", "30% DB reduction","88% faster", "9M users", "30% DB reduction","88% faster", "9M users", "30% DB reduction"],
          impact: [
            "Reduced report generation time from 17 hours to 2 hours",
            "Directly benefiting 9 million taxpayers",
            "Lowered database load by 30%",
            "IMS Enables coordingation between seller buyer -it is very important for smaller buisnedss",
            "IMS Enables coordingation between seller buyer -it is very important for smaller buisnedss",
            "IMS Enables coordingation between seller buyer -it is very important for smaller buisnedss",
            "IMS Enables coordingation between seller buyer -it is very important for smaller buisnedss",
            "IMS Enables coordingation between seller buyer -it is very important for smaller buisnedss , have agood day please find your way tot the lgoogh",
            "IMS Enables coordingation between seller buyer -it is very important for smaller buisnedss",
            "IMS Enables coordingation between seller buyer -it is very important for smaller buisnedss",
            "IMS Enables coordingation between seller buyer -it is very important for smaller buisnedss"

          ],
          technologies: ["Java", "Spring Batch", "HBase", "MySQL", "Redis", "Kafka"]
        }
        ,
        {
          id: 2,
          name: "Table 14 - 15 ",
          description: "Designed and implemented comprehensive invoice management for GSTN platform",
          metrics: ["45 components", "2.4M invoices", "14M users"],
          impact: "Processed $500B+ annual invoice volume, enabling seamless compliance for 14M+ taxpayers",
          technologies: ["Java", "Spring Boot", "Apache Storm", "HBase", "Angular", "Kafka"]
        },
        {
          id: 3,
          name: "GSTR9 implementation ",
          description: "High-performance data migration pipeline from HBase to SQL database",
          metrics: ["2.5M records", "30 minutes", "20% optimization"],
          impact: "Successfully migrated data maintaining integrity and improving query performance",
          technologies: ["Java", "HBase", "MySQL", "Apache Camel"]
        },
        {
          id: 4,
          name: "Financial Information Provider (FIP) Service",
          description: "Built FIP service integrating GSTN with Account Aggregator framework",
          metrics: ["16 AAs", "$500B volume", "12M users"],
          impact: "Enabled secure sharing of $500B annual invoice data with Account Aggregators",
          technologies: ["Java", "Spring Boot", "OAuth2", "REST APIs"]
        }
      ]
    },
    {
      id: 2,
      title: "Software Development Engineer (Intern)",
      company: "Netmeds.com",
      location: "Remote",
      startDate: "Jan 2022",
      endDate: "Aug 2022",
      techLogos: [
        // Backend / Core
        { name: "Java",         
          icon: "devicon-java-plain colored", 
          logo: "", 
          emoji: "☕" 
        },
      
        { name: "Spring Boot",  
          icon: "devicon-spring-plain colored", 
          logo: "", 
          emoji: "🍃" 
        },
      
        { name: "Python",       
          icon: "devicon-python-plain colored", 
          logo: "", 
          emoji: "🐍" 
        },
      
        // Frontend
        { name: "Angular",      
          icon: "devicon-angular-plain colored", 
          logo: "", 
          emoji: "🅰️" 
        },
      
        { name: "TypeScript",   
          icon: "devicon-typescript-plain colored", 
          logo: "", 
          emoji: "🔷" 
        },
      
        { name: "Thymeleaf",
          icon: "",
          logo: "https://cdn.simpleicons.org/thymeleaf",
          emoji: "🌿"
        },
      
        // Tools / Platforms
        { name: "Appsmith",
          icon: "",
          logo: "https://cdn.simpleicons.org/appsmith",
          emoji: "📱"
        },
      
        { name: "AWS",          
          icon: "devicon-amazonwebservices-plain colored", 
          logo: "", 
          emoji: "☁️" 
        },
      
        { name: "Apache Kafka", 
          icon: "devicon-apachekafka-original colored", 
          logo: "", 
          emoji: "🚀" 
        },
      
        { name: "JUnit",        
          icon: "",
          logo: "https://cdn.simpleicons.org/junit5",
          emoji: "⚖️"
        }
      ],      
      projects: [
        {
          id: 5,
          name: "Order Routing Optimization",
          description: "Optimized backend order routing logic to reduce redundancy",
          metrics: ["40% redundancy reduction", "2-3 days TTL", "100k orders/day"],
          impact: "Improved delivery TTL from 3-5 days to 2-3 days, significantly enhancing customer satisfaction",
          technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis"]
        },
        {
          id: 6,
          name: "Change Data Capture (CDC) Implementation",
          description: "Real-time synchronization between Seller and Inventory databases",
          metrics: ["Real-time sync", "30% availability", "95% accuracy"],
          impact: "Achieved 30% improvement in product availability and 95% accurate expiry tracking",
          technologies: ["Kafka", "Debezium", "MySQL", "Java"]
        },
        {
          id: 7,
          name: "Test Coverage Enhancement",
          description: "Expanded test suite with comprehensive unit and integration tests",
          metrics: ["17% → 80%", "500+ tests", "95% success rate"],
          impact: "Increased test coverage from 17% to 80%, significantly improving code reliability",
          technologies: ["JUnit", "Mockito", "Spring Test"]
        }
      ]
    }
  ],
  skills: [
    {
      category: "Programming Languages | Frameworks ",
      icon: "💻",
      items: [
        { name: "Java",       emoji: "☕", devicon: "devicon-java-plain colored", logo: "" },
        { name: "C++",        emoji: "⚙️", devicon: "devicon-cplusplus-plain colored", logo: "" },
        { name: "Python",     emoji: "🐍", devicon: "devicon-python-plain colored", logo: "" },
        { name: "Go",         emoji: "🐹", devicon: "devicon-go-plain colored", logo: "" },
        { name: "JavaScript", emoji: "⚡", devicon: "devicon-javascript-plain colored", logo: "" },
        { name: "TypeScript", emoji: "📝", devicon: "devicon-typescript-plain colored", logo: "" },
        { name: "HTML", emoji: "📄", devicon: "devicon-html5-plain colored", logo: "" },
        { name: "CSS",  emoji: "🎨", devicon: "devicon-css3-plain colored",  logo: "" },
        { name: "Spring and Spring Boot ",      emoji: "🍃", devicon: "devicon-spring-plain colored", logo: "" },
        { name: "Spring Batch",     emoji: "📦", devicon: "", logo: "https://spring.io/img/projects/spring-batch.svg" },
        { name: "FastAPI", emoji: "⚡", devicon: "", logo: "https://cdn.simpleicons.org/fastapi" },
        { name: "Apache Camel",     emoji: "🚚", devicon: "", logo: "https://www.svgrepo.com/show/353403/apache-camel.svg" },
        { name: "Angular",          emoji: "🅰️", devicon: "devicon-angularjs-plain colored", logo: "" }

      ]
    },
  
    // {
    //   category: "Backend & Frameworks",
    //   icon: "🏗️",
    //   items: [
    //     { name: "Spring Boot",      emoji: "🍃", devicon: "devicon-spring-plain colored", logo: "" },
    //     { name: "Spring Framework", emoji: "🔧", devicon: "devicon-spring-plain colored", logo: "" },
    //     { name: "Microservices",    emoji: "🔀", devicon: "", logo: "https://cdn.simpleicons.org/microstrategy" },
    //     { name: "REST APIs",        emoji: "🌐", devicon: "", logo: "https://cdn.simpleicons.org/postman" },
    //     { name: "Spring Batch",     emoji: "📦", devicon: "", logo: "https://cdn.simpleicons.org/springbatch" },
    //     { name: "Apache Camel",     emoji: "🚚", devicon: "", logo: "https://www.svgrepo.com/show/353403/apache-camel.svg" },
    //     { name: "Angular",          emoji: "🅰️", devicon: "devicon-angularjs-plain colored", logo: "" }
    //   ]
      
    // },
  
    {
      category: "Databases & Cache | Big Data & Streaming",
      icon: "📦",
      items: [
        { name: "Apache Kafka",  emoji: "🚀", devicon: "devicon-apachekafka-original colored white", logo: "" },
        { name: "Apache Storm",  emoji: "⛈️", devicon: "", logo: "https://cdn.simpleicons.org/apachestorm" },
        { name: "Apache Spark",  emoji: "✨", devicon: "devicon-apachespark-plain colored", logo: "" },
        { name: "Apache Hadoop", emoji: "🐘", devicon: "", logo: "https://cdn.simpleicons.org/apachehadoop" },
        { name: "Apache HBase",  emoji: "📊", devicon: "", logo: "https://cdn.simpleicons.org/apachehbase" },
        { name: "Apache Hive",    devicon: "", logo: "https://cdn.simpleicons.org/apachehive",   emoji: "🐝" },
      
        { name: "MySQL",        emoji: "🐬", devicon: "devicon-mysql-plain colored", logo: "" },
        { name: "PostgreSQL",   emoji: "🐘", devicon: "devicon-postgresql-plain colored", logo: "" },
        { name: "MongoDB",      emoji: "🍃", devicon: "devicon-mongodb-plain colored", logo: "" },
        { name: "Redis",        emoji: "💾", devicon: "devicon-redis-plain colored", logo: "" },
        { name: "Elasticsearch", emoji: "🔍", devicon: "", logo: "https://www.svgrepo.com/show/303574/elasticsearch-logo.svg" },
        { name: "DynamoDB", emoji: "⚡", devicon: "", logo: "https://www.svgrepo.com/show/353450/aws-dynamodb.svg" },
        { name: "ScyllaDB", emoji: "🐙", devicon: "", logo: "https://cdn.simpleicons.org/scylladb" },
        

      ]
    },
  
    // {
    //   category: "Databases & Cache",
    //   icon: "🗄️",
    //   items: [
    //     { name: "MySQL",        emoji: "🐬", devicon: "devicon-mysql-plain colored", logo: "" },
    //     { name: "PostgreSQL",   emoji: "🐘", devicon: "devicon-postgresql-plain colored", logo: "" },
    //     { name: "MongoDB",      emoji: "🍃", devicon: "devicon-mongodb-plain colored", logo: "" },
    //     { name: "Redis",        emoji: "💾", devicon: "devicon-redis-plain colored", logo: "" },
    //     { name: "HBase",        emoji: "📈", devicon: "", logo: "https://cdn.simpleicons.org/apachehbase" }
    //   ]
    // },
  
    {
      category: "Cloud & DevOps | Monitoring",
      icon: "☁️",
      items: [
        { name: "AWS",         emoji: "☁️", devicon: "devicon-amazonwebservices-plain colored", logo: "" },
        { name: "Docker",      emoji: "🐳", devicon: "devicon-docker-plain colored", logo: "" },
        { name: "Kubernetes",  emoji: "☸️", devicon: "", logo: "https://cdn.simpleicons.org/kubernetes" },
        { name: "Jenkins",     emoji: "🏗️", devicon: "", logo: "https://cdn.simpleicons.org/jenkins" },
        {
          name: "Nginx",
          emoji: "💚",
          devicon: "devicon-nginx-plain colored",
          logo: ""
        },
        
        {
          name: "PuTTY",
          emoji: "🟩",
          devicon: "devicon-putty-plain colored",
          logo: ""
        },
                
        {
          name: "SVN",
          emoji: "📁",
          devicon: "devicon-subversion-plain colored",
          logo: ""
        },
        
        { name: "Git",         emoji: "📝", devicon: "devicon-git-plain colored", logo: "" },
        {
          name: "GitLab",
          emoji: "🦊",
          devicon: "devicon-gitlab-plain colored",
          logo: ""
        },        
        { name: "Kibana",   emoji: "📊", devicon: "", logo: "https://cdn.simpleicons.org/kibana" },
        { name: "Grafana",  emoji: "📈", devicon: "", logo: "https://cdn.simpleicons.org/grafana" },
        {
          name: "Prometheus",
          icon: "",
          logo: "https://cdn.simpleicons.org/prometheus",
          emoji: "🔥"
        },
        { 
          name: "Linux", 
          emoji: "🐧", 
          devicon: "devicon-linux-plain colored", 
          logo: "" 
        },
        
      ]
    },

    {
      category: "AI | Applied AI |System Architecture | Engineering Practices",
      icon: "🧩",
      items: [
        {
          name: "System Design",
          emoji: "🧭",
          devicon: "",
          logo: "https://cdn.simpleicons.org/mermaid"  // diagram tool icon for system design
        },
        {
          name: "Microservices Architecture",
          emoji: "🔀",
          devicon: "",
          logo: "https://cdn.simpleicons.org/docker"  // Docker icon for container-based microservice architecture
        },
        {
          name: "REST API Design",
          emoji: "🌐",
          devicon: "",
          logo: "https://cdn.simpleicons.org/postman"  // Postman icon for REST API design and testing
        },
    
        {
          name: "Unit Testing",
          emoji: "🧪",
          devicon: "devicon-junit-plain colored",
          logo: ""
        },
        {
          name: "Integration Testing",
          emoji: "🔗",
          devicon: "",
          logo: "https://cdn.simpleicons.org/testin"  // test icon with connection meaning
        },
        {
          name: "Performance Testing",
          emoji: "⚡",
          devicon: "",
          logo: "https://cdn.simpleicons.org/speedtest"  // speed indicator
        },
    
        {
          name: "LLM",
          emoji: "🧱",
          devicon: "",
          logo: "https://cdn.simpleicons.org/openai"  // OpenAI icon for large language models
        },
        {
          name: "RAG",
          emoji: "📐",
          devicon: "",
          logo: "https://cdn.simpleicons.org/huggingface"  // Hugging Face icon for retrieval-augmented generation
        },
        {
          name: "Langchain",
          emoji: "🏛️",
          devicon: "",
          logo: "https://cdn.simpleicons.org/langchain"  // LangChain icon
        },
        {
          name: "LangGraph",
          emoji: "🎛️",
          devicon: "",
          logo: "https://cdn.simpleicons.org/graphql"  // GraphQL icon for graph-oriented workflows
        },
    
        {
          name: "Vector Database",
          emoji: "👀",
          devicon: "",
          logo: "https://cdn.simpleicons.org/pinecone"  // Pinecone icon for vector databases
        },
        {
          name: "Semantic Search",
          emoji: "👥",
          devicon: "",
          logo: "https://cdn.simpleicons.org/elastic"  // Elastic icon for search and semantic retrieval
        },
        {
          name: "Debugging",
          emoji: "🐞",
          devicon: "",
          logo: "https://cdn.simpleicons.org/bug"  // accurate bug icon
        }
      ]
    }
    
    
  
    // {
    //   category: "Frontend & Tools",
    //   icon: "🎨",
    //   items: [
    //     { name: "Angular",  emoji: "🅰️", devicon: "devicon-angular-plain colored", logo: "" },
    //     { name: "React",    emoji: "⚛️", devicon: "devicon-react-original colored", logo: "" },
    //     { name: "HTML/CSS", emoji: "📄", devicon: "devicon-html5-plain colored", logo: "" },
    //     { name: "Kibana",   emoji: "📊", devicon: "", logo: "https://cdn.simpleicons.org/kibana" },
    //     { name: "Grafana",  emoji: "📈", devicon: "", logo: "https://cdn.simpleicons.org/grafana" }
    //   ]
    // }
  ],  
  projects: [
    {
      id: 1,
      title: "Intelligent Invoice Auditor",
      emoji: "🧠",
      description: "AI-powered invoice processing using Azure, OpenAI, and RAG",
      technologies: ["Python", "Azure", "OpenAI", "RAG", "Angular"],
      links: { github: "https://github.com/Skycoder10" }
    },
    {
      id: 2,
      title: "E-commerce Platform",
      emoji: "🛒",
      description: "Full-stack e-commerce with authentication and payment integration",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      links: { github: "https://github.com/Skycoder10" }
    },
    {
      id: 3,
      title: "GSTN Invoice Management System",
      emoji: "📊",
      description: "Large-scale distributed system managing 2.5M invoices with 88% performance improvement",
      technologies: ["Java", "Kafka", "HBase", "Angular"]
    }
  ],
  blogs: [
    {
      id: 1,
      title: "Optimizing Distributed Systems at Scale",
      date: "Nov 28, 2025",
      description: "Learn techniques to reduce GSTR-2B generation from 17 hours to 2 hours",
      content: "In this comprehensive guide, we explore key principles for designing distributed systems. Learn about performance optimization, caching strategies, and real-world implementation. We discuss the techniques used to reduce GSTR-2B report generation from 17 hours to just 2 hours, impacting 9 million taxpayers. Topics include data partitioning, message queue optimization with Apache Kafka, Redis caching, and database indexing strategies."
    },
    {
      id: 2,
      title: "System Design Interview Preparation",
      date: "Nov 25, 2025",
      description: "Complete guide to preparing for system design interviews",
      content: "System design interviews are crucial for senior roles. This guide covers scalability, load balancing, database design, caching, and API design patterns. Learn structured approaches to solve design problems and communicate your decisions effectively. We walk through real interview questions and provide frameworks for analysis."
    },
    {
      id: 3,
      title: "Mastering Go Concurrency Patterns",
      date: "Nov 20, 2025",
      description: "Advanced concurrency patterns in Go with goroutines and channels",
      content: "Go's concurrency model is elegant and powerful. This article explores goroutines, channels, buffered channels, and context management. Learn common patterns like fan-out/fan-in, worker pools, and rate limiting. We analyze real code examples and discuss best practices for avoiding deadlocks and race conditions."
    },
    {
      id: 4,
      title: "Apache Kafka: From Basics to Advanced",
      date: "Nov 15, 2025",
      description: "Deep dive into Kafka architecture and real-time streaming",
      content: "Apache Kafka is a distributed streaming platform powering real-time pipelines. This guide covers architecture, producers, consumers, topic partitioning, and replication. Learn about consumer groups, offset management, and exactly-once semantics. Includes real-world examples from handling $500B annual volumes."
    },
    {
      id: 5,
      title: "Database Performance Tuning Techniques",
      date: "Nov 10, 2025",
      description: "Optimize databases through indexing and query optimization",
      content: "Database performance is critical for scalable applications. This guide covers query optimization, indexing strategies, and profiling tools. Learn about vertical and horizontal scaling, sharding and replication approaches. Includes case studies of migrating millions of records efficiently."
    },
    {
      id: 6,
      title: "Microservices Architecture Best Practices",
      date: "Nov 5, 2025",
      description: "Building maintainable and scalable microservices",
      content: "Microservices enable teams to build complex applications at scale. This article covers service decomposition, inter-service communication, data consistency, and resilience patterns. Learn about circuit breakers, retry policies, and monitoring distributed systems."
    },
    {
      id: 7,
      title: "Competitive Programming Strategies",
      date: "Oct 28, 2025",
      description: "Level up problem-solving skills for contests and interviews",
      content: "Competitive programming sharpens your algorithmic thinking. This guide covers algorithmic techniques, time complexity analysis, and common data structures. Learn about dynamic programming, graph algorithms, and advanced sorting. Based on achieving top 1% on CodeForces."
    },
    {
      id: 8,
      title: "Building Scalable REST APIs",
      date: "Oct 20, 2025",
      description: "Design REST APIs handling millions of requests efficiently",
      content: "REST APIs are the backbone of modern applications. This guide covers API design principles, versioning, authentication, rate limiting, and caching. Learn error handling, logging, monitoring strategies for production systems."
    }
  ],
  certifications: [
    { id: 1, name: "Platinum Club Member", issuer: "Infosys - Top 3%", icon: "🏆" },
    { id: 2, name: "2x Insta Award Winner", issuer: "Infosys", icon: "⭐" },
    { id: 3, name: "STG Makeathon Finalist", issuer: "Ranked 6/294 teams", icon: "🥇" },
    { id: 4, name: "Top 10% LeetCode", issuer: "Rating: 1747", icon: "📊" },
    { id: 5, name: "Top 1% CodeForces", issuer: "Rating: 1434", icon: "🎯" },
    { id: 6, name: "Team Leadership", issuer: "Mentoring 8-10 engineers", icon: "👥" }
  ]
};

// State
let currentBlogPage = 1;
const blogsPerPage = 3;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderExperiences();
  renderSkills();
  renderProjects();
  renderBlogs();
  renderCertifications();
  initModal();
});

// Navigation
function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close mobile menu on link click
  // navLinks.forEach(link => {
  //   link.addEventListener('click', () => {
  //     navMenu.classList.remove('active');
  //   });
  // });

  // Close mobile menu on link click + set active on click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');

    // Immediately update active link on click
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Active section highlighting on scroll (fixed)
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 132; // adjust for navbar height
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  // If scrolled to the very bottom, force 'contact' as active
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2) {
    current = 'contact';
  }

  navLinks.forEach(link => {
    const targetId = link.getAttribute('href').substring(1);
    link.classList.toggle('active', targetId === current);
  });
});



  // Active section highlighting
  // window.addEventListener('scroll', () => {
  //   let current = '';
  //   const sections = document.querySelectorAll('section');
    
  //   sections.forEach(section => {
  //     const sectionTop = section.offsetTop;
  //     const sectionHeight = section.clientHeight;
  //     if (window.pageYOffset >= sectionTop - 100) {
  //       current = section.getAttribute('id');
  //     }
  //   });

  //   navLinks.forEach(link => {
  //     link.classList.remove('active');
  //     if (link.getAttribute('href').substring(1) === current) {
  //       link.classList.add('active');
  //     }
  //   });
  // });
}

// Render Experiences
function renderExperiences() {
  const container = document.getElementById('experienceContainer');
  
  data.experiences.forEach(exp => {
    const expCard = document.createElement('div');
    expCard.className = 'experience-card';


    const techLogosHTML = exp.techLogos.map(tech => {
      if (tech.logo && tech.logo !== "") {
        // use external image URL (PNG / SVG / etc.)
        return `<span class="tech-logo">
                  <img src="${tech.logo}" alt="${tech.name} logo" class="tech-logo-img" />
                  ${tech.name}
                </span>`;
      } else if (tech.icon && tech.icon !== "") {
        // use font-icon (e.g. devicon)
        return `<span class="tech-logo">
                  <i class="${tech.icon}"></i>
                  ${tech.name}
                </span>`;
      } else {
        // fallback to emoji
        return `<span class="tech-logo">
                  ${tech.emoji} ${tech.name}
                </span>`;
      }
    }).join("");
    // const techLogosHTML = exp.techLogos.map(tech => 
    //   `<span class="tech-logo">
    //       ${tech.icon && tech.icon !== "" 
    //         ? `<i class="${tech.icon}"></i>` 
    //         : tech.emoji
    //       } 
    //       ${tech.name}
    //    </span>`
    // ).join('');
    // const techLogosHTML = exp.techLogos.map(tech => {
    //   if (tech.logo && tech.logo !== "") {
    //     // external SVG/logo URL case
    //     return `<span class="tech-logo">
    //               <img src="${tech.logo}" alt="${tech.name} logo" class="tech-logo-img" />
    //               ${tech.name}
    //             </span>`;
    //   } else if (tech.icon && tech.icon !== "") {
    //     // font-icon case (e.g. devicon)
    //     return `<span class="tech-logo">
    //               <i class="${tech.icon}"></i>
    //               ${tech.name}
    //             </span>`;
    //   } else {
    //     // fallback to emoji
    //     return `<span class="tech-logo">
    //               ${tech.emoji} ${tech.name}
    //             </span>`;
    //   }
    // }).join("");
    
    
    // const techLogosHTML = exp.techLogos.map(tech => 
    //   `<span class="tech-logo">${tech.icon == "" ? tech.emoji : tech.icon} ${tech.name}</span>`
    // ).join('');
    
    const projectsHTML = exp.projects.map(project => 
      `<div class="project-card" data-project-id="${project.id}">
        <h4 class="project-name">${project.name}</h4>
        <p class="project-description">${project.description}</p>
      </div>`
    ).join('');
    
    expCard.innerHTML = `
      <div class="experience-header">
        <div>
          <h3 class="experience-title">${exp.title}</h3>
          <div class="experience-company">${exp.company}</div>
          <div class="experience-location">${exp.location}</div>
        </div>
        <div class="experience-dates">${exp.startDate} - ${exp.endDate}</div>
      </div>
      <div class="tech-logos">${techLogosHTML}</div>
      <div class="projects-list">${projectsHTML}</div>
    `;
    
    container.appendChild(expCard);
  });
  
  // Add click handlers to project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = parseInt(card.dataset.projectId);
      const project = findProjectById(projectId);
      if (project) {
        openProjectModal(project);
      }
    });
  });
}

// Find project by ID
function findProjectById(id) {
  for (const exp of data.experiences) {
    const project = exp.projects.find(p => p.id === id);
    if (project) return project;
  }
  return null;
}

// Render Skills
function renderSkills() {
  const container = document.getElementById('skillsContainer');
  
  data.skills.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'skill-category';
    
    // Duplicate items for seamless loop
    const duplicatedItems = [...category.items, ...category.items];





          const skillsHTML = duplicatedItems
        .map(skill => {
          let iconHTML = "";

          if (skill.devicon && skill.devicon !== "") {
            iconHTML = `<i class="${skill.devicon} skill-icon"></i>`;
          } 
          else if (skill.logo && skill.logo !== "") {
            iconHTML = `<img src="${skill.logo}" alt="${skill.name} logo" class="skill-logo-img" />`;
          } 
          else {
            iconHTML = `<span class="skill-emoji">${skill.emoji}</span>`;
          }

          return `
            <div class="skill-item">
              ${iconHTML}
              <span class="skill-name">${skill.name}</span>
            </div>
          `;
        })
        .join('');


  //   const skillsHTML = duplicatedItems
  // .map(skill => {
  //   let iconHTML = "";

  //   if (skill.devicon && skill.devicon !== "") {
  //     // Devicon icon
  //     iconHTML = `<i class="${skill.devicon} skill-icon"></i>`;
  //   } 
  //   else if (skill.logo && skill.logo !== "") {
  //     // SVG / PNG / SimpleIcons URL
  //     iconHTML = `<img src="${skill.logo}" alt="${skill.name} logo" class="skill-logo-img" />`;
  //   } 
  //   else {
  //     // Emoji fallback
  //     iconHTML = `<span class="skill-emoji">${skill.emoji}</span>`;
  //   }

  //   return `
  //     <div class="skill-item">
  //       ${iconHTML}
  //     </div>
  //   `;
  // })
  // .join('');


    //   const skillsHTML = duplicatedItems
    // .map(skill => {
    //   const iconHTML = skill.devicon
    //     ? `<i class="${skill.devicon} skill-icon"></i>`
    //     : `<span class="skill-emoji">${skill.emoji}</span>`;

    //   return `
    //     <div class="skill-item">
    //       ${iconHTML}
    //     </div>
    //   `;
    // })
    // .join('');

    
    // const skillsHTML = duplicatedItems.map(skill => {
    //   const iconHTML = skill.devicon 
    //     ? `<i class="${skill.devicon} skill-icon"></i>` 
    //     : `<span class="skill-emoji">${skill.emoji}</span>`;
      
    //   return `
    //     <div class="skill-item">
    //       ${iconHTML}
    //       <span class="skill-name">${skill.name}</span>
    //     </div>
    //   `;
    // }).join('');
    
    categoryDiv.innerHTML = `
      <div class="skill-category-header">
        <span class="skill-category-icon">${category.icon}</span>
        <h3 class="skill-category-name">${category.category}</h3>
      </div>
      <div class="skills-scroll-container">
        <div class="skills-row">${skillsHTML}</div>
      </div>
    `;
    
    container.appendChild(categoryDiv);
  });
}

// Render Projects
function renderProjects() {
  const container = document.getElementById('projectsContainer');
  
  data.projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-item';
    
    const techHTML = project.technologies.map(tech => 
      `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    const linksHTML = project.links && project.links.github 
      ? `<div class="project-links">
          <a href="${project.links.github}" target="_blank" class="project-link">GitHub</a>
        </div>` 
      : '';
    
    projectDiv.innerHTML = `
      <div class="project-emoji">${project.emoji}</div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      <div class="project-tech">${techHTML}</div>
      ${linksHTML}
    `;
    
    container.appendChild(projectDiv);
  });
}

// Render Blogs
function renderBlogs() {
  const container = document.getElementById('blogsContainer');
  const startIdx = (currentBlogPage - 1) * blogsPerPage;
  const endIdx = startIdx + blogsPerPage;
  const blogsToShow = data.blogs.slice(startIdx, endIdx);
  
  container.innerHTML = '';
  
  blogsToShow.forEach(blog => {
    const blogDiv = document.createElement('div');
    blogDiv.className = 'blog-card';
    
    blogDiv.innerHTML = `
      <div class="blog-date">${blog.date}</div>
      <h3 class="blog-title">${blog.title}</h3>
      <p class="blog-description">${blog.description}</p>
      <span class="blog-read-more" data-blog-id="${blog.id}">Read More →</span>
    `;
    
    container.appendChild(blogDiv);
  });
  
  // Add click handlers
  document.querySelectorAll('.blog-read-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const blogId = parseInt(btn.dataset.blogId);
      const blog = data.blogs.find(b => b.id === blogId);
      if (blog) {
        openBlogModal(blog);
      }
    });
  });
  
  renderPagination();
}

// Render Pagination
function renderPagination() {
  const container = document.getElementById('pagination');
  const totalPages = Math.ceil(data.blogs.length / blogsPerPage);
  
  container.innerHTML = '';
  
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.className = `page-btn ${i === currentBlogPage ? 'active' : ''}`;
    btn.textContent = i;
    btn.addEventListener('click', () => {
      currentBlogPage = i;
      renderBlogs();
      document.getElementById('blogs').scrollIntoView({ behavior: 'smooth' });
    });
    container.appendChild(btn);
  }
}

// Render Certifications
function renderCertifications() {
  const container = document.getElementById('certificationsContainer');
  
  data.certifications.forEach(cert => {
    const certDiv = document.createElement('div');
    certDiv.className = 'cert-card';
    
    certDiv.innerHTML = `
      <div class="cert-icon">${cert.icon}</div>
      <h3 class="cert-name">${cert.name}</h3>
      <p class="cert-issuer">${cert.issuer}</p>
    `;
    
    container.appendChild(certDiv);
  });
}

// Modal Functions
function initModal() {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('modalClose');
  
  closeBtn.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// function openProjectModal(project) {
//   const modal = document.getElementById('modal');
//   const modalBody = document.getElementById('modalBody');
  
//   const metricsHTML = project.metrics.map(metric => 
//     `<span class="metric-badge">${metric}</span>`
//   ).join('');
  
//   const techHTML = project.technologies.map(tech => 
//     `<span class="tech-badge">${tech}</span>`
//   ).join('');
  
//   modalBody.innerHTML = `
//     <h2 class="modal-project-name">${project.name}</h2>
//     <p class="modal-project-description">${project.description}</p>
//     <div class="modal-metrics">${metricsHTML}</div>
//     <div class="modal-impact">
//       <div class="impact-label">Business Impact</div>
//       <div class="impact-text">${project.impact}</div>
//     </div>
//     <div class="modal-technologies">
//       <div class="technologies-label">Technologies Used</div>
//       <div class="technologies-list">${techHTML}</div>
//     </div>
//   `;
  
//   modal.classList.add('active');
//   document.body.style.overflow = 'hidden';
// }


function openProjectModal(project) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');

  const metricsHTML = project.metrics
    .map(metric => `<span class="metric-badge">${metric}</span>`)
    .join('');

  const impactHTML = Array.isArray(project.impact)
    ? `<ul class="impact-list">
         ${project.impact.map(i => `<li>${i}</li>`).join('')}
       </ul>`
    : `<p class="impact-text">${project.impact}</p>`;

  modalBody.innerHTML = `
    <h2 class="modal-project-name">${project.name}</h2>
    <p class="modal-project-description">${project.description}</p>

    <div class="modal-metrics">${metricsHTML}</div>

    <div class="modal-impact">
      <div class="impact-label">Business Impact</div>
      ${impactHTML}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}


// function openProjectModal(project) {
//   const modal = document.getElementById('modal');
//   const modalBody = document.getElementById('modalBody');

//   const metricsHTML = project.metrics
//     .map(metric => `<span class="metric-badge">${metric}</span>`)
//     .join('');

//   const techHTML = project.technologies
//     .map(tech => `<span class="tech-badge">${tech}</span>`)
//     .join('');

//   // Handle impact as bullet list
//   const impactHTML = Array.isArray(project.impact)
//     ? `<ul class="impact-list">
//          ${project.impact.map(i => `<li>${i}</li>`).join('')}
//        </ul>`
//     : `<p class="impact-text">${project.impact}</p>`; 
//     // fallback if someone passes string

//   modalBody.innerHTML = `
//     <h2 class="modal-project-name">${project.name}</h2>
//     <p class="modal-project-description">${project.description}</p>

//     <div class="modal-metrics">${metricsHTML}</div>

//     <div class="modal-impact">
//       <div class="impact-label">Business Impact</div>
//       ${impactHTML}
//     </div>

//     <div class="modal-technologies">
//       <div class="technologies-label">Technologies Used</div>
//       <div class="technologies-list">${techHTML}</div>
//     </div>
//   `;

//   modal.classList.add('active');
//   document.body.style.overflow = 'hidden';
// }


function openBlogModal(blog) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  
  modalBody.innerHTML = `
    <h2 class="modal-blog-title">${blog.title}</h2>
    <div class="modal-blog-date">${blog.date}</div>
    <p class="modal-blog-content">${blog.content}</p>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}