DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;
DROP POLICY IF EXISTS "anyone can insert leads" ON public.leads;
DROP POLICY IF EXISTS "Public can insert leads" ON public.leads;
REVOKE ALL ON public.leads FROM anon;
GRANT ALL ON public.leads TO service_role;