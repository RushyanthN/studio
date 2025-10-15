import { ScrollFadeIn } from '../common/scroll-fade-in';
import { ProjectCard } from '../common/project-card';

const projects = [
    {
      icon: '🏥',
      title: 'AI Health Insurance Platform',
      description: 'Developed a multi-agent AI platform for health insurance recommendations in California, featuring web scraping for real-time data, ML-powered suggestions, and advanced cost analysis.',
      stats: [{ label: 'Full-stack AI' }, { label: 'Multi-agent' }, { label: 'Real-time Data' }],
      tech: ['Python', 'FastAPI', 'Scikit-learn', 'XGBoost', 'Playwright', 'Docker'],
    },
    {
      icon: '😊',
      title: 'Face Recognition with CNNs',
      description: 'Developed a face identification pipeline using CNNs, benchmarking multiple architectures and optimizers to improve accuracy from 3% to over 70%.',
      stats: [{ label: '70%+ Accuracy' }, { label: '4 CNN Architectures' }, { label: 'Computer Vision' }],
      tech: ['PyTorch', 'CNN', 'Data Augmentation', 'Python'],
    },
    {
      icon: '🤖',
      title: 'GenAI Financial Doc Assistant',
      description: 'Built an intelligent pipeline to parse SEC 10-K filings into structured Q&A format using advanced RAG architecture, dramatically improving analyst productivity.',
      stats: [{ label: '50% Time Reduction' }, { label: 'SEC 10-K Processing' }],
      tech: ['LangChain', 'ChromaDB', 'RAG', 'Python'],
    },
    {
      icon: '✈️',
      title: 'Airline Price Prediction',
      description: 'Developed a high-accuracy regression model processing 300K flight records with real-time forecasting capabilities deployed as an interactive application.',
      stats: [{ label: 'R² = 0.91' }, { label: '300K Records' }, { label: 'Real-time' }],
      tech: ['XGBoost', 'Streamlit', 'Python', 'ML'],
    },
    {
      icon: '📊',
      title: 'Customer Churn Dashboard',
      description: 'Integrated multiple data sources to create an automated churn-risk monitoring system, enabling proactive customer retention strategies.',
      stats: [{ label: '8% Churn Reduction' }, { label: 'Automated' }, { label: 'Real-time Alerts' }],
      tech: ['BigQuery', 'Data Studio', 'SQL', 'GCP'],
    },
    {
      icon: '⚙️',
      title: 'Predictive Maintenance Pipeline',
      description: 'Engineered a complete ML pipeline for equipment failure prediction using time-series analysis, deployed on AWS with comprehensive monitoring.',
      stats: [{ label: 'F1 = 0.87' }, { label: 'Time-series' }, { label: 'AWS Deployed' }],
      tech: ['AWS', 'SageMaker', 'CloudWatch', 'Python'],
    },
    {
      icon: '🏦',
      title: 'Banking Analytics: Term Deposit Prediction',
      description: 'Built ensemble models on large-scale banking data with comprehensive feature analysis, delivering actionable insights that significantly improved campaign performance.',
      stats: [{ label: '92% Accuracy' }, { label: '450K Rows' }, { label: '45% Conversion Boost' }],
      tech: ['Logistic Regression', 'Decision Trees', 'Feature Engineering', 'Python'],
    },
    {
      icon: '🔬',
      title: 'VisionTX: Chest X-ray Classification',
      description: 'Implemented cutting-edge Vision Transformer architecture for medical image analysis with explainable AI features for clinical decision support.',
      stats: [{ label: 'ROC-AUC 0.91' }, { label: 'Multi-label' }, { label: 'Explainable AI' }],
      tech: ['Vision Transformer', 'Grad-CAM', 'PyTorch', 'Computer Vision'],
    },
  ];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-black/20">
      <div className="container">
        <ScrollFadeIn>
          <h2 className="section-title text-gradient-cyan-white">Featured Projects</h2>
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
