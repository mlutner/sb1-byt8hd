"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, ShieldCheck, Info } from "lucide-react";

export function RiskEvaluation() {
  const riskAreas = [
    {
      name: "Financial Stress",
      score: 65,
      level: "moderate",
      description: "Moderate levels of financial anxiety detected",
    },
    {
      name: "Money Management",
      score: 45,
      level: "high",
      description: "High risk in budgeting and spending patterns",
    },
    {
      name: "Financial Security",
      score: 80,
      level: "low",
      description: "Good emergency fund and safety nets in place",
    },
    {
      name: "Financial Behavior",
      score: 55,
      level: "moderate",
      description: "Some concerning patterns in financial decision-making",
    },
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "low":
        return "bg-green-500";
      case "moderate":
        return "bg-yellow-500";
      case "high":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getAlertVariant = (overallRisk: string) => {
    switch (overallRisk) {
      case "low":
        return {
          icon: ShieldCheck,
          className: "border-green-500/50 bg-green-500/10",
          title: "Low Risk Profile",
          description:
            "Your financial wellbeing appears stable. Let's focus on optimization and growth.",
        };
      case "moderate":
        return {
          icon: Info,
          className: "border-yellow-500/50 bg-yellow-500/10",
          title: "Moderate Risk Profile",
          description:
            "Some areas need attention. We'll help you develop better financial habits.",
        };
      case "high":
        return {
          icon: AlertTriangle,
          className: "border-red-500/50 bg-red-500/10",
          title: "High Risk Profile",
          description:
            "Several areas require immediate attention. We'll work together on a recovery plan.",
        };
      default:
        return {
          icon: Info,
          className: "",
          title: "",
          description: "",
        };
    }
  };

  const overallRisk = "moderate";
  const alert = getAlertVariant(overallRisk);

  return (
    <div className="space-y-6">
      <Alert className={alert.className}>
        <alert.icon className="h-5 w-5" />
        <AlertTitle>{alert.title}</AlertTitle>
        <AlertDescription>{alert.description}</AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Risk Assessment Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {riskAreas.map((area) => (
            <div key={area.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{area.name}</span>
                <span className="text-sm text-muted-foreground">
                  {area.score}%
                </span>
              </div>
              <div className="relative">
                <Progress value={area.score} className="h-2" />
                <div
                  className={`absolute right-0 top-0 h-2 w-2 rounded-full ${getRiskColor(
                    area.level
                  )}`}
                />
              </div>
              <p className="text-sm text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}