"use client";

import { useMemo, useState } from "react";

import { portfolioCompanies, type PortfolioType } from "@/content/portfolio";
import { Arrow } from "@/components/ui/Arrow";
import { Select } from "@/components/ui/Select";

const PAGE_SIZE = 9;
const allTypes: PortfolioType[] = ["Direct Equity", "Direct Credit", "Fund Partnership", "Strategic Holding"];

export function PortfolioExplorer() {
  const [types, setTypes] = useState<PortfolioType[]>([]);
  const [sector, setSector] = useState("All sectors");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const filtered = useMemo(() => portfolioCompanies.filter((item) => (!types.length || types.includes(item.type)) && (sector === "All sectors" || item.sector === sector) && (status === "All" || item.status === status)), [types, sector, status]);
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const toggleType = (type: PortfolioType) => { setPage(1); setTypes((current) => current.includes(type) ? current.filter((item) => item !== type) : [...current, type]); };

  return (
    <section className="portfolio-explorer" id="content">
      <div className="portfolio-heading"><h2>Explore Our Investments</h2><p>Browse a representative, fictional v1 portfolio built to demonstrate Agaciro&apos;s investment breadth.</p></div>
      <aside className="filter-panel">
        <div><span className="filter-label">Deal Type</span>{allTypes.map((type) => <label key={type}><input checked={types.includes(type)} onChange={() => toggleType(type)} type="checkbox" /><i />{type}</label>)}</div>
        <Select label="Sector" options={[{ label: "All sectors", value: "All sectors" }, ...[...new Set(portfolioCompanies.map((item) => item.sector))].map((item) => ({ label: item, value: item }))]} value={sector} onChange={(event) => { setPage(1); setSector(event.target.value); }} />
        <Select label="Status" options={[{ label: "All", value: "All" }, { label: "Current", value: "Current" }, { label: "Exited", value: "Exited" }]} value={status} onChange={(event) => { setPage(1); setStatus(event.target.value); }} />
        <button className="clear-filter" onClick={() => { setTypes([]); setSector("All sectors"); setStatus("All"); setPage(1); }}>Clear filters</button>
      </aside>
      <div className="portfolio-grid">
        {visible.map((company) => <article className="portfolio-card" key={company.id}><div className={`portfolio-card-visual visual-${(company.id % 6) + 1}`}><span>{company.name.split(" ").map((part) => part[0]).join("")}</span></div><div className="portfolio-card-body"><h3>{company.name}</h3><p>{company.description}</p><dl><div><dt>Sector</dt><dd>{company.sector}</dd></div><div><dt>Location</dt><dd>{company.location}</dd></div><div><dt>Led by</dt><dd>{company.ledBy}</dd></div><div><dt>Type</dt><dd>{company.type}</dd></div><div><dt>Date</dt><dd>{company.year}</dd></div><div><dt>Status</dt><dd>{company.status}</dd></div></dl><a href="#">Website <Arrow /></a></div></article>)}
      </div>
      {!visible.length ? <p className="empty-state">No investments match those filters.</p> : null}
      <div className="pagination">{Array.from({ length: pages }, (_, index) => index + 1).map((number) => <button className={number === page ? "active" : ""} key={number} onClick={() => setPage(number)}>{number}</button>)}</div>
    </section>
  );
}
