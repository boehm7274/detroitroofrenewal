import { supabaseAdmin } from "@/integrations/supabase/client.server";

export type LeadInput = {
  name: string;
  address: string;
  email: string;
};

export const NOTIFICATION_EMAIL = "solutions@detroitroofrenewal.com";

export async function createLead(input: LeadInput) {
  const { data, error } = await supabaseAdmin
    .from("leads")
    .insert({ name: input.name, address: input.address, email: input.email })
    .select("id")
    .single();

  if (error) throw new Error(error.message);
  return data;
}
