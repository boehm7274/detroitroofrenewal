import { supabaseAdmin } from "@/integrations/supabase/client.server";

export type LeadInput = {
  name: string;
  address: string;
  email: string;
};

export const NOTIFICATION_EMAIL = "solutions@detroitroofrenewal.com";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

function toBase64Url(value: string) {
  return Buffer.from(value, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function sendLeadNotification(input: LeadInput) {
  const lovableApiKey = process.env["LOVABLE_API_KEY"];
  const connectionKey = process.env["GOOGLE_MAIL_API_KEY"];
  if (!lovableApiKey || !connectionKey) {
    console.error("Lead notification skipped: Gmail connection is not configured.");
    return;
  }

  const subject = `New roof scan request — ${input.name}`;
  const body = [
    "New free satellite scan request from detroitroofrenewal.com",
    "",
    `Name:    ${input.name}`,
    `Address: ${input.address}`,
    `Email:   ${input.email}`,
    "",
    `Received: ${new Date().toLocaleString("en-US", { timeZone: "America/Detroit" })} (ET)`,
  ].join("\r\n");

  const raw = toBase64Url(
    [
      `To: ${NOTIFICATION_EMAIL}`,
      `Reply-To: ${input.email}`,
      `Subject: ${subject}`,
      'Content-Type: text/plain; charset="UTF-8"',
      "",
      body,
    ].join("\r\n"),
  );

  const response = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${lovableApiKey}`,
      "X-Connection-Api-Key": connectionKey,
    },
    body: JSON.stringify({ raw }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Lead notification failed [${response.status}]: ${errorBody}`);
  }
}

export async function createLead(input: LeadInput) {
  const { data, error } = await supabaseAdmin
    .from("leads")
    .insert({ name: input.name, address: input.address, email: input.email })
    .select("id")
    .single();

  if (error) throw new Error(error.message);

  // Notification is best-effort: the lead is already saved.
  try {
    await sendLeadNotification(input);
  } catch (e) {
    console.error("Lead notification threw:", e);
  }

  return data;
}

