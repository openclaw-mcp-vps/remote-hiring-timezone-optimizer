import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TimeZone Hire — Optimize Interview Scheduling Globally",
  description: "Automatically find optimal interview slots across global timezones for remote-first companies and recruiting agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7d87eae7-8427-4e98-926b-e9043f239a75"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
