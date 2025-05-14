// app/client-page.tsx
"use client";

import { useTina } from "tinacms/dist/react";
import NewsletterSignup from "../../components/newsletterSignup";
import { ComponentsQuery } from "../../tina/__generated__/types";

// Props expected from the server/page-level query
interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: ComponentsQuery;
}

// Renders the page using TinaCMS live editing + NewsletterSignup component
export default function ClientPage(props: ClientPageProps) {
  // Enables TinaCMS live editing mode (auto-replaces props with sidebar-edited content)
  const { data } = useTina(props);

  return (
    <main className="min-h-screen bg-white flex justify-center items-center">
      {/* Dynamically injected CMS content */}
      <NewsletterSignup
        title={data.components.title}
        description={data.components.description || ""}
        placeholder={data.components.placeholder || ""}
        buttonText={data.components.buttonText || ""}
        privacyText={data.components.privacyText || ""}
      />
    </main>
  );
}
