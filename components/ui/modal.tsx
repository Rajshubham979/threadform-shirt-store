"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { PropsWithChildren, ReactNode } from "react";
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";

type ModalProps = PropsWithChildren<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  trigger?: ReactNode;
}>;

export function Modal({ open, onOpenChange, title, children, trigger }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger ? <Dialog.Trigger asChild>{trigger}</Dialog.Trigger> : null}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[calc(100vw-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2">
          <Card className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <Dialog.Title className="font-heading text-3xl">{title}</Dialog.Title>
              <Dialog.Close className="rounded-full border p-2">
                <X className="h-4 w-4" />
              </Dialog.Close>
            </div>
            {children}
          </Card>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
