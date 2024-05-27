import dataNutritions from "../data/nutritions.json";
import db from "../src/utils/prisma";
import bcrypt from "bcrypt";

// Fungsi untuk membersihkan dan menyesuaikan data JSON
const cleanData = (data: any) => {
  return data.map((item: any) => {
    const cleanValue = (value: any) => parseFloat(value === "-" ? null : value);

    return {
      code: item.code,
      name: item.name,
      energy_kj: cleanValue(item["energy_kj"]),
      energy_kcal: cleanValue(item["energy_kcal"]),
      water: cleanValue(item.water),
      protein: cleanValue(item.protein),
      fat: cleanValue(item.fat),
      carbohydrate: cleanValue(item["carbohydr."]),
      dietary_fiber: cleanValue(item["dietary fiber"]),
      retinol: cleanValue(item.retinol),
      carotene: cleanValue(item.carotene),
      vitamin_b1: cleanValue(item["Vit. B1"]),
      vitamin_b2: cleanValue(item["Vit. B2"]),
      niacine: cleanValue(item.niacine),
      vitamin_c: cleanValue(item["Vit. C"]),
      sodium: cleanValue(item.sodium),
      potassium: cleanValue(item.potassium),
      calcium: cleanValue(item.calcium),
      phosphorus: cleanValue(item.phosphorus),
      iron: cleanValue(item.iron),
      zinc: cleanValue(item.zinc),
      copper: cleanValue(item.copper),
    };
  });
};

async function main() {
  // return await prisma.nutrition.deleteMany();
  await db.category.createMany({
    data: [
      {
        name: "Sarapan",
      },
      {
        name: "Makan siang",
      },
      {
        name: "Makan malam",
      },
    ],
  });
  await db.user.create({
    data: {
      email: "mardi@gmail.com",
      name: "mardi",
      password: bcrypt.hashSync("password", 10),
    },
  });
  const cleanedData = cleanData(dataNutritions);
  await db.nutrition.createMany({
    data: cleanedData,
    skipDuplicates: true, // Menambahkan ini untuk melewati duplikasi
  });
}

main()
  .then(async () => {
    console.log("Seed data successfully");
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
