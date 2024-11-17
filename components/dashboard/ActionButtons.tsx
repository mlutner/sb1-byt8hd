"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Video,
  FileText,
  BookOpen,
  PenLine,
} from "lucide-react";

const actions = [
  {
    name: "Video Blog",
    icon: Video,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    hoverColor: "hover:bg-purple-100",
  },
  {
    name: "Resources",
    icon: FileText,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    hoverColor: "hover:bg-blue-100",
  },
  {
    name: "Journal",
    icon: PenLine,
    color: "text-green-500",
    bgColor: "bg-green-50",
    hoverColor: "hover:bg-green-100",
  },
  {
    name: "Notes",
    icon: BookOpen,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    hoverColor: "hover:bg-yellow-100",
  },
];

export function ActionButtons() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => (
            <Button
              key={action.name}
              variant="ghost"
              className={`h-auto py-4 flex flex-col items-center justify-center gap-2 ${action.bgColor} ${action.hoverColor}`}
            >
              <action.icon className={`h-5 w-5 ${action.color}`} />
              <span className="text-sm font-medium">{action.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}