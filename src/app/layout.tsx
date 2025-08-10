import type { Metadata } from "next";
import { ErrorWrapper } from "./error-wrapper";


export const metadata: Metadata = {
  title: {
    default: "Next.js hello world",
    template: "%s | hello world",
  },
  description: "Hello World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem"
          }}
        >
          <p>Header</p>
        </header>
        <ErrorWrapper>
          {children}
        </ErrorWrapper>
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
          }}
        >
          <p>Footer</p>
        </footer>
        ;
      </body>
    </html>
  );
}
