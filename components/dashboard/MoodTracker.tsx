"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CloudRainWind, 
  Cloud, 
  Sun, 
  Sunset, 
  Sparkles 
} from "lucide-react";

const moods = [
  { name: "Bad", icon: CloudRainWind, color: "text-red-500", bgColor: "bg-red-50" },
  { name: "Low", icon: Cloud, color: "text-orange-500", bgColor: "bg-orange-50" },
  { name: "Ok", icon: Sunset, color: "text-yellow-500", bgColor: "bg-yellow-50" },
  { name: "Good", icon: Sun, color: "text-blue-500", bgColor: "bg-blue-50" },
  { name: "Great", icon: Sparkles, color: "text-green-500", bgColor: "bg-green-50" },
];

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">How are you feeling?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-2">
          {moods.map((mood) => {
            const isSelected = selectedMood === mood.name;
            return (
              <Button
                key={mood.name}
                variant="ghost"
                className={`flex flex-col items-center p-3 gap-2 ${
                  isSelected ? mood.bgColor : ""
                }`}
                onClick={() => setSelectedMood(mood.name)}
              >
                <mood.icon
                  className={`h-6 w-6 ${
                    isSelected ? mood.color : "text-gray-500"
                  }`}
                />
                <span className="text-xs font-medium">{mood.name}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}