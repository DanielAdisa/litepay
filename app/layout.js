
import "./css/globals.css";


export const metadata = {
  title: "LitePay App",
  description: "Litepay Epayments Application Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
