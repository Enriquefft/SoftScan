import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PerformanceMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
        <CardDescription>Analyze assessment performance and hiring outcomes</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="assessments">Assessments</TabsTrigger>
            <TabsTrigger value="hiring">Hiring Outcomes</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold">48</div>
                <div className="text-sm text-muted-foreground">Total Candidates</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold">36</div>
                <div className="text-sm text-muted-foreground">Completed Assessments</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold">75%</div>
                <div className="text-sm text-muted-foreground">Completion Rate</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold">8</div>
                <div className="text-sm text-muted-foreground">Successful Hires</div>
              </div>
            </div>

            <div className="mt-6 rounded-lg border p-4">
              <h3 className="font-medium mb-4">Monthly Assessment Activity</h3>
              <div className="h-[200px] w-full bg-gray-100 dark:bg-gray-800 rounded flex items-end justify-between p-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 bg-blue-500 rounded-t" style={{ height: "40px" }}></div>
                  <span className="text-xs">Jun</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 bg-blue-500 rounded-t" style={{ height: "60px" }}></div>
                  <span className="text-xs">Jul</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 bg-blue-500 rounded-t" style={{ height: "80px" }}></div>
                  <span className="text-xs">Aug</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 bg-blue-500 rounded-t" style={{ height: "120px" }}></div>
                  <span className="text-xs">Sep</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 bg-blue-500 rounded-t" style={{ height: "160px" }}></div>
                  <span className="text-xs">Oct</span>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="assessments">
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium mb-2">Assessment Completion Rates</h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Customer Service Skills</span>
                      <span className="text-sm font-medium">82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "82%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Leadership Potential</span>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "68%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Sales Representative</span>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium mb-2">Average Scores by Assessment</h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Customer Service Skills</span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Leadership Potential</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Sales Representative</span>
                      <span className="text-sm font-medium">72%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "72%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="hiring">
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium mb-2">Hiring Conversion Rate</h3>
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 rounded-full border-8 border-blue-600 flex items-center justify-center">
                    <span className="text-xl font-bold">22%</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      22% of candidates who completed assessments were successfully hired.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium mb-2">ROI Analysis</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Total Assessment Cost</span>
                    <span className="text-sm font-medium">$4,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Successful Hires</span>
                    <span className="text-sm font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Cost per Hire</span>
                    <span className="text-sm font-medium">$500</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-sm font-medium">Estimated Savings vs. Traditional Hiring</span>
                    <span className="text-sm font-medium text-green-600">$12,000</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

