<div align="center">

# 🚀 Saidev - Frontend UI

### Analytics Dashboard for GitLite CLI Telemetry

*A modern, real-time analytics dashboard for visualizing CLI command usage and performance metrics*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[Live Demo](https://glc-docs.vercel.app) • [Report Bug](https://github.com/NikhilKatkuri/glc_docs/issues) • [Request Feature](https://github.com/NikhilKatkuri/glc_docs/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Development](#-development)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**Saidev Frontend UI** is a powerful analytics dashboard designed specifically for the **GitLite CLI** tool. It provides comprehensive insights into GLC (Git Lite Command) telemetry data, enabling teams to visualize command usage patterns, monitor performance metrics, and identify optimization opportunities.

Built with modern web technologies, this dashboard offers a seamless, responsive experience across all devices while maintaining high performance and code quality standards.

---

## ✨ Features

<table>
<tr>
<td>

### 📊 Analytics & Insights
- Real-time command usage statistics
- Performance metrics tracking
- Success rate monitoring
- Execution time analysis

</td>
<td>

### 🎨 User Experience
- Responsive design (mobile, tablet, desktop)
- Dark/Light mode toggle
- Interactive data visualizations
- Sortable & filterable tables

</td>
</tr>
<tr>
<td>

### 📈 Data Visualization
- Dynamic bar charts
- Color-coded metrics
- Visual success indicators
- Trend analysis views

</td>
<td>

### 🔧 Developer Tools
- One-click Excel export
- TypeScript type safety
- ESLint code quality
- Hot module replacement

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="48" height="48" alt="Next.js" />
<br />Next.js 16
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
<br />TypeScript
</td>
<td align="center" width="25%">
<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="48" height="48" alt="Tailwind CSS" />
<br />Tailwind CSS
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React" />
<br />React 19
</td>
</tr>
</table>

**Core Technologies:**
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5.0
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Charts:** Recharts
- **Icons:** Lucide React
- **Export:** xlsx, file-saver

---

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- ✅ **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- ✅ **npm** or **yarn** package manager
- ✅ **Git** ([Download](https://git-scm.com/))

### Quick Start

Follow these steps to get the project up and running:

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/NikhilKatkuri/glc_docs.git
cd glc_docs
```

#### 2️⃣ Create Frontend Branch

```bash
git checkout -b frontend
```

Verify your branch:
```bash
git status
# Output: On branch frontend
#         nothing to commit, working tree clean
```

#### 3️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

#### 4️⃣ Start Development Server

```bash
npm run dev
# or
yarn dev
```

#### 5️⃣ Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see your application running! 🎉

### 🔄 Pushing Changes

When you're ready to push your changes:

```bash
git add .
git commit -m "feat: your descriptive commit message"
git push origin frontend
```

---

---

## 📁 Project Structure

```
glc_docs/
│
├── 📂 app/
│   ├── 📄 page.tsx              # Main dashboard page
│   ├── 📄 layout.tsx            # Root layout with providers
│   ├── 📄 globals.css           # Global styles & theme
│   └── 🖼️  favicon.ico          # App icon
│
├── 📂 components/
│   ├── 📂 ui/                   # Reusable UI components
│   │   ├── button.tsx           # Button component
│   │   ├── card.tsx             # Card component
│   │   └── table.tsx            # Table component
│   ├── 📊 command-chart.tsx     # Interactive bar chart
│   ├── 📋 command-table.tsx     # Sortable data table
│   ├── 📈 stats-cards.tsx       # Metrics dashboard cards
│   └── 💾 export-button.tsx     # Excel export functionality
│
├── 📂 lib/
│   ├── 🔧 types.ts              # TypeScript type definitions
│   ├── 📊 analytics.ts          # Data aggregation & processing
│   └── 🛠️  utils.ts             # Utility functions
│
├── 📂 public/
│   └── 📄 events.json           # Sample telemetry data
│
├── 📄 package.json              # Dependencies & scripts
├── 📄 tsconfig.json             # TypeScript configuration
├── 📄 tailwind.config.ts        # Tailwind CSS configuration
├── 📄 next.config.ts            # Next.js configuration
└── 📖 README.md                 # Project documentation

```

---

## 💡 Usage

### Data Format

The dashboard reads telemetry data from `public/events.json`. Each event follows this schema:

```typescript
{
  "id": "evt_001",              // Unique event identifier
  "command": "git push",        // CLI command executed
  "timestamp": "2026-01-10T08:15:23Z",  // ISO 8601 timestamp
  "executionTime": 1250,        // Execution time in milliseconds
  "success": true,              // Command success status
  "user": "dev1"                // User identifier
}
```

### Key Metrics

The dashboard automatically calculates and displays:

| Metric | Description |
|--------|-------------|
| **Total Executions** | Total number of commands executed |
| **Success Rate** | Percentage of successful command executions |
| **Total Failures** | Count of failed command attempts |
| **Avg Execution Time** | Mean execution time across all commands |

### Interactive Features

#### 📊 **Analytics Dashboard**
- View aggregated command statistics
- Monitor real-time performance metrics
- Identify most frequently used commands

#### 📈 **Visual Charts**
- Bar chart showing command popularity
- Responsive and interactive visualizations
- Hover for detailed information

#### 📋 **Sortable Tables**
- Click column headers to sort data
- Color-coded success rates:
  - 🟢 **Green** (≥90%): Excellent performance
  - 🟡 **Yellow** (70-89%): Good performance
  - 🔴 **Red** (<70%): Needs attention

#### 💾 **Excel Export**
- One-click download of analytics data
- Auto-formatted columns
- Timestamped filenames

---

---

## 🔧 Development

### Available Scripts

```bash
# 🚀 Start development server with hot reload
npm run dev

# 🏗️ Build production-optimized bundle
npm run build

# ▶️ Start production server
npm start

# 🔍 Run ESLint for code quality checks
npm run lint

# 🧹 Auto-fix linting issues
npm run lint:fix
```

### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, documented code
   - Follow TypeScript best practices
   - Maintain consistent formatting

3. **Test your changes**
   ```bash
   npm run dev
   # Test in browser at http://localhost:3000
   ```

4. **Commit with conventional commits**
   ```bash
   git add .
   git commit -m "feat: add new analytics feature"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Quality Standards

- ✅ TypeScript strict mode enabled
- ✅ ESLint configuration enforced
- ✅ Consistent code formatting
- ✅ Component-based architecture
- ✅ Responsive design principles

---

## 🎨 Customization

### Update Sample Data

Replace the data in `public/events.json` with your own CLI telemetry:

```bash
# Your telemetry data should follow the schema
{
  "id": "unique_id",
  "command": "your_command",
  "timestamp": "ISO_8601_timestamp",
  "executionTime": milliseconds,
  "success": boolean,
  "user": "user_id"
}
```

### Customize Theme Colors

Modify the color scheme in `app/globals.css`:

```css
:root {
  --primary: your-primary-color;
  --secondary: your-secondary-color;
  --accent: your-accent-color;
  /* Add your custom colors */
}
```

### Add New Metrics

Follow these steps to extend the analytics:

1. **Update Types** - Add new properties to `CommandStats` interface in [lib/types.ts](lib/types.ts)
2. **Update Logic** - Modify aggregation logic in [lib/analytics.ts](lib/analytics.ts)
3. **Update UI** - Add new columns to [components/command-table.tsx](components/command-table.tsx)
4. **Update Charts** - Extend chart data in [components/command-chart.tsx](components/command-chart.tsx)

### Styling Components

All components use Tailwind CSS. Modify component styling by editing the className props:

```tsx
<div className="your-custom-classes">
  {/* Component content */}
</div>
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/NikhilKatkuri/glc_docs)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Configure project settings (automatic for Next.js)
4. Deploy! 🎉

### Other Deployment Options

<details>
<summary><b>Deploy to Netlify</b></summary>

```bash
npm run build
# Upload the .next folder to Netlify
```
</details>

<details>
<summary><b>Deploy to AWS</b></summary>

Use AWS Amplify or configure EC2 with PM2:
```bash
npm run build
pm2 start npm --name "glc-dashboard" -- start
```
</details>

<details>
<summary><b>Docker Deployment</b></summary>

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```
</details>

### Environment Variables

Create a `.env.local` file for production:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'feat: Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Reporting Issues

Found a bug or have a feature request? [Open an issue](https://github.com/NikhilKatkuri/glc_docs/issues) with:
- Clear description
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots (if applicable)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - feel free to use this project for personal or commercial purposes
```

---

## 👥 Authors & Acknowledgments

**Developed by:** Saidev Team

**Built with:**
- [Next.js](https://nextjs.org/) - The React Framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Recharts](https://recharts.org/) - Composable charting library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

---

## 📞 Support

Need help? We're here for you!

- 📧 **Email:** support@saidev.com
- 💬 **Discord:** [Join our community](https://discord.gg/saidev)
- 🐛 **Issues:** [GitHub Issues](https://github.com/NikhilKatkuri/glc_docs/issues)
- 📖 **Docs:** [Full Documentation](https://github.com/NikhilKatkuri/glc_docs/wiki)

---

## ⭐ Show Your Support

If you find this project useful, please consider:

- ⭐ **Starring** the repository
- 🍴 **Forking** for your own use
- 📢 **Sharing** with others
- 🤝 **Contributing** to the codebase

---

<div align="center">

**Built with ❤️ by the Saidev Team**

[⬆ Back to Top](#-saidev---frontend-ui)

</div>
