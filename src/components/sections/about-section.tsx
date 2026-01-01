import { ScrollFadeIn } from '../common/scroll-fade-in';

const EducationCard = ({ degree, university, year }: { degree: string, university: string, year: string }) => (
  <div className="bg-white dark:bg-card border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
    <h4 className="font-bold text-lg text-foreground mb-2">{degree}</h4>
    <p className="text-primary-blue">{university}</p>
    <p className="text-muted-foreground text-sm mt-1">{year}</p>
  </div>
);

const CertificationCard = ({ title, issuer, url }: { title: string, issuer: string, url: string }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block transition-all duration-300">
        <div className="bg-white dark:bg-card border border-gray-200 dark:border-gray-700 rounded-lg p-6 max-w-md mx-auto hover:shadow-md transition-shadow">
            <h4 className="font-bold text-xl text-foreground mb-2">{title}</h4>
            <p className="text-primary-blue">{issuer}</p>
        </div>
    </a>
);

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <ScrollFadeIn>
          <h2 className="section-title text-center">About Me</h2>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-card border border-gray-200 dark:border-gray-700 rounded-lg p-8 mb-10 text-left shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-4">Professional Summary</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Machine Learning Engineer with 3+ years of experience building production-grade intelligent systems, from voice-driven browser interfaces to RAG-based Q&A pipelines. Proven track record of architecting scalable GenAI solutions on AWS, improving SQL generation accuracy from 78% to 92%, and reducing data pipeline latency by 40%.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Expert in LLM orchestration, multi-agent systems, and MLOps, with hands-on experience deploying models using PyTorch, LangChain, and cloud platforms. Strong collaborator skilled at translating complex AI capabilities into customer-facing products and actionable business insights.
              </p>
            </div>
            <div className="mb-12">
              <h3 className="text-primary-blue mb-5 text-3xl font-bold text-center">Education</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <EducationCard 
                  degree="M.S. Applied Data Science"
                  university="Indiana University, Indianapolis"
                  year="2025"
                />
                <EducationCard 
                  degree="B.Tech Electronics & Communication"
                  university="Sreenidhi Institute of Science and Technology"
                  year="2022"
                />
              </div>
            </div>
            <div>
              <h3 className="text-primary-blue mb-5 text-3xl font-bold text-center">Certifications</h3>
              <CertificationCard 
                title="AWS Certified Machine Learning Engineer – Associate"
                issuer="Amazon Web Services"
                url="https://www.credly.com/badges/00e0554f-08f5-4514-832f-2731734cecf3/public_url"
              />
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
