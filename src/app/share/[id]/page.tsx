import { SelectItem } from "@/components/ui/select"
import { SelectContent } from "@/components/ui/select"
import { SelectValue } from "@/components/ui/select"
import { SelectTrigger } from "@/components/ui/select"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CandidateTable } from "@/components/candidate-table"

export default function SharePage({ params }: { params: { id: string } }) {
  const assessmentId = params.id
  const shareableLink = `https://softscan.ai/assessment/${assessmentId}`

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Share Assessment</h1>
        <Button variant="outline" asChild>
          <Link href="/dashboard">Back to Dashboard</Link>
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Customer Service Skills Assessment</CardTitle>
            <CardDescription>
              Share this assessment with candidates to evaluate their customer service skills
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="share-link">Shareable Link</Label>
              <div className="flex items-center gap-2">
                <Input id="share-link" value={shareableLink} readOnly className="flex-1" />
                <Button variant="outline" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                This link can be shared with candidates to access the assessment
              </p>
            </div>

            <div className="grid gap-4 pt-4">
              <h3 className="font-medium">Sharing Options</h3>
              <Tabs defaultValue="email">
                <TabsList>
                  <TabsTrigger value="email">Email</TabsTrigger>
                  <TabsTrigger value="bulk">Bulk Invite</TabsTrigger>
                  <TabsTrigger value="settings">Link Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="email" className="space-y-4 pt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="candidate-email">Candidate Email</Label>
                    <Input id="candidate-email" placeholder="Enter candidate email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email-subject">Email Subject</Label>
                    <Input id="email-subject" defaultValue="Invitation to Complete SoftScan AI Assessment" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email-message">Email Message</Label>
                    <Textarea
                      id="email-message"
                      rows={5}
                      defaultValue={`Hello,

We would like to invite you to complete an assessment as part of our hiring process. This assessment will evaluate your soft skills through interactive scenarios.

Please click the link below to access the assessment:
${shareableLink}

Thank you,
[Your Company Name]`}
                    />
                  </div>
                  <Button>Send Invitation</Button>
                </TabsContent>
                <TabsContent value="bulk" className="space-y-4 pt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="bulk-emails">Candidate Emails</Label>
                    <Textarea id="bulk-emails" placeholder="Enter multiple email addresses, one per line" rows={5} />
                  </div>
                  <Button>Send Bulk Invitations</Button>
                </TabsContent>
                <TabsContent value="settings" className="space-y-4 pt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="expiration">Link Expiration</Label>
                    <Select defaultValue="7days">
                      <SelectTrigger id="expiration">
                        <SelectValue placeholder="Select expiration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="24hours">24 Hours</SelectItem>
                        <SelectItem value="7days">7 Days</SelectItem>
                        <SelectItem value="30days">30 Days</SelectItem>
                        <SelectItem value="never">Never Expires</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="max-attempts">Maximum Attempts</Label>
                    <Select defaultValue="1">
                      <SelectTrigger id="max-attempts">
                        <SelectValue placeholder="Select max attempts" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Attempt</SelectItem>
                        <SelectItem value="2">2 Attempts</SelectItem>
                        <SelectItem value="3">3 Attempts</SelectItem>
                        <SelectItem value="unlimited">Unlimited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button>Update Link Settings</Button>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Candidate Responses</CardTitle>
            <CardDescription>Track who has accessed and completed the assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <CandidateTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

