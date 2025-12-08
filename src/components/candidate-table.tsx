import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function CandidateTable() {
  const candidates = [
    {
      id: "1",
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      status: "completed",
      date: "2023-10-18 14:32",
      timeSpent: "28 min",
    },
    {
      id: "2",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      status: "in-progress",
      date: "2023-10-17 10:15",
      timeSpent: "12 min",
    },
    {
      id: "3",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      status: "completed",
      date: "2023-10-15 16:45",
      timeSpent: "32 min",
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      status: "invited",
      date: "2023-10-14 09:20",
      timeSpent: "-",
    },
    {
      id: "5",
      name: "David Wilson",
      email: "david.wilson@example.com",
      status: "completed",
      date: "2023-10-12 11:05",
      timeSpent: "25 min",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Candidate</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time Spent</TableHead>
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
            </TableCell>
            <TableCell>{candidate.date}</TableCell>
            <TableCell>{candidate.timeSpent}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">
                {candidate.status === "completed" ? "View Results" : "Send Reminder"}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

