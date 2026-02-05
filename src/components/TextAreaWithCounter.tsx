import * as React from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface TextareaWithCounterProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLength: number;
}

export const TextareaWithCounter = React.forwardRef<
  HTMLTextAreaElement,
  TextareaWithCounterProps
>(({ maxLength, className, onChange, ...props }, ref) => {
  const [value, setValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div className="space-y-1">
      <Textarea
        ref={ref}
        maxLength={maxLength}
        className={className}
        value={value}
        onChange={handleChange}
        {...props}
      />

      <div
        className={cn(
          "text-xs text-right text-muted-foreground",
          value.length >= maxLength && "text-red-500",
        )}
      >
        {value.length}/{maxLength}
      </div>
    </div>
  );
});

TextareaWithCounter.displayName = "TextareaWithCounter";
