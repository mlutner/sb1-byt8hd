"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Wallet, 
  Target, 
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const questions = [
  {
    category: "Mindset",
    icon: Brain,
    color: "text-purple-500",
    question: "How would you rate your current financial mindset?",
    description: "Consider your attitudes and beliefs about money",
    options: [
      { value: "1", label: "Very Negative" },
      { value: "2", label: "Somewhat Negative" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Somewhat Positive" },
      { value: "5", label: "Very Positive" },
    ],
  },
  {
    category: "Resiliency",
    icon: Target,
    color: "text-blue-500",
    question: "How prepared do you feel for financial emergencies?",
    description: "Consider your emergency fund and backup plans",
    options: [
      { value: "1", label: "Not at all prepared" },
      { value: "2", label: "Slightly prepared" },
      { value: "3", label: "Moderately prepared" },
      { value: "4", label: "Well prepared" },
      { value: "5", label: "Very well prepared" },
    ],
  },
  {
    category: "Consistency",
    icon: Clock,
    color: "text-green-500",
    question: "How consistent are you with your financial habits?",
    description: "Consider budgeting, saving, and spending patterns",
    options: [
      { value: "1", label: "Very inconsistent" },
      { value: "2", label: "Somewhat inconsistent" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Somewhat consistent" },
      { value: "5", label: "Very consistent" },
    ],
  },
  {
    category: "Spending",
    icon: Wallet,
    color: "text-orange-500",
    question: "How would you rate your spending control?",
    description: "Consider your ability to manage expenses and avoid impulse purchases",
    options: [
      { value: "1", label: "Poor control" },
      { value: "2", label: "Fair control" },
      { value: "3", label: "Moderate control" },
      { value: "4", label: "Good control" },
      { value: "5", label: "Excellent control" },
    ],
  },
];

export default function AssessmentForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];
  const Icon = question.icon;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="pt-6">
        <div className="space-y-6">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${question.color} bg-opacity-10`}>
                <Icon className={`h-6 w-6 ${question.color}`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {question.category}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {question.description}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-xl font-medium text-foreground mb-6">
                {question.question}
              </h4>

              <RadioGroup
                value={answers[currentQuestion]}
                onValueChange={handleAnswer}
                className="space-y-3"
              >
                {question.options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-3 space-y-0"
                  >
                    <RadioGroupItem
                      value={option.value}
                      id={`option-${option.value}`}
                    />
                    <Label
                      htmlFor={`option-${option.value}`}
                      className="font-normal"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-6">
            <Button
              variant="ghost"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className={
                currentQuestion === questions.length - 1
                  ? "bg-green-600 hover:bg-green-700"
                  : ""
              }
            >
              {currentQuestion === questions.length - 1 ? (
                <>
                  Complete
                  <CheckCircle2 className="h-4 w-4 ml-2" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}