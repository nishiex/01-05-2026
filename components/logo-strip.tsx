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

// Duplicate for seamless loop - quadruple for maximum stability on all screen sizes
const track = [...logos, ...logos, ...logos, ...logos]

export function LogoStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const trackElement = trackRef.current
    if (!container || !trackElement) return

    // Wait for images to load, then calculate
    const img = trackElement.querySelectorAll('img')
    let loadedCount = 0
    const onImageLoad = () => {
      loadedCount++
      if (loadedCount === img.length) {
        calculateAnimation()
      }
    }

    // Fallback timeout if images don't load
    const timeout = setTimeout(calculateAnimation, 500)

    img.forEach(image => {
      if (image.complete) {
        loadedCount++
      } else {
        image.addEventListener('load', onImageLoad)
        image.addEventListener('error', onImageLoad)
      }
    })

    if (loadedCount === img.length) {
      calculateAnimation()
    }

    function calculateAnimation() {
      clearTimeout(timeout)
      // Calculate animation based on first set of logos only
      const firstLogoWidth = 110 // width in px
      const gap = 48 // gap-12 = 3rem = 48px
      const singleSetWidth = (firstLogoWidth + gap) * logos.length - gap
      
      // Duration: animate the distance of ONE full set of logos
      // Speed: ~80px per second for smooth scrolling
      const pixelsPerSecond = 80
      const duration = singleSetWidth / pixelsPerSecond

      console.log("[v0] Logo animation - Single set width:", singleSetWidth, "px, Duration:", duration.toFixed(2), "s")

      // Set CSS variable for the animation distance
      trackElement.style.setProperty("--scroll-distance", `-${singleSetWidth}px`)
      trackElement.style.setProperty("--scroll-duration", `${duration}s`)
    }
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
          --scroll-duration: 8s;
          --scroll-distance: -968px;
        }
        @keyframes logo-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(var(--scroll-distance)); }
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
