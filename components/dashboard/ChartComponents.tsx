"use client";

import { ReactNode } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  BarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  TooltipProps,
} from 'recharts';

interface CustomTooltipProps extends TooltipProps<any, any> {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export function SpendingTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border">
        <p className="font-medium">{label}</p>
        <p className="text-[#24475A]">Amount: ${payload[0].value}</p>
      </div>
    );
  }
  return null;
}

export function MoodSpendTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border">
        <p className="font-medium">{label}</p>
        {payload.map((entry) => (
          <p
            key={entry.name}
            className={entry.name === "mood" ? "text-[#A366CC]" : "text-[#24475A]"}
          >
            {entry.name === "mood" ? "Mood" : "Spending"}: {entry.value}
            {entry.name === "spend" ? "$" : "%"}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

interface ChartWrapperProps {
  children: ReactNode;
  height?: number | string;
}

export function ChartWrapper({ children, height = "100%" }: ChartWrapperProps) {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>{children}</ResponsiveContainer>
    </div>
  );
}

// Base axis props
const baseAxisProps = {
  stroke: "#6B7280",
  fontSize: 12,
  tickLine: false,
  axisLine: { stroke: '#E5E7EB' },
};

export { 
  LineChart, 
  BarChart, 
  Line, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
};