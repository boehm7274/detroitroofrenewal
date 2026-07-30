import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  address: z.string().trim().min(1, "Address is required").max(200),
  email: z.string().trim().email("Enter a valid email").max(255),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { createLead } = await import("./leads.server");
    const lead = await createLead(data);
    return { ok: true as const, id: lead.id };
  });
