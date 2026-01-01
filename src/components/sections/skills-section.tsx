import { ScrollFadeIn } from '../common/scroll-fade-in';

const skills = [
    { title: "Programming & Analysis", content: "C, C++, Python, R, SQL, Bash, UNIX, JavaScript, Git" },
    { title: "Machine Learning & Deep Learning", content: "Supervised & Unsupervised Learning, Deep Learning (CNN, RNN, Transformers, GANs, ANN), NLP, Recommendation Systems, PyTorch, TensorFlow, Hugging Face Transformers, spaCy, NLTK" },
    { title: "ML Algorithms", content: "Linear/Logistic Regression, Decision Trees, Random Forest, XGBoost, LightGBM, K-Means, KNN, SVM, Time Series (ARIMA, SARIMA, LSTM)" },
    { title: "GenAI & LLMs", content: "OpenAI, Gemini, Claude APIs, Transformers, BERT, LangChain, LangGraph, RAG, Fine-Tuning, Multi-Agent Systems, Google ADK, MCP (Model Context Protocol), ChromaDB, Pinecone, Embeddings, Ollama, Llama-3.3-70B-Versatile" },
    { title: "Data Analytics", content: "Exploratory Data Analysis (EDA), Feature Engineering, Statistical Modeling, Hypothesis Testing, A/B Testing, Data Modeling, Model Monitoring" },
    { title: "Big Data & Cloud", content: "Apache Spark, Hadoop, AWS (SageMaker, S3, Lambda, CloudWatch, Cognito), SQL & NoSQL Databases, ETL Pipelines, Data Warehousing (Snowflake, Redshift), Azure ML, GCP Vertex AI" },
    { title: "Backend & MLOps", content: "FastAPI, Flask, Docker, Kubernetes, CI/CD, Apache Airflow, MLflow, Weights & Biases" },
    { title: "Visualization & BI", content: "Tableau, Power BI, Plotly, Streamlit, Matplotlib, Seaborn, Excel, Power Automate" },
    { title: "Tools & Version Control", content: "MATLAB, MixPanel, Git, GitHub, CUDA, Jenkins, Visual Studio, JIRA" },
];

const SkillCard = ({ title, content }: { title: string, content: string }) => (
    <div className="bg-white dark:bg-card border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
        <h4 className="font-bold text-lg text-foreground mb-3">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{content}</p>
    </div>
);

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container">
        <ScrollFadeIn>
          <h2 className="section-title text-center">Technical Skills</h2>
        </ScrollFadeIn>
        <ScrollFadeIn>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {skills.map(skill => <SkillCard key={skill.title} {...skill} />)}
            </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
