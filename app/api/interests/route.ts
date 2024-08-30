import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const interest = await db.interest.findMany({
            orderBy: {
                name: "asc",
            },
        });

        return NextResponse.json(interest);
    } catch (error) {
        console.error(error);
    }
}