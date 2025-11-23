"use client";
import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-3">
      <Button onClick={() => setOpen(true)}>Buka Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Contoh Modal">
        <p className="text-sm">Ini adalah contoh modal sederhana.</p>
      </Modal>
    </div>
  );
}

