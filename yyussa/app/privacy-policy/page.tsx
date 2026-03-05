import type { Metadata } from 'next';
import LegalDocumentPage from '@/components/legal/LegalDocumentPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Placeholder privacy policy for the YYUSSA Group website, tailored to the current marketing site, inquiry form, and service content.',
};

const sections = [
  {
    title: 'Information We May Collect',
    paragraphs: [
      'This website is designed to introduce YYUSSA Group Ltd and its core divisions in real estate, import and export, and logistics. As a result, the information we may collect is limited to what is reasonably needed to operate the website and respond to inquiries.',
      'When a visitor uses the contact form, YYUSSA may receive the details entered into the form, including name, email address, phone number, subject selection, and the message itself. We may also receive basic technical information generated through normal website use, such as browser type, device information, language preference, and general usage patterns.',
    ],
    points: [
      'Inquiry details submitted through the contact form',
      'Basic technical usage data generated during normal site access',
      'Communication records related to property, logistics, or partnership requests',
      'Information voluntarily provided in follow-up conversations',
    ],
  },
  {
    title: 'How We Use Inquiry Information',
    paragraphs: [
      'YYUSSA may use submitted information to review and respond to requests related to property availability, transport and logistics support, import and export partnerships, general business introductions, or other website inquiries.',
      'Because the website reflects multiple business lines, submitted information may be reviewed by the most relevant internal contact so that the inquiry can be directed to the real estate, logistics, administration, or leadership team best positioned to respond.',
    ],
    points: [
      'Responding to contact requests and follow-up questions',
      'Directing inquiries to the appropriate service division',
      'Maintaining internal records of business communications',
      'Improving how website inquiries are categorized and handled',
    ],
  },
  {
    title: 'Cookies, Analytics, and Technical Data',
    paragraphs: [
      'This placeholder policy assumes a standard marketing-site setup and uses conservative language. The current website may rely on routine technical processes necessary for page delivery, accessibility, security, and performance, even where no dedicated analytics product is explicitly presented on the site.',
      'If cookies, analytics tags, or similar tools are added later, YYUSSA should update this page to explain what is used, why it is used, and what choices visitors have regarding those tools.',
    ],
    points: [
      'Performance and delivery data may be generated automatically by web infrastructure',
      'No specific third-party analytics platform is identified in the current site content',
      'Future analytics or marketing tools should be disclosed before formal use',
    ],
  },
  {
    title: 'Sharing, Storage, and Retention',
    paragraphs: [
      'YYUSSA does not present this website as a public data marketplace. Information collected through the site is intended for internal business handling and practical communications with prospective tenants, logistics clients, suppliers, and partners.',
      'Information may be stored for as long as reasonably necessary to manage inquiries, maintain business records, support future conversations, or protect the website and the company from misuse. Where vendors or service providers support hosting, email delivery, or technical operations, they may process limited information only to the extent needed to provide those services.',
    ],
    points: [
      'Internal handling for business communication purposes',
      'Limited third-party processing for hosting or operational support where needed',
      'Retention based on inquiry management, recordkeeping, and operational needs',
    ],
  },
  {
    title: 'Security and Regional Operations',
    paragraphs: [
      'YYUSSA operates across Rwanda and the wider East and Central African region. Website communications may therefore relate to cross-border commercial activity, regional transport routes, and multi-country business relationships.',
      'The company may take reasonable technical and organizational steps to protect information submitted through the site, but no internet-based transmission or storage method should be described as completely risk free. This page is intended as placeholder guidance and should be formalized before publication as a final legal commitment.',
    ],
    points: [
      'Reasonable safeguards may be used to protect submitted information',
      'Regional operations may involve communications across multiple jurisdictions',
      'Final legal language should be reviewed before production publication',
    ],
  },
  {
    title: 'Children, Updates, and Contact',
    paragraphs: [
      'The website is intended for business audiences, prospective clients, partners, and institutional stakeholders. It is not directed at children, and visitors should avoid submitting personal information on behalf of minors through the contact form.',
      'YYUSSA may revise this privacy page as the website, its tools, or its service workflows evolve. Questions about this placeholder policy or requests related to submitted information may be directed through the contact information published on the website.',
    ],
    points: [
      'Business-facing website, not intended for children',
      'Policy may be updated as the website or operations change',
      'Contact route for questions: the website contact page and listed business numbers',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      title="Privacy Policy"
      subtitle="How website inquiries and limited visitor information may be handled across YYUSSA's corporate website."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Privacy Policy' },
      ]}
      label="Privacy Policy"
      intro="This document is placeholder policy text written to match the current YYUSSA website. It reflects the site's contact workflow, service divisions, and regional business profile, while remaining intentionally non-final until formal legal review is completed."
      // eslint-disable-next-line react-hooks/purity
      lastUpdated={new Date(Date.now() - 1000 * 60 * 60 * 24 * 21).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      notice="This is dummy but relevant content for the current website. It should be treated as a design-ready placeholder rather than final legal advice or a formal compliance statement."
      sections={sections}
      summaryTitle="What this page covers"
      summaryPoints={[
        'What information may be submitted through the site',
        'How inquiries may be routed between YYUSSA divisions',
        'Conservative placeholder language for technical website data',
        'Storage, security, updates, and contact expectations',
      ]}
    />
  );
}
