import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects • My Portfolio",
  description:
    "A selection of design and frontend development work I've done over many years.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
