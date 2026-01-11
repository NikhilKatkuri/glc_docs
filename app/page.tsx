'use client';

import { useEffect, useState } from 'react';
import { Event, CommandStats } from '@/lib/types';
import { aggregateCommandData } from '@/lib/analytics';
import { CommandChart } from '@/components/command-chart';
import { CommandTable } from '@/components/command-table';
import { StatsCards } from '@/components/stats-cards';
import { ExportButton } from '@/components/export-button';
import Image from 'next/image';

export default function Home() {
  const [stats, setStats] = useState<CommandStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch('/events.json');
        if (!response.ok) {
          throw new Error('Failed to load events data');
        }
        const events: Event[] = await response.json();
        const aggregatedStats = aggregateCommandData(events);
        setStats(aggregatedStats);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading analytics data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/s1.svg" alt="Analytics Icon" width={48} height={48} className="rounded-lg" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">CLI Analytics Dashboard</h1>
              <p className="text-muted-foreground">Command usage insights and performance metrics</p>
            </div>
          </div>
          <ExportButton data={stats} />
        </div>

        {/* Stats Cards */}
        <StatsCards data={stats} />

        {/* Chart and Table */}
        <div className="grid gap-6 lg:grid-cols-2">
          <CommandChart data={stats} />
          <CommandTable data={stats} />
        </div>
      </div>
    </div>
  );
}

