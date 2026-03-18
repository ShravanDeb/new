export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Incredible attention to detail. Ships fast, communicates clearly, and the end result exceeded expectations.',
    author: 'Jane Doe',
    role: 'CTO @ StartupX',
  },
  {
    id: '2',
    quote: 'One of the best developers I have worked with. Brings both technical depth and great design sensibility.',
    author: 'John Smith',
    role: 'Founder @ TechCo',
  },
  {
    id: '3',
    quote: 'Delivered a complex project in record time without compromising on quality. Would hire again instantly.',
    author: 'Sarah Lee',
    role: 'Product Lead @ Agency',
  },
]
