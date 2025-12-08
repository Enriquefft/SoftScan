import Link from "next/link"
import { MoreHorizontal, Pencil, Share, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ScenarioList() {
  const scenarios = [
    {
      id: "1",
      title: "Customer Service Skills Assessment",
      description: "Evaluates communication, problem-solving, and conflict resolution in customer service scenarios",
      createdAt: "2023-10-15",
      candidates: 24,
      status: "active",
    },
    {
      id: "2",
      title: "Leadership Potential Assessment",
      description: "Assesses decision-making, team management, and strategic thinking capabilities",
      createdAt: "2023-09-28",
      candidates: 12,
      status: "active",
    },
    {
      id: "3",
      title: "Sales Representative Evaluation",
      description: "Tests negotiation, persuasion, and relationship-building skills in sales contexts",
      createdAt: "2023-08-10",
      candidates: 18,
      status: "inactive",
    },
  ]

  return (
    <div className="grid gap-4">
      {scenarios.map((scenario) => (
        <Card key={scenario.id}>
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{scenario.title}</CardTitle>
                <CardDescription className="mt-1">{scenario.description}</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Share className="mr-2 h-4 w-4" />
                    Share
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-muted-foreground">Created: </span>
                  <span>{scenario.createdAt}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Candidates: </span>
                  <span>{scenario.candidates}</span>
                </div>
              </div>
              <div>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    scenario.status === "active"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                  }`}
                >
                  {scenario.status === "active" ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href={`/results/${scenario.id}`}>View Results</Link>
            </Button>
            <Button asChild>
              <Link href={`/share/${scenario.id}`}>
                <Share className="mr-2 h-4 w-4" />
                Share
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

