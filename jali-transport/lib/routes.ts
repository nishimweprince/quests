export type RouteSchedule = {
  daysKw: string;
  daysEn: string;
};

export type Route = {
  id: string;
  corridorKw: string;
  corridorEn: string;
  schedules: RouteSchedule[];
};

export const routes: Route[] = [
  {
    id: "305",
    corridorKw: "Kimironko – Kacyiru – Nyabugogo",
    corridorEn: "Kimironko – Kacyiru – Nyabugogo",
    schedules: [
      { daysKw: "Kuwa mbere – Kuwa gatanu", daysEn: "Monday – Friday" },
      { daysKw: "Kuwa gatandatu", daysEn: "Saturday" },
      { daysKw: "Ku cyumweru", daysEn: "Sunday" },
    ],
  },
  {
    id: "401",
    corridorKw: "Nyamirambo – Downtown",
    corridorEn: "Nyamirambo – Downtown",
    schedules: [
      { daysKw: "Kuwa mbere – Kuwa gatanu", daysEn: "Monday – Friday" },
      { daysKw: "Kuwa gatandatu", daysEn: "Saturday" },
      { daysKw: "Ku cyumweru", daysEn: "Sunday" },
    ],
  },
];

export const parks = [
  { name: "Muhanga", slug: "muhanga" },
  { name: "Rubavu", slug: "rubavu" },
  { name: "Gicumbi", slug: "gicumbi" },
  { name: "Musanze", slug: "musanze" },
];

export function getRoute(id: string): Route | undefined {
  return routes.find((r) => r.id === id);
}
