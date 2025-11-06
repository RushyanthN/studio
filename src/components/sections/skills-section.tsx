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
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl transition-all duration-300 hover:bg-cyan-400/10 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,255,255,0.2)] group">
        <h4 className="font-bold text-lg text-white mb-3 group-hover:text-cyan-300 transition-colors">{title}</h4>
        <p className="text-gray-300 text-sm leading-relaxed">{content}</p>
    </div>
);

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-black/20">
      <div className="container">
        <ScrollFadeIn>
          <h2 className="section-title text-gradient-cyan-white">Technical Skills</h2>
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
