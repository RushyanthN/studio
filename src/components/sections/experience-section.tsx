import { ScrollFadeIn } from '../common/scroll-fade-in';
import { ProjectCard } from '../common/project-card';

const experiences = [
  {
    icon: '🚀',
    title: 'AIML Engineer',
    company: 'Kahana | Aug 2025 – Present',
    description: 'Spearheading development of an AI-powered interaction layer on top of Firefox, enabling users to control and navigate the browser through natural voice commands. Integrating real-time speech-to-text transcription using Deepgram and Gemini APIs. Leveraging AWS Lambda for scalable serverless functions and AWS Cognito for secure authentication.',
    stats: [
      { label: '35% Token Reduction' },
      { label: 'Voice-Controlled Browser' },
      { label: 'Low-Latency Responses' },
    ],
    tech: ['Python', 'AWS Lambda', 'AWS Cognito', 'Deepgram', 'Gemini API', 'LLMs'],
  },
  {
    icon: '🔬',
    title: 'Research Data Scientist',
    company: 'Indiana University, COMET Lab | Aug 2024 – May 2025',
    description: 'Engineered ETL pipelines and modeled structured/unstructured research data, reducing analytics turnaround time by 40%. Executed 60+ ML benchmarking experiments, improving SQL translation model accuracy from 78% to 92%. Built prompt-engineering pipelines using LLaMA and OpenAI models, increasing automation efficiency.',
    stats: [
      { label: '40% Time Reduction' },
      { label: '92% Pipeline Accuracy' },
      { label: '60+ Experiments' },
    ],
    tech: ['MySQL', 'LLMs', 'LLaMA', 'OpenAI', 'Tableau', 'Python'],
  },
  {
    icon: '📊',
    title: 'Data Analyst',
    company: 'Virgenverse | Feb 2022 – Nov 2023',
    description: 'Developed churn prediction and forecasting models using Python and SQL, reducing customer churn by 8%. Automated ETL pipelines, improving refresh reliability and cutting manual effort by 40%. Designed and analyzed A/B and multivariate tests for marketing and pricing optimization. Delivered Tableau dashboards visualizing product performance and retention metrics.',
    stats: [
      { label: '8% Churn Reduction' },
      { label: '40% Effort Reduction' },
      { label: 'A/B Testing' },
    ],
    tech: ['Python', 'SQL', 'Airflow', 'Snowflake', 'Tableau', 'A/B Testing'],
  },
  {
    icon: '📈',
    title: 'Algorithmic Trader & Data Analyst',
    company: 'Independent | Jan 2020 – Feb 2022',
    description: 'Built predictive time series forecasting models (ARIMA, SARIMA, LSTM) and signal-based engines for financial datasets. Conducted quantitative risk assessments and "what-if" scenario modeling to optimize portfolio performance. Automated ingestion and ETL processes, improving reporting speed and model reliability.',
    stats: [
      { label: 'Time Series Models' },
      { label: 'Risk Assessment' },
      { label: 'Automated ETL' },
    ],
    tech: ['Python', 'LSTM', 'ARIMA', 'SARIMA', 'NumPy', 'Pandas'],
  },
];


export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <ScrollFadeIn>
          <h2 className="section-title text-gradient-cyan-white">Professional Experience</h2>
        </ScrollFadeIn>
        <div className="projects-grid grid-cols-1">
          {experiences.map((exp, i) => (
            <ScrollFadeIn key={i}>
                <div className="mb-8">
                    <ProjectCard {...exp} />
                </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
