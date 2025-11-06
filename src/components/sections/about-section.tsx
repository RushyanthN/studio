import { ScrollFadeIn } from '../common/scroll-fade-in';

const EducationCard = ({ degree, university, year, gpa }: { degree: string, university: string, year: string, gpa: string }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl transition-all duration-300 hover:bg-cyan-400/10 hover:-translate-y-2">
    <h4 className="font-bold text-lg text-white">{degree}</h4>
    <p className="text-cyan-400">{university} ({year})</p>
    <p className="text-gray-300">GPA: {gpa}</p>
  </div>
);

const CertificationCard = ({ title, issuer, url }: { title: string, issuer: string, url: string }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block transition-all duration-300 hover:-translate-y-2">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-md mx-auto hover:bg-cyan-400/10">
            <h4 className="font-bold text-2xl text-white">🏆 {title}</h4>
            <p className="text-cyan-400">{issuer}</p>
        </div>
    </a>
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
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl mb-10 text-left">
              <h3 className="text-2xl font-bold text-gradient-cyan-white mb-4">Professional Summary</h3>
              <p className="text-lg text-gray-300 mb-4">
                I&apos;m a Data Scientist and Machine Learning Engineer with 3+ years of experience building predictive models, automating data pipelines, and deploying production-scale ML systems. I have a strong background in statistical modeling, experimentation, and optimization.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                My hands-on expertise spans Python, SQL, PyTorch, and AWS cloud services, with domain experience in healthcare, finance, and consumer analytics. I&apos;ve proven my ability to design and operationalize end-to-end ML solutions, conduct A/B testing, develop recommendation systems, and apply causal inference for business impact.
              </p>
              <p className="text-lg text-gray-300">
                I&apos;m adept at collaborating with cross-functional teams to translate data insights into strategic decisions, and I&apos;m currently spearheading AI-powered voice interaction systems at Kahana.
              </p>
            </div>
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
                url="https://www.credly.com/badges/00e0554f-08f5-4514-832f-2731734cecf3/public_url"
              />
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
