import React, { useMemo, useState } from "react";

/**
 * ContactList
 * ------------------------------------------------------------------
 * A small, reusable React component for your Contact section.
 *
 * API
 * - items: Array of { text: string; href: string }
 * - title?: optional heading text
 * - className?: optional extra class on the root
 *
 * Notes
 * - Uses your CSS variables (var(--gold), var(--black), etc) if present.
 * - Minimal inline styles so you don't have to create new css files.
 * - Smart target/rel for external links; mailto/tel work out of the box.
 */

export type ContactItem = {
  text: string;
  href: string; // e.g. "mailto:band@label.com", "tel:+30210...", "https://instagram.com/..."
};

interface Props {
  items: ContactItem[];
  title?: string;
  className?: string;
}

export default function ContactList({ items, title, className }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);

  const normalized = useMemo(
    () =>
      (items || []).map((it) => ({
        text: String(it.text || "").trim(),
        href: String(it.href || "").trim(),
      })),
    [items]
  );

  const isExternal = (href: string) => /^(https?:)?\/\//i.test(href);

  return (
    <section className={className} id="contact-list" style={sectionStyle}>
      {title ? <h3 style={titleStyle}>{title}</h3> : null}

      <ul style={listStyle}>
        {normalized.map((item, i) => {
          const ext = isExternal(item.href);
          const isHover = hovered === i;

          return (
            <li key={`${item.text}-${i}`} style={liStyle}>
              <a
                href={item.href}
                target={ext ? "_blank" : undefined}
                rel={ext ? "noopener noreferrer" : undefined}
                style={linkStyle}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span style={labelStyle}>{item.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// ---- styles (inline, use your CSS variables if available) -------------------

const sectionStyle: React.CSSProperties = {
  maxWidth: 720,
  margin: "0 auto",
};

const titleStyle: React.CSSProperties = {
  margin: "0 0 1rem 0",
  fontSize: "1.5rem",
  lineHeight: 1.2,
  color: "var(--black)",
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "grid",
  gap: "0.25rem",
};

const liStyle: React.CSSProperties = {
  borderBottom: "1px solid var(--pale)",
};

const linkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  padding: "0.75rem 0",
  textDecoration: "none",
  color: "inherit",
};

const labelStyle: React.CSSProperties = {
  fontSize: "1.125rem",
  lineHeight: 1.4,
};

const arrowStyle: React.CSSProperties = {
  transition: "transform 180ms ease, opacity 180ms ease",
  fontSize: "1.25rem",
  color: "var(--gold)",
};
