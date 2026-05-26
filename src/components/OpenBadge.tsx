"use client";

import { useEffect, useState } from "react";
import { computeStatus } from "@/lib/hours";

type Variant = "default" | "status";

export default function OpenBadge({ variant = "default" }: { variant?: Variant }) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(computeStatus().isOpen);
  }, []);

  if (open === null) return null;

  const label = open ? "Aberto agora" : "Encerrado";
  const dotClass = open ? "dot" : "dot closed";

  if (variant === "status") {
    return (
      <span className="status-badge">
        <span className={dotClass} />
        {label}
      </span>
    );
  }
  return (
    <div className="badge">
      <span className={dotClass} />
      {label}
    </div>
  );
}
