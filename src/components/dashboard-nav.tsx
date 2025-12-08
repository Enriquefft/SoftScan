import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { BarChart3, FileText, Link2, Settings, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface DashboardNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardNav({ className, ...props }: DashboardNavProps) {
  return (
    <div className={cn("pb-12", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" width={32} height={32} alt="SoftScan AI Logo" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              SoftScan AI
            </span>
          </Link>
        </div>
        <div className="px-4">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Dashboard</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/dashboard">
                <BarChart3 className="mr-2 h-4 w-4" />
                Overview
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/scenarios">
                <FileText className="mr-2 h-4 w-4" />
                Scenarios
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/candidates">
                <Users className="mr-2 h-4 w-4" />
                Candidates
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/links">
                <Link2 className="mr-2 h-4 w-4" />
                Shared Links
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

