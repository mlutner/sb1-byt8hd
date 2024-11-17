"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Send, ChevronUp, ChevronDown, Heart } from "lucide-react";
import { useChat } from "ai/react";

export function ChatInterface() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-6xl shadow-lg border-t-2">
      {/* Chat History */}
      {isExpanded && (
        <CardContent className="h-64 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              <Heart className="h-8 w-8 mx-auto mb-3 text-pink-400" />
              <p>Welcome to your safe space for financial wellbeing.</p>
              <p className="text-sm">Share your thoughts, concerns, or questions about your financial journey.</p>
            </div>
          )}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  msg.role === "user"
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-900 shadow-sm'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </CardContent>
      )}

      {/* Input Area */}
      <div className="p-4 bg-white flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-shrink-0"
        >
          {isExpanded ? (
            <ChevronDown className="h-5 w-5" />
          ) : (
            <ChevronUp className="h-5 w-5" />
          )}
        </Button>

        <form onSubmit={handleSubmit} className="flex-1 flex gap-3">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Talk to your financial wellbeing therapist..."
            className="flex-1"
          />
          <Button type="submit" className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Send className="h-4 w-4 mr-2" />
            Share
          </Button>
        </form>
      </div>
    </Card>
  );
}