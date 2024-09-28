import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  
        const { usuarioOEmail, pass } = await req.json();

        try {
            // Verificar si es correo o nombre de usuario
            const UsuoEmail = usuarioOEmail.includes('@');

            const user = await prisma.usuarios.findUnique({
                where: UsuoEmail ? { correo: usuarioOEmail } : { nombre_usu: usuarioOEmail },
            });

            if (!user) {
                return NextResponse.json({ success: false, message: 'Usuario o contraseña incorrectos' }, {status: 401});
            }

            // Comparar la contraseña ingresada con la contraseña hasheada almacenada
            const passmatch = await bcrypt.compare(pass, user.pass);  // user.pass es el hash almacenado

            if (!passmatch) {
                return NextResponse.json({ success: false, message: 'Usuario o contraseña incorrectos' }, {status: 401});
            }

            // Aquí puedes añadir lógica para generar tokens de sesión o JWT
            return NextResponse.json({ success: true, message: 'Inicio de sesión exitoso' }, {status: 200});
        } catch (error) {
            return NextResponse.json({ success: false, message: 'Error interno del servidor' }, {status: 500});
        }
    };  

