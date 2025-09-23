import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutSection() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <section id="about" className="container py-16 md:py-24 bg-card rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              width={250}
              height={250}
              className="rounded-full object-cover aspect-square shadow-lg"
              data-ai-hint={profileImage.imageHint}
            />
          )}
        </div>
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold font-headline tracking-tight">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Data Scientist with 3+ years of experience spanning data science, analytics, engineering, and applied ML, skilled in Python, SQL, AWS, Spark, mathematics, statistics, and machine learning.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
           Experienced in building ETL pipelines, orchestrating cloud-based workflows, with a proven record of delivering time-series forecasting, NLP, and visualization solutions across academia, startups, and freelance projects. AWS Certified Machine Learning Engineer – Associate with a demonstrated ability to translate complex data into scalable, business-impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
