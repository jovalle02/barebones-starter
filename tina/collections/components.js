export default {
  // Label shown in TinaCMS sidebar
  label: "Components",

  // Name used in queries (e.g. components.title)
  name: "components",

  // Files will be saved under this folder
  path: "content/components",

  // File format (can also be md, mdx, etc.)
  format: "json",

  // Field definitions shown in the TinaCMS sidebar editor
  fields: [
    {
      name: "title",
      label: "Title",
      type: "rich-text", // Allows markdown / block content (used with TinaMarkdown)
      isBody: false,
    },
    {
      name: "description",
      label: "Description",
      type: "rich-text", // Short plain-text description
    },
    {
      name: "placeholder",
      label: "Placeholder",
      type: "string", // Shown inside input field
    },
    {
      name: "buttonText",
      label: "Button Text",
      type: "string", // Label for the submit button
    },
    {
      name: "privacyText",
      label: "Privacy Policy Consent",
      type: "string", // Checkbox label explaining data consent
    }
  ]
};
