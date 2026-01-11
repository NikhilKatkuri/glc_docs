'use client';

import { CommandStats } from '@/lib/types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CommandChartProps {
  data: CommandStats[];
}

export function CommandChart({ data }: CommandChartProps) {
  // Transform data for Recharts
  const chartData = data.map((stat) => ({
    name: stat.command,
    executions: stat.totalExecutions,
    avgTime: stat.averageExecutionTime,
  }));

  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle>Command Popularity</CardTitle>
        <CardDescription>Most frequently used CLI commands</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="name" 
              angle={-45}
              textAnchor="end"
              height={100}
              className="text-xs"
            />
            <YAxis className="text-xs" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.5rem'
              }}
            />
            <Legend />
            <Bar dataKey="executions" fill="hsl(var(--primary))" name="Total Executions" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
