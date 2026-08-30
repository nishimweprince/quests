import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "../components/Button";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Routes",
};

export default function RoutesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Routes</h1>
          <p className="page-hero-sub">
            All JALI Transport bus routes in Kigali City.
          </p>
        </div>
      </section>

      <div className="container page-content">
        <table className="routes-table">
          <thead>
            <tr>
              <th scope="col">Line</th>
              <th scope="col">Corridor</th>
              <th scope="col">Days</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {routes.map((route) => (
              <tr key={route.id}>
                <td>
                  <span className="route-badge">{route.id}</span>
                </td>
                <td>
                  <strong>{route.corridorEn}</strong>
                  <br />
                  <span style={{ fontSize: "0.88rem", color: "var(--grey)" }}>
                    {route.corridorKw}
                  </span>
                </td>
                <td style={{ fontSize: "0.88rem", color: "var(--grey)" }}>
                  {route.schedules.map((s) => s.daysEn).join(" · ")}
                </td>
                <td>
                  <Link href={`/imihanda/${route.id}`} className="btn-line">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p style={{ marginTop: "2rem" }}>
          <Button href="/">Back to Home</Button>
        </p>
      </div>
    </>
  );
}
