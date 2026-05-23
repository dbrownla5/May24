const YELP_URL = "https://www.yelp.com/biz/the-well-lived-citizen-san-fernando-valley";

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#FF1A1A" : "none"} stroke="#FF1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function YelpLogo() {
  return (
    <svg width="36" height="16" viewBox="0 0 300 135" aria-label="Yelp">
      <path d="M146.6 45.3c-3.5-3.9-8.5-5.7-15-5.7h-8.9v51.7h8.9c6.5 0 11.5-1.9 15-5.8 3.5-3.9 5.3-9.8 5.3-17.6V62.9c0-7.7-1.8-13.7-5.3-17.6zm-5.9 34c-1.9 2.5-4.7 3.7-8.4 3.7h-2.5V46.8h2.5c3.7 0 6.5 1.2 8.4 3.7 1.9 2.5 2.8 6.2 2.8 11.2v6.3c0 5.2-.9 8.9-2.8 11.3z" fill="#FF1A1A"/>
      <path d="M175.1 57.8h-14.8v8.9h14.8v7.1h-14.8V83h14.8v7.3h-23V50.5h23v7.3zM200.6 90.3h-21.4V50.5h8.2V83h13.2v7.3zM230.7 57.8h-14.8v8.9h14.8v7.1h-14.8V83h14.8v7.3h-23V50.5h23v7.3z" fill="#FF1A1A"/>
      <path d="M107.9 46.4c0-10.2-6.2-17.1-17-17.1H72.7v61.4h12.5V70.6h4.4l10.6 20.1h14.1l-12.1-22.2c3.8-1.8 6-5.5 6-9.9v-12.2zm-12.5 12.5c0 3.5-2 5.3-5.5 5.3H85.2V40.9h4.7c3.5 0 5.5 1.8 5.5 5.3v12.7z" fill="#FF1A1A"/>
      <path d="M52.1 29.3c-12.9 0-23.3 10.5-23.3 23.3 0 12.9 10.5 23.3 23.3 23.3 12.9 0 23.3-10.5 23.3-23.3C75.4 39.8 64.9 29.3 52.1 29.3zm0 37.4c-7.8 0-14.1-6.3-14.1-14.1S44.3 38.5 52.1 38.5s14.1 6.3 14.1 14.1-6.3 14.1-14.1 14.1z" fill="#FF1A1A"/>
    </svg>
  );
}

interface YelpBadgeProps {
  variant?: "light" | "dark";
}

export default function YelpBadge({ variant = "dark" }: YelpBadgeProps) {
  const isDark = variant === "dark";

  return (
    <a
      href={YELP_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.6rem 1rem",
        border: `1px solid ${isDark ? "rgba(248,244,227,0.15)" : "rgba(56,48,46,0.15)"}`,
        backgroundColor: isDark ? "rgba(248,244,227,0.05)" : "rgba(56,48,46,0.04)",
        textDecoration: "none",
        transition: "border-color 0.18s ease, background-color 0.18s ease",
        cursor: "pointer",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "#FF1A1A";
        (e.currentTarget as HTMLElement).style.backgroundColor = isDark ? "rgba(255,26,26,0.06)" : "rgba(255,26,26,0.04)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = isDark ? "rgba(248,244,227,0.15)" : "rgba(56,48,46,0.15)";
        (e.currentTarget as HTMLElement).style.backgroundColor = isDark ? "rgba(248,244,227,0.05)" : "rgba(56,48,46,0.04)";
      }}
      aria-label="Read our reviews on Yelp"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF1A1A" aria-hidden="true">
        <path d="M21.3 11.9L16.4 10c-.4-.1-.8 0-1 .3-.3.3-.3.7-.1 1l1.2 2.1c.2.4.2.8-.1 1.1-.3.3-.7.4-1.1.2l-.5-.2c-.4-.2-.8-.1-1.1.2-.3.3-.3.8 0 1.1l3.4 3.7c.3.3.3.8 0 1.1-.3.3-.8.3-1.1 0L12.8 17c-.4-.4-1-.4-1.4 0-.2.2-.3.5-.3.7 0 .3.1.5.3.7l1.4 1.5c.3.3.3.8 0 1.1-.3.3-.8.3-1.1 0l-5.6-5.7c-.3-.3-.3-.8.1-1.1.3-.2.7-.2 1 .1l1 1c.3.3.7.3 1 0 .3-.3.3-.7.1-1L5.7 8.2C5.5 7.8 5.1 6.9 5 6.3c-.1-.6.1-1.3.6-1.7.5-.4 1.2-.5 1.8-.2l3.4 1.4c.4.2.9 0 1.1-.4.2-.4 0-.9-.4-1.1L8 3c-.5-.2-.7-.8-.5-1.3.2-.5.8-.7 1.3-.5l5.7 2.4c.4.2.6.6.5 1l-.5 2.5c-.1.4.2.9.6 1 .4.1.9-.1 1-.6l.7-3.4c.1-.5.6-.9 1.1-.8.5.1.9.6.8 1.1l-.4 2.2c-.1.4.2.9.6 1 .4.1.9-.2 1-.6l.4-1.8c.1-.5.6-.8 1.1-.7.5.1.8.6.7 1.1l-.3 1.5c-.1.4.2.8.6.9.4.1.8-.1.9-.6l.1-.5c.1-.5.6-.8 1.1-.7.5.1.8.6.7 1.1l-.5 2.3c-.1.2-.1.5-.2.7z"/>
      </svg>
      <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
        {[1, 2, 3, 4, 5].map(i => (
          <StarIcon key={i} filled={true} />
        ))}
      </div>
      <span style={{
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.06em",
        color: isDark ? "rgba(248,244,227,0.65)" : "rgba(56,48,46,0.65)",
        whiteSpace: "nowrap",
      }}>
        on Yelp
      </span>
    </a>
  );
}
