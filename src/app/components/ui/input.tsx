import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix" | "suffix"> {
  label?: string;
  required?: boolean;
  inputPrefix?: React.ReactNode;
  inputSuffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, required = false, inputPrefix, inputSuffix, id, ...props }, ref) => {
    return (
      <div className="space-y-3">
        {label && (
          <label htmlFor={id} className="block text-[14px] leading-[20px] font-medium text-grey-950">
            {label}
            {required && <span className="text-red-primary ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          {inputPrefix && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
              {inputPrefix}
            </div>
          )}
          <input
            id={id}
            type={type}
            className={cn(
              "flex w-full h-[40px] rounded-[6px] border border-[#EBEBEB] bg-[#FFFFFF] text-[14px] leading-[20px] font-normal ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#949494] placeholder:text-[14px] placeholder:leading-[20px] placeholder:font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-[#F5F5F5] disabled:text-[#949494] disabled:placeholder:text-[#757575] disabled:placeholder:text-[14px] disabled:placeholder:leading-[20px] disabled:placeholder:font-normal",
              inputPrefix ? "pl-10" : "pl-2",
              inputSuffix ? "pr-8" : "pr-2",
              className,
            )}
            ref={ref}
            {...props}
          />
          {inputSuffix && (
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none z-10">
              {inputSuffix}
            </div>
          )}
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
