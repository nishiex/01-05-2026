"use client"

import { useEffect, useRef } from "react"

const logos = [
  { name: "Sparkle",      src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-logo-sparkle.webp" },
  { name: "Telin",        src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-logo-telin.webp" },
  { name: "Airtel",       src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-logo-airtel.webp" },
  { name: "HKBN",         src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-logo-hkbn.webp" },
  { name: "China Mobile", src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-logo-china-mobile.webp" },
  { name: "Twilio",       src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-logo-twilio.webp" },
  { name: "T-Mobile",     src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-log-t-mobile.webp" },
  { name: "Infobip",      src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-logo-infobip.webp" },
]

// Duplicate for seamless loop
const track = [...logos, ...logos]

export function LogoStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const trackElement = trackRef.current
    if (!container || !trackElement) return

    // Calculate animation duration based on track width for seamless scrolling
    const trackWidth = trackElement.offsetWidth
    const containerWidth = container.offsetWidth
    // Base speed: pixels per second (adjust for desired speed)
    const pixelsPerSecond = 50
    const duration = trackWidth / pixelsPerSecond

    // Apply dynamic duration to style
    trackElement.style.setProperty("--scroll-duration", `${duration}s`)
  }, [])

  return (
    <section
      id="s-logos"
      data-sec="logos"
      aria-label="Partner logos"
      className="bg-[#ffffff] py-6 overflow-hidden"
      ref={containerRef}
    >
      <div
        ref={trackRef}
        className="flex gap-12 items-center w-max animate-logo-scroll"
        aria-hidden="true"
      >
        {track.map((logo, i) => (
          <div key={i} className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.name}
              style={{
                width: "110px",
                height: "auto",
                objectFit: "contain",
                filter: "grayscale(100%) contrast(1) brightness(0.3)",
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style>{`
        :root {
          --scroll-duration: 40s;
        }
        @keyframes logo-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-scroll {
          animation: logo-scroll var(--scroll-duration) linear infinite;
        }
        .animate-logo-scroll:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-logo-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
