import { Event, CommandStats } from './types';

export function aggregateCommandData(events: Event[]): CommandStats[] {
  const commandMap = new Map<string, {
    totalExecutions: number;
    totalTime: number;
    successfulExecutions: number;
    failedExecutions: number;
  }>();

  // Aggregate data by command
  events.forEach((event) => {
    const existing = commandMap.get(event.command) || {
      totalExecutions: 0,
      totalTime: 0,
      successfulExecutions: 0,
      failedExecutions: 0,
    };

    existing.totalExecutions += 1;
    existing.totalTime += event.executionTime;
    if (event.success) {
      existing.successfulExecutions += 1;
    } else {
      existing.failedExecutions += 1;
    }

    commandMap.set(event.command, existing);
  });

  // Convert to array and calculate metrics
  const stats: CommandStats[] = [];
  commandMap.forEach((data, command) => {
    stats.push({
      command,
      totalExecutions: data.totalExecutions,
      averageExecutionTime: Math.round(data.totalTime / data.totalExecutions),
      successRate: Math.round((data.successfulExecutions / data.totalExecutions) * 100),
      totalTime: data.totalTime,
      successfulExecutions: data.successfulExecutions,
      failedExecutions: data.failedExecutions,
    });
  });

  // Sort by total executions (most popular first)
  return stats.sort((a, b) => b.totalExecutions - a.totalExecutions);
}

export function getMostUsedCommands(stats: CommandStats[], limit: number = 10): CommandStats[] {
  return stats.slice(0, limit);
}
