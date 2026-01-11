# Saidev - Frontend UI

This is the frontend UI for the gitlite CLI, analytics and insights tool for GLC telemetry data. A modern Next.js analytics dashboard for visualizing CLI command usage data. Built with TypeScript, Tailwind CSS, shadcn/ui, and Recharts.

## Features

- **Real-time Analytics**: Displays CLI command usage statistics with live data from `events.json`
- **Interactive Charts**: Responsive bar chart showing command popularity using Recharts
- **Sortable Tables**: Detailed command statistics with sortable columns
- **Key Metrics Cards**: Overview cards showing total executions, success rates, failures, and average execution time
- **Excel Export**: One-click export functionality to download analytics as an Excel file
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Dark Mode Support**: Built-in dark mode with theme switching
- **Production Ready**: TypeScript for type safety, ESLint for code quality

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Export**: xlsx, file-saver

## Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed

### Setup

1. Clone the repository:
```bash
git clone https://github.com/NikhilKatkuri/glc_docs.git
cd glc_docs
```

2. Create and switch to the frontend branch:
```bash
git checkout -b frontend
```

3. Check the branch status:
```bash
git status
```

Output should show:
```
On branch frontend
nothing to commit, working tree clean
```

4. Install dependencies:
```bash
npm install
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Pushing Changes

If you want to push to the frontend branch:
```bash
git add .
git commit -m "your commit message"
git push origin frontend
```

## Project Structure

```
├── app/
│   ├── page.tsx              # Main dashboard page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── command-chart.tsx     # Bar chart component
│   ├── command-table.tsx     # Sortable table component
│   ├── stats-cards.tsx       # Metric cards component
│   └── export-button.tsx     # Excel export component
├── lib/
│   ├── types.ts              # TypeScript interfaces
│   ├── analytics.ts          # Data aggregation logic
│   └── utils.ts              # Utility functions
└── public/
    └── events.json           # Sample CLI usage data
```

## Data Format

The dashboard reads from `public/events.json` with the following structure:

```json
{
  "id": "evt_001",
  "command": "git push",
  "timestamp": "2026-01-10T08:15:23Z",
  "executionTime": 1250,
  "success": true,
  "user": "dev1"
}
```

## Features Details

### Analytics Aggregation
- Groups events by command
- Calculates total executions per command
- Computes average execution time
- Determines success rate percentage
- Counts successful vs failed executions

### Interactive Table
- Click column headers to sort
- Color-coded success rates (green: ≥90%, yellow: ≥70%, red: <70%)
- Displays all key metrics per command

### Excel Export
- Exports complete analytics data
- Auto-formats columns for readability
- Includes timestamp in filename
- One-click download

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Customization

### Update Sample Data
Edit `public/events.json` to use your own CLI usage data.

### Modify Chart Colors
Charts use CSS variables defined in `app/globals.css`. Update the color scheme by modifying the theme colors.

### Add New Metrics
1. Update `CommandStats` interface in `lib/types.ts`
2. Modify aggregation logic in `lib/analytics.ts`
3. Add columns to `command-table.tsx`

## License

MIT

## Author

Built with ❤️ using Next.js and shadcn/ui


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
