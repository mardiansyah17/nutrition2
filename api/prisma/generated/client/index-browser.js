
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.15.0
 * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
 */
Prisma.prismaVersion = {
  client: "5.15.0",
  engine: "12e25d8d06f6ea5a0252864dd9a03b1bb51f3022"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  password: 'password',
  cratedAt: 'cratedAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BlogScalarFieldEnum = {
  id: 'id',
  cover: 'cover',
  title: 'title',
  content: 'content',
  viewers: 'viewers',
  cratedAt: 'cratedAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DailyMealPlanScalarFieldEnum = {
  id: 'id',
  order: 'order',
  date: 'date',
  user_id: 'user_id',
  category_id: 'category_id',
  nutrition_id: 'nutrition_id'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.NutritionScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  energy_kj: 'energy_kj',
  energy_kcal: 'energy_kcal',
  water: 'water',
  protein: 'protein',
  fat: 'fat',
  carbohydrate: 'carbohydrate',
  dietary_fiber: 'dietary_fiber',
  minerals: 'minerals',
  organic_acids: 'organic_acids',
  alcohol: 'alcohol',
  vitamin_a: 'vitamin_a',
  retinol: 'retinol',
  carotene: 'carotene',
  vitamin_d: 'vitamin_d',
  vitamin_e_eq: 'vitamin_e_eq',
  vitamin_e: 'vitamin_e',
  vitamin_k: 'vitamin_k',
  vitamin_b1: 'vitamin_b1',
  vitamin_b2: 'vitamin_b2',
  niacine: 'niacine',
  niacine_equiv: 'niacine_equiv',
  pantothenic_acid: 'pantothenic_acid',
  vitamin_b6: 'vitamin_b6',
  biotine: 'biotine',
  folic_acid_eq: 'folic_acid_eq',
  total_folic_acid: 'total_folic_acid',
  free_folic_acid: 'free_folic_acid',
  vitamin_b12: 'vitamin_b12',
  vitamin_c: 'vitamin_c',
  sodium: 'sodium',
  potassium: 'potassium',
  calcium: 'calcium',
  magnesium: 'magnesium',
  phosphorus: 'phosphorus',
  sulfur: 'sulfur',
  chlorine: 'chlorine',
  iron: 'iron',
  zinc: 'zinc',
  copper: 'copper',
  manganese: 'manganese',
  fluorine: 'fluorine',
  iodine: 'iodine',
  mannitol: 'mannitol',
  sorbitol: 'sorbitol',
  xylitol: 'xylitol',
  all_sugar_alcohols: 'all_sugar_alcohols',
  glucose: 'glucose',
  fructose: 'fructose',
  galactose: 'galactose',
  monosaccharides: 'monosaccharides',
  sucrose: 'sucrose',
  maltose: 'maltose',
  lactose: 'lactose',
  disaccharides: 'disaccharides',
  oligosaccharides_resorbable: 'oligosaccharides_resorbable',
  oligosaccharides_non_resorbable: 'oligosaccharides_non_resorbable',
  glycogen: 'glycogen',
  starch: 'starch',
  polysaccharides: 'polysaccharides',
  poly_pentoses: 'poly_pentoses',
  poly_hexoses: 'poly_hexoses',
  poly_uronic_acids: 'poly_uronic_acids',
  cellulose: 'cellulose',
  lignin: 'lignin',
  water_soluble_dietary_fiber: 'water_soluble_dietary_fiber',
  water_insoluble_dietary_fiber: 'water_insoluble_dietary_fiber',
  isoleucine: 'isoleucine',
  leucine: 'leucine',
  lysine: 'lysine',
  methionine: 'methionine',
  cysteine: 'cysteine',
  phenylalanine: 'phenylalanine',
  tyrosine: 'tyrosine',
  threonine: 'threonine',
  tryptophan: 'tryptophan',
  valine: 'valine',
  arginine: 'arginine',
  histidine: 'histidine',
  essential_amino_acids: 'essential_amino_acids',
  alanine: 'alanine',
  aspartic_acid: 'aspartic_acid',
  glutamic_acid: 'glutamic_acid',
  glycine: 'glycine',
  proline: 'proline',
  serine: 'serine',
  non_essential_amino_acids: 'non_essential_amino_acids',
  vegetable_protein: 'vegetable_protein',
  uric_acid: 'uric_acid',
  purine_nitrogen: 'purine_nitrogen',
  butyric_acid: 'butyric_acid',
  capronic_acid: 'capronic_acid',
  caprylic_acid: 'caprylic_acid',
  caprinic_acid: 'caprinic_acid',
  lauric_acid: 'lauric_acid',
  myristic_acid: 'myristic_acid',
  pentadecanoic_acid: 'pentadecanoic_acid',
  palmitic_acid: 'palmitic_acid',
  margaric_acid: 'margaric_acid',
  stearic_acid: 'stearic_acid',
  arachidic_acid: 'arachidic_acid',
  behenic_acid: 'behenic_acid',
  lignoceric_acid: 'lignoceric_acid',
  saturated_fatty_acids: 'saturated_fatty_acids',
  tetradecenoic_acid: 'tetradecenoic_acid',
  pentadecenoic_acid: 'pentadecenoic_acid',
  palmitoleic_acid: 'palmitoleic_acid',
  heptadecenoic_acid: 'heptadecenoic_acid',
  oleic_acid: 'oleic_acid',
  eicosenoic_acid: 'eicosenoic_acid',
  erucic_acid: 'erucic_acid',
  selacholeic_acid: 'selacholeic_acid',
  monounsaturated_fatty_acids: 'monounsaturated_fatty_acids',
  hexadecadienoic_acid: 'hexadecadienoic_acid',
  hexadecatetraenoic_acid: 'hexadecatetraenoic_acid',
  linoleic_acid: 'linoleic_acid',
  linolenic_acid: 'linolenic_acid',
  stearidonic_acid: 'stearidonic_acid',
  nonadecatrienoic_acid: 'nonadecatrienoic_acid',
  eicosadienoic_acid: 'eicosadienoic_acid',
  eicosatrienoic_acid: 'eicosatrienoic_acid',
  arachidonic_acid: 'arachidonic_acid',
  eicosapentaenoic_acid: 'eicosapentaenoic_acid',
  docosadienoic_acid: 'docosadienoic_acid',
  docosatrienoic_acid: 'docosatrienoic_acid',
  docosatetraenoic_acid: 'docosatetraenoic_acid',
  docosapentaenoic_acid: 'docosapentaenoic_acid',
  docosahexaenoic_acid: 'docosahexaenoic_acid',
  polyunsaturated_fatty_acids: 'polyunsaturated_fatty_acids',
  short_chain_fatty_acids: 'short_chain_fatty_acids',
  medium_chain_fatty_acids: 'medium_chain_fatty_acids',
  long_chain_fatty_acids: 'long_chain_fatty_acids',
  glycerol_and_lipoids: 'glycerol_and_lipoids',
  cholesterol: 'cholesterol',
  bread_units: 'bread_units',
  nacl: 'nacl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Blog: 'Blog',
  DailyMealPlan: 'DailyMealPlan',
  Category: 'Category',
  Nutrition: 'Nutrition'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
