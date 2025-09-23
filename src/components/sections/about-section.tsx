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
            I'm a passionate and results-driven full-stack developer with a knack for creating dynamic, user-friendly web applications. With a foundation in computer science and years of hands-on experience, I've honed my skills in both front-end and back-end technologies.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey in tech is fueled by a constant desire to learn and innovate. I thrive in collaborative environments and am always eager to take on new challenges that push the boundaries of what's possible. When I'm not coding, you can find me exploring new hiking trails or experimenting with new recipes in the kitchen.
          </p>
        </div>
      </div>
    </section>
  );
}
