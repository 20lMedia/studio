import Image from 'next/image';
import type { TeamMember } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card rounded-lg p-2"> {/* Ensured bg-card, rounded-lg, added p-2 */}
      <CardHeader className="pt-8"> {/* Increased padding top */}
        <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary/30 shadow-md"> {/* Increased size, border uses primary, added shadow */}
          <Image
            src={member.imageUrl}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={member.dataAiHint || 'person portrait'}
            className="rounded-full"
          />
        </div>
        <CardTitle className="text-xl lg:text-2xl font-headline">{member.name}</CardTitle>
        <CardDescription className="text-primary font-medium text-sm">{member.role}</CardDescription> {/* Use primary color */}
      </CardHeader>
      <CardContent className="pb-8 pt-2"> {/* Adjusted padding */}
        <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
      </CardContent>
    </Card>
  );
}
