/*
  Warnings:

  - You are about to drop the column `conver` on the `blogs` table. All the data in the column will be lost.
  - Added the required column `cover` to the `blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `blogs` DROP COLUMN `conver`,
    ADD COLUMN `cover` VARCHAR(191) NOT NULL;
