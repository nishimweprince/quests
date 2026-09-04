"use client";

import { RemoteImage as Image } from "@/components/ui/RemoteImage";
import {
  A11y,
  Keyboard,
  Mousewheel,
  Navigation,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Arrow } from "@/components/ui/Arrow";
import { companyImage, companyLogo } from "@/content/media";
import { featuredCompanies, sectors } from "@/content/portfolio";

function mark(name: string) {
  return name
    .replace(/\(.*\)/, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export function PortfolioCarousel() {
  return (
    <div className="rail">
      <Swiper
        className="rail-swiper"
        followFinger
        keyboard={{ enabled: true, onlyInViewport: true }}
        modules={[A11y, Keyboard, Mousewheel, Navigation, Scrollbar]}
        mousewheel={{ forceToAxis: true }}
        navigation={{
          prevEl: ".rail-arrow--prev",
          nextEl: ".rail-arrow--next",
          disabledClass: "is-disabled",
        }}
        scrollbar={{ draggable: true, el: ".rail-scrollbar" }}
        slidesPerView="auto"
        spaceBetween={28}
      >
        {featuredCompanies.map((company) => {
          const sector = sectors.find((item) => item.slug === company.sectors[0]);
          return (
            <SwiperSlide key={company.slug}>
              <article className="rail-card">
                <div className="rail-card-body">
                  <div className="rail-card-mark">{mark(company.name)}</div>
                  <div>
                    <h3 className="rail-card-name">{company.name}</h3>
                    <p>{company.description}</p>
                    <p className="rail-card-sector">{sector?.name}</p>
                  </div>
                </div>
                <div
                  className={`rail-card-media${companyLogo(company.slug) ? " rail-card-media--logo" : ""}`}
                >
                  {companyLogo(company.slug) ? (
                    <Image
                      alt={`${company.name} logo`}
                      fallbackText={mark(company.name)}
                      fill
                      sizes="(max-width: 767px) 82vw, 24rem"
                      src={companyLogo(company.slug) as string}
                    />
                  ) : (
                    <Image
                      alt={`${sector?.name ?? "Investment"} sector illustration`}
                      fallbackText={mark(company.name)}
                      creditPrefix="Sector illustration"
                      fill
                      sizes="(max-width: 767px) 82vw, 24rem"
                      src={companyImage(company.slug)}
                    />
                  )}
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="rail-controls">
        <div className="rail-scrollbar" />
        <div className="rail-arrows">
          <button
            aria-label="Previous portfolio company"
            className="rail-arrow rail-arrow--prev"
          >
            <Arrow direction="left" />
          </button>
          <button
            aria-label="Next portfolio company"
            className="rail-arrow rail-arrow--next"
          >
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
}
