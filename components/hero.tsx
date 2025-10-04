import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, Users } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-secondary/20">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span className="text-muted-foreground">Streamlined appointment scheduling</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Connect with Healthcare Professionals <span className="text-primary">Effortlessly</span>
          </h1>

          <p className="mb-8 text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed">
            Schedule appointments with doctors seamlessly. Our platform makes it easy for medical representatives to
            book meetings, manage schedules, and build stronger relationships with healthcare providers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Book Appointment Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              Learn More
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-6">
              <Calendar className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-card-foreground">Easy Scheduling</h3>
              <p className="text-sm text-muted-foreground text-center">Book appointments in minutes</p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-6">
              <Clock className="h-8 w-8 text-accent" />
              <h3 className="font-semibold text-card-foreground">Real-time Updates</h3>
              <p className="text-sm text-muted-foreground text-center">Get instant confirmations</p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-6">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-card-foreground">Professional Network</h3>
              <p className="text-sm text-muted-foreground text-center">Connect with top doctors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
