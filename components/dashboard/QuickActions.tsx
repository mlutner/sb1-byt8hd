"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export function QuickActions() {
  const router = useRouter();

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Pathway Entry Button */}
        <Button
          onClick={() => router.push('/assessment')}
          className="w-full h-auto py-6 bg-gradient-to-r from-[#24475A] to-[#A366CC] hover:from-[#1a3545] hover:to-[#8f57b5] group"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6" />
              <div className="text-left">
                <h3 className="font-semibold">Start Your Wellbeing Journey</h3>
                <p className="text-sm opacity-90">Take the assessment and find your pathway</p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </div>
        </Button>
      </CardContent>
    </Card>
  );
}