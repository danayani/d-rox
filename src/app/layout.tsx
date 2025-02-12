import type {Metadata} from "next";
import "./globals.css";
import Head from "next/head";


export const metadata: Metadata = {
    title: "D-ROX",
    description: "best ;)",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Head>
            <title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </title>
        </Head>
        <body>
        {children}
        </body>
        </html>
    );
}
