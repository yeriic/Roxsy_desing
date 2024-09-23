import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    const body = await req.json();
    const { nombre, apellido, usuario, email, contrasena } = body;

    return NextResponse.json({
        message: { usuario, nombre, apellido, email, contrasena}
})
}