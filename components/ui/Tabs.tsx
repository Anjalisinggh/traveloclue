"use client";

import { ReactNode, useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

export default function Tabs({ tabs }: TabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);

  const activeTab = tabs.find((tab) => tab.id === activeId);

  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveId(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div>{activeTab?.content}</div>
    </div>
  );
}
