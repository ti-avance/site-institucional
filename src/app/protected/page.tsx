import { createClient } from "@/src/utils/supabase/server";

export default async function ProtectedPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex-1 flex flex-col gap-6 px-4">
      <h2 className="font-medium text-xl mb-4">Protected Page</h2>
      {/* Tutorial steps removed. Add your own protected content here. */}
      {user ? <div>Welcome, {user.email}!</div> : <div>Please sign in.</div>}
    </main>
  );
}
