import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AppointmentForm } from "@/components/appointment-form"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <AppointmentForm />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
