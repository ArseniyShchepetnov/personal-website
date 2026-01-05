export const techStackItems = [
    {
        id: 1,
        src: "python.png",
        name: "Python",
        description: "Programming Language",
        url: "https://www.python.org/",
        category: "Languages",
    },
    {
        id: 2,
        src: "pytorch.png",
        name: "PyTorch",
        description: "Machine Learning Framework",
        url: "https://pytorch.org/",
        category: "ML",
    },
    {
        id: 3,
        src: "lightning.png",
        name: "PyTorch Lightning",
        description: "Machine Learning High-level Framework",
        url: "https://www.pytorchlightning.ai",
        category: "ML",
    },
    {
        id: 4,
        src: "scikitlearn.png",
        name: "Scikit-Learn",
        description: "Machine Learning Library",
        url: "https://scikit-learn.org/",
        category: "ML",
    },
    {
        id: 5,
        src: "tensorflow.png",
        name: "TensorFlow",
        description: "Machine Learning Framework",
        url: "https://www.tensorflow.org/",
        category: "ML",
    },
    {
        id: 6,
        src: "huggingface.png",
        name: "HuggingFace",
        description: "Open-Source AI Library",
        url: "https://huggingface.co/",
        category: "ML",
    },
    {
        id: 7,
        src: "pandas.png",
        name: "Pandas",
        description: "Data Analysis Library",
        url: "https://pandas.pydata.org/",
        category: "AI/ML", // Changed to AI/ML
    },
    {
        id: 8,
        src: "fastapi.svg",
        name: "FastAPI",
        description: "Web Framework",
        url: "https://fastapi.tiangolo.com/",
        category: "Web",
    },
    {
        id: 9,
        src: "docker.png",
        name: "Docker",
        description: "Containerization Platform",
        url: "https://www.docker.com/",
        category: "Infrastructure",
    },
    {
        id: 10,
        src: "airflow.png",
        name: "Airflow",
        description: "Workflow Management Platform",
        url: "https://airflow.apache.org/",
        category: "Infrastructure",
    },
    {
        id: 11,
        src: "postgresql.png",
        name: "PostgreSQL",
        description: "Relational Database Management System",
        url: "https://www.postgresql.org/",
        category: "Databases",
    },
    {
        id: 12,
        src: "aws.png",
        name: "Amazon Web Services",
        description: "Cloud Computing Service",
        url: "https://aws.amazon.com/",
        category: "Cloud",
    },
    {
        id: 13,
        name: "MLflow",
        src: "mlflow.png",
        description: "Machine Learning Lifecycle Platform",
        url: "https://mlflow.org/",
        category: "Infrastructure",
    },
    {
        id: 14,
        name: "Pandera",
        src: "pandera.png",
        description: "Data Validation Library",
        url: "https://pandera.readthedocs.io/",
        category: "Miscellaneous",
    },
    {
        id: 15,
        name: "Redshift",
        src: "redshift.png",
        description: "Database",
        url: "https://aws.amazon.com/redshift/",
        category: "Cloud",
    },
    {
        id: 16,
        name: "Google Cloud Platform",
        src: "gcp.png",
        description: "Google Cloud Platform",
        url: "https://aws.amazon.com/redshift/",
        category: "Cloud",
    },
    {
        id: 17,
        name: "LangGraph",
        src: "langgraph.png",
        description: "A library for building language agent and multi-agent workflows",
        url: "https://langchain.github.io/langgraph/",
        category: "AI/ML",
    },
    {
        id: 18,
        name: "Ray",
        src: "ray.png",
        description: "Unified framework for scaling AI and Python applications",
        url: "https://www.ray.io/",
        category: "Infrastructure",
    },
    {
        id: 19,
        name: "Snowflake",
        src: "snowflake.png",
        description: "Cloud Data Warehouse",
        url: "https://www.snowflake.com/",
        category: "Databases",
    },
    {
        id: 20,
        name: "Apache Spark",
        src: "apache_spark.png", // User to provide spark.png in public/ if not present
        description: "Unified analytics engine for large-scale data processing",
        url: "https://spark.apache.org/",
        category: "Infrastructure",
    },
    {
        id: 21,
        name: "ClickHouse",
        src: "clickhouse.svg", // User to provide clickhouse.png in public/ if not present
        description: "Open-source column-oriented database management system",
        url: "https://clickhouse.com/",
        category: "Databases",
    }
];


