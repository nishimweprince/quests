import { LegalDoc } from "@/components/sections/LegalDoc";
export const metadata = { title: "Privacy Policy" };
const sections: Array<[string, string]> = [
  [
    "Information we collect",
    "This demonstration site does not transmit contact-form data or enable analytics. Essential local storage may remember cookie preferences.",
  ],
  [
    "How information is used",
    "If a production contact service is added, information will be used only to respond to enquiries and operate the Fund's public website.",
  ],
  [
    "Data sharing",
    "Agaciro does not sell personal information. Information may be handled by authorised service providers subject to appropriate safeguards.",
  ],
  [
    "Retention and security",
    "Information is retained only for legitimate operational and legal needs, with proportionate organisational and technical safeguards.",
  ],
  [
    "Your rights",
    "You may request access, correction, or deletion of personal information by contacting info@agaciro.rw.",
  ],
  [
    "Contact",
    "Questions about this policy may be directed to Agaciro Development Fund, BPR PCD Towers, Kigali, Rwanda.",
  ],
];
export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      intro="How Agaciro Development Fund approaches information on this public website."
      sections={sections}
    />
  );
}
