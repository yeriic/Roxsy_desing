import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();


export async function POST(req: NextRequest) {
    const { nombre, apellido, nombre_usu, correo, pass } = await req.json();

    const usuarioExistente = await prisma.usuarios.findUnique({
        where: { correo }
    });

    if (usuarioExistente) {
        return NextResponse.json({ error: 'Este correo electrónico ya está registrado.' }, { status: 400 });
    }

    const contrasena_hash = await bcrypt.hash(pass, 10);

    try {
        const registro_usu = await prisma.usuarios.create(
            {
                data: {
                    nombre,
                    apellido,
                    nombre_usu,
                    correo,
                    pass: contrasena_hash,
                }
            }
        )
        return NextResponse.json({ message: 'Usuario registrado con éxito', user: registro_usu });
    } catch (error) {
        return NextResponse.json({ error: 'Error al registrar el usuario.' }, { status: 500 });
    }
}

