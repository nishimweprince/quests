"use client";

import { A11y, Keyboard, Mousewheel, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { featuredCompanies } from "@/content/portfolio";
import { Arrow } from "@/components/ui/Arrow";

export function PortfolioCarousel() {
  return (
    <Swiper className="portfolio-swiper" modules={[A11y, Keyboard, Mousewheel, Navigation, Scrollbar]} slidesPerView="auto" spaceBetween={28} keyboard={{ enabled: true }} mousewheel={{ forceToAxis: true }} navigation={{ prevEl: ".portfolio-prev", nextEl: ".portfolio-next" }} scrollbar={{ draggable: true }}>
      {featuredCompanies.map((company, index) => (
        <SwiperSlide key={company.id}>
          <article className={`portfolio-slide portfolio-slide--${index % 4}`}>
            <div className="portfolio-mark">{company.name.split(" ").map((part) => part[0]).join("")}</div>
            <div><h3>{company.name}</h3><p>{company.description}</p></div>
          </article>
        </SwiperSlide>
      ))}
      <div className="portfolio-controls"><button aria-label="Previous slide" className="portfolio-prev"><Arrow direction="up" /></button><button aria-label="Next slide" className="portfolio-next"><Arrow /></button></div>
    </Swiper>
  );
}
