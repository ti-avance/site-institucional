import React from "react";

export type Message = {
  type: "success" | "error" | "info";
  message: string;
};

export function FormMessage({ message }: { message?: Message }) {
  if (!message) return null;
  return (
    <div className={`form-message form-message--${message.type}`}>
      {message.message}
    </div>
  );
}
