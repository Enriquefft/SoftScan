"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Plus, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CreateScenarioPage() {
  const [scenarios, setScenarios] = useState([
    { id: 1, title: "", description: "", duration: "10", skillsAssessed: [] },
  ])

  const addScenario = () => {
    const newId = scenarios.length > 0 ? Math.max(...scenarios.map((s) => s.id)) + 1 : 1
    setScenarios([...scenarios, { id: newId, title: "", description: "", duration: "10", skillsAssessed: [] }])
  }

  const removeScenario = (id: number) => {
    if (scenarios.length > 1) {
      setScenarios(scenarios.filter((scenario) => scenario.id !== id))
    }
  }

  const updateScenario = (id: number, field: string, value: string) => {
    setScenarios(scenarios.map((scenario) => (scenario.id === id ? { ...scenario, [field]: value } : scenario)))
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <Link href="/dashboard" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Create New Assessment</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Assessment Details</CardTitle>
            <CardDescription>Set up the basic information for your assessment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Assessment Name</Label>
              <Input id="name" placeholder="e.g., Customer Service Skills Assessment" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe what this assessment will evaluate and how it will be used"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="role">Target Role</Label>
                <Input id="role" placeholder="e.g., Customer Service Representative" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="industry">Industry</Label>
                <Select defaultValue="retail">
                  <SelectTrigger id="industry">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scenarios</CardTitle>
            <CardDescription>Create one or more scenarios for this assessment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {scenarios.map((scenario, index) => (
              <div key={scenario.id} className="border rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Scenario {index + 1}</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeScenario(scenario.id)}
                    disabled={scenarios.length === 1}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor={`scenario-title-${scenario.id}`}>Title</Label>
                  <Input
                    id={`scenario-title-${scenario.id}`}
                    placeholder="e.g., Handling a Difficult Customer"
                    value={scenario.title}
                    onChange={(e) => updateScenario(scenario.id, "title", e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor={`scenario-description-${scenario.id}`}>Description</Label>
                  <Textarea
                    id={`scenario-description-${scenario.id}`}
                    placeholder="Describe the scenario in detail"
                    rows={3}
                    value={scenario.description}
                    onChange={(e) => updateScenario(scenario.id, "description", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor={`scenario-duration-${scenario.id}`}>Duration (minutes)</Label>
                    <Select
                      defaultValue={scenario.duration}
                      onValueChange={(value) => updateScenario(scenario.id, "duration", value)}
                    >
                      <SelectTrigger id={`scenario-duration-${scenario.id}`}>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 minutes</SelectItem>
                        <SelectItem value="10">10 minutes</SelectItem>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="20">20 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor={`scenario-skills-${scenario.id}`}>Skills Assessed</Label>
                    <Select defaultValue="communication">
                      <SelectTrigger id={`scenario-skills-${scenario.id}`}>
                        <SelectValue placeholder="Select skills" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="communication">Communication</SelectItem>
                        <SelectItem value="problem-solving">Problem Solving</SelectItem>
                        <SelectItem value="teamwork">Teamwork</SelectItem>
                        <SelectItem value="leadership">Leadership</SelectItem>
                        <SelectItem value="adaptability">Adaptability</SelectItem>
                        <SelectItem value="conflict-resolution">Conflict Resolution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Tabs defaultValue="questions" className="mt-4">
                  <TabsList>
                    <TabsTrigger value="questions">Questions</TabsTrigger>
                    <TabsTrigger value="resources">Resources</TabsTrigger>
                    <TabsTrigger value="evaluation">Evaluation Criteria</TabsTrigger>
                  </TabsList>
                  <TabsContent value="questions" className="space-y-4 pt-4">
                    <div className="grid gap-2">
                      <Label htmlFor={`question-1-${scenario.id}`}>Question 1</Label>
                      <Textarea
                        id={`question-1-${scenario.id}`}
                        placeholder="Enter a question for the candidate to answer"
                        rows={2}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor={`question-2-${scenario.id}`}>Question 2</Label>
                      <Textarea
                        id={`question-2-${scenario.id}`}
                        placeholder="Enter a question for the candidate to answer"
                        rows={2}
                      />
                    </div>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Question
                    </Button>
                  </TabsContent>
                  <TabsContent value="resources" className="space-y-4 pt-4">
                    <div className="grid gap-2">
                      <Label htmlFor={`resource-1-${scenario.id}`}>Resource 1</Label>
                      <Input id={`resource-1-${scenario.id}`} placeholder="Enter a title for this resource" />
                      <Input type="file" className="mt-2" />
                    </div>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Resource
                    </Button>
                  </TabsContent>
                  <TabsContent value="evaluation" className="space-y-4 pt-4">
                    <div className="grid gap-2">
                      <Label htmlFor={`criteria-1-${scenario.id}`}>Evaluation Criteria 1</Label>
                      <Input id={`criteria-1-${scenario.id}`} placeholder="e.g., Clear Communication" />
                      <Textarea
                        placeholder="Describe what you're looking for in this criteria"
                        rows={2}
                        className="mt-2"
                      />
                    </div>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Criteria
                    </Button>
                  </TabsContent>
                </Tabs>
              </div>
            ))}

            <Button variant="outline" onClick={addScenario} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Another Scenario
            </Button>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Save as Draft</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Create Assessment</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

