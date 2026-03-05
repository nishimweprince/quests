import type { Metadata } from 'next';
import LegalDocumentPage from '@/components/legal/LegalDocumentPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Placeholder terms and conditions for the YYUSSA Group website, aligned with the site’s informational content and inquiry workflows.',
};

const sections = [
  {
    title: 'Website Purpose and Acceptance',
    paragraphs: [
      'These placeholder terms describe how visitors may use the YYUSSA Group website in its current form. The site is intended to present corporate information, service overviews, leadership details, contact channels, and editorial content related to the business.',
      'By continuing to browse or use the website, a visitor is treated as accepting the general expectations set out on this page. Because this is design-ready placeholder content, final legal wording should be completed before production reliance.',
    ],
    points: [
      'The website is primarily informational and introductory in nature',
      'Use of the site implies acceptance of these placeholder terms',
      'Formal legal review is still required before final publication',
    ],
  },
  {
    title: 'Service Information and Business Disclaimers',
    paragraphs: [
      'Information presented on this website about properties, logistics capabilities, import and export operations, routes, partners, and company milestones is provided for general informational purposes. It does not automatically create a contract, guarantee availability, or confirm binding commercial terms.',
      'Any property lease, supply agreement, transport request, partnership arrangement, or other commercial engagement with YYUSSA should be governed by separate written agreements, formal quotations, or approved correspondence issued by the company.',
    ],
    points: [
      'Property and service descriptions are informational, not binding offers',
      'Operational capacity may change over time without website notice',
      'Commercial engagements require separate formal documentation',
    ],
  },
  {
    title: 'Acceptable Use of the Website',
    paragraphs: [
      'Visitors may use the website for lawful research, business inquiries, and legitimate communication with YYUSSA. The site should not be used to submit misleading requests, upload harmful material, interfere with the website’s operation, or attempt unauthorized access to any system or data.',
      'YYUSSA may restrict or disregard submissions that appear abusive, fraudulent, irrelevant, or disruptive to normal business communications.',
    ],
    points: [
      'Use the contact form and published channels for legitimate inquiries only',
      'Do not attempt to disrupt, scrape, exploit, or misuse the website',
      'YYUSSA may ignore or block abusive or misleading submissions',
    ],
  },
  {
    title: 'Content Ownership and Third-Party References',
    paragraphs: [
      'Unless otherwise stated, the website design, layout, copy, branding, and published materials belong to YYUSSA Group Ltd or are used with permission. Visitors should not reproduce or republish substantial parts of the site in a way that suggests endorsement, ownership transfer, or official affiliation without consent.',
      'The website may refer to tenants, partners, industries, or regions as part of its corporate presentation. Those references should not be read as granting rights in third-party trademarks, logos, or confidential commercial relationships beyond what is plainly stated on the site.',
    ],
    points: [
      'YYUSSA retains rights in its branding, copy, and site presentation',
      'Third-party names remain the property of their respective owners',
      'References on the site do not create endorsement rights by default',
    ],
  },
  {
    title: 'Availability, Links, and Liability Limits',
    paragraphs: [
      'YYUSSA may update, suspend, or revise parts of the website at any time. Certain pages may move, become unavailable, or remain unpublished while content is being refined, expanded, or reviewed.',
      'To the fullest extent appropriate for placeholder terms, YYUSSA does not promise uninterrupted availability, absolute accuracy, or error-free operation of the website. Visitors remain responsible for verifying important business details directly with the company before relying on site content for a significant decision.',
    ],
    points: [
      'Pages and content may change without prior notice',
      'Broken links or temporary unavailability do not create liability by themselves',
      'Users should verify critical information directly with YYUSSA',
    ],
  },
  {
    title: 'Changes, Governing Framework, and Contact',
    paragraphs: [
      'YYUSSA may revise these terms as the website and its operations evolve. Updated versions may be posted on this page with a revised date when the legal content is formally maintained.',
      'This placeholder version assumes that any final governing-law language would be selected by YYUSSA during legal review, likely with reference to Rwanda and applicable commercial arrangements. Questions about the website or these placeholder terms may be directed through the contact page.',
    ],
    points: [
      'Terms may be revised as the website develops',
      'Governing-law language remains a placeholder until legal review',
      'Contact the company directly for commercial clarification',
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalDocumentPage
      title="Terms & Conditions"
      subtitle="Ground rules for using the YYUSSA corporate website and interpreting its service and company information."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Terms & Conditions' },
      ]}
      label="Terms & Conditions"
      intro="This page provides placeholder terms tailored to the current website experience. It is written in plain English to match the brand and should be treated as a relevant draft, not a substitute for finalized legal language."
      // eslint-disable-next-line react-hooks/purity
      lastUpdated={new Date(Date.now() - 1000 * 60 * 60 * 24 * 21).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      notice="The content below is intentionally non-final. It is written to support the live design and current information architecture while clearly separating website messaging from binding commercial agreements."
      sections={sections}
      summaryTitle="Key expectations"
      summaryPoints={[
        'The site is informational and does not itself create contracts',
        'Service pages describe capabilities, not guaranteed availability',
        'Visitors must use the website and contact channels responsibly',
        'Important decisions should be confirmed directly with YYUSSA',
      ]}
    />
  );
}
