"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, Target, Clock, Wallet } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const quadrants = [
  {
    name: "Mindset",
    score: 80,
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    name: "Resiliency",
    score: 75,
    icon: Target,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    name: "Consistency",
    score: 85,
    icon: Clock,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    name: "Spending",
    score: 70,
    icon: Wallet,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
];

const moodSpendData = [
  { day: "Mon", mood: 80, spend: 120 },
  { day: "Tue", mood: 65, spend: 180 },
  { day: "Wed", mood: 90, spend: 60 },
  { day: "Thu", mood: 75, spend: 140 },
  { day: "Fri", mood: 85, spend: 90 },
  { day: "Sat", mood: 95, spend: 70 },
  { day: "Sun", mood: 88, spend: 110 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border rounded-lg shadow-lg">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-purple-600">Mood: {payload[0].value}%</p>
        <p className="text-sm text-blue-600">Spend: ${payload[1].value}</p>
      </div>
    );
  }
  return null;
};

export function WellbeingScore() {
  const [activeView, setActiveView] = useState("score");
  const overallScore = Math.round(
    quadrants.reduce((acc, q) => acc + q.score, 0) / quadrants.length
  );

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <Button
            variant={activeView === "score" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveView("score")}
          >
            Score
          </Button>
          <Button
            variant={activeView === "mood" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveView("mood")}
          >
            Mood vs. Spend
          </Button>
        </div>
        <CardTitle className="text-xl font-semibold">Financial Wellbeing</CardTitle>
      </CardHeader>
      <CardContent>
        {activeView === "score" ? (
          <div className="space-y-8">
            <div className="flex items-center justify-center">
              <div className="relative">
                <svg className="w-32 h-32">
                  <circle
                    className="text-gray-100"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="56"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-blue-500"
                    strokeWidth="8"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="56"
                    cx="64"
                    cy="64"
                    strokeDasharray={`${(overallScore / 100) * 351.8584}, 351.8584`}
                    transform="rotate(-90 64 64)"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-3xl font-bold">{overallScore}</span>
                  <span className="text-sm text-muted-foreground">/100</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {quadrants.map((quadrant) => (
                <div key={quadrant.name} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${quadrant.bgColor}`}>
                      <quadrant.icon className={`h-4 w-4 ${quadrant.color}`} />
                    </div>
                    <span className="text-sm font-medium">{quadrant.name}</span>
                  </div>
                  <Progress value={quadrant.score} className="h-2" />
                  <p className="text-sm text-right text-muted-foreground">
                    {quadrant.score}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={moodSpendData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666' }}
                />
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666' }}
                  tickFormatter={(value) => `${value}%`}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666' }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar yAxisId="left" dataKey="mood" fill="#A366CC" radius={[4, 4, 0, 0]} />
                <Bar yAxisId="right" dataKey="spend" fill="#24475A" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}