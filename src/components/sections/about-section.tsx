import { ScrollFadeIn } from '../common/scroll-fade-in';

const EducationCard = ({ degree, university, year, gpa }: { degree: string, university: string, year: string, gpa: string }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl transition-all duration-300 hover:bg-cyan-400/10 hover:-translate-y-2">
    <h4 className="font-bold text-lg text-white">{degree}</h4>
    <p className="text-cyan-400">{university} ({year})</p>
    <p className="text-gray-300">GPA: {gpa}</p>
  </div>
);

const CertificationCard = ({ title, issuer }: { title: string, issuer: string }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl transition-all duration-300 hover:bg-cyan-400/10 hover:-translate-y-2 max-w-md mx-auto">
    <h4 className="font-bold text-2xl text-white">🏆 {title}</h4>
    <p className="text-cyan-400">{issuer}</p>
  </div>
);

export function AboutSection() {
  return (
    <section id="about" className="py-24 text-center">
      <div className="container">
        <ScrollFadeIn>
          <h2 className="section-title text-gradient-cyan-white">About Me</h2>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 mb-10">
              I&apos;m a Data Scientist with 3+ years of experience spanning data science, analytics, engineering, and applied ML. Currently pursuing my M.S. in Applied Data Science at Indiana University, I&apos;m skilled in Python, SQL, AWS, and machine learning with a proven track record of delivering impactful solutions across academia, startups, and algorithmic trading. I&apos;m AWS Certified Machine Learning Engineer – Associate with expertise in building ETL pipelines, orchestrating cloud workflows, and translating complex data into scalable business solutions.
            </p>
            <div className="mb-12">
              <h3 className="text-cyan-400 mb-5 text-3xl font-bold">Education</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <EducationCard 
                  degree="M.S. Applied Data Science"
                  university="Indiana University, Indianapolis"
                  year="2025"
                  gpa="3.8/4.0"
                />
                <EducationCard 
                  degree="B.Tech Electronics & Communication"
                  university="Sreenidhi Institute of Science and Technology"
                  year="2022"
                  gpa="7.54/10"
                />
              </div>
            </div>
            <div>
              <h3 className="text-cyan-400 mb-5 text-3xl font-bold">Certifications</h3>
              <CertificationCard 
                title="AWS Certified Machine Learning Engineer – Associate"
                issuer="Amazon Web Services"
              />
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
