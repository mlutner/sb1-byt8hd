"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Target,
  Wallet,
  ArrowRight,
  BookOpen,
  Shield,
  Sparkles,
} from "lucide-react";

const pathways = [
  {
    id: "mindset",
    title: "Mindset Mastery",
    description: "Transform your relationship with money through CBT techniques",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    recommended: true,
    modules: ["Money Beliefs", "Financial Anxiety", "Goal Setting"],
  },
  {
    id: "foundations",
    title: "Financial Foundations",
    description: "Build strong financial habits and understanding",
    icon: Shield,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    modules: ["Budgeting Basics", "Saving Strategies", "Debt Management"],
  },
  {
    id: "growth",
    title: "Growth & Prosperity",
    description: "Advanced strategies for financial growth",
    icon: Target,
    color: "text-green-500",
    bgColor: "bg-green-50",
    modules: ["Investment Basics", "Risk Management", "Future Planning"],
  },
];

export function PathwaySelector() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Choose Your Journey</h2>
        <p className="text-muted-foreground">
          Select a pathway that best fits your needs and goals
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {pathways.map((pathway) => (
          <Card
            key={pathway.id}
            className={`relative overflow-hidden transition-all hover:shadow-lg ${
              pathway.recommended ? "border-purple-200" : ""
            }`}
          >
            {pathway.recommended && (
              <Badge
                className="absolute top-4 right-4 bg-purple-500"
                variant="secondary"
              >
                Recommended
              </Badge>
            )}

            <CardHeader>
              <div
                className={`w-12 h-12 rounded-lg ${pathway.bgColor} flex items-center justify-center mb-4`}
              >
                <pathway.icon className={`h-6 w-6 ${pathway.color}`} />
              </div>
              <CardTitle className="text-xl">{pathway.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{pathway.description}</p>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Included Modules:</h4>
                <ul className="space-y-1">
                  {pathway.modules.map((module) => (
                    <li
                      key={module}
                      className="text-sm text-muted-foreground flex items-center"
                    >
                      <Sparkles className="h-3 w-3 mr-2 text-yellow-500" />
                      {module}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className="w-full mt-4 bg-gradient-to-r from-[#24475A] to-[#A366CC] hover:from-[#1a3545] hover:to-[#8f57b5]"
              >
                Start This Pathway
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}