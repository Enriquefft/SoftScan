import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function CandidateResultsTable() {
  const candidates = [
    {
      id: "1",
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      score: 85,
      recommendation: "hire",
      date: "2023-10-18",
    },
    {
      id: "2",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      score: 92,
      recommendation: "hire",
      date: "2023-10-15",
    },
    {
      id: "3",
      name: "David Wilson",
      email: "david.wilson@example.com",
      score: 78,
      recommendation: "consider",
      date: "2023-10-12",
    },
    {
      id: "4",
      name: "Jessica Taylor",
      email: "jessica.taylor@example.com",
      score: 65,
      recommendation: "reject",
      date: "2023-10-10",
    },
    {
      id: "5",
      name: "Robert Martinez",
      email: "robert.martinez@example.com",
      score: 88,
      recommendation: "hire",
      date: "2023-10-08",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Candidate</TableHead>
          <TableHead>Score</TableHead>
          <TableHead>Recommendation</TableHead>
          <TableHead>Date Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {candidates.map((candidate) => (
          <TableRow key={candidate.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">
                    {candidate.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{candidate.name}</div>
                  <div className="text-xs text-muted-foreground">{candidate.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div
                className={`font-medium ${
                  candidate.score >= 85 ? "text-green-600" : candidate.score >= 70 ? "text-amber-600" : "text-red-600"
                }`}
              >
                {candidate.score}%
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  candidate.recommendation === "hire"
                    ? "default"
                    : candidate.recommendation === "consider"
                      ? "secondary"
                      : "destructive"
                }
              >
                {candidate.recommendation === "hire"
                  ? "Hire"
                  : candidate.recommendation === "consider"
                    ? "Consider"
                    : "Reject"}
              </Badge>
            </TableCell>
            <TableCell>{candidate.date}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm" asChild>
                <a href={`/results/${candidate.id}`}>View Details</a>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

