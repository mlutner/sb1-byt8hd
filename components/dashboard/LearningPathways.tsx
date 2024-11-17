"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  LineChart, 
  BookOpen, 
  FileText 
} from "lucide-react";

const pathways = [
  {
    title: "Introduction to FinWell",
    icon: GraduationCap,
    progress: 60,
    color: "text-purple-500",
  },
  {
    title: "Spending Tracker",
    icon: LineChart,
    progress: 40,
    color: "text-blue-500",
  },
  {
    title: "Financial Education",
    icon: BookOpen,
    progress: 20,
    color: "text-green-500",
  },
  {
    title: "Resources",
    icon: FileText,
    progress: 0,
    color: "text-orange-500",
  },
];

export function LearningPathways() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Learning Pathways</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {pathways.map((pathway) => (
          <div key={pathway.title} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <pathway.icon className={`h-5 w-5 ${pathway.color}`} />
                <span className="font-medium">{pathway.title}</span>
              </div>
              <Button variant="ghost" size="sm">
                {pathway.progress === 0 ? "Start" : "Continue"}
              </Button>
            </div>
            <Progress value={pathway.progress} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}