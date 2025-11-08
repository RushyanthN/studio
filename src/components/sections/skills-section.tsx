import { ScrollFadeIn } from '../common/scroll-fade-in';

const skills = [
    { title: "Programming & Analysis", content: "Python, SQL, R, Bash, C++, JavaScript, Git" },
    { title: "Machine Learning & Deep Learning", content: "PyTorch, TensorFlow, W&B, GANs, CNN, RNN, ANN, NLP (spaCy, NLTK)" },
    { title: "GenAI & LLMs", content: "OpenAI, Gemini, Claude APIs, Transformers, BERT, LangChain, LangGraph, RAG, Fine-Tuning, ChromaDB, Pinecone" },
    { title: "Backend & Cloud", content: "FastAPI, Flask, Docker, Kubernetes, CI/CD, Airflow, AWS (SageMaker, S3, Lambda, CloudWatch, Cognito), Spark, Snowflake" },
    { title: "Data Engineering & MLOps", content: "ETL Pipelines, Data Modeling, Feature Engineering, MLflow, Model Monitoring, A/B Testing" },
    { title: "Visualization & BI", content: "Tableau, Power BI, Plotly, Streamlit, Excel, Power Automate" },
    { title: "ML Algorithms", content: "Linear/Logistic Regression, Decision Trees, Random Forest, XGBoost, LightGBM, K-Means, KNN, SVM, Time Series (ARIMA, SARIMA, LSTM)" },
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
