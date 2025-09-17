"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "../../../lib/helpers";

function TooltipProvider({ children, ...props }) {
  return (
    <TooltipPrimitive.Provider delayDuration={100} {...props}>
      {children}
    </TooltipPrimitive.Provider>
  );
}

function Tooltip({ ...props }) {
  return <TooltipPrimitive.Root {...props} />;
}

function TooltipTrigger({ asChild = false, ...props }) {
  return (
    <TooltipPrimitive.Trigger asChild={asChild} {...props} />
  );
}

function TooltipContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
}

export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
};
