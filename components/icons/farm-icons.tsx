import type { SVGProps } from "react"

/*
  Bespoke duotone icon set for Shamba Connect.
  Two-layer (soft fill + crisp stroke) on a 24px grid, single hue via `currentColor`
  so they recolour with text color. Hand-drawn for the brand — not stock line icons.
*/

function Icon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

const SOFT = { fill: "currentColor", fillOpacity: 0.16 } as const

/* Potted sprout — Kitchen Garden Installation */
export function GardenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M6 13h12l-1.3 6.2a1 1 0 0 1-1 .8H8.3a1 1 0 0 1-1-.8L6 13Z" {...SOFT} />
      <path d="M5 13h14" />
      <path d="M12 13V8" />
      <path d="M12 9C12 6 10 4.4 6.8 4.4 6.8 7.4 8.8 9 12 9Z" {...SOFT} />
      <path d="M12 9.4c0-2.4 1.8-3.8 4.6-3.8 0 2.6-2.1 3.8-4.6 3.8Z" {...SOFT} />
    </Icon>
  )
}

/* Leaf with midrib — Foodscaping & Landscaping */
export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M5 19C5 11.3 11.3 5 19 5c0 7.7-6.3 14-14 14Z" {...SOFT} />
      <path d="M5.5 18.5C9.3 14.7 13.6 10.4 17 7.2" />
    </Icon>
  )
}

/* Seedlings in a tray — Quality Seedlings */
export function SeedlingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M4 15.5h16l-1 4.5H5l-1-4.5Z" {...SOFT} />
      <path d="M8 15.5v-3.2" />
      <path d="M8 12.3c-1.3 0-2.1-.9-2.1-2.2 1.3 0 2.1.9 2.1 2.2Z" {...SOFT} />
      <path d="M12 15.5v-4.4" />
      <path d="M12 11.1c1.5 0 2.4-1.1 2.4-2.6-1.5 0-2.4 1.1-2.4 2.6Z" {...SOFT} />
      <path d="M16 15.5v-3.2" />
      <path d="M16 12.3c1.3 0 2.1-.9 2.1-2.2-1.3 0-2.1.9-2.1 2.2Z" {...SOFT} />
    </Icon>
  )
}

/* Stylised rabbit — Rabbit Farming Solutions */
export function RabbitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M8.9 9.1C7.8 5.1 8.1 3 9.5 3.1c1.2.1 1.5 2.5 1 5.6" {...SOFT} />
      <path d="M15.1 9.1c1.1-4 .8-6-.6-5.9-1.2.1-1.5 2.5-1 5.6" {...SOFT} />
      <path d="M18 15.6c0 3.1-2.7 5.4-6 5.4s-6-2.3-6-5.4S8.7 9.5 12 9.5s6 3 6 6.1Z" {...SOFT} />
      <path d="M10.2 15.3h.01" />
      <path d="M13.8 15.3h.01" />
      <path d="M12 17.2c.6 0 1-.4 1-.9" />
    </Icon>
  )
}

/* Open book — Professional Training */
export function TrainingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 7C9.5 5.5 6.6 5.5 4 6.5V18c2.6-1 5.5-1 8 .5V7Z" {...SOFT} />
      <path d="M12 7c2.5-1.5 5.4-1.5 8-.5V18c-2.6-1-5.5-1-8 .5" {...SOFT} />
      <path d="M12 7v11.5" />
    </Icon>
  )
}

/* Storefront — Farm Input Retail */
export function StorefrontIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M4 7h16l1.1 3.1a1 1 0 0 1-.95 1.4H3.85a1 1 0 0 1-.95-1.4L4 7Z" {...SOFT} />
      <path d="M5.2 11.5V20h13.6v-8.5" />
      <path d="M4.5 20h15" />
      <path d="M10 20v-4h4v4" {...SOFT} />
    </Icon>
  )
}

/* House — Households Reached (stats) */
export function HouseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M6 10.8V19.4a.6.6 0 0 0 .6.6h10.8a.6.6 0 0 0 .6-.6v-8.6" {...SOFT} />
      <path d="M3.5 11.8 12 5l8.5 6.8" />
      <path d="M10 20v-4.2h4V20" />
    </Icon>
  )
}

/* People — community / training sessions (stats) */
export function PeopleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="8" r="3" {...SOFT} />
      <path d="M3.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5" {...SOFT} />
      <path d="M16 5.2A3 3 0 0 1 16 11" />
      <path d="M17.5 15.2c1.9.6 3.5 2.4 3.5 4.8" />
    </Icon>
  )
}
