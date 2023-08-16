"use client";

import clsx from "clsx";
import React, { useMemo, useState } from "react";

import { classes } from "./styles";
import type { InputProps } from "./types";

export const Input = ({
  name,
  placeholder = "",
  type = "text",
  label,
  onChange,
  value,
  validationError,
  isDirty = false,
  readOnly = false,
  transparent = false,
  startIcon,
}: InputProps) => {
  const [touched, setTouched] = useState(isDirty);

  const borderClass = useMemo(
    () =>
      touched && validationError ? classes.errorBorder : "border-primary-300",
    [touched, validationError]
  );

  const randomPrefix = useMemo(
    () => Math.random().toString(36).substring(7),
    []
  );

  const id = randomPrefix + name;

  const raiseOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTouched(true);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div>
      {label && (
        <label htmlFor={id} className={classes.label}>
          {label}
        </label>
      )}
      <div className="relative">
        {startIcon && <div className="absolute left-4 h-full">{startIcon}</div>}
        <input
          id={id}
          name={name}
          type={type}
          onChange={raiseOnChange}
          readOnly={readOnly}
          className={clsx(
            classes.default,
            borderClass,
            transparent && classes.background.transparent,
            !transparent && classes.background.white,
            startIcon && "pl-11"
          )}
          placeholder={placeholder}
          value={value}
        />
      </div>
      {validationError && (
        <span className="mt-2 text-xs text-red-700">{validationError}</span>
      )}
    </div>
  );
};
