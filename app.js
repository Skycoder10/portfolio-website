// Data
const data = {
  experiences: [
    {
      id: 1,
      title: "Specialist Programmer L2 (Software Engineer II)",
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
          description: "Architected distributed invoicing platform end-to-end for 14M active taxpayers — 6 microservices, 3 Storm topologies, and Angular frontend on Kubernetes/AWS; led 10-engineer team.",
          metrics: ["8.5x throughput gain", "14M taxpayers", "2.5M invoices migrated", "<30 min migration"],
          impact: [
            "Diagnosed sequential HBase scan bottleneck in GSTR-2B pipeline; redesigned Storm topology with parallel bolt execution and range-partitioned pre-aggregation — cut processing time from 17 hrs to 2 hrs for 9M taxpayers (8.5× throughput gain) with zero data loss.",
            "Designed Kafka-backed migration pipeline moving 2.5M invoices from HBase to MySQL with transactional consistency and rollback support, completing in <30 min — unblocked 3 downstream reporting features.",
            "Refactored shared data-access layer across 8 microservices into a unified repository abstraction — reduced DB round-trips by ~25% at 50K+ daily transactions, improving p99 latency by 40 ms on critical invoice-lookup paths.",
            "Delivered Spring Batch chunk-oriented Excel/JSON report generation for 2.4M invoices per cycle, keeping heap usage flat under sustained load for a 14M-taxpayer base.",
            "Led 10 engineers through system design, code reviews, and delivery milestones across a distributed multi-service architecture on AWS/K8s."
          ],
          technologies: ["Java", "Spring Batch", "HBase", "MySQL", "Redis", "Kafka", "Apache Storm", "Kubernetes", "AWS", "Angular"]
        },
        {
          id: 2,
          name: "Table 14-15 (E-Commerce Operator Tax Compliance)",
          description: "Designed e-commerce operator tax-compliance pipelines from scratch — $5B+/month invoice volume across 10M taxpayers with Kafka event ingestion and batch aggregation engine.",
          metrics: ["$5B+/month volume", "10M taxpayers", "30% DB reduction", "1.2s latency gain"],
          impact: [
            "Built Kafka event ingestion pipeline, batch aggregation engine, and idempotent reconciliation logic processing 10M+ records per cycle with fault tolerance and exactly-once delivery semantics.",
            "Resolved N+1 query anti-pattern via batch fetch with a local aggregation cache — cut DB hits by 30% and reduced auto-population latency from ~8 s to ~6.8 s at peak load.",
            "Designed pipeline from scratch to handle $5B+/month in e-commerce invoice volume for 10M taxpayers, covering operator-reported supply data under GST compliance requirements.",
            "Implemented fault-tolerant architecture with replay support and idempotent write semantics — ensuring zero double-counting across multi-cycle reconciliation runs."
          ],
          technologies: ["Java", "Spring Boot", "Apache Storm", "HBase", "Angular", "Kafka"]
        },
        {
          id: 3,
          name: "GSTR-9 Annual Return Implementation",
          description: "Implemented GSTR-9 pipeline — annual reconciliation consolidating 12 months of invoice data for 14M taxpayers with batch-driven Excel/JSON report generation.",
          metrics: ["2.4M invoices/cycle", "14M taxpayers", "flat heap usage", "annual compliance"],
          impact: [
            "Designed GSTR-9 annual return pipeline aggregating 12 months of GSTR-1, GSTR-2B, and ITC ledger data into a reconciled annual return for 14M+ taxpayers.",
            "Delivered Spring Batch chunk-oriented processing for 2.4M invoice records per generation cycle — maintaining flat heap usage under sustained load using streaming writes.",
            "Engineered multi-format report output (Excel + JSON) as required by the GSTN portal, enabling offline verification and CA-assisted audit for taxpayers.",
            "Implemented idempotent reconciliation to handle late amendments and revised returns — ensuring GSTR-9 data consistency across multi-table joins on HBase and MySQL.",
            "Optimised batch pre-computation for year-end aggregation, reducing peak filing season report generation overhead across the 14M-taxpayer base."
          ],
          technologies: ["Java", "Spring Batch", "HBase", "MySQL", "Apache Camel"]
        },
        {
          id: 4,
          name: "Financial Information Provider (FIP) Service",
          description: "Built FIP service from scratch, onboarding GSTN onto India's Account Aggregator network as a certified FIP on the Sahamati portal — serving 12M taxpayers across 16 AAs at <200ms p99.",
          metrics: ["12M taxpayers", "16 Account Aggregators", "$500B+ annual volume", "<200ms p99"],
          impact: [
            "Built FIP service from scratch, becoming a certified FIP on India's Sahamati portal — the first integration of GSTN into the RBI Account Aggregator ecosystem.",
            "Architected consent lifecycle APIs fully compliant with the RBI AA framework — managing consent creation, revocation, and expiry with tamper-proof audit trails.",
            "Implemented RBI-compliant encrypted data packaging and zero-PII tokenization — ensuring no taxpayer personal data leaked across AA boundaries.",
            "Achieved <200 ms p99 latency serving 12M taxpayers across 16 Account Aggregators, covering $500B+ in annual invoice volume.",
            "Enabled credit access and financial insights for millions of MSMEs by exposing verified GST invoice data as a financial data asset through the AA ecosystem."
          ],
          technologies: ["Java", "Spring Boot", "OAuth2", "REST APIs", "Redis", "Kafka"]
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
          name: "Order Routing Optimization (Trinity Service)",
          description: "Optimized backend order-routing logic in the Trinity service — eliminated pincode-level redundancy, cutting routing overhead by 40% and order fulfillment time from 3-5 days to 2-3 days.",
          metrics: ["40% less overhead", "3-5 → 2-3 days TTL", "100K orders/day"],
          impact: [
            "Redesigned order-routing logic in the Trinity service to remove pincode-level redundancy in seller-to-customer assignment — reducing routing computation overhead by 40%.",
            "Cut order fulfillment time from 3-5 days to 2-3 days, directly improving delivery SLAs and customer satisfaction.",
            "Optimised the routing path to scale cleanly under peak load of ~100K orders/day without added latency."
          ],
          technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis"]
        },
        {
          id: 6,
          name: "Change Data Capture (CDC) Pipeline",
          description: "Implemented a Kafka-based CDC pipeline for real-time Seller DB / Inventory DB sync — eliminating async staleness behind 30% of inventory-availability errors.",
          metrics: ["Real-time sync", "30% fewer errors", "Seller ↔ Inventory DB"],
          impact: [
            "Built a Kafka + Debezium CDC pipeline streaming changes from the Seller DB to the Inventory DB in real time, replacing stale async batch syncs.",
            "Eliminated the data-staleness gap responsible for ~30% of inventory-availability errors at checkout.",
            "Ensured Seller and Inventory databases stayed consistent under high write volume, improving product-availability accuracy on the storefront."
          ],
          technologies: ["Kafka", "Debezium", "MySQL", "Java"]
        },
        {
          id: 7,
          name: "Test Coverage Enhancement",
          description: "Scaled test coverage from 17% to 80% across the inventory-sync services with unit, integration, and contract-level tests.",
          metrics: ["17% → 80% coverage", "Unit + Integration + Contract", "CI-gated"],
          impact: [
            "Scaled automated test coverage from 17% to 80% across the CDC and inventory-sync services, hardening reliability of critical data flows.",
            "Added unit, integration, and contract-level tests — catching schema and contract regressions between Seller and Inventory services before production.",
            "Established a regression safety net that made the real-time sync pipeline safe to evolve and deploy continuously."
          ],
          technologies: ["JUnit", "Mockito", "Spring Test", "Pact"]
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
      title: "Redis Data Backup Strategy: A Comprehensive Guide",
      date: "Oct 15, 2025",
      description: "A deep dive into Redis persistence — RDB snapshots vs. AOF logging — with configuration trade-offs, backup best practices, and disaster-recovery strategies that balance durability with performance.",
      url: "https://medium.com/@akashmandalam49973/redis-data-backup-strategy-a-comprehensive-guide-c41a11b67589"
    },
    {
      id: 2,
      title: "Understanding Spring Batch: Key Components and Use Cases",
      date: "Oct 11, 2024",
      description: "Breaks down Spring Batch's core building blocks — Jobs, Steps, ItemReaders, ItemProcessors, ItemWriters — and how they fit together for data migration, ETL, reporting, and concurrent batch processing.",
      url: "https://medium.com/@akashmandalam49973/understanding-spring-batch-key-components-and-use-cases-0b27837a8bf6"
    },
    {
      id: 3,
      title: "Apache Kafka Explained: Architecture and Applications in Modern Data Systems",
      date: "Oct 10, 2024",
      description: "Explains Kafka's architecture — brokers, topics, partitions, producers, consumers — and real-world uses from real-time pipelines and IoT to microservices and ML inference, plus integration with Spark/Flink/Hadoop.",
      url: "https://medium.com/@akashmandalam49973/apache-kafka-explained-architecture-and-applications-in-modern-data-systems-b6e92a9f1675"
    },
    {
      id: 4,
      title: "Apache Storm: A Distributed Real-Time Stream Processing System",
      date: "Oct 12, 2023",
      description: "Overviews Storm's master-worker model with spouts and bolts, its ability to process millions of tuples/second, fault tolerance, and applications across real-time analytics, ML, and ETL.",
      url: "https://medium.com/@akashmandalam49973/apache-storm-a-distributed-real-time-stream-processing-system-ac9ec79f7d3c"
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
const blogsPerPage = 4;

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
    <p class="modal-blog-content">${blog.description}</p>
    <a class="modal-blog-link" href="${blog.url}" target="_blank" rel="noopener noreferrer">Read on Medium →</a>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}