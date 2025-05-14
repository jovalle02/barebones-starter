import NewsletterSignup from "../../components/newsletterSignup";
import { client } from "../../tina/__generated__/client";


export default async function Page() {
  const { data } = await client.queries.components({
    relativePath: "newsletterSignup.json",
  });

  console.log("Data from TinaCMS:", data);
  console.log(data.components.title);
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center">
      <NewsletterSignup
        title={data.components.title || "Newsletter Title"}
        description={data.components.description || "Newsletter Subtitle"}
        placeholder={data.components.placeholder || "Newsletter Placeholder"}
        buttonText={data.components.buttonText || "Subscribe"}
        privacyText={data.components.privacyText || "data privacy text"}
      />
    </main>
  );
}
