import PageWrapper  from '../../components/layout/PageWrapper'
import Hero         from './Hero'
import Ventures     from './Ventures'
import Skillset     from './Skillset'
import QuickAbout   from './QuickAbout'
import Testimonials from './Testimonials'
import Connect      from './Connect'

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Ventures />
      <Skillset />
      <QuickAbout />
      <Testimonials />
      <Connect />
    </PageWrapper>
  )
}
