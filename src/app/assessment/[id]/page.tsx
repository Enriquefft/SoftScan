"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"

export default function AssessmentPage({ params }: { params: { id: string } }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [responses, setResponses] = useState<Record<number, string>>({})
  const [isCompleted, setIsCompleted] = useState(false)

  // Mock assessment data
  const assessment = {
    title: "Customer Service Skills Assessment",
    description: "This assessment evaluates your customer service skills through realistic scenarios.",
    company: "Acme Corporation",
    logo: "/placeholder.svg?height=40&width=40",
    totalSteps: 3,
    timeLimit: 30, // minutes
    scenarios: [
      {
        id: 1,
        title: "Handling a Difficult Customer",
        description:
          "A customer is upset because they received a damaged product. They are demanding a full refund and compensation for their inconvenience. How would you handle this situation?",
        timeLimit: 10, // minutes
        questions: [
          "How would you initially respond to the customer's complaint?",
          "What steps would you take to resolve the issue?",
          "How would you ensure the customer remains satisfied with your company after this interaction?",
        ],
      },
      {
        id: 2,
        title: "Managing Multiple Priorities",
        description:
          "You're helping a customer with a complex issue when your manager asks you to immediately assist a VIP client who just walked in. At the same time, your team member needs your expertise on another matter. How do you handle these competing priorities?",
        timeLimit: 10, // minutes
        questions: [
          "How would you prioritize these competing demands?",
          "What would you say to each person involved?",
          "How would you ensure all issues are addressed appropriately?",
        ],
      },
      {
        id: 3,
        title: "Explaining Technical Information",
        description:
          "A customer with limited technical knowledge is confused about how to use your company's software. They're frustrated and considering canceling their subscription. How would you explain the technical aspects in a way they can understand?",
        timeLimit: 10, // minutes
        questions: [
          "How would you approach explaining technical concepts to this customer?",
          "What techniques would you use to ensure they understand?",
          "How would you follow up to ensure their continued satisfaction?",
        ],
      },
    ],
  }

  const currentScenario = assessment.scenarios[currentStep]
  const progress = ((currentStep + 1) / assessment.totalSteps) * 100

  const handleResponseChange = (questionIndex: number, value: string) => {
    setResponses({
      ...responses,
      [currentStep * 10 + questionIndex]: value,
    })
  }

  const handleNext = () => {
    if (currentStep < assessment.totalSteps - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    } else {
      setIsCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  if (isCompleted) {
    return (
      <div className="container mx-auto py-12 px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center mb-4">
              <Image
                src={assessment.logo || "/placeholder.svg"}
                width={40}
                height={40}
                alt={assessment.company}
                className="mr-2"
              />
              <span className="text-sm text-muted-foreground">{assessment.company}</span>
            </div>
            <CardTitle className="text-2xl">Assessment Completed</CardTitle>
            <CardDescription>Thank you for completing the {assessment.title}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Your responses have been submitted successfully. The hiring team will review your assessment and get
                back to you with the next steps.
              </p>
            </div>
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-3 dark:bg-green-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-green-600 dark:text-green-400"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium">Assessment Submitted</h3>
              <p className="mt-2 text-sm text-muted-foreground">You've successfully completed all scenarios</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => window.close()}>
              Close Assessment
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
                src={assessment.logo || "/placeholder.svg"}
                width={40}
                height={40}
                alt={assessment.company}
                className="mr-2"
              />
              <span className="text-sm text-muted-foreground">{assessment.company}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              <span>{currentScenario.timeLimit} minutes</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <CardTitle>{assessment.title}</CardTitle>
              <span className="text-sm text-muted-foreground">
                Scenario {currentStep + 1} of {assessment.totalSteps}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
            <CardDescription>{assessment.description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-medium mb-2">{currentScenario.title}</h3>
            <p className="text-muted-foreground mb-4">{currentScenario.description}</p>
          </div>

          <div className="space-y-6">
            {currentScenario.questions.map((question, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-medium">Question {index + 1}</h4>
                <p className="text-sm text-muted-foreground">{question}</p>
                <Textarea
                  placeholder="Type your response here..."
                  rows={4}
                  value={responses[currentStep * 10 + index] || ""}
                  onChange={(e) => handleResponseChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button onClick={handleNext}>
            {currentStep < assessment.totalSteps - 1 ? (
              <>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              "Submit Assessment"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