export const otherTechStackItems = [
    {
        id: 1,
        src: "R_logo.png",
        name: "R Language",
        description: "Programming Language",
        url: "https://www.r-project.org/",
        category: "Languages",
    },
    {
        id: 2,
        src: "cpp.png",
        name: "C++ Language",
        description: "Programming Language",
        url: "https://isocpp.org/",
        category: "Languages",
    },
    {
        id: 3,
        name: "Qt",
        src: "qt.png",
        description: "Cross-platform Application Framework",
        url: "https://www.qt.io/",
        category: "Miscellaneous",
    },
    {
        id: 4,
        name: "GitLab",
        src: "gitlab.png",
        description: "DevOps Platform",
        url: "https://about.gitlab.com/",
        category: "Miscellaneous", // Changed to Miscellaneous
    },
    {
        id: 5,
        name: "Microsoft Azure",
        src: "azure.png",
        description: "Cloud Computing Service",
        url: "https://azure.microsoft.com/",
        category: "Cloud",
    },
    {
        id: 7,
        name: "DVC",
        src: "dvc.png",
        description: "Data Version Control System",
        url: "https://dvc.org/",
        category: "Infrastructure",
    }
];


export const TechStackWordCloud = [
    { "LLM": 2 }, { "RAG": 1 }, { "NLP": 1 }, { "Transformers": 1 }, { "Bayesian Networks": 0.8 }, { "Statistics": 0.8 },
    { "Reinforcement Learning": 0.8 }, { "Embeddings": 0.8 }, { "PyTorch": 0.9 }, { "TensorFlow": 0.7 }, { "HuggingFace": 0.9 },
    { "LangGraph": 1.5 }, { "LangChain": 0.7 }, { "Spacy": 0.6 }, { "NLTK": 0.6 }, { "BERTopic": 0.6 },

    { "Docker": 1 }, { "Kubernetes": 0.8 }, { "Ray": 0.7 }, { "Spark": 0.9 }, { "Airflow": 1 }, { "Dbt": 0.8 },
    { "MLFlow": 0.9 }, { "DVC": 0.7 }, { "AWS": 0.9 }, { "SageMaker": 0.8 }, { "S3": 0.8 }, { "EC2": 0.7 }, { "RDS": 0.7 },
    { "Snowflake": 0.8 }, { "Snowpark": 0.7 }, { "Cortex": 0.6 }, { "GCP": 0.7 }, { "Azure": 0.6 },

    { "Python": 1 }, { "C++": 0.7 }, { "SQL": 0.8 }, { "JavaScript": 0.6 }, { "FastAPI": 0.8 }, { "poetry": 0.7 },
    { "ruff": 0.6 }, { "mypy": 0.6 }, { "pytest": 0.7 }, { "uv": 0.6 }, { "OOP": 0.8 }, { "CI/CD": 0.9 },
    { "TDD": 0.7 }, { "Asynchronous Programming": 0.5 },

    { "PostgreSQL": 1 }, { "pgvector": 0.8 }, { "qdrant": 0.8 }, { "ClickHouse": 0.7 }, { "MySQL": 0.7 }, { "Redshift": 0.8 },
    { "Vector Databases": 0.9 }, { "SQL/NoSQL": 0.8 }, { "Pinecone": 0.7 }, { "Apache Hudi": 0.6 },
    { "ELT/ETL": 0.9 }, { "DWH": 0.8 }, { "Data Lake": 0.8 }, { "Git": 0.9 }

];