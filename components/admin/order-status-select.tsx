"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const statuses = ["PENDING", "PAID", "SHIPPED", "DELIVERED", "CANCELLED"] as const;

type OrderStatusSelectProps = {
  orderId: string;
  initialStatus: (typeof statuses)[number];
};

export function OrderStatusSelect({ orderId, initialStatus }: OrderStatusSelectProps) {
  const [status, setStatus] = useState(initialStatus);
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 350));
    setSaving(false);

    toast.success(`Preview status for ${orderId} changed to ${status}`);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <select
        value={status}
        onChange={(event) => setStatus(event.target.value as typeof statuses[number])}
        className="h-12 rounded-[var(--radius-base)] border bg-[var(--color-surface)] px-4"
      >
        {statuses.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Button size="sm" onClick={handleSave} disabled={saving}>
        {saving ? "Saving..." : "Update"}
      </Button>
    </div>
  );
}
