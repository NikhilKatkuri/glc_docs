'use client';

import { CommandStats } from '@/lib/types';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface ExportButtonProps {
  data: CommandStats[];
}

export function ExportButton({ data }: ExportButtonProps) {
  const handleExport = () => {
    // Prepare data for Excel
    const exportData = data.map((stat) => ({
      'Command': stat.command,
      'Total Executions': stat.totalExecutions,
      'Average Execution Time (ms)': stat.averageExecutionTime,
      'Success Rate (%)': stat.successRate,
      'Successful Executions': stat.successfulExecutions,
      'Failed Executions': stat.failedExecutions,
      'Total Time (ms)': stat.totalTime,
    }));

    // Create worksheet
    const worksheet = XLSX.utils.json_to_sheet(exportData);

    // Set column widths
    const columnWidths = [
      { wch: 20 }, // Command
      { wch: 18 }, // Total Executions
      { wch: 25 }, // Average Execution Time
      { wch: 18 }, // Success Rate
      { wch: 22 }, // Successful Executions
      { wch: 20 }, // Failed Executions
      { wch: 18 }, // Total Time
    ];
    worksheet['!cols'] = columnWidths;

    // Create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Command Analytics');

    // Generate Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Save file
    saveAs(blob, `cli-analytics-${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <Button onClick={handleExport} className="gap-2">
      <Download className="h-4 w-4" />
      Export to Excel
    </Button>
  );
}
