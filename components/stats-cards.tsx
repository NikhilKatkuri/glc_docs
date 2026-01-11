'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CommandStats } from '@/lib/types';
import { Activity, CheckCircle2, XCircle, Clock } from 'lucide-react';

interface StatsCardsProps {
  data: CommandStats[];
}

export function StatsCards({ data }: StatsCardsProps) {
  const totalExecutions = data.reduce((sum, stat) => sum + stat.totalExecutions, 0);
  const totalSuccessful = data.reduce((sum, stat) => sum + stat.successfulExecutions, 0);
  const totalFailed = data.reduce((sum, stat) => sum + stat.failedExecutions, 0);
  const overallSuccessRate = totalExecutions > 0 
    ? Math.round((totalSuccessful / totalExecutions) * 100) 
    : 0;
  const avgExecutionTime = data.reduce((sum, stat) => sum + stat.averageExecutionTime, 0) / data.length;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Executions</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalExecutions}</div>
          <p className="text-xs text-muted-foreground">
            Across {data.length} unique commands
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
          <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{overallSuccessRate}%</div>
          <p className="text-xs text-muted-foreground">
            {totalSuccessful} successful executions
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Failed Commands</CardTitle>
          <XCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalFailed}</div>
          <p className="text-xs text-muted-foreground">
            {Math.round((totalFailed / totalExecutions) * 100)}% failure rate
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg Execution Time</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{Math.round(avgExecutionTime)}ms</div>
          <p className="text-xs text-muted-foreground">
            Average across all commands
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
