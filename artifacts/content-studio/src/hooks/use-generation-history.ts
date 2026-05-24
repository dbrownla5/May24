import { useState, useCallback } from "react";

export type HistoryItem = {
  id: string;
  timestamp: number;
  platform: string;
  postType: string;
  tone: string;
  context?: string;
  caption: string;
  hashtags: string;
  alternates: string[];
};

const STORAGE_KEY = "wlc_generation_history";
const MAX_ITEMS = 100;

function loadHistory(): HistoryItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as HistoryItem[];
  } catch {
    return [];
  }
}

function saveHistory(items: HistoryItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // storage full or unavailable — silently skip
  }
}

export function useGenerationHistory() {
  const [history, setHistory] = useState<HistoryItem[]>(() => loadHistory());

  const addItem = useCallback((item: Omit<HistoryItem, "id" | "timestamp">) => {
    const newItem: HistoryItem = {
      ...item,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      timestamp: Date.now(),
    };
    setHistory(prev => {
      const updated = [newItem, ...prev].slice(0, MAX_ITEMS);
      saveHistory(updated);
      return updated;
    });
    return newItem;
  }, []);

  const removeItem = useCallback((id: string) => {
    setHistory(prev => {
      const updated = prev.filter(item => item.id !== id);
      saveHistory(updated);
      return updated;
    });
  }, []);

  const clearHistory = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setHistory([]);
  }, []);

  return { history, addItem, removeItem, clearHistory };
}
