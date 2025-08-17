import "./globals.css";

export const metadata = {
  title: "MedCircle",
  description: "Acute Medicine, Simplified."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
