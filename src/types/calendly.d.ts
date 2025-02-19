// src/types/calendly.d.ts
declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: { url: string; text: string; color: string; textColor: string }) => void;
    };
  }
}

export {};
