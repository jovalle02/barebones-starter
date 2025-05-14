// app/page.tsx
export const fetchCache = 'force-no-store';

import client from "../../tina/__generated__/client";
import ClientPage from "./client-page";

export default async function Page() {
  const { data, query, variables } = await client.queries.components({
    relativePath: "newsletterSignup.json",
  });

  return <ClientPage data={data} query={query} variables={variables} />;
}
