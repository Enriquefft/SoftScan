import Link from "next/link"
import { Download, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CandidateResultsTable } from "@/components/candidate-results-table"
import { CandidateProfile } from "@/components/candidate-profile"
import { ScenarioResults } from "@/components/scenario-results"
import { CompetencyChart } from "@/components/competency-chart"

export default function ResultsPage({ params }: { params: { id: string } }) {
  const assessmentId = params.id

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Assessment Results</h1>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard">Back to Dashboard</Link>
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Results
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Customer Service Skills Assessment</CardTitle>
            <CardDescription>Review candidate performance and evaluation results</CardDescription>
          </CardHeader>
          <CardContent>
            <CandidateResultsTable />
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-xl">Candidate Profile</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CandidateProfile />
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Performance Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
                  <TabsTrigger value="competencies">Competencies</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4 pt-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">85%</div>
                      <div className="text-sm text-muted-foreground">Overall Score</div>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">92%</div>
                      <div className="text-sm text-muted-foreground">Communication</div>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <div className="text-2xl font-bold text-amber-600">78%</div>
                      <div className="text-sm text-muted-foreground">Problem Solving</div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium mb-2">Strengths</h3>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Excellent communication skills with clear explanations</li>
                      <li>Strong empathy and customer focus</li>
                      <li>Effective at de-escalating tense situations</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium mb-2">Areas for Improvement</h3>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Could improve technical knowledge explanation</li>
                      <li>Time management when handling multiple priorities</li>
                      <li>Follow-up procedures could be more thorough</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium mb-2">Hiring Recommendation</h3>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="font-medium">Recommended for Hire</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      This candidate demonstrated strong customer service skills and would be a valuable addition to the
                      team.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="scenarios" className="pt-4">
                  <ScenarioResults />
                </TabsContent>
                <TabsContent value="competencies" className="pt-4">
                  <CompetencyChart />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

