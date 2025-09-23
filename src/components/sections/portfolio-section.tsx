import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: "project-1",
    title: "Project Alpha",
    description: "A comprehensive dashboard for data analysis, featuring real-time updates and interactive charts.",
    tags: ["React", "D3.js", "Node.js"],
  },
  {
    id: "project-2",
    title: "Project Beta",
    description: "A mobile-first productivity app designed to streamline team collaboration and task management.",
    tags: ["React Native", "Firebase", "GraphQL"],
  },
  {
    id: "project-3",
    title: "Project Gamma",
    description: "An elegant e-commerce platform for a boutique fashion brand with a custom headless CMS.",
    tags: ["Next.js", "Stripe", "Sanity"],
  },
  {
    id: "project-4",
    title: "Project Delta",
    description: "An interactive data visualization tool that showcases global economic trends over the past century.",
    tags: ["Svelte", "TypeScript", "DataViz"],
  },
  {
    id: "project-5",
    title: "Project Epsilon",
    description: "A complete branding and web presence for a local artisanal coffee shop, focusing on community.",
    tags: ["Branding", "Webflow", "Figma"],
  },
  {
    id: "project-6",
    title: "Project Zeta",
    description: "A visually rich travel blog built with performance and SEO in mind, featuring a custom photo gallery.",
    tags: ["Astro", "Tailwind CSS", "Photography"],
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="container py-16 md:py-24 bg-card rounded-xl shadow-sm">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline tracking-tight">Portfolio Showcase</h2>
        <p className="text-lg text-muted-foreground mt-2">A selection of my recent work.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const image = PlaceHolderImages.find(img => img.id === project.id);
          return (
            <Card key={project.id} className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {image && (
                <div className="overflow-hidden">
                  <Image
                    src={image.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
