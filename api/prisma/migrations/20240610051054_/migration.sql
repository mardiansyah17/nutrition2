-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `cratedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blogs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cover` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` TEXT NOT NULL,
    `viewers` INTEGER NOT NULL DEFAULT 0,
    `cratedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `daily_meal_plan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `date` DATE NOT NULL,
    `user_id` INTEGER NOT NULL,
    `category_id` INTEGER NOT NULL,
    `nutrition_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nutritions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `energy_kj` DECIMAL(10, 2) NULL,
    `energy_kcal` DECIMAL(10, 2) NULL,
    `water` DECIMAL(10, 2) NULL,
    `protein` DECIMAL(10, 2) NULL,
    `fat` DECIMAL(10, 2) NULL,
    `carbohydrate` DECIMAL(10, 2) NULL,
    `dietary_fiber` DECIMAL(10, 2) NULL,
    `minerals` DECIMAL(10, 2) NULL,
    `organic_acids` DECIMAL(10, 2) NULL,
    `alcohol` DECIMAL(10, 2) NULL,
    `vitamin_a` DECIMAL(10, 2) NULL,
    `retinol` DECIMAL(10, 2) NULL,
    `carotene` DECIMAL(10, 2) NULL,
    `vitamin_d` DECIMAL(10, 2) NULL,
    `vitamin_e_eq` DECIMAL(10, 2) NULL,
    `vitamin_e` DECIMAL(10, 2) NULL,
    `vitamin_k` DECIMAL(10, 2) NULL,
    `vitamin_b1` DECIMAL(10, 2) NULL,
    `vitamin_b2` DECIMAL(10, 2) NULL,
    `niacine` DECIMAL(10, 2) NULL,
    `niacine_equiv` DECIMAL(10, 2) NULL,
    `pantothenic_acid` DECIMAL(10, 2) NULL,
    `vitamin_b6` DECIMAL(10, 2) NULL,
    `biotine` DECIMAL(10, 2) NULL,
    `folic_acid_eq` DECIMAL(10, 2) NULL,
    `total_folic_acid` DECIMAL(10, 2) NULL,
    `free_folic_acid` DECIMAL(10, 2) NULL,
    `vitamin_b12` DECIMAL(10, 2) NULL,
    `vitamin_c` DECIMAL(10, 2) NULL,
    `sodium` DECIMAL(10, 2) NULL,
    `potassium` DECIMAL(10, 2) NULL,
    `calcium` DECIMAL(10, 2) NULL,
    `magnesium` DECIMAL(10, 2) NULL,
    `phosphorus` DECIMAL(10, 2) NULL,
    `sulfur` DECIMAL(10, 2) NULL,
    `chlorine` DECIMAL(10, 2) NULL,
    `iron` DECIMAL(10, 2) NULL,
    `zinc` DECIMAL(10, 2) NULL,
    `copper` DECIMAL(10, 2) NULL,
    `manganese` DECIMAL(10, 2) NULL,
    `fluorine` DECIMAL(10, 2) NULL,
    `iodine` DECIMAL(10, 2) NULL,
    `mannitol` DECIMAL(10, 2) NULL,
    `sorbitol` DECIMAL(10, 2) NULL,
    `xylitol` DECIMAL(10, 2) NULL,
    `all_sugar_alcohols` DECIMAL(10, 2) NULL,
    `glucose` DECIMAL(10, 2) NULL,
    `fructose` DECIMAL(10, 2) NULL,
    `galactose` DECIMAL(10, 2) NULL,
    `monosaccharides` DECIMAL(10, 2) NULL,
    `sucrose` DECIMAL(10, 2) NULL,
    `maltose` DECIMAL(10, 2) NULL,
    `lactose` DECIMAL(10, 2) NULL,
    `disaccharides` DECIMAL(10, 2) NULL,
    `oligosaccharides_resorbable` DECIMAL(10, 2) NULL,
    `oligosaccharides_non_resorbable` DECIMAL(10, 2) NULL,
    `glycogen` DECIMAL(10, 2) NULL,
    `starch` DECIMAL(10, 2) NULL,
    `polysaccharides` DECIMAL(10, 2) NULL,
    `poly_pentoses` DECIMAL(10, 2) NULL,
    `poly_hexoses` DECIMAL(10, 2) NULL,
    `poly_uronic_acids` DECIMAL(10, 2) NULL,
    `cellulose` DECIMAL(10, 2) NULL,
    `lignin` DECIMAL(10, 2) NULL,
    `water_soluble_dietary_fiber` DECIMAL(10, 2) NULL,
    `water_insoluble_dietary_fiber` DECIMAL(10, 2) NULL,
    `isoleucine` DECIMAL(10, 2) NULL,
    `leucine` DECIMAL(10, 2) NULL,
    `lysine` DECIMAL(10, 2) NULL,
    `methionine` DECIMAL(10, 2) NULL,
    `cysteine` DECIMAL(10, 2) NULL,
    `phenylalanine` DECIMAL(10, 2) NULL,
    `tyrosine` DECIMAL(10, 2) NULL,
    `threonine` DECIMAL(10, 2) NULL,
    `tryptophan` DECIMAL(10, 2) NULL,
    `valine` DECIMAL(10, 2) NULL,
    `arginine` DECIMAL(10, 2) NULL,
    `histidine` DECIMAL(10, 2) NULL,
    `essential_amino_acids` DECIMAL(10, 2) NULL,
    `alanine` DECIMAL(10, 2) NULL,
    `aspartic_acid` DECIMAL(10, 2) NULL,
    `glutamic_acid` DECIMAL(10, 2) NULL,
    `glycine` DECIMAL(10, 2) NULL,
    `proline` DECIMAL(10, 2) NULL,
    `serine` DECIMAL(10, 2) NULL,
    `non_essential_amino_acids` DECIMAL(10, 2) NULL,
    `vegetable_protein` DECIMAL(10, 2) NULL,
    `uric_acid` DECIMAL(10, 2) NULL,
    `purine_nitrogen` DECIMAL(10, 2) NULL,
    `butyric_acid` DECIMAL(10, 2) NULL,
    `capronic_acid` DECIMAL(10, 2) NULL,
    `caprylic_acid` DECIMAL(10, 2) NULL,
    `caprinic_acid` DECIMAL(10, 2) NULL,
    `lauric_acid` DECIMAL(10, 2) NULL,
    `myristic_acid` DECIMAL(10, 2) NULL,
    `pentadecanoic_acid` DECIMAL(10, 2) NULL,
    `palmitic_acid` DECIMAL(10, 2) NULL,
    `margaric_acid` DECIMAL(10, 2) NULL,
    `stearic_acid` DECIMAL(10, 2) NULL,
    `arachidic_acid` DECIMAL(10, 2) NULL,
    `behenic_acid` DECIMAL(10, 2) NULL,
    `lignoceric_acid` DECIMAL(10, 2) NULL,
    `saturated_fatty_acids` DECIMAL(10, 2) NULL,
    `tetradecenoic_acid` DECIMAL(10, 2) NULL,
    `pentadecenoic_acid` DECIMAL(10, 2) NULL,
    `palmitoleic_acid` DECIMAL(10, 2) NULL,
    `heptadecenoic_acid` DECIMAL(10, 2) NULL,
    `oleic_acid` DECIMAL(10, 2) NULL,
    `eicosenoic_acid` DECIMAL(10, 2) NULL,
    `erucic_acid` DECIMAL(10, 2) NULL,
    `selacholeic_acid` DECIMAL(10, 2) NULL,
    `monounsaturated_fatty_acids` DECIMAL(10, 2) NULL,
    `hexadecadienoic_acid` DECIMAL(10, 2) NULL,
    `hexadecatetraenoic_acid` DECIMAL(10, 2) NULL,
    `linoleic_acid` DECIMAL(10, 2) NULL,
    `linolenic_acid` DECIMAL(10, 2) NULL,
    `stearidonic_acid` DECIMAL(10, 2) NULL,
    `nonadecatrienoic_acid` DECIMAL(10, 2) NULL,
    `eicosadienoic_acid` DECIMAL(10, 2) NULL,
    `eicosatrienoic_acid` DECIMAL(10, 2) NULL,
    `arachidonic_acid` DECIMAL(10, 2) NULL,
    `eicosapentaenoic_acid` DECIMAL(10, 2) NULL,
    `docosadienoic_acid` DECIMAL(10, 2) NULL,
    `docosatrienoic_acid` DECIMAL(10, 2) NULL,
    `docosatetraenoic_acid` DECIMAL(10, 2) NULL,
    `docosapentaenoic_acid` DECIMAL(10, 2) NULL,
    `docosahexaenoic_acid` DECIMAL(10, 2) NULL,
    `polyunsaturated_fatty_acids` DECIMAL(10, 2) NULL,
    `short_chain_fatty_acids` DECIMAL(10, 2) NULL,
    `medium_chain_fatty_acids` DECIMAL(10, 2) NULL,
    `long_chain_fatty_acids` DECIMAL(10, 2) NULL,
    `glycerol_and_lipoids` DECIMAL(10, 2) NULL,
    `cholesterol` DECIMAL(10, 2) NULL,
    `bread_units` DECIMAL(10, 2) NULL,
    `nacl` DECIMAL(10, 2) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `daily_meal_plan` ADD CONSTRAINT `daily_meal_plan_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `daily_meal_plan` ADD CONSTRAINT `daily_meal_plan_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `daily_meal_plan` ADD CONSTRAINT `daily_meal_plan_nutrition_id_fkey` FOREIGN KEY (`nutrition_id`) REFERENCES `nutritions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
