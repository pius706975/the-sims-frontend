import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipIconButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const ButtonWithTooltip = ({
  label,
  onClick,
  className,
  children,
}: TooltipIconButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button onClick={onClick} className={`cursor-pointer ${className}`}>
          {children}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-sm">{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ButtonWithTooltip;
