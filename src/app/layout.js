'use client'
import { ClerkProvider } from "@clerk/nextjs";
import { UserMemberContext } from "./_context/UserMemberContext";
import { useState } from "react";
import { Analytics } from '@vercel/analytics/react';
// import { Outfit } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

// const inter = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isMember, setIsMember] = useState(false);

  return (
    <ClerkProvider>
      <UserMemberContext.Provider value={{ isMember, setIsMember }}>
        <html lang="en">
          <body >
            {children}
            <Toaster />
            <Analytics />
          </body>
        </html>
      </UserMemberContext.Provider>
    </ClerkProvider>
  );
}
