import React from "react";
import '../globals.css'
import GeneralLayout from "@/components/GeneralLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GeneralLayout>
      {children}
    </GeneralLayout>
  )
}
