
import Image from 'next/image';
import type { TeamMember } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Twitter, Briefcase } from 'lucide-react'; // Example social icons

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col md:flex-row items-center md:items-start p-0">
      <div className="relative w-full md:w-48 h-48 md:h-auto md:min-h-[200px] flex-shrink-0">
        <Image
          src={member.imageUrl}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={member.dataAiHint || 'person portrait'}
          className="" // Removed rounded-full for rectangular, covering image
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-grow w-full">
        <div>
          <CardTitle className="text-2xl font-headline text-foreground mb-1">{member.name}</CardTitle>
          <CardDescription className="text-primary font-medium text-base mb-3">{member.role}</CardDescription>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
        </div>
        <div className="flex space-x-3 mt-auto">
          <a href="#" aria-label={`${member.name} on LinkedIn`} className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" aria-label={`${member.name} on Twitter`} className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" aria-label={`${member.name}'s Portfolio`} className="text-muted-foreground hover:text-primary transition-colors">
            <Briefcase size={20} />
          </a>
        </div>
      </div>
    </Card>
  );
}
