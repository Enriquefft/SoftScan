import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ScenarioResults() {
  const scenarios = [
    {
      id: "1",
      title: "Handling a Difficult Customer",
      score: 90,
      feedback: "Excellent approach to de-escalating the situation. Showed strong empathy and problem-solving skills.",
      strengths: ["Clear and calm communication", "Effective empathy with the customer", "Creative solution proposal"],
      improvements: ["Could offer more specific compensation options"],
      response:
        "I would first apologize sincerely for the damaged product and acknowledge the customer's frustration. I would listen attentively to their concerns without interrupting. Then, I would assure them that I will personally handle their case and find a solution that works for them. I would offer an immediate refund and ask if they would prefer a replacement product with expedited shipping or perhaps a discount on a future purchase as compensation for their inconvenience...",
    },
    {
      id: "2",
      title: "Managing Multiple Priorities",
      score: 82,
      feedback: "Good prioritization skills, but could improve on communication with team members.",
      strengths: ["Appropriate prioritization of tasks", "Clear explanation to customers"],
      improvements: ["Could delegate more effectively", "Communication with team members could be clearer"],
      response:
        "I would first quickly assess the urgency and importance of each situation. Since I'm already helping a customer with a complex issue, I would politely ask them for a moment. I would then acknowledge the VIP client, welcome them, and ask if they could please take a seat for just a few minutes while I wrap up with my current customer. I would then quickly inform my team member that I've noted their request and will assist as soon as possible...",
    },
    {
      id: "3",
      title: "Explaining Technical Information",
      score: 78,
      feedback: "Good use of simple language, but could use more analogies to explain complex concepts.",
      strengths: ["Avoided technical jargon", "Patient explanation approach"],
      improvements: ["Could use more analogies or visual aids", "Follow-up plan could be more detailed"],
      response:
        "I would approach this situation by first acknowledging the customer's frustration and assuring them that I'm here to help make the software easier to understand. I would avoid using technical jargon and instead use simple, everyday language. I would break down the explanation into small, manageable steps and check for understanding after each step...",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {scenarios.map((scenario) => (
        <AccordionItem key={scenario.id} value={scenario.id}>
          <AccordionTrigger>
            <div className="flex items-center justify-between w-full pr-4">
              <span>{scenario.title}</span>
              <span
                className={`font-medium ${
                  scenario.score >= 85 ? "text-green-600" : scenario.score >= 70 ? "text-amber-600" : "text-red-600"
                }`}
              >
                {scenario.score}%
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Feedback</h4>
              <p className="text-sm">{scenario.feedback}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-medium mb-1">Strengths</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {scenario.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-1">Areas for Improvement</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {scenario.improvements.map((improvement, index) => (
                    <li key={index}>{improvement}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-1">Candidate Response</h4>
              <div className="text-sm border rounded-md p-3 bg-gray-50 dark:bg-gray-900">{scenario.response}</div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

