"use client";
import Link from "next/link";

interface Crumb {
  name: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mp3tomidi.vip" },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `https://mp3tomidi.vip${item.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" style={{ padding: "12px 0", fontSize: "0.85rem", color: "#78716C" }}>
        <ol style={{ display: "flex", gap: "6px", listStyle: "none", padding: 0, margin: 0, flexWrap: "wrap" }}>
          <li>
            <Link href="/" style={{ color: "#EA580C", textDecoration: "none" }}>Home</Link>
          </li>
          {items.map((item, i) => (
            <li key={i} style={{ display: "flex", gap: "6px" }}>
              <span aria-hidden="true">/</span>
              {i === items.length - 1 ? (
                <span style={{ color: "#1C1917" }}>{item.name}</span>
              ) : (
                <Link href={item.href} style={{ color: "#EA580C", textDecoration: "none" }}>{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
