'use client';

import { useState } from 'react';
import { CommandStats } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CommandTableProps {
  data: CommandStats[];
}

type SortKey = keyof CommandStats;
type SortDirection = 'asc' | 'desc';

export function CommandTable({ data }: CommandTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('totalExecutions');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('desc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return 0;
  });

  const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
    if (sortKey !== columnKey) {
      return <ArrowUpDown className="ml-2 h-4 w-4 inline" />;
    }
    return sortDirection === 'asc' 
      ? <ArrowUp className="ml-2 h-4 w-4 inline" />
      : <ArrowDown className="ml-2 h-4 w-4 inline" />;
  };

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Detailed Command Statistics</CardTitle>
        <CardDescription>Click column headers to sort</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-auto">
          <Table>
            <TableCaption>A detailed breakdown of CLI command usage</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => handleSort('command')}
                    className="hover:bg-transparent p-0 h-auto font-semibold"
                  >
                    Command
                    <SortIcon columnKey="command" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort('totalExecutions')}
                    className="hover:bg-transparent p-0 h-auto font-semibold"
                  >
                    Total Executions
                    <SortIcon columnKey="totalExecutions" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort('averageExecutionTime')}
                    className="hover:bg-transparent p-0 h-auto font-semibold"
                  >
                    Avg Time (ms)
                    <SortIcon columnKey="averageExecutionTime" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort('successRate')}
                    className="hover:bg-transparent p-0 h-auto font-semibold"
                  >
                    Success Rate
                    <SortIcon columnKey="successRate" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort('successfulExecutions')}
                    className="hover:bg-transparent p-0 h-auto font-semibold"
                  >
                    Successful
                    <SortIcon columnKey="successfulExecutions" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort('failedExecutions')}
                    className="hover:bg-transparent p-0 h-auto font-semibold"
                  >
                    Failed
                    <SortIcon columnKey="failedExecutions" />
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((stat) => (
                <TableRow key={stat.command}>
                  <TableCell className="font-mono font-medium">{stat.command}</TableCell>
                  <TableCell className="text-right">{stat.totalExecutions}</TableCell>
                  <TableCell className="text-right">{stat.averageExecutionTime.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      stat.successRate >= 90 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                      stat.successRate >= 70 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                    }`}>
                      {stat.successRate}%
                    </span>
                  </TableCell>
                  <TableCell className="text-right">{stat.successfulExecutions}</TableCell>
                  <TableCell className="text-right">{stat.failedExecutions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
