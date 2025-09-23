import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, GraduationCap, Download, CodeXml, Palette, Database, Server, Cloud, BarChartBig } from 'lucide-react';

const experiences = [
  {
    role: "Research Data Scientist",
    company: "Indiana University, COMET Lab",
    period: "Aug 2024 - May 2025",
    description: "Architected a MySQL-backed ETL pipeline, integrated LLMs into automated query-generation workflows, and designed over 60 benchmarking experiments for SQL query evaluation.",
  },
  {
    role: "Data Analyst",
    company: "Virgen Verse",
    period: "Feb 2022 - Nov 2023",
    description: "Automated ETL pipelines, designed Tableau dashboards, and conducted A/B tests that improved VR app retention by 12%. Applied NLP for sentiment analysis on social media data.",
  },
  {
    role: "Freelance Quantitative Data Analyst",
    company: "Algorithmic Trading Projects",
    period: "Jan 2020 - Feb 2022",
    description: "Designed and deployed 10+ algorithmic trading strategies in Python, achieving backtested annualized returns of 12-18%. Built a vectorized backtesting engine and automated P&L dashboards.",
  },
];

const education = [
  {
    degree: "M.S. Applied Data Science",
    institution: "Indiana University, Indianapolis",
    period: "2025",
  },
  {
    degree: "B.Tech Electronics & Communication Engineering",
    institution: "Sreenidhi Institute of Science and Technology",
    period: "2022",
  },
];

const skills = [
  { name: "Programming & Data Analysis", icon: <CodeXml /> },
  { name: "Cloud & Big Data", icon: <Cloud /> },
  { name: "Data Engineering", icon: <Database /> },
  { name: "MLOps & Deployment", icon: <Server /> },
  { name: "Machine Learning & AI", icon: <BarChartBig /> },
  { name: "Visualization & BI", icon: <Palette /> },
];

export function ResumeSection() {
  return (
    <section id="resume" className="container py-16 md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-3xl font-bold font-headline tracking-tight">Interactive Resume</h2>
        <Button className="mt-4 md:mt-0 bg-accent text-accent-foreground hover:bg-accent/90">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold font-headline flex items-center mb-6">
            <Briefcase className="mr-3 text-primary" />
            Work Experience
          </h3>
          <div className="space-y-8 relative border-l-2 border-border pl-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                 <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-card"></div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
                <h4 className="font-semibold text-lg">{exp.role}</h4>
                <p className="font-medium text-primary">{exp.company}</p>
                <p className="mt-2 text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold font-headline flex items-center mb-6">
            <GraduationCap className="mr-3 text-primary" />
            Education
          </h3>
          <div className="space-y-8 relative border-l-2 border-border pl-8">
            {education.map((edu, index) => (
               <div key={index} className="relative">
                 <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-card"></div>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
                <h4 className="font-semibold text-lg">{edu.degree}</h4>
                <p className="font-medium text-primary">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-2xl font-semibold font-headline text-center mb-8">Skills & Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3 text-primary">{skill.icon}</div>
              <p className="font-medium text-sm">{skill.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
