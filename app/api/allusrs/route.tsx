import client from "@/db"

export async function GET() {

    // should add zod validation here
    const allUsers = await client.user.findMany();

    return Response.json({ message: allUsers });
}