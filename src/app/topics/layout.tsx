import React from "react";
import '../globals.css'
import GeneralLayout from "@/components/GeneralLayout";

// TODO: Fill metadata in referencing (this is new I learned):
// TODO: title template format may be wrong.
// TODO: how is this going to work with generated blog posts hmm...
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata = {
  title: {
    default: 'Christopher Stevens: Worlds to explore. Worlds to create.',
    template: '%s | Christopher Stevens'
  },
  description: 'Christopher Stevens explores, develops and designs.',
}

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
