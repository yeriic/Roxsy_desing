-- CreateTable
CREATE TABLE `User` (
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `nombre_usu` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `pass` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_correo_key`(`correo`),
    PRIMARY KEY (`nombre_usu`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
