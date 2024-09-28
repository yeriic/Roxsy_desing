import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  
        const { usuarioOEmail, pass } = await req.json();

        try {
            const UsuoEmail = usuarioOEmail.includes('@');

            const user = await prisma.usuarios.findUnique({
                where: UsuoEmail ? { correo: usuarioOEmail } : { nombre_usu: usuarioOEmail },
                select: {
                    nombre: true,
                    apellido: true,
                    pass: true,
                }
            });

            if (!user) {
                return NextResponse.json({ success: false, message: 'Usuario o contraseña incorrectos' }, {status: 401});
            }

            const passmatch = await bcrypt.compare(pass, user.pass);

            if (!passmatch) {
                return NextResponse.json({ success: false, message: 'Usuario o contraseña incorrectos' }, {status: 401});
            }

            return NextResponse.json({ 
                success: true, 
                nombre: user.nombre,
                apellido: user.apellido, 
                message: 'Inicio de sesión exitoso'}, 
                {status: 200});
        } catch (error) {
            return NextResponse.json({ success: false, message: 'Error interno del servidor' }, {status: 500});
        }
    };  

