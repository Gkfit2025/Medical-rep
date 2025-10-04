import { CheckCircle2, Shield, Zap, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: CheckCircle2,
    title: "Simple & Intuitive",
    description: "User-friendly interface designed for busy medical representatives",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "HIPAA-compliant platform ensuring data privacy and security",
  },
  {
    icon: Zap,
    title: "Instant Confirmation",
    description: "Get real-time updates and confirmations for all appointments",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Dedicated support team available whenever you need assistance",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-secondary/20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Why Choose MedRep Connect?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need to manage your medical representative appointments efficiently
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
