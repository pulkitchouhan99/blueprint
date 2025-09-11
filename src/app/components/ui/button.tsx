import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "disabled" | "outline" | "link";

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case "disabled":
      return "bg-[#E6ECF3] text-[#8AA9C9] border border-[#E6ECF3] cursor-not-allowed";
    case "outline":
      return "border border-[#DEDEDE] bg-white text-grey-900 shadow-sm hover:bg-grey-75";
    case "link":
      return "text-blue-navy underline-offset-4 hover:underline border-none shadow-none bg-transparent";
    case "primary":
    default:
      return "bg-blue-navy text-white shadow hover:bg-blue-navy/90 border border-blue-navy";
  }
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  showIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", showIcon = false, children, ...props }, ref) => {
    const iconColor = variant === "disabled" ? "#8AA9C9" : "currentColor";

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-navy disabled:pointer-events-none disabled:opacity-50 px-4 py-2 cursor-pointer",
          getVariantStyles(variant),
          className,
        )}
        ref={ref}
        {...props}>
        {children}
        {showIcon && (
          <svg className="h-4 w-4" fill="none" stroke={iconColor} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button };
