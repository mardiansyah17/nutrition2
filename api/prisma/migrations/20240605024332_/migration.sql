-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blogs" (
    "id" SERIAL NOT NULL,
    "cover" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "viewers" INTEGER NOT NULL DEFAULT 0,
    "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_meal_plan" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "user_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "nutrition_id" INTEGER NOT NULL,

    CONSTRAINT "daily_meal_plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nutritions" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "energy_kj" DECIMAL(10,2),
    "energy_kcal" DECIMAL(10,2),
    "water" DECIMAL(10,2),
    "protein" DECIMAL(10,2),
    "fat" DECIMAL(10,2),
    "carbohydrate" DECIMAL(10,2),
    "dietary_fiber" DECIMAL(10,2),
    "minerals" DECIMAL(10,2),
    "organic_acids" DECIMAL(10,2),
    "alcohol" DECIMAL(10,2),
    "vitamin_a" DECIMAL(10,2),
    "retinol" DECIMAL(10,2),
    "carotene" DECIMAL(10,2),
    "vitamin_d" DECIMAL(10,2),
    "vitamin_e_eq" DECIMAL(10,2),
    "vitamin_e" DECIMAL(10,2),
    "vitamin_k" DECIMAL(10,2),
    "vitamin_b1" DECIMAL(10,2),
    "vitamin_b2" DECIMAL(10,2),
    "niacine" DECIMAL(10,2),
    "niacine_equiv" DECIMAL(10,2),
    "pantothenic_acid" DECIMAL(10,2),
    "vitamin_b6" DECIMAL(10,2),
    "biotine" DECIMAL(10,2),
    "folic_acid_eq" DECIMAL(10,2),
    "total_folic_acid" DECIMAL(10,2),
    "free_folic_acid" DECIMAL(10,2),
    "vitamin_b12" DECIMAL(10,2),
    "vitamin_c" DECIMAL(10,2),
    "sodium" DECIMAL(10,2),
    "potassium" DECIMAL(10,2),
    "calcium" DECIMAL(10,2),
    "magnesium" DECIMAL(10,2),
    "phosphorus" DECIMAL(10,2),
    "sulfur" DECIMAL(10,2),
    "chlorine" DECIMAL(10,2),
    "iron" DECIMAL(10,2),
    "zinc" DECIMAL(10,2),
    "copper" DECIMAL(10,2),
    "manganese" DECIMAL(10,2),
    "fluorine" DECIMAL(10,2),
    "iodine" DECIMAL(10,2),
    "mannitol" DECIMAL(10,2),
    "sorbitol" DECIMAL(10,2),
    "xylitol" DECIMAL(10,2),
    "all_sugar_alcohols" DECIMAL(10,2),
    "glucose" DECIMAL(10,2),
    "fructose" DECIMAL(10,2),
    "galactose" DECIMAL(10,2),
    "monosaccharides" DECIMAL(10,2),
    "sucrose" DECIMAL(10,2),
    "maltose" DECIMAL(10,2),
    "lactose" DECIMAL(10,2),
    "disaccharides" DECIMAL(10,2),
    "oligosaccharides_resorbable" DECIMAL(10,2),
    "oligosaccharides_non_resorbable" DECIMAL(10,2),
    "glycogen" DECIMAL(10,2),
    "starch" DECIMAL(10,2),
    "polysaccharides" DECIMAL(10,2),
    "poly_pentoses" DECIMAL(10,2),
    "poly_hexoses" DECIMAL(10,2),
    "poly_uronic_acids" DECIMAL(10,2),
    "cellulose" DECIMAL(10,2),
    "lignin" DECIMAL(10,2),
    "water_soluble_dietary_fiber" DECIMAL(10,2),
    "water_insoluble_dietary_fiber" DECIMAL(10,2),
    "isoleucine" DECIMAL(10,2),
    "leucine" DECIMAL(10,2),
    "lysine" DECIMAL(10,2),
    "methionine" DECIMAL(10,2),
    "cysteine" DECIMAL(10,2),
    "phenylalanine" DECIMAL(10,2),
    "tyrosine" DECIMAL(10,2),
    "threonine" DECIMAL(10,2),
    "tryptophan" DECIMAL(10,2),
    "valine" DECIMAL(10,2),
    "arginine" DECIMAL(10,2),
    "histidine" DECIMAL(10,2),
    "essential_amino_acids" DECIMAL(10,2),
    "alanine" DECIMAL(10,2),
    "aspartic_acid" DECIMAL(10,2),
    "glutamic_acid" DECIMAL(10,2),
    "glycine" DECIMAL(10,2),
    "proline" DECIMAL(10,2),
    "serine" DECIMAL(10,2),
    "non_essential_amino_acids" DECIMAL(10,2),
    "vegetable_protein" DECIMAL(10,2),
    "uric_acid" DECIMAL(10,2),
    "purine_nitrogen" DECIMAL(10,2),
    "butyric_acid" DECIMAL(10,2),
    "capronic_acid" DECIMAL(10,2),
    "caprylic_acid" DECIMAL(10,2),
    "caprinic_acid" DECIMAL(10,2),
    "lauric_acid" DECIMAL(10,2),
    "myristic_acid" DECIMAL(10,2),
    "pentadecanoic_acid" DECIMAL(10,2),
    "palmitic_acid" DECIMAL(10,2),
    "margaric_acid" DECIMAL(10,2),
    "stearic_acid" DECIMAL(10,2),
    "arachidic_acid" DECIMAL(10,2),
    "behenic_acid" DECIMAL(10,2),
    "lignoceric_acid" DECIMAL(10,2),
    "saturated_fatty_acids" DECIMAL(10,2),
    "tetradecenoic_acid" DECIMAL(10,2),
    "pentadecenoic_acid" DECIMAL(10,2),
    "palmitoleic_acid" DECIMAL(10,2),
    "heptadecenoic_acid" DECIMAL(10,2),
    "oleic_acid" DECIMAL(10,2),
    "eicosenoic_acid" DECIMAL(10,2),
    "erucic_acid" DECIMAL(10,2),
    "selacholeic_acid" DECIMAL(10,2),
    "monounsaturated_fatty_acids" DECIMAL(10,2),
    "hexadecadienoic_acid" DECIMAL(10,2),
    "hexadecatetraenoic_acid" DECIMAL(10,2),
    "linoleic_acid" DECIMAL(10,2),
    "linolenic_acid" DECIMAL(10,2),
    "stearidonic_acid" DECIMAL(10,2),
    "nonadecatrienoic_acid" DECIMAL(10,2),
    "eicosadienoic_acid" DECIMAL(10,2),
    "eicosatrienoic_acid" DECIMAL(10,2),
    "arachidonic_acid" DECIMAL(10,2),
    "eicosapentaenoic_acid" DECIMAL(10,2),
    "docosadienoic_acid" DECIMAL(10,2),
    "docosatrienoic_acid" DECIMAL(10,2),
    "docosatetraenoic_acid" DECIMAL(10,2),
    "docosapentaenoic_acid" DECIMAL(10,2),
    "docosahexaenoic_acid" DECIMAL(10,2),
    "polyunsaturated_fatty_acids" DECIMAL(10,2),
    "short_chain_fatty_acids" DECIMAL(10,2),
    "medium_chain_fatty_acids" DECIMAL(10,2),
    "long_chain_fatty_acids" DECIMAL(10,2),
    "glycerol_and_lipoids" DECIMAL(10,2),
    "cholesterol" DECIMAL(10,2),
    "bread_units" DECIMAL(10,2),
    "nacl" DECIMAL(10,2),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "nutritions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "daily_meal_plan" ADD CONSTRAINT "daily_meal_plan_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_plan" ADD CONSTRAINT "daily_meal_plan_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_plan" ADD CONSTRAINT "daily_meal_plan_nutrition_id_fkey" FOREIGN KEY ("nutrition_id") REFERENCES "nutritions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
