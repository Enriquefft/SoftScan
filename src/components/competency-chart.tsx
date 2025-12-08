export function CompetencyChart() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="font-medium">Communication Skills</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span>Clarity of Expression</span>
            <span className="font-medium">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span>Active Listening</span>
            <span className="font-medium">85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span>Empathy</span>
            <span className="font-medium">95%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "95%" }}></div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Problem Solving</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span>Analytical Thinking</span>
            <span className="font-medium">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span>Creative Solutions</span>
            <span className="font-medium">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span>Decision Making</span>
            <span className="font-medium">85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Customer Focus</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span>Understanding Customer Needs</span>
            <span className="font-medium">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span>Conflict Resolution</span>
            <span className="font-medium">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span>Service Recovery</span>
            <span className="font-medium">85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

