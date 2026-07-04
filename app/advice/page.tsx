import Image from "next/image"
import Link from "next/link"

const adviceCategories = [
  {
    title: "Metals",
    description: "Expert guidance on high-value metals, alloys, and material optimization.",
    href: "/advice/metals",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    subItems: ["Stainless steel", "Superalloys", "Non-ferrous metals"],
  },
  {
    title: "Analysis",
    description: "Precision analytical chemistry and material characterization services.",
    href: "/advice/analysis",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
        <path d="M8.5 2h7" />
        <path d="M7 16h10" />
      </svg>
    ),
  },
  {
    title: "Markets",
    description: "Strategic insights into global metal markets and international trade opportunities.",
    href: "/advice/markets",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Process",
    description: "Optimization of sorting strategies, recycling processes, and operational efficiency.",
    href: "/advice/process",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v3" />
        <path d="M18.5 13h3" />
        <path d="M2.5 13h3" />
        <path d="M12 21v-3" />
        <circle cx="12" cy="13" r="4" />
        <path d="m17.5 8.5 2-2" />
        <path d="m4.5 8.5 2 2" />
        <path d="m4.5 17.5 2-2" />
        <path d="m17.5 17.5-2-2" />
      </svg>
    ),
  },
]

export default function AdvicePage() {
  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      {/* Navbar */}
      <header className="w-full border-b border-white/10 bg-[#0a0c10]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-4 flex items-center justify-between gap-6">
          <Link href="/" className="shrink-0">
            <span className="inline-flex items-center rounded-lg bg-white px-4 py-2.5">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-04%20at%2023.39.00-Y6dSTg3Ycez4S3NySWEF1wKLAKYtEZ.jpeg"
                alt="Sidi ReSource Trading & Consultancy"
                width={900}
                height={230}
                className="h-14 w-auto md:h-16 mix-blend-multiply"
                priority
              />
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/advice" className="text-amber-400 hover:text-amber-300 transition-colors">
              Advice
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          <Link
            href="/#contact"
            className="shrink-0 bg-amber-500 text-[#0a0c10] px-5 py-2.5 rounded-lg font-semibold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
          >
            Contact Us
          </Link>
        </div>
      </header>

      {/* Page Content */}
      <section className="relative w-full overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute top-40 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            I want advice on<span className="text-amber-400">...</span>
          </h1>
          <div className="h-1 w-20 bg-amber-500 rounded-full mb-6" />
          <p className="text-lg text-gray-300 mb-12 max-w-2xl leading-relaxed">
            Select an area where you need expert guidance. Our team combines decades of experience with deep technical
            knowledge to help you succeed.
          </p>

          {/* Advice Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adviceCategories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group bg-[#12151c] rounded-2xl p-8 border border-white/10 hover:border-amber-500/40 hover:bg-[#161a22] transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                      {category.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed">{category.description}</p>
                    {category.subItems && (
                      <ul className="mt-4 space-y-1">
                        {category.subItems.map((item) => (
                          <li key={item} className="text-sm text-gray-500 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">Not sure where to start?</p>
            <a
              href="https://wa.me/31610040337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-amber-500 text-[#0a0c10] px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {"Let's talk on WhatsApp"}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t-4 border-amber-500 bg-[#f2f0eb]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-12 flex flex-col items-center gap-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-04%20at%2023.39.00%20%281%29-M9mf477wjYboN1Broymia2J05xyLv0.jpeg"
            alt="Sidi ReSource Trading & Consultancy — Metals, Sustainability, Recycling, Sourcing"
            width={1960}
            height={280}
            className="h-auto w-full max-w-3xl mix-blend-multiply"
          />
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Sidi ReSource Trading & Consultancy. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
