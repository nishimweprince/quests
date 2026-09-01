"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { SelectHTMLAttributes } from "react";

type Option = { label: string; value: string };

export function Select({ label, options, className = "", ...props }: SelectHTMLAttributes<HTMLSelectElement> & { label: string; options: Option[] }) {
  return (
    <label className={`select-control ${className}`.trim()}>
      <span>{label}</span>
      <span className="select-control-field">
        <select {...props}>{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select>
        <FontAwesomeIcon aria-hidden="true" icon={faChevronDown} />
      </span>
    </label>
  );
}
