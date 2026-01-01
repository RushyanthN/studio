import { ScrollFadeIn } from '../common/scroll-fade-in';
import { ProjectCard } from '../common/project-card';

const projects = [
    {
      icon: '📄',
      title: 'Modular RAG with Agentic Routing and Self-Correction for Financial Document Analysis',
      description: 'Built a production-grade RAG pipeline over Apple and Tesla SEC 10-K filings, processing 3,751 financial documents (2,016 pages + 1,735 tables) and enabling natural-language Q&A with source-level citations across multi-year reports. Implemented hierarchical chunking with 6,068 parent chunks (2,048 chars) and 20,300 child chunks (512 chars), improving retrieval recall while reducing context fragmentation by 40% and achieving 95% answer accuracy on complex financial queries. Developed LLM-driven query expansion using RAG Fusion and step-back prompting, generating multiple semantic variants per query and fusing results via Reciprocal Rank Fusion, improving retrieval recall by 35% while reducing irrelevant results by 50%. Applied a two-stage retrieval pipeline with bi-encoder semantic search (BGE-base-en-v1.5) followed by cross-encoder re-ranking (BGE-reranker-large) and diversity filtering, achieving 0.92+ relevance scores and improving answer completeness by 30%.',
      stats: [{ label: '95% Answer Accuracy' }, { label: '35% Recall Improvement' }, { label: '3,751 Documents' }],
      tech: ['Python', 'ChromaDB', 'Sentence-Transformers', 'LangChain', 'Ollama', 'PyTorch', 'PyMuPDF', 'pdfplumber'],
    },
    {
      icon: '⚡',
      title: 'SparkFlow — Streamlined Machine Learning with Apache Spark',
      description: 'Built an end-to-end distributed ML pipeline in Apache Spark ML implementing Linear Regression, Logistic Regression, K-Means, and LDA, with automated JSON metrics logging for reproducible experiment tracking. Trained a Linear Regression model on a 692-dimensional feature space (80/20 split), achieving R² = 0.73, RMSE = 0.26, and MSE = 0.068. Developed a binary Logistic Regression classifier on 692-dimensional sparse vectors, achieving 100% accuracy / precision / recall / F1 with AUC-ROC = 1.0 on the test set. Implemented K-Means with k comparison (k=2 vs k=3), improving WSSSE from 0.12 → 0.075 (37.5% better) and generating automated cluster distribution summaries. Built an LDA topic modeling pipeline extracting 10 topics, comparing hyperparameters across k=[5,10], and reporting perplexity (k=5: 2.78, k=10: 3.10) plus log-likelihood for model selection.',
      stats: [{ label: '100% Classifier Accuracy' }, { label: 'R² = 0.73' }, { label: '37.5% WSSSE Improvement' }],
      tech: ['Python', 'Apache Spark', 'PySpark', 'Spark MLlib', 'Spark SQL', 'Jupyter Notebook', 'Pandas', 'NumPy'],
    },
    {
      icon: '🏥',
      title: 'Healthcare AI Agent (RAG System)',
      description: 'Designed a multi-agent architecture using LangChain + ChromaDB to recommend personalized health insurance plans. Improved factual accuracy by 27% through advanced RAG techniques and real-time data integration.',
      stats: [{ label: '27% Accuracy Boost' }, { label: 'Multi-agent RAG' }, { label: 'Personalized Recommendations' }],
      tech: ['LangChain', 'ChromaDB', 'RAG', 'Python', 'FastAPI'],
    },
    {
      icon: '🤖',
      title: 'Financial RAG Assistant',
      description: 'Built a GenAI chatbot using LangChain and OpenAI APIs to automate financial reporting. Reduced query response time by 50% through intelligent document parsing and semantic search.',
      stats: [{ label: '50% Time Reduction' }, { label: 'GenAI Chatbot' }, { label: 'Automated Reporting' }],
      tech: ['LangChain', 'OpenAI API', 'RAG', 'Python'],
    },
    {
      icon: '✈️',
      title: 'Airline Price Prediction',
      description: 'Developed an end-to-end flight fare prediction system with extensive feature engineering (date/time extraction, stops, airline/destination encoding). Applied ARIMA/SARIMA for temporal trends and boosting models (XGBoost, LightGBM) with model-averaging ensembles.',
      stats: [{ label: 'High Accuracy' }, { label: 'Ensemble Models' }, { label: 'Time Series Analysis' }],
      tech: ['XGBoost', 'LightGBM', 'ARIMA', 'SARIMA', 'Streamlit', 'Python'],
    },
    {
      icon: '📱',
      title: 'Apple Sentiment Analysis',
      description: 'Built an end-to-end sentiment analysis pipeline using TF-IDF + Naive Bayes + VADER. Deployed a Streamlit web app for real-time text classification with comprehensive visualization.',
      stats: [{ label: 'Real-time Analysis' }, { label: 'Multiple Models' }, { label: 'Web App' }],
      tech: ['TF-IDF', 'Naive Bayes', 'VADER', 'Streamlit', 'Python'],
    },
    {
      icon: '📊',
      title: 'Customer Churn Dashboard',
      description: 'Developed predictive models using XGBoost & Logistic Regression. Delivered interactive Tableau dashboards for retention strategy with automated monitoring and alerts.',
      stats: [{ label: 'Predictive Models' }, { label: 'Interactive Dashboards' }, { label: 'Retention Strategy' }],
      tech: ['XGBoost', 'Logistic Regression', 'Tableau', 'Python', 'SQL'],
    },
    {
      icon: '📈',
      title: 'GoDaddy Microbusiness Density Forecasting',
      description: 'Built a hybrid forecasting pipeline using ARIMA/SARIMA, XGBoost, and LightGBM for Kaggle competition. Implemented model averaging ensembles to boost accuracy and leaderboard performance.',
      stats: [{ label: 'Kaggle Competition' }, { label: 'Hybrid Pipeline' }, { label: 'Ensemble Methods' }],
      tech: ['ARIMA', 'SARIMA', 'XGBoost', 'LightGBM', 'Python'],
    },
    {
      icon: '🎨',
      title: 'GAN Fashion MNIST',
      description: 'Trained a Wasserstein GAN for apparel image generation, improving downstream model generalization. Implemented advanced training techniques for stable GAN convergence.',
      stats: [{ label: 'Wasserstein GAN' }, { label: 'Image Generation' }, { label: 'Improved Generalization' }],
      tech: ['PyTorch', 'GANs', 'WGAN', 'Computer Vision', 'Python'],
    },
    {
      icon: '😊',
      title: 'CNN Face Identification',
      description: 'Built a TensorFlow/Keras CNN achieving 95%+ accuracy with real-time inference. Implemented data augmentation and transfer learning techniques for robust performance.',
      stats: [{ label: '95%+ Accuracy' }, { label: 'Real-time Inference' }, { label: 'Transfer Learning' }],
      tech: ['TensorFlow', 'Keras', 'CNN', 'Data Augmentation', 'Python'],
    },
    {
      icon: '🔬',
      title: 'Chest X-ray Classification',
      description: 'Developed ResNet50 + ViT multi-label classifier achieving ROC-AUC 0.86+ with Grad-CAM visual explanations. Implemented explainable AI features for clinical decision support.',
      stats: [{ label: 'ROC-AUC 0.86+' }, { label: 'Multi-label' }, { label: 'Explainable AI' }],
      tech: ['ResNet50', 'Vision Transformer', 'Grad-CAM', 'PyTorch', 'Medical Imaging'],
    },
    {
      icon: '🌊',
      title: 'Flood Risk Assessment - Bartholomew County, IN',
      description: 'Modeled flood hazard scenarios using ArcGIS Pro & Hazus. Informed FEMA mitigation strategies through comprehensive risk analysis and geospatial modeling.',
      stats: [{ label: 'GIS Analysis' }, { label: 'FEMA Integration' }, { label: 'Risk Assessment' }],
      tech: ['ArcGIS Pro', 'Hazus', 'GIS', 'Geospatial Analysis'],
    },
  ];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <ScrollFadeIn>
          <h2 className="section-title text-center">Featured Projects</h2>
        </ScrollFadeIn>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <ScrollFadeIn key={i}>
              <ProjectCard {...proj} />
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
