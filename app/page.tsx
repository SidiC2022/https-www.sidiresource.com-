import Image from "next/image"
import Link from "next/link"

export default function Home() {
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
            <Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors">
              Home
            </Link>
            <Link href="/advice" className="text-gray-300 hover:text-white transition-colors">
              Advice
            </Link>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <Link
            href="/advice"
            className="shrink-0 bg-amber-500 text-[#0a0c10] px-5 py-2.5 rounded-lg font-semibold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
          >
            Get Advice
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute top-40 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Engineering the Future of{" "}
                <span className="text-amber-400">Metals</span>
              </h1>
              <div className="h-1 w-20 bg-amber-500 rounded-full" />

              <div className="space-y-5 text-gray-300 leading-relaxed max-w-2xl">
                <p>
                  Sidi ReSource is a powerhouse in the high-value metals industry, leveraging a rare fusion of chemical engineering expertise and two decades of recycling experience. Our deep technical understanding allows us to unlock the full potential of complex materials like stainless steel and advanced superalloys, far beyond simple processing.
                </p>

                <p>
                  As a specialist in international trade, we connect markets globally, but our true focus is on building long-term partnerships through exceptional service and tangible added value. For us, waste is not an end point; it is a resource to be carefully curated and reintegrated.
                </p>

                <p>
                  We believe that the circular economy is no longer a goal—it is the new global standard. Achieving it, however, requires more than just a vendor; it requires the right ally. Whether you are looking for a reliable gateway into international markets or a technical architect to refine your internal operations, we bridge the gap between raw material and refined value.
                </p>

                <p>
                  From high-level process optimization and advanced sorting strategies to the precision of analytical chemistry, we provide the insights that turn operational challenges into competitive advantages.
                </p>

                <p className="font-medium text-white">
                  Ready to evolve your process? Whether you need a strategic trading partner or a consultant to sharpen your technical edge, let&apos;s start the conversation.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/advice"
                  className="inline-flex items-center gap-2 bg-amber-500 text-[#0a0c10] px-7 py-3.5 rounded-lg font-semibold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                >
                  Get Advice
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full max-w-md lg:max-w-xl relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 via-transparent to-transparent rounded-2xl -z-10" />
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-amber-500/30 rounded-2xl -z-10" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero.jpg-ujHvYDbgWBvS68TrkQXoBLcd08qLxJ.jpeg"
                  alt="Sidi ReSource founder"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-white/10 bg-[#0d1016]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Get in touch</h2>
          <div className="h-1 w-16 bg-amber-500 rounded-full mb-8" />
          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/31610040337"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              +31 (06) 10040337
            </a>
            <a
              href="mailto:charif@sidiresource.com"
              className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              charif@sidiresource.com
            </a>
            <div className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-amber-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              The Netherlands
            </div>
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
