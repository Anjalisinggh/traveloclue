"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Menu</button>
      {open && (
        <div>
          <ul>
            <li>Home</li>
            <li>Destinations</li>
            <li>Packages</li>
          </ul>
        </div>
      )}
    </div>
  );
}
