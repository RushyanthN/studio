import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, GraduationCap, Download, CodeXml, Palette, Database, Server, Cloud, BarChartBig } from 'lucide-react';

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: "Led development of a new SaaS platform, improving performance by 30%. Mentored junior developers and championed best practices in code quality and testing.",
  },
  {
    role: "Software Developer",
    company: "Innovate Co.",
    period: "2018 - 2020",
    description: "Developed and maintained features for a large-scale e-commerce application. Collaborated with cross-functional teams to deliver high-quality software on schedule.",
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Technology",
    period: "2016 - 2018",
  },
  {
    degree: "Bachelor of Science in Information Systems",
    institution: "State College",
    period: "2012 - 2016",
  },
];

const skills = [
  { name: "Frontend Development", icon: <Palette /> },
  { name: "Backend Development", icon: <CodeXml /> },
  { name: "Database Management", icon: <Database /> },
  { name: "DevOps & CI/CD", icon: <Server /> },
  { name: "Cloud Computing", icon: <Cloud /> },
  { name: "Data Analytics", icon: <BarChartBig /> },
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
