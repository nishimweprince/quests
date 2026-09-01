export const disclaimer = {
  title: "Disclaimer",
  standfirst:
    "The information on this website is published for general information about Agaciro Development Fund.",
  body: [
    "The information contained on this website is provided for informational purposes only and does not constitute investment, financial, legal, or other professional advice. No investment decision should be made solely on the basis of the information presented herein.",
    "Any person seeking further information should contact AgDF directly and obtain independent professional advice before making any investment decision.",
  ],
};

export const whistleblowing = {
  title: "Confidential Whistleblower Disclosure",
  standfirst:
    "A secure channel for reporting genuine concerns about misconduct, fraud, or violations of our code of conduct.",
  policy:
    "AgDF is committed to the highest standards of integrity, transparency, and accountability. This form provides a secure channel for reporting genuine concerns about misconduct, fraud, or violations of our code of conduct.",
  protection:
    "AgDF protects good-faith whistleblowers from retaliation. Knowingly false or malicious reports may lead to disciplinary action.",
  concernTypes: [
    "Fraud / Financial Misconduct",
    "Corruption / Bribery",
    "Theft / Embezzlement",
    "Misuse of Assets",
    "Conflict of Interest",
    "Ethical Violation",
    "Gross Mismanagement",
    "Safety Violation",
    "Other",
  ],
  allegationPrompts: [
    {
      label: "What happened?",
      hint: "Describe the specific act, event, or decision.",
    },
    { label: "When did it happen?", hint: "Date, time, frequency." },
    {
      label: "Where did it happen?",
      hint: "Location, department, project name.",
    },
    { label: "How was it carried out?", hint: "Method used." },
  ],
  evidenceNote:
    "List any documents, emails, reports, or other evidence that support your concern. Do not submit originals at this stage — you may be contacted to provide them later.",
  declaration:
    "I confirm that the information provided is true and accurate to the best of my knowledge and belief, and that this report is made in good faith.",
};
