import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "../../components/Button";
import { getRoute, routes } from "@/lib/routes";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return routes.map((route) => ({ id: route.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const route = getRoute(id);
  if (!route) return { title: "Route" };
  return { title: `Route ${route.id}` };
}

export default async function RouteDetailPage({ params }: Props) {
  const { id } = await params;
  const route = getRoute(id);
  if (!route) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p style={{ fontSize: "0.88rem", opacity: 0.8, marginBottom: "0.5rem" }}>
            Line
          </p>
          <div className="route-badge" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            {route.id}
          </div>
          <h1>{route.corridorEn}</h1>
          <p className="page-hero-sub">{route.corridorKw}</p>
        </div>
      </section>

      <div className="container page-content">
        <h2 style={{ marginBottom: "1rem" }}>Schedule</h2>
        <table className="routes-table">
          <thead>
            <tr>
              <th scope="col">Days</th>
            </tr>
          </thead>
          <tbody>
            {route.schedules.map((schedule) => (
              <tr key={schedule.daysEn}>
                <td>
                  <strong>{schedule.daysEn}</strong>
                  <br />
                  <span style={{ fontSize: "0.88rem", color: "var(--grey)" }}>
                    {schedule.daysKw}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p style={{ marginTop: "2rem" }}>
          <Button href="/imihanda">All Routes</Button>
        </p>
      </div>
    </>
  );
}
