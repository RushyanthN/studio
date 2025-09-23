import { ScrollFadeIn } from '../common/scroll-fade-in';
import { ProjectCard } from '../common/project-card';

const experiences = [
  {
    icon: '🔬',
    title: 'Research Data Scientist',
    company: 'Indiana University, COMET Lab | Aug 2024 – May 2025',
    description: 'Architected MySQL-backed ETL pipelines and integrated LLMs (LLaMA, OpenAI) for automated SQL query generation, reducing analytics turnaround by 40%. Designed 60+ benchmarking experiments improving pipeline accuracy from 78% to 92%.',
    stats: [
      { label: '40% Time Reduction' },
      { label: '92% Pipeline Accuracy' },
      { label: '60+ Experiments' },
    ],
    tech: ['MySQL', 'LLMs', 'Streamlit', 'Python'],
  },
  {
    icon: '📊',
    title: 'Data Analyst',
    company: 'Virgen Verse | Feb 2022 – Nov 2023',
    description: 'Automated ETL pipelines using Python, Airflow, and Snowflake, cutting refresh latency by 40%. Deployed 10+ Tableau dashboards reducing reporting time from 3 days to 3 hours. Conducted A/B tests driving 12% VR app retention improvement.',
    stats: [
      { label: '40% Latency Reduction' },
      { label: '10+ Dashboards' },
      { label: '12% Retention Boost' },
    ],
    tech: ['Python', 'Airflow', 'Snowflake', 'Tableau'],
  },
  {
    icon: '📈',
    title: 'Freelance Quantitative Data Analyst',
    company: 'Algorithmic Trading | Jan 2020 – Feb 2022',
    description: 'Designed 10+ algorithmic trading strategies using LSTM deep learning and time-series models, achieving 12-18% backtested returns. Built vectorized backtesting engine reducing evaluation time by 40% with 25% drawdown reduction.',
    stats: [
      { label: '12-18% Returns' },
      { label: '10+ Strategies' },
      { label: '25% Drawdown Reduction' },
    ],
    tech: ['Python', 'LSTM', 'SARIMA', 'NumPy'],
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
