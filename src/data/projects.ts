export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  url?: string
  github?: string
  year: number
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Alpha',
    description: 'A SaaS dashboard for real-time analytics with 3D data visualization.',
    tags: ['React', 'TypeScript', 'Three.js'],
    url: 'https://example.com',
    github: 'https://github.com/you/alpha',
    year: 2024,
    featured: true,
  },
  {
    id: '2',
    title: 'Project Beta',
    description: 'E-commerce platform with AI-powered product recommendations.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    url: 'https://example.com',
    github: 'https://github.com/you/beta',
    year: 2024,
    featured: true,
  },
  {
    id: '3',
    title: 'Project Gamma',
    description: 'Real-time collaborative whiteboard with WebSocket sync.',
    tags: ['React', 'WebSockets', 'Canvas API'],
    url: 'https://example.com',
    github: 'https://github.com/you/gamma',
    year: 2023,
    featured: false,
  },
]
