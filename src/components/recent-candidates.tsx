import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentCandidates() {
  const candidates = [
    {
      id: "1",
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      assessment: "Customer Service Skills Assessment",
      status: "completed",
      date: "2023-10-18",
      score: 85,
    },
    {
      id: "2",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      assessment: "Customer Service Skills Assessment",
      status: "in-progress",
      date: "2023-10-17",
    },
    {
      id: "3",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      assessment: "Leadership Potential Assessment",
      status: "completed",
      date: "2023-10-15",
      score: 92,
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      assessment: "Sales Representative Evaluation",
      status: "invited",
      date: "2023-10-14",
    },
    {
      id: "5",
      name: "David Wilson",
      email: "david.wilson@example.com",
      assessment: "Customer Service Skills Assessment",
      status: "completed",
      date: "2023-10-12",
      score: 78,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Candidates</CardTitle>
        <CardDescription>View and manage candidate assessments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>
                    {candidate.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{candidate.name}</div>
                  <div className="text-sm text-muted-foreground">{candidate.email}</div>
                  <div className="text-xs text-muted-foreground mt-1">{candidate.assessment}</div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Badge
                  variant={
                    candidate.status === "completed"
                      ? "default"
                      : candidate.status === "in-progress"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {candidate.status === "completed"
                    ? "Completed"
                    : candidate.status === "in-progress"
                      ? "In Progress"
                      : "Invited"}
                </Badge>
                <div className="text-xs text-muted-foreground">{candidate.date}</div>
                {candidate.score && <div className="text-sm font-medium">Score: {candidate.score}%</div>}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

