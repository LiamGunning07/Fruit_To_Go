import { GlobalStateProvider } from "./context/GlobalStateContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalStateProvider>
          {children}
        </GlobalStateProvider>
      </body>
    </html>
  );
}
