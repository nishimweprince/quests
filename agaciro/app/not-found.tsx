import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
export default function NotFound() { return <section className="not-found"><div><p>Page not found</p><div className="zero-ring"><span>0</span></div><h1>4<span>0</span>4</h1><p>The page you are looking for has moved or no longer exists.</p><Link className="button button--white" href="/">Back Home <Arrow /></Link></div></section>; }
