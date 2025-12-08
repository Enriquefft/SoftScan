import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function CandidateProfile() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center text-center">
        <Avatar className="h-20 w-20 mb-2">
          <AvatarFallback className="text-xl">AJ</AvatarFallback>
        </Avatar>
        <h3 className="font-bold text-lg">Alex Johnson</h3>
        <p className="text-sm text-muted-foreground">alex.johnson@example.com</p>
      </div>

      <div className="pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Assessment:</span>
          <span className="font-medium">Customer Service Skills</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Completed:</span>
          <span>Oct 18, 2023</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Time Spent:</span>
          <span>28 minutes</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Overall Score:</span>
          <span className="font-medium text-green-600">85%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Recommendation:</span>
          <Badge>Hire</Badge>
        </div>
      </div>

      <div className="pt-4">
        <h4 className="font-medium text-sm mb-2">Key Skills</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Communication</Badge>
          <Badge variant="outline">Problem Solving</Badge>
          <Badge variant="outline">Empathy</Badge>
          <Badge variant="outline">Conflict Resolution</Badge>
          <Badge variant="outline">Time Management</Badge>
        </div>
      </div>
    </div>
  )
}

