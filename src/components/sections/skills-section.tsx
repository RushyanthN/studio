import { ScrollFadeIn } from '../common/scroll-fade-in';

const skills = [
    { title: "Programming & Analysis", content: "Python, R, SQL, Statistics" },
    { title: "Machine Learning & AI", content: "PyTorch, TensorFlow, NLP, Computer Vision" },
    { title: "Cloud & Big Data", content: "AWS, Snowflake, BigQuery, Spark" },
    { title: "Data Engineering", content: "ETL, Airflow, Docker, Kubernetes" },
    { title: "Visualization & BI", content: "Tableau, Power BI, Streamlit, Plotly" },
    { title: "MLOps & Deployment", content: "SageMaker, Model Monitoring, CI/CD" },
];

const SkillCard = ({ title, content }: { title: string, content: string }) => (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl transition-all duration-300 hover:bg-cyan-400/10 hover:-translate-y-2">
        <h4 className="font-bold text-lg text-white mb-2">{title}</h4>
        <p className="text-gray-300 text-sm">{content}</p>
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
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                {skills.map(skill => <SkillCard key={skill.title} {...skill} />)}
            </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
