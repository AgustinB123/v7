import { FC, PropsWithChildren } from "react";

export const metadata = {
  title: "V7",
  description: "V7 por agus",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/5/flatly/bootstrap.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
