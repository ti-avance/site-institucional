import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client"

export async function GET() {
    const supabase = createClient()

    const { data, error } = await supabase.from('integrantes').select("*")

    if (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

    return NextResponse.json(data)
}