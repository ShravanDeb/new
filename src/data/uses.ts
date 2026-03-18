export interface UseItem {
  name: string
  desc: string
  url?: string
}

export const uses: Record<string, UseItem[]> = {
  Hardware: [
    { name: 'MacBook Pro 16"',      desc: 'M3 Pro, 36GB RAM — primary machine' },
    { name: 'LG UltraWide 34"',     desc: '3440x1440 IPS — main monitor' },
    { name: 'Keychron K2',          desc: 'Mechanical keyboard, Brown switches' },
    { name: 'Logitech MX Master 3', desc: 'Best mouse for long work sessions' },
  ],
  Software: [
    { name: 'VS Code',  desc: 'Primary editor with Vim keybindings', url: 'https://code.visualstudio.com' },
    { name: 'Warp',     desc: 'Modern terminal — fast and AI-powered', url: 'https://warp.dev' },
    { name: 'Figma',    desc: 'UI/UX design and prototyping',          url: 'https://figma.com' },
    { name: 'Arc',      desc: 'My browser of choice',                 url: 'https://arc.net' },
    { name: 'Raycast',  desc: 'Productivity launcher',                url: 'https://raycast.com' },
  ],
  Services: [
    { name: 'Vercel',      desc: 'Deployments and edge functions', url: 'https://vercel.com' },
    { name: 'PlanetScale', desc: 'Serverless MySQL database',      url: 'https://planetscale.com' },
    { name: 'Cloudflare',  desc: 'DNS, CDN, and security layer',  url: 'https://cloudflare.com' },
    { name: 'Linear',      desc: 'Issue tracking and project mgmt', url: 'https://linear.app' },
  ],
}
