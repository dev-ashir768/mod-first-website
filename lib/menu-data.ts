export type MenuItem = {
  id: string;
  label: string;
  href?: string;
  children?: MenuItem[];
};

export const menuData: MenuItem[] = [
  {
    id: "dtf-transfer",
    label: "DTF Transfer",
    children: [
      {
        id: "standard-dtf-transfer",
        label: "Standard DTF Transfer",
        children: [
          {
            id: "create-own-gang-sheets",
            label: "Create Your Own Gang Sheets Online",
            href: "/products/dtf-transfer/standard/create-gang-sheets",
          },
          {
            id: "upload-own-gang-sheets",
            label: "Upload Your Own DTF Custom Ganged Sheets",
            href: "/products/dtf-transfer/standard/upload-gang-sheets",
          },
          {
            id: "transfers-by-size",
            label: "DTF Transfers - Transfers By Size",
            href: "/products/dtf-transfer/standard/transfers-by-size",
          },
        ],
      },
      {
        id: "uv-dtf-transfer",
        label: "UV DTF Transfer",
        children: [
          { id: "uv-dtf-1", label: "Custom UV DTF Gang Sheets", href: "/products/uv-dtf-transfer" },
        ],
      },
      {
        id: "sublimation-transfer",
        label: "Sublimation Transfer",
        children: [
          { id: "sublimation-1", label: "Custom Sublimation Transfers", href: "/products/sublimation-transfer" },
        ],
      },
      {
        id: "glitter-dtf-transfers",
        label: "Glitter DTF Transfers",
        children: [
          { id: "glitter-1", label: "Custom Glitter DTF Transfers", href: "/products/glitter-dtf-transfer" },
        ],
      },
      {
        id: "reflective-dtf-transfer",
        label: "Reflective DTF Transfer",
        children: [
          { id: "reflective-1", label: "Custom Reflective DTF Transfers", href: "/products/reflective-dtf-transfer" },
        ],
      },
    ],
  },
  {
    id: "mod-blanks",
    label: "MOD Blanks",
    children: [
      { id: "tshirts", label: "T-Shirts", href: "/blanks/t-shirts" },
      { id: "hoodies", label: "Hoodies", href: "/blanks/hoodies" },
    ],
  },
  {
    id: "embroidery",
    label: "Embroidery",
    href: "/services/embroidery",
  },
  {
    id: "dtg-printing-service",
    label: "DTG Printing Service",
    href: "/services/dtg-printing",
  },
  {
    id: "sign-and-displays",
    label: "Sign and Displays",
    children: [
      { id: "banners", label: "Banners", href: "/signs/banners" },
      { id: "yard-signs", label: "Yard Signs", href: "/signs/yard-signs" },
    ],
  },
  {
    id: "resend-artwork",
    label: "Resend Artwork",
    href: "/services/resend-artwork",
  },
  {
    id: "rush-order",
    label: "Rush Order",
    href: "/services/rush-order",
  },
  {
    id: "dtf-supplies",
    label: "DTF Supplies",
    href: "/products/dtf-supplies",
  },
  {
    id: "hat-heat-press",
    label: "Hat Heat Press",
    href: "/products/hat-heat-press",
  },
];
