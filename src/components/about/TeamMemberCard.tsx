import Image from 'next/image';
import type { TeamMember } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-accent/50">
          <Image
            src={member.imageUrl}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={member.dataAiHint || 'person portrait'}
          />
        </div>
        <CardTitle className="text-xl font-headline">{member.name}</CardTitle>
        <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{member.bio}</p>
      </CardContent>
    </Card>
  );
}
