import { wixApiRequest } from "./wix-client.js";

/**
 * Wix Forms — visitor submission helper. Submits to an existing Wix Forms schema
 * (created in the dashboard, Forms & Submissions app). No auth.elevate — a plain
 * anonymous visitor token can create a submission; it lands in the site owner's
 * Forms & Submissions dashboard, tagged with the visitor id.
 *
 * The `submissions` object must be keyed by each field's `target` (e.g. "form_field_7971"),
 * not its label — get targets from the form schema (GET /form-schema-service/v4/forms).
 *
 * @param {string} formId
 * @param {Record<string, string>} submissions  Field target -> value.
 * @returns {Promise<{ id: string }>}
 */
export async function submitForm(formId, submissions) {
  const res = await wixApiRequest("/forms/v4/submissions", {
    method: "POST",
    body: { submission: { formId, submissions } },
  });
  const submission = res?.submission;
  if (!submission?.id) throw new Error("Form submission failed (no id returned).");
  return submission;
}
