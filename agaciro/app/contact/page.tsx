import { ContactForm } from "@/components/features/ContactForm";

export const metadata = { title: "Contact" };
export default function ContactPage() { return <section className="contact-page" id="top"><p className="breadcrumb">Home <span>•</span> Get in Touch</p><div className="contact-grid"><div className="contact-visual"><div className="contact-image" /><h1>Get in Touch</h1><div className="contact-details"><a href="mailto:info@agaciro.rw">info@agaciro.rw</a><a href="https://maps.google.com/?q=BPR+PCD+Towers+Kigali">KN 67, Kigali, Rwanda</a><a href="tel:+250788331820">+250 788 331 820</a></div></div><ContactForm /></div></section>; }
