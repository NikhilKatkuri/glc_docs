export interface Event {
  id: string;
  command: string;
  timestamp: string;
  executionTime: number;
  success: boolean;
  user: string;
}

export interface CommandStats {
  command: string;
  totalExecutions: number;
  averageExecutionTime: number;
  successRate: number;
  totalTime: number;
  successfulExecutions: number;
  failedExecutions: number;
}
