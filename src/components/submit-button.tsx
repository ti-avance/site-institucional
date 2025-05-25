import React from "react";

type SubmitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  pendingText?: string;
  formAction?: (formData: FormData) => void | Promise<void>;
};

export function SubmitButton({
  children,
  pendingText,
  ...props
}: SubmitButtonProps) {
  // Placeholder: não implementa loading real
  return (
    <button type="submit" {...props}>
      {children}
    </button>
  );
}
