import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Divider from '../components/Divider'
import Manifesto from '../components/Manifesto'
import Products from '../components/Products'
import Principles from '../components/Principles'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider accent />
        <Manifesto />
        <Divider />
        <Products />
        <Divider accent />
        <Principles />
        <Divider />
        <Team />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}