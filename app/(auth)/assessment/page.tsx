"use client";

import { useState } from "react";
import { AssessmentForm } from '@/components/assessment/AssessmentForm';
import { RiskEvaluation } from '@/components/assessment/RiskEvaluation';
import { PathwaySelector } from '@/components/assessment/PathwaySelector';
import { Logo } from "@/components/Logo";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function AssessmentPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setStep(Math.min(step + 1, totalSteps));
  const prevStep = () => setStep(Math.max(step - 1, 1));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo className="w-16 h-16 text-[#24475A]" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#24475A] to-[#A366CC] bg-clip-text text-transparent">
            Financial Wellbeing Assessment
          </h1>
          <p className="text-muted-foreground mt-2">
            Let's understand your financial wellness journey better
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round((step / totalSteps) * 100)}% Complete</span>
          </div>
          <Progress value={(step / totalSteps) * 100} className="h-2" />
        </div>

        {/* Step Content */}
        <div className="space-y-8">
          {step === 1 && <AssessmentForm />}
          {step === 2 && <RiskEvaluation />}
          {step === 3 && <PathwaySelector />}

          {/* Navigation */}
          <div className="flex justify-between pt-6">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={step === 1}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={nextStep}
              disabled={step === totalSteps}
              className="bg-gradient-to-r from-[#24475A] to-[#A366CC] hover:from-[#1a3545] hover:to-[#8f57b5]"
            >
              {step === totalSteps ? "Complete" : "Next"}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}