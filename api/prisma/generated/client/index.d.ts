
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model DailyMealPlan
 * 
 */
export type DailyMealPlan = $Result.DefaultSelection<Prisma.$DailyMealPlanPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Nutrition
 * 
 */
export type Nutrition = $Result.DefaultSelection<Prisma.$NutritionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs>;

  /**
   * `prisma.dailyMealPlan`: Exposes CRUD operations for the **DailyMealPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyMealPlans
    * const dailyMealPlans = await prisma.dailyMealPlan.findMany()
    * ```
    */
  get dailyMealPlan(): Prisma.DailyMealPlanDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.nutrition`: Exposes CRUD operations for the **Nutrition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nutritions
    * const nutritions = await prisma.nutrition.findMany()
    * ```
    */
  get nutrition(): Prisma.NutritionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Blog: 'Blog',
    DailyMealPlan: 'DailyMealPlan',
    Category: 'Category',
    Nutrition: 'Nutrition'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'blog' | 'dailyMealPlan' | 'category' | 'nutrition'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>,
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      DailyMealPlan: {
        payload: Prisma.$DailyMealPlanPayload<ExtArgs>
        fields: Prisma.DailyMealPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyMealPlanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyMealPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyMealPlanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyMealPlanPayload>
          }
          findFirst: {
            args: Prisma.DailyMealPlanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyMealPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyMealPlanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyMealPlanPayload>
          }
          findMany: {
            args: Prisma.DailyMealPlanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyMealPlanPayload>[]
          }
          create: {
            args: Prisma.DailyMealPlanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyMealPlanPayload>
          }
          createMany: {
            args: Prisma.DailyMealPlanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyMealPlanCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyMealPlanPayload>[]
          }
          delete: {
            args: Prisma.DailyMealPlanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyMealPlanPayload>
          }
          update: {
            args: Prisma.DailyMealPlanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyMealPlanPayload>
          }
          deleteMany: {
            args: Prisma.DailyMealPlanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DailyMealPlanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DailyMealPlanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyMealPlanPayload>
          }
          aggregate: {
            args: Prisma.DailyMealPlanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDailyMealPlan>
          }
          groupBy: {
            args: Prisma.DailyMealPlanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DailyMealPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyMealPlanCountArgs<ExtArgs>,
            result: $Utils.Optional<DailyMealPlanCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Nutrition: {
        payload: Prisma.$NutritionPayload<ExtArgs>
        fields: Prisma.NutritionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NutritionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NutritionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>
          }
          findFirst: {
            args: Prisma.NutritionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NutritionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>
          }
          findMany: {
            args: Prisma.NutritionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>[]
          }
          create: {
            args: Prisma.NutritionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>
          }
          createMany: {
            args: Prisma.NutritionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NutritionCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>[]
          }
          delete: {
            args: Prisma.NutritionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>
          }
          update: {
            args: Prisma.NutritionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>
          }
          deleteMany: {
            args: Prisma.NutritionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NutritionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NutritionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>
          }
          aggregate: {
            args: Prisma.NutritionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNutrition>
          }
          groupBy: {
            args: Prisma.NutritionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NutritionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NutritionCountArgs<ExtArgs>,
            result: $Utils.Optional<NutritionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    daily_meal_plan: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daily_meal_plan?: boolean | UserCountOutputTypeCountDaily_meal_planArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDaily_meal_planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyMealPlanWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    daily_meal_plan: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daily_meal_plan?: boolean | CategoryCountOutputTypeCountDaily_meal_planArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountDaily_meal_planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyMealPlanWhereInput
  }


  /**
   * Count Type NutritionCountOutputType
   */

  export type NutritionCountOutputType = {
    daily_meal_plan: number
  }

  export type NutritionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daily_meal_plan?: boolean | NutritionCountOutputTypeCountDaily_meal_planArgs
  }

  // Custom InputTypes
  /**
   * NutritionCountOutputType without action
   */
  export type NutritionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionCountOutputType
     */
    select?: NutritionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NutritionCountOutputType without action
   */
  export type NutritionCountOutputTypeCountDaily_meal_planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyMealPlanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    cratedAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    cratedAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    cratedAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    cratedAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    cratedAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    cratedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    password: string
    cratedAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    cratedAt?: boolean
    updatedAt?: boolean
    daily_meal_plan?: boolean | User$daily_meal_planArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    cratedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    cratedAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daily_meal_plan?: boolean | User$daily_meal_planArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      daily_meal_plan: Prisma.$DailyMealPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      password: string
      cratedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    daily_meal_plan<T extends User$daily_meal_planArgs<ExtArgs> = {}>(args?: Subset<T, User$daily_meal_planArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMealPlanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly cratedAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.daily_meal_plan
   */
  export type User$daily_meal_planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMealPlan
     */
    select?: DailyMealPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMealPlanInclude<ExtArgs> | null
    where?: DailyMealPlanWhereInput
    orderBy?: DailyMealPlanOrderByWithRelationInput | DailyMealPlanOrderByWithRelationInput[]
    cursor?: DailyMealPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyMealPlanScalarFieldEnum | DailyMealPlanScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    id: number | null
    viewers: number | null
  }

  export type BlogSumAggregateOutputType = {
    id: number | null
    viewers: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: number | null
    cover: string | null
    title: string | null
    content: string | null
    viewers: number | null
    cratedAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: number | null
    cover: string | null
    title: string | null
    content: string | null
    viewers: number | null
    cratedAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    cover: number
    title: number
    content: number
    viewers: number
    cratedAt: number
    updatedAt: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    id?: true
    viewers?: true
  }

  export type BlogSumAggregateInputType = {
    id?: true
    viewers?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    cover?: true
    title?: true
    content?: true
    viewers?: true
    cratedAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    cover?: true
    title?: true
    content?: true
    viewers?: true
    cratedAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    cover?: true
    title?: true
    content?: true
    viewers?: true
    cratedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: number
    cover: string
    title: string
    content: string
    viewers: number
    cratedAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cover?: boolean
    title?: boolean
    content?: boolean
    viewers?: boolean
    cratedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cover?: boolean
    title?: boolean
    content?: boolean
    viewers?: boolean
    cratedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    cover?: boolean
    title?: boolean
    content?: boolean
    viewers?: boolean
    cratedAt?: boolean
    updatedAt?: boolean
  }


  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cover: string
      title: string
      content: string
      viewers: number
      cratedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
    **/
    create<T extends BlogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogCreateArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends BlogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
    **/
    delete<T extends BlogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
    **/
    upsert<T extends BlogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Blog model
   */ 
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'Int'>
    readonly cover: FieldRef<"Blog", 'String'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly viewers: FieldRef<"Blog", 'Int'>
    readonly cratedAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
  }


  /**
   * Model DailyMealPlan
   */

  export type AggregateDailyMealPlan = {
    _count: DailyMealPlanCountAggregateOutputType | null
    _avg: DailyMealPlanAvgAggregateOutputType | null
    _sum: DailyMealPlanSumAggregateOutputType | null
    _min: DailyMealPlanMinAggregateOutputType | null
    _max: DailyMealPlanMaxAggregateOutputType | null
  }

  export type DailyMealPlanAvgAggregateOutputType = {
    id: number | null
    order: number | null
    user_id: number | null
    category_id: number | null
    nutrition_id: number | null
  }

  export type DailyMealPlanSumAggregateOutputType = {
    id: number | null
    order: number | null
    user_id: number | null
    category_id: number | null
    nutrition_id: number | null
  }

  export type DailyMealPlanMinAggregateOutputType = {
    id: number | null
    order: number | null
    date: Date | null
    user_id: number | null
    category_id: number | null
    nutrition_id: number | null
  }

  export type DailyMealPlanMaxAggregateOutputType = {
    id: number | null
    order: number | null
    date: Date | null
    user_id: number | null
    category_id: number | null
    nutrition_id: number | null
  }

  export type DailyMealPlanCountAggregateOutputType = {
    id: number
    order: number
    date: number
    user_id: number
    category_id: number
    nutrition_id: number
    _all: number
  }


  export type DailyMealPlanAvgAggregateInputType = {
    id?: true
    order?: true
    user_id?: true
    category_id?: true
    nutrition_id?: true
  }

  export type DailyMealPlanSumAggregateInputType = {
    id?: true
    order?: true
    user_id?: true
    category_id?: true
    nutrition_id?: true
  }

  export type DailyMealPlanMinAggregateInputType = {
    id?: true
    order?: true
    date?: true
    user_id?: true
    category_id?: true
    nutrition_id?: true
  }

  export type DailyMealPlanMaxAggregateInputType = {
    id?: true
    order?: true
    date?: true
    user_id?: true
    category_id?: true
    nutrition_id?: true
  }

  export type DailyMealPlanCountAggregateInputType = {
    id?: true
    order?: true
    date?: true
    user_id?: true
    category_id?: true
    nutrition_id?: true
    _all?: true
  }

  export type DailyMealPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyMealPlan to aggregate.
     */
    where?: DailyMealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMealPlans to fetch.
     */
    orderBy?: DailyMealPlanOrderByWithRelationInput | DailyMealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyMealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyMealPlans
    **/
    _count?: true | DailyMealPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyMealPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyMealPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyMealPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyMealPlanMaxAggregateInputType
  }

  export type GetDailyMealPlanAggregateType<T extends DailyMealPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyMealPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyMealPlan[P]>
      : GetScalarType<T[P], AggregateDailyMealPlan[P]>
  }




  export type DailyMealPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyMealPlanWhereInput
    orderBy?: DailyMealPlanOrderByWithAggregationInput | DailyMealPlanOrderByWithAggregationInput[]
    by: DailyMealPlanScalarFieldEnum[] | DailyMealPlanScalarFieldEnum
    having?: DailyMealPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyMealPlanCountAggregateInputType | true
    _avg?: DailyMealPlanAvgAggregateInputType
    _sum?: DailyMealPlanSumAggregateInputType
    _min?: DailyMealPlanMinAggregateInputType
    _max?: DailyMealPlanMaxAggregateInputType
  }

  export type DailyMealPlanGroupByOutputType = {
    id: number
    order: number
    date: Date
    user_id: number
    category_id: number
    nutrition_id: number
    _count: DailyMealPlanCountAggregateOutputType | null
    _avg: DailyMealPlanAvgAggregateOutputType | null
    _sum: DailyMealPlanSumAggregateOutputType | null
    _min: DailyMealPlanMinAggregateOutputType | null
    _max: DailyMealPlanMaxAggregateOutputType | null
  }

  type GetDailyMealPlanGroupByPayload<T extends DailyMealPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyMealPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyMealPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyMealPlanGroupByOutputType[P]>
            : GetScalarType<T[P], DailyMealPlanGroupByOutputType[P]>
        }
      >
    >


  export type DailyMealPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    date?: boolean
    user_id?: boolean
    category_id?: boolean
    nutrition_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    nutrition?: boolean | NutritionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyMealPlan"]>

  export type DailyMealPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    date?: boolean
    user_id?: boolean
    category_id?: boolean
    nutrition_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    nutrition?: boolean | NutritionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyMealPlan"]>

  export type DailyMealPlanSelectScalar = {
    id?: boolean
    order?: boolean
    date?: boolean
    user_id?: boolean
    category_id?: boolean
    nutrition_id?: boolean
  }

  export type DailyMealPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    nutrition?: boolean | NutritionDefaultArgs<ExtArgs>
  }
  export type DailyMealPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    nutrition?: boolean | NutritionDefaultArgs<ExtArgs>
  }

  export type $DailyMealPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyMealPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      nutrition: Prisma.$NutritionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order: number
      date: Date
      user_id: number
      category_id: number
      nutrition_id: number
    }, ExtArgs["result"]["dailyMealPlan"]>
    composites: {}
  }

  type DailyMealPlanGetPayload<S extends boolean | null | undefined | DailyMealPlanDefaultArgs> = $Result.GetResult<Prisma.$DailyMealPlanPayload, S>

  type DailyMealPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyMealPlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyMealPlanCountAggregateInputType | true
    }

  export interface DailyMealPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyMealPlan'], meta: { name: 'DailyMealPlan' } }
    /**
     * Find zero or one DailyMealPlan that matches the filter.
     * @param {DailyMealPlanFindUniqueArgs} args - Arguments to find a DailyMealPlan
     * @example
     * // Get one DailyMealPlan
     * const dailyMealPlan = await prisma.dailyMealPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DailyMealPlanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DailyMealPlanFindUniqueArgs<ExtArgs>>
    ): Prisma__DailyMealPlanClient<$Result.GetResult<Prisma.$DailyMealPlanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DailyMealPlan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailyMealPlanFindUniqueOrThrowArgs} args - Arguments to find a DailyMealPlan
     * @example
     * // Get one DailyMealPlan
     * const dailyMealPlan = await prisma.dailyMealPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DailyMealPlanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyMealPlanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DailyMealPlanClient<$Result.GetResult<Prisma.$DailyMealPlanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DailyMealPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMealPlanFindFirstArgs} args - Arguments to find a DailyMealPlan
     * @example
     * // Get one DailyMealPlan
     * const dailyMealPlan = await prisma.dailyMealPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DailyMealPlanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyMealPlanFindFirstArgs<ExtArgs>>
    ): Prisma__DailyMealPlanClient<$Result.GetResult<Prisma.$DailyMealPlanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DailyMealPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMealPlanFindFirstOrThrowArgs} args - Arguments to find a DailyMealPlan
     * @example
     * // Get one DailyMealPlan
     * const dailyMealPlan = await prisma.dailyMealPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DailyMealPlanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyMealPlanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DailyMealPlanClient<$Result.GetResult<Prisma.$DailyMealPlanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DailyMealPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMealPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyMealPlans
     * const dailyMealPlans = await prisma.dailyMealPlan.findMany()
     * 
     * // Get first 10 DailyMealPlans
     * const dailyMealPlans = await prisma.dailyMealPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyMealPlanWithIdOnly = await prisma.dailyMealPlan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DailyMealPlanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyMealPlanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMealPlanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DailyMealPlan.
     * @param {DailyMealPlanCreateArgs} args - Arguments to create a DailyMealPlan.
     * @example
     * // Create one DailyMealPlan
     * const DailyMealPlan = await prisma.dailyMealPlan.create({
     *   data: {
     *     // ... data to create a DailyMealPlan
     *   }
     * })
     * 
    **/
    create<T extends DailyMealPlanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DailyMealPlanCreateArgs<ExtArgs>>
    ): Prisma__DailyMealPlanClient<$Result.GetResult<Prisma.$DailyMealPlanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DailyMealPlans.
     * @param {DailyMealPlanCreateManyArgs} args - Arguments to create many DailyMealPlans.
     * @example
     * // Create many DailyMealPlans
     * const dailyMealPlan = await prisma.dailyMealPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DailyMealPlanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyMealPlanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyMealPlans and returns the data saved in the database.
     * @param {DailyMealPlanCreateManyAndReturnArgs} args - Arguments to create many DailyMealPlans.
     * @example
     * // Create many DailyMealPlans
     * const dailyMealPlan = await prisma.dailyMealPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyMealPlans and only return the `id`
     * const dailyMealPlanWithIdOnly = await prisma.dailyMealPlan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends DailyMealPlanCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyMealPlanCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMealPlanPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a DailyMealPlan.
     * @param {DailyMealPlanDeleteArgs} args - Arguments to delete one DailyMealPlan.
     * @example
     * // Delete one DailyMealPlan
     * const DailyMealPlan = await prisma.dailyMealPlan.delete({
     *   where: {
     *     // ... filter to delete one DailyMealPlan
     *   }
     * })
     * 
    **/
    delete<T extends DailyMealPlanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DailyMealPlanDeleteArgs<ExtArgs>>
    ): Prisma__DailyMealPlanClient<$Result.GetResult<Prisma.$DailyMealPlanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DailyMealPlan.
     * @param {DailyMealPlanUpdateArgs} args - Arguments to update one DailyMealPlan.
     * @example
     * // Update one DailyMealPlan
     * const dailyMealPlan = await prisma.dailyMealPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DailyMealPlanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DailyMealPlanUpdateArgs<ExtArgs>>
    ): Prisma__DailyMealPlanClient<$Result.GetResult<Prisma.$DailyMealPlanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DailyMealPlans.
     * @param {DailyMealPlanDeleteManyArgs} args - Arguments to filter DailyMealPlans to delete.
     * @example
     * // Delete a few DailyMealPlans
     * const { count } = await prisma.dailyMealPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DailyMealPlanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyMealPlanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyMealPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMealPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyMealPlans
     * const dailyMealPlan = await prisma.dailyMealPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DailyMealPlanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DailyMealPlanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyMealPlan.
     * @param {DailyMealPlanUpsertArgs} args - Arguments to update or create a DailyMealPlan.
     * @example
     * // Update or create a DailyMealPlan
     * const dailyMealPlan = await prisma.dailyMealPlan.upsert({
     *   create: {
     *     // ... data to create a DailyMealPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyMealPlan we want to update
     *   }
     * })
    **/
    upsert<T extends DailyMealPlanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DailyMealPlanUpsertArgs<ExtArgs>>
    ): Prisma__DailyMealPlanClient<$Result.GetResult<Prisma.$DailyMealPlanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DailyMealPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMealPlanCountArgs} args - Arguments to filter DailyMealPlans to count.
     * @example
     * // Count the number of DailyMealPlans
     * const count = await prisma.dailyMealPlan.count({
     *   where: {
     *     // ... the filter for the DailyMealPlans we want to count
     *   }
     * })
    **/
    count<T extends DailyMealPlanCountArgs>(
      args?: Subset<T, DailyMealPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyMealPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyMealPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMealPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyMealPlanAggregateArgs>(args: Subset<T, DailyMealPlanAggregateArgs>): Prisma.PrismaPromise<GetDailyMealPlanAggregateType<T>>

    /**
     * Group by DailyMealPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMealPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyMealPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyMealPlanGroupByArgs['orderBy'] }
        : { orderBy?: DailyMealPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyMealPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyMealPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyMealPlan model
   */
  readonly fields: DailyMealPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyMealPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyMealPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    nutrition<T extends NutritionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NutritionDefaultArgs<ExtArgs>>): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DailyMealPlan model
   */ 
  interface DailyMealPlanFieldRefs {
    readonly id: FieldRef<"DailyMealPlan", 'Int'>
    readonly order: FieldRef<"DailyMealPlan", 'Int'>
    readonly date: FieldRef<"DailyMealPlan", 'DateTime'>
    readonly user_id: FieldRef<"DailyMealPlan", 'Int'>
    readonly category_id: FieldRef<"DailyMealPlan", 'Int'>
    readonly nutrition_id: FieldRef<"DailyMealPlan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DailyMealPlan findUnique
   */
  export type DailyMealPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMealPlan
     */
    select?: DailyMealPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMealPlanInclude<ExtArgs> | null
    /**
     * Filter, which DailyMealPlan to fetch.
     */
    where: DailyMealPlanWhereUniqueInput
  }

  /**
   * DailyMealPlan findUniqueOrThrow
   */
  export type DailyMealPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMealPlan
     */
    select?: DailyMealPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMealPlanInclude<ExtArgs> | null
    /**
     * Filter, which DailyMealPlan to fetch.
     */
    where: DailyMealPlanWhereUniqueInput
  }

  /**
   * DailyMealPlan findFirst
   */
  export type DailyMealPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMealPlan
     */
    select?: DailyMealPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMealPlanInclude<ExtArgs> | null
    /**
     * Filter, which DailyMealPlan to fetch.
     */
    where?: DailyMealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMealPlans to fetch.
     */
    orderBy?: DailyMealPlanOrderByWithRelationInput | DailyMealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyMealPlans.
     */
    cursor?: DailyMealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyMealPlans.
     */
    distinct?: DailyMealPlanScalarFieldEnum | DailyMealPlanScalarFieldEnum[]
  }

  /**
   * DailyMealPlan findFirstOrThrow
   */
  export type DailyMealPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMealPlan
     */
    select?: DailyMealPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMealPlanInclude<ExtArgs> | null
    /**
     * Filter, which DailyMealPlan to fetch.
     */
    where?: DailyMealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMealPlans to fetch.
     */
    orderBy?: DailyMealPlanOrderByWithRelationInput | DailyMealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyMealPlans.
     */
    cursor?: DailyMealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyMealPlans.
     */
    distinct?: DailyMealPlanScalarFieldEnum | DailyMealPlanScalarFieldEnum[]
  }

  /**
   * DailyMealPlan findMany
   */
  export type DailyMealPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMealPlan
     */
    select?: DailyMealPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMealPlanInclude<ExtArgs> | null
    /**
     * Filter, which DailyMealPlans to fetch.
     */
    where?: DailyMealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMealPlans to fetch.
     */
    orderBy?: DailyMealPlanOrderByWithRelationInput | DailyMealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyMealPlans.
     */
    cursor?: DailyMealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMealPlans.
     */
    skip?: number
    distinct?: DailyMealPlanScalarFieldEnum | DailyMealPlanScalarFieldEnum[]
  }

  /**
   * DailyMealPlan create
   */
  export type DailyMealPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMealPlan
     */
    select?: DailyMealPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMealPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyMealPlan.
     */
    data: XOR<DailyMealPlanCreateInput, DailyMealPlanUncheckedCreateInput>
  }

  /**
   * DailyMealPlan createMany
   */
  export type DailyMealPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyMealPlans.
     */
    data: DailyMealPlanCreateManyInput | DailyMealPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyMealPlan createManyAndReturn
   */
  export type DailyMealPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMealPlan
     */
    select?: DailyMealPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailyMealPlans.
     */
    data: DailyMealPlanCreateManyInput | DailyMealPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMealPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyMealPlan update
   */
  export type DailyMealPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMealPlan
     */
    select?: DailyMealPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMealPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyMealPlan.
     */
    data: XOR<DailyMealPlanUpdateInput, DailyMealPlanUncheckedUpdateInput>
    /**
     * Choose, which DailyMealPlan to update.
     */
    where: DailyMealPlanWhereUniqueInput
  }

  /**
   * DailyMealPlan updateMany
   */
  export type DailyMealPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyMealPlans.
     */
    data: XOR<DailyMealPlanUpdateManyMutationInput, DailyMealPlanUncheckedUpdateManyInput>
    /**
     * Filter which DailyMealPlans to update
     */
    where?: DailyMealPlanWhereInput
  }

  /**
   * DailyMealPlan upsert
   */
  export type DailyMealPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMealPlan
     */
    select?: DailyMealPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMealPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyMealPlan to update in case it exists.
     */
    where: DailyMealPlanWhereUniqueInput
    /**
     * In case the DailyMealPlan found by the `where` argument doesn't exist, create a new DailyMealPlan with this data.
     */
    create: XOR<DailyMealPlanCreateInput, DailyMealPlanUncheckedCreateInput>
    /**
     * In case the DailyMealPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyMealPlanUpdateInput, DailyMealPlanUncheckedUpdateInput>
  }

  /**
   * DailyMealPlan delete
   */
  export type DailyMealPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMealPlan
     */
    select?: DailyMealPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMealPlanInclude<ExtArgs> | null
    /**
     * Filter which DailyMealPlan to delete.
     */
    where: DailyMealPlanWhereUniqueInput
  }

  /**
   * DailyMealPlan deleteMany
   */
  export type DailyMealPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyMealPlans to delete
     */
    where?: DailyMealPlanWhereInput
  }

  /**
   * DailyMealPlan without action
   */
  export type DailyMealPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMealPlan
     */
    select?: DailyMealPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMealPlanInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    daily_meal_plan?: boolean | Category$daily_meal_planArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daily_meal_plan?: boolean | Category$daily_meal_planArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      daily_meal_plan: Prisma.$DailyMealPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    daily_meal_plan<T extends Category$daily_meal_planArgs<ExtArgs> = {}>(args?: Subset<T, Category$daily_meal_planArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMealPlanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.daily_meal_plan
   */
  export type Category$daily_meal_planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMealPlan
     */
    select?: DailyMealPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMealPlanInclude<ExtArgs> | null
    where?: DailyMealPlanWhereInput
    orderBy?: DailyMealPlanOrderByWithRelationInput | DailyMealPlanOrderByWithRelationInput[]
    cursor?: DailyMealPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyMealPlanScalarFieldEnum | DailyMealPlanScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Nutrition
   */

  export type AggregateNutrition = {
    _count: NutritionCountAggregateOutputType | null
    _avg: NutritionAvgAggregateOutputType | null
    _sum: NutritionSumAggregateOutputType | null
    _min: NutritionMinAggregateOutputType | null
    _max: NutritionMaxAggregateOutputType | null
  }

  export type NutritionAvgAggregateOutputType = {
    id: number | null
    energy_kj: Decimal | null
    energy_kcal: Decimal | null
    water: Decimal | null
    protein: Decimal | null
    fat: Decimal | null
    carbohydrate: Decimal | null
    dietary_fiber: Decimal | null
    minerals: Decimal | null
    organic_acids: Decimal | null
    alcohol: Decimal | null
    vitamin_a: Decimal | null
    retinol: Decimal | null
    carotene: Decimal | null
    vitamin_d: Decimal | null
    vitamin_e_eq: Decimal | null
    vitamin_e: Decimal | null
    vitamin_k: Decimal | null
    vitamin_b1: Decimal | null
    vitamin_b2: Decimal | null
    niacine: Decimal | null
    niacine_equiv: Decimal | null
    pantothenic_acid: Decimal | null
    vitamin_b6: Decimal | null
    biotine: Decimal | null
    folic_acid_eq: Decimal | null
    total_folic_acid: Decimal | null
    free_folic_acid: Decimal | null
    vitamin_b12: Decimal | null
    vitamin_c: Decimal | null
    sodium: Decimal | null
    potassium: Decimal | null
    calcium: Decimal | null
    magnesium: Decimal | null
    phosphorus: Decimal | null
    sulfur: Decimal | null
    chlorine: Decimal | null
    iron: Decimal | null
    zinc: Decimal | null
    copper: Decimal | null
    manganese: Decimal | null
    fluorine: Decimal | null
    iodine: Decimal | null
    mannitol: Decimal | null
    sorbitol: Decimal | null
    xylitol: Decimal | null
    all_sugar_alcohols: Decimal | null
    glucose: Decimal | null
    fructose: Decimal | null
    galactose: Decimal | null
    monosaccharides: Decimal | null
    sucrose: Decimal | null
    maltose: Decimal | null
    lactose: Decimal | null
    disaccharides: Decimal | null
    oligosaccharides_resorbable: Decimal | null
    oligosaccharides_non_resorbable: Decimal | null
    glycogen: Decimal | null
    starch: Decimal | null
    polysaccharides: Decimal | null
    poly_pentoses: Decimal | null
    poly_hexoses: Decimal | null
    poly_uronic_acids: Decimal | null
    cellulose: Decimal | null
    lignin: Decimal | null
    water_soluble_dietary_fiber: Decimal | null
    water_insoluble_dietary_fiber: Decimal | null
    isoleucine: Decimal | null
    leucine: Decimal | null
    lysine: Decimal | null
    methionine: Decimal | null
    cysteine: Decimal | null
    phenylalanine: Decimal | null
    tyrosine: Decimal | null
    threonine: Decimal | null
    tryptophan: Decimal | null
    valine: Decimal | null
    arginine: Decimal | null
    histidine: Decimal | null
    essential_amino_acids: Decimal | null
    alanine: Decimal | null
    aspartic_acid: Decimal | null
    glutamic_acid: Decimal | null
    glycine: Decimal | null
    proline: Decimal | null
    serine: Decimal | null
    non_essential_amino_acids: Decimal | null
    vegetable_protein: Decimal | null
    uric_acid: Decimal | null
    purine_nitrogen: Decimal | null
    butyric_acid: Decimal | null
    capronic_acid: Decimal | null
    caprylic_acid: Decimal | null
    caprinic_acid: Decimal | null
    lauric_acid: Decimal | null
    myristic_acid: Decimal | null
    pentadecanoic_acid: Decimal | null
    palmitic_acid: Decimal | null
    margaric_acid: Decimal | null
    stearic_acid: Decimal | null
    arachidic_acid: Decimal | null
    behenic_acid: Decimal | null
    lignoceric_acid: Decimal | null
    saturated_fatty_acids: Decimal | null
    tetradecenoic_acid: Decimal | null
    pentadecenoic_acid: Decimal | null
    palmitoleic_acid: Decimal | null
    heptadecenoic_acid: Decimal | null
    oleic_acid: Decimal | null
    eicosenoic_acid: Decimal | null
    erucic_acid: Decimal | null
    selacholeic_acid: Decimal | null
    monounsaturated_fatty_acids: Decimal | null
    hexadecadienoic_acid: Decimal | null
    hexadecatetraenoic_acid: Decimal | null
    linoleic_acid: Decimal | null
    linolenic_acid: Decimal | null
    stearidonic_acid: Decimal | null
    nonadecatrienoic_acid: Decimal | null
    eicosadienoic_acid: Decimal | null
    eicosatrienoic_acid: Decimal | null
    arachidonic_acid: Decimal | null
    eicosapentaenoic_acid: Decimal | null
    docosadienoic_acid: Decimal | null
    docosatrienoic_acid: Decimal | null
    docosatetraenoic_acid: Decimal | null
    docosapentaenoic_acid: Decimal | null
    docosahexaenoic_acid: Decimal | null
    polyunsaturated_fatty_acids: Decimal | null
    short_chain_fatty_acids: Decimal | null
    medium_chain_fatty_acids: Decimal | null
    long_chain_fatty_acids: Decimal | null
    glycerol_and_lipoids: Decimal | null
    cholesterol: Decimal | null
    bread_units: Decimal | null
    nacl: Decimal | null
  }

  export type NutritionSumAggregateOutputType = {
    id: number | null
    energy_kj: Decimal | null
    energy_kcal: Decimal | null
    water: Decimal | null
    protein: Decimal | null
    fat: Decimal | null
    carbohydrate: Decimal | null
    dietary_fiber: Decimal | null
    minerals: Decimal | null
    organic_acids: Decimal | null
    alcohol: Decimal | null
    vitamin_a: Decimal | null
    retinol: Decimal | null
    carotene: Decimal | null
    vitamin_d: Decimal | null
    vitamin_e_eq: Decimal | null
    vitamin_e: Decimal | null
    vitamin_k: Decimal | null
    vitamin_b1: Decimal | null
    vitamin_b2: Decimal | null
    niacine: Decimal | null
    niacine_equiv: Decimal | null
    pantothenic_acid: Decimal | null
    vitamin_b6: Decimal | null
    biotine: Decimal | null
    folic_acid_eq: Decimal | null
    total_folic_acid: Decimal | null
    free_folic_acid: Decimal | null
    vitamin_b12: Decimal | null
    vitamin_c: Decimal | null
    sodium: Decimal | null
    potassium: Decimal | null
    calcium: Decimal | null
    magnesium: Decimal | null
    phosphorus: Decimal | null
    sulfur: Decimal | null
    chlorine: Decimal | null
    iron: Decimal | null
    zinc: Decimal | null
    copper: Decimal | null
    manganese: Decimal | null
    fluorine: Decimal | null
    iodine: Decimal | null
    mannitol: Decimal | null
    sorbitol: Decimal | null
    xylitol: Decimal | null
    all_sugar_alcohols: Decimal | null
    glucose: Decimal | null
    fructose: Decimal | null
    galactose: Decimal | null
    monosaccharides: Decimal | null
    sucrose: Decimal | null
    maltose: Decimal | null
    lactose: Decimal | null
    disaccharides: Decimal | null
    oligosaccharides_resorbable: Decimal | null
    oligosaccharides_non_resorbable: Decimal | null
    glycogen: Decimal | null
    starch: Decimal | null
    polysaccharides: Decimal | null
    poly_pentoses: Decimal | null
    poly_hexoses: Decimal | null
    poly_uronic_acids: Decimal | null
    cellulose: Decimal | null
    lignin: Decimal | null
    water_soluble_dietary_fiber: Decimal | null
    water_insoluble_dietary_fiber: Decimal | null
    isoleucine: Decimal | null
    leucine: Decimal | null
    lysine: Decimal | null
    methionine: Decimal | null
    cysteine: Decimal | null
    phenylalanine: Decimal | null
    tyrosine: Decimal | null
    threonine: Decimal | null
    tryptophan: Decimal | null
    valine: Decimal | null
    arginine: Decimal | null
    histidine: Decimal | null
    essential_amino_acids: Decimal | null
    alanine: Decimal | null
    aspartic_acid: Decimal | null
    glutamic_acid: Decimal | null
    glycine: Decimal | null
    proline: Decimal | null
    serine: Decimal | null
    non_essential_amino_acids: Decimal | null
    vegetable_protein: Decimal | null
    uric_acid: Decimal | null
    purine_nitrogen: Decimal | null
    butyric_acid: Decimal | null
    capronic_acid: Decimal | null
    caprylic_acid: Decimal | null
    caprinic_acid: Decimal | null
    lauric_acid: Decimal | null
    myristic_acid: Decimal | null
    pentadecanoic_acid: Decimal | null
    palmitic_acid: Decimal | null
    margaric_acid: Decimal | null
    stearic_acid: Decimal | null
    arachidic_acid: Decimal | null
    behenic_acid: Decimal | null
    lignoceric_acid: Decimal | null
    saturated_fatty_acids: Decimal | null
    tetradecenoic_acid: Decimal | null
    pentadecenoic_acid: Decimal | null
    palmitoleic_acid: Decimal | null
    heptadecenoic_acid: Decimal | null
    oleic_acid: Decimal | null
    eicosenoic_acid: Decimal | null
    erucic_acid: Decimal | null
    selacholeic_acid: Decimal | null
    monounsaturated_fatty_acids: Decimal | null
    hexadecadienoic_acid: Decimal | null
    hexadecatetraenoic_acid: Decimal | null
    linoleic_acid: Decimal | null
    linolenic_acid: Decimal | null
    stearidonic_acid: Decimal | null
    nonadecatrienoic_acid: Decimal | null
    eicosadienoic_acid: Decimal | null
    eicosatrienoic_acid: Decimal | null
    arachidonic_acid: Decimal | null
    eicosapentaenoic_acid: Decimal | null
    docosadienoic_acid: Decimal | null
    docosatrienoic_acid: Decimal | null
    docosatetraenoic_acid: Decimal | null
    docosapentaenoic_acid: Decimal | null
    docosahexaenoic_acid: Decimal | null
    polyunsaturated_fatty_acids: Decimal | null
    short_chain_fatty_acids: Decimal | null
    medium_chain_fatty_acids: Decimal | null
    long_chain_fatty_acids: Decimal | null
    glycerol_and_lipoids: Decimal | null
    cholesterol: Decimal | null
    bread_units: Decimal | null
    nacl: Decimal | null
  }

  export type NutritionMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    energy_kj: Decimal | null
    energy_kcal: Decimal | null
    water: Decimal | null
    protein: Decimal | null
    fat: Decimal | null
    carbohydrate: Decimal | null
    dietary_fiber: Decimal | null
    minerals: Decimal | null
    organic_acids: Decimal | null
    alcohol: Decimal | null
    vitamin_a: Decimal | null
    retinol: Decimal | null
    carotene: Decimal | null
    vitamin_d: Decimal | null
    vitamin_e_eq: Decimal | null
    vitamin_e: Decimal | null
    vitamin_k: Decimal | null
    vitamin_b1: Decimal | null
    vitamin_b2: Decimal | null
    niacine: Decimal | null
    niacine_equiv: Decimal | null
    pantothenic_acid: Decimal | null
    vitamin_b6: Decimal | null
    biotine: Decimal | null
    folic_acid_eq: Decimal | null
    total_folic_acid: Decimal | null
    free_folic_acid: Decimal | null
    vitamin_b12: Decimal | null
    vitamin_c: Decimal | null
    sodium: Decimal | null
    potassium: Decimal | null
    calcium: Decimal | null
    magnesium: Decimal | null
    phosphorus: Decimal | null
    sulfur: Decimal | null
    chlorine: Decimal | null
    iron: Decimal | null
    zinc: Decimal | null
    copper: Decimal | null
    manganese: Decimal | null
    fluorine: Decimal | null
    iodine: Decimal | null
    mannitol: Decimal | null
    sorbitol: Decimal | null
    xylitol: Decimal | null
    all_sugar_alcohols: Decimal | null
    glucose: Decimal | null
    fructose: Decimal | null
    galactose: Decimal | null
    monosaccharides: Decimal | null
    sucrose: Decimal | null
    maltose: Decimal | null
    lactose: Decimal | null
    disaccharides: Decimal | null
    oligosaccharides_resorbable: Decimal | null
    oligosaccharides_non_resorbable: Decimal | null
    glycogen: Decimal | null
    starch: Decimal | null
    polysaccharides: Decimal | null
    poly_pentoses: Decimal | null
    poly_hexoses: Decimal | null
    poly_uronic_acids: Decimal | null
    cellulose: Decimal | null
    lignin: Decimal | null
    water_soluble_dietary_fiber: Decimal | null
    water_insoluble_dietary_fiber: Decimal | null
    isoleucine: Decimal | null
    leucine: Decimal | null
    lysine: Decimal | null
    methionine: Decimal | null
    cysteine: Decimal | null
    phenylalanine: Decimal | null
    tyrosine: Decimal | null
    threonine: Decimal | null
    tryptophan: Decimal | null
    valine: Decimal | null
    arginine: Decimal | null
    histidine: Decimal | null
    essential_amino_acids: Decimal | null
    alanine: Decimal | null
    aspartic_acid: Decimal | null
    glutamic_acid: Decimal | null
    glycine: Decimal | null
    proline: Decimal | null
    serine: Decimal | null
    non_essential_amino_acids: Decimal | null
    vegetable_protein: Decimal | null
    uric_acid: Decimal | null
    purine_nitrogen: Decimal | null
    butyric_acid: Decimal | null
    capronic_acid: Decimal | null
    caprylic_acid: Decimal | null
    caprinic_acid: Decimal | null
    lauric_acid: Decimal | null
    myristic_acid: Decimal | null
    pentadecanoic_acid: Decimal | null
    palmitic_acid: Decimal | null
    margaric_acid: Decimal | null
    stearic_acid: Decimal | null
    arachidic_acid: Decimal | null
    behenic_acid: Decimal | null
    lignoceric_acid: Decimal | null
    saturated_fatty_acids: Decimal | null
    tetradecenoic_acid: Decimal | null
    pentadecenoic_acid: Decimal | null
    palmitoleic_acid: Decimal | null
    heptadecenoic_acid: Decimal | null
    oleic_acid: Decimal | null
    eicosenoic_acid: Decimal | null
    erucic_acid: Decimal | null
    selacholeic_acid: Decimal | null
    monounsaturated_fatty_acids: Decimal | null
    hexadecadienoic_acid: Decimal | null
    hexadecatetraenoic_acid: Decimal | null
    linoleic_acid: Decimal | null
    linolenic_acid: Decimal | null
    stearidonic_acid: Decimal | null
    nonadecatrienoic_acid: Decimal | null
    eicosadienoic_acid: Decimal | null
    eicosatrienoic_acid: Decimal | null
    arachidonic_acid: Decimal | null
    eicosapentaenoic_acid: Decimal | null
    docosadienoic_acid: Decimal | null
    docosatrienoic_acid: Decimal | null
    docosatetraenoic_acid: Decimal | null
    docosapentaenoic_acid: Decimal | null
    docosahexaenoic_acid: Decimal | null
    polyunsaturated_fatty_acids: Decimal | null
    short_chain_fatty_acids: Decimal | null
    medium_chain_fatty_acids: Decimal | null
    long_chain_fatty_acids: Decimal | null
    glycerol_and_lipoids: Decimal | null
    cholesterol: Decimal | null
    bread_units: Decimal | null
    nacl: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NutritionMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    energy_kj: Decimal | null
    energy_kcal: Decimal | null
    water: Decimal | null
    protein: Decimal | null
    fat: Decimal | null
    carbohydrate: Decimal | null
    dietary_fiber: Decimal | null
    minerals: Decimal | null
    organic_acids: Decimal | null
    alcohol: Decimal | null
    vitamin_a: Decimal | null
    retinol: Decimal | null
    carotene: Decimal | null
    vitamin_d: Decimal | null
    vitamin_e_eq: Decimal | null
    vitamin_e: Decimal | null
    vitamin_k: Decimal | null
    vitamin_b1: Decimal | null
    vitamin_b2: Decimal | null
    niacine: Decimal | null
    niacine_equiv: Decimal | null
    pantothenic_acid: Decimal | null
    vitamin_b6: Decimal | null
    biotine: Decimal | null
    folic_acid_eq: Decimal | null
    total_folic_acid: Decimal | null
    free_folic_acid: Decimal | null
    vitamin_b12: Decimal | null
    vitamin_c: Decimal | null
    sodium: Decimal | null
    potassium: Decimal | null
    calcium: Decimal | null
    magnesium: Decimal | null
    phosphorus: Decimal | null
    sulfur: Decimal | null
    chlorine: Decimal | null
    iron: Decimal | null
    zinc: Decimal | null
    copper: Decimal | null
    manganese: Decimal | null
    fluorine: Decimal | null
    iodine: Decimal | null
    mannitol: Decimal | null
    sorbitol: Decimal | null
    xylitol: Decimal | null
    all_sugar_alcohols: Decimal | null
    glucose: Decimal | null
    fructose: Decimal | null
    galactose: Decimal | null
    monosaccharides: Decimal | null
    sucrose: Decimal | null
    maltose: Decimal | null
    lactose: Decimal | null
    disaccharides: Decimal | null
    oligosaccharides_resorbable: Decimal | null
    oligosaccharides_non_resorbable: Decimal | null
    glycogen: Decimal | null
    starch: Decimal | null
    polysaccharides: Decimal | null
    poly_pentoses: Decimal | null
    poly_hexoses: Decimal | null
    poly_uronic_acids: Decimal | null
    cellulose: Decimal | null
    lignin: Decimal | null
    water_soluble_dietary_fiber: Decimal | null
    water_insoluble_dietary_fiber: Decimal | null
    isoleucine: Decimal | null
    leucine: Decimal | null
    lysine: Decimal | null
    methionine: Decimal | null
    cysteine: Decimal | null
    phenylalanine: Decimal | null
    tyrosine: Decimal | null
    threonine: Decimal | null
    tryptophan: Decimal | null
    valine: Decimal | null
    arginine: Decimal | null
    histidine: Decimal | null
    essential_amino_acids: Decimal | null
    alanine: Decimal | null
    aspartic_acid: Decimal | null
    glutamic_acid: Decimal | null
    glycine: Decimal | null
    proline: Decimal | null
    serine: Decimal | null
    non_essential_amino_acids: Decimal | null
    vegetable_protein: Decimal | null
    uric_acid: Decimal | null
    purine_nitrogen: Decimal | null
    butyric_acid: Decimal | null
    capronic_acid: Decimal | null
    caprylic_acid: Decimal | null
    caprinic_acid: Decimal | null
    lauric_acid: Decimal | null
    myristic_acid: Decimal | null
    pentadecanoic_acid: Decimal | null
    palmitic_acid: Decimal | null
    margaric_acid: Decimal | null
    stearic_acid: Decimal | null
    arachidic_acid: Decimal | null
    behenic_acid: Decimal | null
    lignoceric_acid: Decimal | null
    saturated_fatty_acids: Decimal | null
    tetradecenoic_acid: Decimal | null
    pentadecenoic_acid: Decimal | null
    palmitoleic_acid: Decimal | null
    heptadecenoic_acid: Decimal | null
    oleic_acid: Decimal | null
    eicosenoic_acid: Decimal | null
    erucic_acid: Decimal | null
    selacholeic_acid: Decimal | null
    monounsaturated_fatty_acids: Decimal | null
    hexadecadienoic_acid: Decimal | null
    hexadecatetraenoic_acid: Decimal | null
    linoleic_acid: Decimal | null
    linolenic_acid: Decimal | null
    stearidonic_acid: Decimal | null
    nonadecatrienoic_acid: Decimal | null
    eicosadienoic_acid: Decimal | null
    eicosatrienoic_acid: Decimal | null
    arachidonic_acid: Decimal | null
    eicosapentaenoic_acid: Decimal | null
    docosadienoic_acid: Decimal | null
    docosatrienoic_acid: Decimal | null
    docosatetraenoic_acid: Decimal | null
    docosapentaenoic_acid: Decimal | null
    docosahexaenoic_acid: Decimal | null
    polyunsaturated_fatty_acids: Decimal | null
    short_chain_fatty_acids: Decimal | null
    medium_chain_fatty_acids: Decimal | null
    long_chain_fatty_acids: Decimal | null
    glycerol_and_lipoids: Decimal | null
    cholesterol: Decimal | null
    bread_units: Decimal | null
    nacl: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NutritionCountAggregateOutputType = {
    id: number
    code: number
    name: number
    energy_kj: number
    energy_kcal: number
    water: number
    protein: number
    fat: number
    carbohydrate: number
    dietary_fiber: number
    minerals: number
    organic_acids: number
    alcohol: number
    vitamin_a: number
    retinol: number
    carotene: number
    vitamin_d: number
    vitamin_e_eq: number
    vitamin_e: number
    vitamin_k: number
    vitamin_b1: number
    vitamin_b2: number
    niacine: number
    niacine_equiv: number
    pantothenic_acid: number
    vitamin_b6: number
    biotine: number
    folic_acid_eq: number
    total_folic_acid: number
    free_folic_acid: number
    vitamin_b12: number
    vitamin_c: number
    sodium: number
    potassium: number
    calcium: number
    magnesium: number
    phosphorus: number
    sulfur: number
    chlorine: number
    iron: number
    zinc: number
    copper: number
    manganese: number
    fluorine: number
    iodine: number
    mannitol: number
    sorbitol: number
    xylitol: number
    all_sugar_alcohols: number
    glucose: number
    fructose: number
    galactose: number
    monosaccharides: number
    sucrose: number
    maltose: number
    lactose: number
    disaccharides: number
    oligosaccharides_resorbable: number
    oligosaccharides_non_resorbable: number
    glycogen: number
    starch: number
    polysaccharides: number
    poly_pentoses: number
    poly_hexoses: number
    poly_uronic_acids: number
    cellulose: number
    lignin: number
    water_soluble_dietary_fiber: number
    water_insoluble_dietary_fiber: number
    isoleucine: number
    leucine: number
    lysine: number
    methionine: number
    cysteine: number
    phenylalanine: number
    tyrosine: number
    threonine: number
    tryptophan: number
    valine: number
    arginine: number
    histidine: number
    essential_amino_acids: number
    alanine: number
    aspartic_acid: number
    glutamic_acid: number
    glycine: number
    proline: number
    serine: number
    non_essential_amino_acids: number
    vegetable_protein: number
    uric_acid: number
    purine_nitrogen: number
    butyric_acid: number
    capronic_acid: number
    caprylic_acid: number
    caprinic_acid: number
    lauric_acid: number
    myristic_acid: number
    pentadecanoic_acid: number
    palmitic_acid: number
    margaric_acid: number
    stearic_acid: number
    arachidic_acid: number
    behenic_acid: number
    lignoceric_acid: number
    saturated_fatty_acids: number
    tetradecenoic_acid: number
    pentadecenoic_acid: number
    palmitoleic_acid: number
    heptadecenoic_acid: number
    oleic_acid: number
    eicosenoic_acid: number
    erucic_acid: number
    selacholeic_acid: number
    monounsaturated_fatty_acids: number
    hexadecadienoic_acid: number
    hexadecatetraenoic_acid: number
    linoleic_acid: number
    linolenic_acid: number
    stearidonic_acid: number
    nonadecatrienoic_acid: number
    eicosadienoic_acid: number
    eicosatrienoic_acid: number
    arachidonic_acid: number
    eicosapentaenoic_acid: number
    docosadienoic_acid: number
    docosatrienoic_acid: number
    docosatetraenoic_acid: number
    docosapentaenoic_acid: number
    docosahexaenoic_acid: number
    polyunsaturated_fatty_acids: number
    short_chain_fatty_acids: number
    medium_chain_fatty_acids: number
    long_chain_fatty_acids: number
    glycerol_and_lipoids: number
    cholesterol: number
    bread_units: number
    nacl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NutritionAvgAggregateInputType = {
    id?: true
    energy_kj?: true
    energy_kcal?: true
    water?: true
    protein?: true
    fat?: true
    carbohydrate?: true
    dietary_fiber?: true
    minerals?: true
    organic_acids?: true
    alcohol?: true
    vitamin_a?: true
    retinol?: true
    carotene?: true
    vitamin_d?: true
    vitamin_e_eq?: true
    vitamin_e?: true
    vitamin_k?: true
    vitamin_b1?: true
    vitamin_b2?: true
    niacine?: true
    niacine_equiv?: true
    pantothenic_acid?: true
    vitamin_b6?: true
    biotine?: true
    folic_acid_eq?: true
    total_folic_acid?: true
    free_folic_acid?: true
    vitamin_b12?: true
    vitamin_c?: true
    sodium?: true
    potassium?: true
    calcium?: true
    magnesium?: true
    phosphorus?: true
    sulfur?: true
    chlorine?: true
    iron?: true
    zinc?: true
    copper?: true
    manganese?: true
    fluorine?: true
    iodine?: true
    mannitol?: true
    sorbitol?: true
    xylitol?: true
    all_sugar_alcohols?: true
    glucose?: true
    fructose?: true
    galactose?: true
    monosaccharides?: true
    sucrose?: true
    maltose?: true
    lactose?: true
    disaccharides?: true
    oligosaccharides_resorbable?: true
    oligosaccharides_non_resorbable?: true
    glycogen?: true
    starch?: true
    polysaccharides?: true
    poly_pentoses?: true
    poly_hexoses?: true
    poly_uronic_acids?: true
    cellulose?: true
    lignin?: true
    water_soluble_dietary_fiber?: true
    water_insoluble_dietary_fiber?: true
    isoleucine?: true
    leucine?: true
    lysine?: true
    methionine?: true
    cysteine?: true
    phenylalanine?: true
    tyrosine?: true
    threonine?: true
    tryptophan?: true
    valine?: true
    arginine?: true
    histidine?: true
    essential_amino_acids?: true
    alanine?: true
    aspartic_acid?: true
    glutamic_acid?: true
    glycine?: true
    proline?: true
    serine?: true
    non_essential_amino_acids?: true
    vegetable_protein?: true
    uric_acid?: true
    purine_nitrogen?: true
    butyric_acid?: true
    capronic_acid?: true
    caprylic_acid?: true
    caprinic_acid?: true
    lauric_acid?: true
    myristic_acid?: true
    pentadecanoic_acid?: true
    palmitic_acid?: true
    margaric_acid?: true
    stearic_acid?: true
    arachidic_acid?: true
    behenic_acid?: true
    lignoceric_acid?: true
    saturated_fatty_acids?: true
    tetradecenoic_acid?: true
    pentadecenoic_acid?: true
    palmitoleic_acid?: true
    heptadecenoic_acid?: true
    oleic_acid?: true
    eicosenoic_acid?: true
    erucic_acid?: true
    selacholeic_acid?: true
    monounsaturated_fatty_acids?: true
    hexadecadienoic_acid?: true
    hexadecatetraenoic_acid?: true
    linoleic_acid?: true
    linolenic_acid?: true
    stearidonic_acid?: true
    nonadecatrienoic_acid?: true
    eicosadienoic_acid?: true
    eicosatrienoic_acid?: true
    arachidonic_acid?: true
    eicosapentaenoic_acid?: true
    docosadienoic_acid?: true
    docosatrienoic_acid?: true
    docosatetraenoic_acid?: true
    docosapentaenoic_acid?: true
    docosahexaenoic_acid?: true
    polyunsaturated_fatty_acids?: true
    short_chain_fatty_acids?: true
    medium_chain_fatty_acids?: true
    long_chain_fatty_acids?: true
    glycerol_and_lipoids?: true
    cholesterol?: true
    bread_units?: true
    nacl?: true
  }

  export type NutritionSumAggregateInputType = {
    id?: true
    energy_kj?: true
    energy_kcal?: true
    water?: true
    protein?: true
    fat?: true
    carbohydrate?: true
    dietary_fiber?: true
    minerals?: true
    organic_acids?: true
    alcohol?: true
    vitamin_a?: true
    retinol?: true
    carotene?: true
    vitamin_d?: true
    vitamin_e_eq?: true
    vitamin_e?: true
    vitamin_k?: true
    vitamin_b1?: true
    vitamin_b2?: true
    niacine?: true
    niacine_equiv?: true
    pantothenic_acid?: true
    vitamin_b6?: true
    biotine?: true
    folic_acid_eq?: true
    total_folic_acid?: true
    free_folic_acid?: true
    vitamin_b12?: true
    vitamin_c?: true
    sodium?: true
    potassium?: true
    calcium?: true
    magnesium?: true
    phosphorus?: true
    sulfur?: true
    chlorine?: true
    iron?: true
    zinc?: true
    copper?: true
    manganese?: true
    fluorine?: true
    iodine?: true
    mannitol?: true
    sorbitol?: true
    xylitol?: true
    all_sugar_alcohols?: true
    glucose?: true
    fructose?: true
    galactose?: true
    monosaccharides?: true
    sucrose?: true
    maltose?: true
    lactose?: true
    disaccharides?: true
    oligosaccharides_resorbable?: true
    oligosaccharides_non_resorbable?: true
    glycogen?: true
    starch?: true
    polysaccharides?: true
    poly_pentoses?: true
    poly_hexoses?: true
    poly_uronic_acids?: true
    cellulose?: true
    lignin?: true
    water_soluble_dietary_fiber?: true
    water_insoluble_dietary_fiber?: true
    isoleucine?: true
    leucine?: true
    lysine?: true
    methionine?: true
    cysteine?: true
    phenylalanine?: true
    tyrosine?: true
    threonine?: true
    tryptophan?: true
    valine?: true
    arginine?: true
    histidine?: true
    essential_amino_acids?: true
    alanine?: true
    aspartic_acid?: true
    glutamic_acid?: true
    glycine?: true
    proline?: true
    serine?: true
    non_essential_amino_acids?: true
    vegetable_protein?: true
    uric_acid?: true
    purine_nitrogen?: true
    butyric_acid?: true
    capronic_acid?: true
    caprylic_acid?: true
    caprinic_acid?: true
    lauric_acid?: true
    myristic_acid?: true
    pentadecanoic_acid?: true
    palmitic_acid?: true
    margaric_acid?: true
    stearic_acid?: true
    arachidic_acid?: true
    behenic_acid?: true
    lignoceric_acid?: true
    saturated_fatty_acids?: true
    tetradecenoic_acid?: true
    pentadecenoic_acid?: true
    palmitoleic_acid?: true
    heptadecenoic_acid?: true
    oleic_acid?: true
    eicosenoic_acid?: true
    erucic_acid?: true
    selacholeic_acid?: true
    monounsaturated_fatty_acids?: true
    hexadecadienoic_acid?: true
    hexadecatetraenoic_acid?: true
    linoleic_acid?: true
    linolenic_acid?: true
    stearidonic_acid?: true
    nonadecatrienoic_acid?: true
    eicosadienoic_acid?: true
    eicosatrienoic_acid?: true
    arachidonic_acid?: true
    eicosapentaenoic_acid?: true
    docosadienoic_acid?: true
    docosatrienoic_acid?: true
    docosatetraenoic_acid?: true
    docosapentaenoic_acid?: true
    docosahexaenoic_acid?: true
    polyunsaturated_fatty_acids?: true
    short_chain_fatty_acids?: true
    medium_chain_fatty_acids?: true
    long_chain_fatty_acids?: true
    glycerol_and_lipoids?: true
    cholesterol?: true
    bread_units?: true
    nacl?: true
  }

  export type NutritionMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    energy_kj?: true
    energy_kcal?: true
    water?: true
    protein?: true
    fat?: true
    carbohydrate?: true
    dietary_fiber?: true
    minerals?: true
    organic_acids?: true
    alcohol?: true
    vitamin_a?: true
    retinol?: true
    carotene?: true
    vitamin_d?: true
    vitamin_e_eq?: true
    vitamin_e?: true
    vitamin_k?: true
    vitamin_b1?: true
    vitamin_b2?: true
    niacine?: true
    niacine_equiv?: true
    pantothenic_acid?: true
    vitamin_b6?: true
    biotine?: true
    folic_acid_eq?: true
    total_folic_acid?: true
    free_folic_acid?: true
    vitamin_b12?: true
    vitamin_c?: true
    sodium?: true
    potassium?: true
    calcium?: true
    magnesium?: true
    phosphorus?: true
    sulfur?: true
    chlorine?: true
    iron?: true
    zinc?: true
    copper?: true
    manganese?: true
    fluorine?: true
    iodine?: true
    mannitol?: true
    sorbitol?: true
    xylitol?: true
    all_sugar_alcohols?: true
    glucose?: true
    fructose?: true
    galactose?: true
    monosaccharides?: true
    sucrose?: true
    maltose?: true
    lactose?: true
    disaccharides?: true
    oligosaccharides_resorbable?: true
    oligosaccharides_non_resorbable?: true
    glycogen?: true
    starch?: true
    polysaccharides?: true
    poly_pentoses?: true
    poly_hexoses?: true
    poly_uronic_acids?: true
    cellulose?: true
    lignin?: true
    water_soluble_dietary_fiber?: true
    water_insoluble_dietary_fiber?: true
    isoleucine?: true
    leucine?: true
    lysine?: true
    methionine?: true
    cysteine?: true
    phenylalanine?: true
    tyrosine?: true
    threonine?: true
    tryptophan?: true
    valine?: true
    arginine?: true
    histidine?: true
    essential_amino_acids?: true
    alanine?: true
    aspartic_acid?: true
    glutamic_acid?: true
    glycine?: true
    proline?: true
    serine?: true
    non_essential_amino_acids?: true
    vegetable_protein?: true
    uric_acid?: true
    purine_nitrogen?: true
    butyric_acid?: true
    capronic_acid?: true
    caprylic_acid?: true
    caprinic_acid?: true
    lauric_acid?: true
    myristic_acid?: true
    pentadecanoic_acid?: true
    palmitic_acid?: true
    margaric_acid?: true
    stearic_acid?: true
    arachidic_acid?: true
    behenic_acid?: true
    lignoceric_acid?: true
    saturated_fatty_acids?: true
    tetradecenoic_acid?: true
    pentadecenoic_acid?: true
    palmitoleic_acid?: true
    heptadecenoic_acid?: true
    oleic_acid?: true
    eicosenoic_acid?: true
    erucic_acid?: true
    selacholeic_acid?: true
    monounsaturated_fatty_acids?: true
    hexadecadienoic_acid?: true
    hexadecatetraenoic_acid?: true
    linoleic_acid?: true
    linolenic_acid?: true
    stearidonic_acid?: true
    nonadecatrienoic_acid?: true
    eicosadienoic_acid?: true
    eicosatrienoic_acid?: true
    arachidonic_acid?: true
    eicosapentaenoic_acid?: true
    docosadienoic_acid?: true
    docosatrienoic_acid?: true
    docosatetraenoic_acid?: true
    docosapentaenoic_acid?: true
    docosahexaenoic_acid?: true
    polyunsaturated_fatty_acids?: true
    short_chain_fatty_acids?: true
    medium_chain_fatty_acids?: true
    long_chain_fatty_acids?: true
    glycerol_and_lipoids?: true
    cholesterol?: true
    bread_units?: true
    nacl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NutritionMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    energy_kj?: true
    energy_kcal?: true
    water?: true
    protein?: true
    fat?: true
    carbohydrate?: true
    dietary_fiber?: true
    minerals?: true
    organic_acids?: true
    alcohol?: true
    vitamin_a?: true
    retinol?: true
    carotene?: true
    vitamin_d?: true
    vitamin_e_eq?: true
    vitamin_e?: true
    vitamin_k?: true
    vitamin_b1?: true
    vitamin_b2?: true
    niacine?: true
    niacine_equiv?: true
    pantothenic_acid?: true
    vitamin_b6?: true
    biotine?: true
    folic_acid_eq?: true
    total_folic_acid?: true
    free_folic_acid?: true
    vitamin_b12?: true
    vitamin_c?: true
    sodium?: true
    potassium?: true
    calcium?: true
    magnesium?: true
    phosphorus?: true
    sulfur?: true
    chlorine?: true
    iron?: true
    zinc?: true
    copper?: true
    manganese?: true
    fluorine?: true
    iodine?: true
    mannitol?: true
    sorbitol?: true
    xylitol?: true
    all_sugar_alcohols?: true
    glucose?: true
    fructose?: true
    galactose?: true
    monosaccharides?: true
    sucrose?: true
    maltose?: true
    lactose?: true
    disaccharides?: true
    oligosaccharides_resorbable?: true
    oligosaccharides_non_resorbable?: true
    glycogen?: true
    starch?: true
    polysaccharides?: true
    poly_pentoses?: true
    poly_hexoses?: true
    poly_uronic_acids?: true
    cellulose?: true
    lignin?: true
    water_soluble_dietary_fiber?: true
    water_insoluble_dietary_fiber?: true
    isoleucine?: true
    leucine?: true
    lysine?: true
    methionine?: true
    cysteine?: true
    phenylalanine?: true
    tyrosine?: true
    threonine?: true
    tryptophan?: true
    valine?: true
    arginine?: true
    histidine?: true
    essential_amino_acids?: true
    alanine?: true
    aspartic_acid?: true
    glutamic_acid?: true
    glycine?: true
    proline?: true
    serine?: true
    non_essential_amino_acids?: true
    vegetable_protein?: true
    uric_acid?: true
    purine_nitrogen?: true
    butyric_acid?: true
    capronic_acid?: true
    caprylic_acid?: true
    caprinic_acid?: true
    lauric_acid?: true
    myristic_acid?: true
    pentadecanoic_acid?: true
    palmitic_acid?: true
    margaric_acid?: true
    stearic_acid?: true
    arachidic_acid?: true
    behenic_acid?: true
    lignoceric_acid?: true
    saturated_fatty_acids?: true
    tetradecenoic_acid?: true
    pentadecenoic_acid?: true
    palmitoleic_acid?: true
    heptadecenoic_acid?: true
    oleic_acid?: true
    eicosenoic_acid?: true
    erucic_acid?: true
    selacholeic_acid?: true
    monounsaturated_fatty_acids?: true
    hexadecadienoic_acid?: true
    hexadecatetraenoic_acid?: true
    linoleic_acid?: true
    linolenic_acid?: true
    stearidonic_acid?: true
    nonadecatrienoic_acid?: true
    eicosadienoic_acid?: true
    eicosatrienoic_acid?: true
    arachidonic_acid?: true
    eicosapentaenoic_acid?: true
    docosadienoic_acid?: true
    docosatrienoic_acid?: true
    docosatetraenoic_acid?: true
    docosapentaenoic_acid?: true
    docosahexaenoic_acid?: true
    polyunsaturated_fatty_acids?: true
    short_chain_fatty_acids?: true
    medium_chain_fatty_acids?: true
    long_chain_fatty_acids?: true
    glycerol_and_lipoids?: true
    cholesterol?: true
    bread_units?: true
    nacl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NutritionCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    energy_kj?: true
    energy_kcal?: true
    water?: true
    protein?: true
    fat?: true
    carbohydrate?: true
    dietary_fiber?: true
    minerals?: true
    organic_acids?: true
    alcohol?: true
    vitamin_a?: true
    retinol?: true
    carotene?: true
    vitamin_d?: true
    vitamin_e_eq?: true
    vitamin_e?: true
    vitamin_k?: true
    vitamin_b1?: true
    vitamin_b2?: true
    niacine?: true
    niacine_equiv?: true
    pantothenic_acid?: true
    vitamin_b6?: true
    biotine?: true
    folic_acid_eq?: true
    total_folic_acid?: true
    free_folic_acid?: true
    vitamin_b12?: true
    vitamin_c?: true
    sodium?: true
    potassium?: true
    calcium?: true
    magnesium?: true
    phosphorus?: true
    sulfur?: true
    chlorine?: true
    iron?: true
    zinc?: true
    copper?: true
    manganese?: true
    fluorine?: true
    iodine?: true
    mannitol?: true
    sorbitol?: true
    xylitol?: true
    all_sugar_alcohols?: true
    glucose?: true
    fructose?: true
    galactose?: true
    monosaccharides?: true
    sucrose?: true
    maltose?: true
    lactose?: true
    disaccharides?: true
    oligosaccharides_resorbable?: true
    oligosaccharides_non_resorbable?: true
    glycogen?: true
    starch?: true
    polysaccharides?: true
    poly_pentoses?: true
    poly_hexoses?: true
    poly_uronic_acids?: true
    cellulose?: true
    lignin?: true
    water_soluble_dietary_fiber?: true
    water_insoluble_dietary_fiber?: true
    isoleucine?: true
    leucine?: true
    lysine?: true
    methionine?: true
    cysteine?: true
    phenylalanine?: true
    tyrosine?: true
    threonine?: true
    tryptophan?: true
    valine?: true
    arginine?: true
    histidine?: true
    essential_amino_acids?: true
    alanine?: true
    aspartic_acid?: true
    glutamic_acid?: true
    glycine?: true
    proline?: true
    serine?: true
    non_essential_amino_acids?: true
    vegetable_protein?: true
    uric_acid?: true
    purine_nitrogen?: true
    butyric_acid?: true
    capronic_acid?: true
    caprylic_acid?: true
    caprinic_acid?: true
    lauric_acid?: true
    myristic_acid?: true
    pentadecanoic_acid?: true
    palmitic_acid?: true
    margaric_acid?: true
    stearic_acid?: true
    arachidic_acid?: true
    behenic_acid?: true
    lignoceric_acid?: true
    saturated_fatty_acids?: true
    tetradecenoic_acid?: true
    pentadecenoic_acid?: true
    palmitoleic_acid?: true
    heptadecenoic_acid?: true
    oleic_acid?: true
    eicosenoic_acid?: true
    erucic_acid?: true
    selacholeic_acid?: true
    monounsaturated_fatty_acids?: true
    hexadecadienoic_acid?: true
    hexadecatetraenoic_acid?: true
    linoleic_acid?: true
    linolenic_acid?: true
    stearidonic_acid?: true
    nonadecatrienoic_acid?: true
    eicosadienoic_acid?: true
    eicosatrienoic_acid?: true
    arachidonic_acid?: true
    eicosapentaenoic_acid?: true
    docosadienoic_acid?: true
    docosatrienoic_acid?: true
    docosatetraenoic_acid?: true
    docosapentaenoic_acid?: true
    docosahexaenoic_acid?: true
    polyunsaturated_fatty_acids?: true
    short_chain_fatty_acids?: true
    medium_chain_fatty_acids?: true
    long_chain_fatty_acids?: true
    glycerol_and_lipoids?: true
    cholesterol?: true
    bread_units?: true
    nacl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NutritionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nutrition to aggregate.
     */
    where?: NutritionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionOrderByWithRelationInput | NutritionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NutritionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nutritions
    **/
    _count?: true | NutritionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NutritionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NutritionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NutritionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NutritionMaxAggregateInputType
  }

  export type GetNutritionAggregateType<T extends NutritionAggregateArgs> = {
        [P in keyof T & keyof AggregateNutrition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNutrition[P]>
      : GetScalarType<T[P], AggregateNutrition[P]>
  }




  export type NutritionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NutritionWhereInput
    orderBy?: NutritionOrderByWithAggregationInput | NutritionOrderByWithAggregationInput[]
    by: NutritionScalarFieldEnum[] | NutritionScalarFieldEnum
    having?: NutritionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NutritionCountAggregateInputType | true
    _avg?: NutritionAvgAggregateInputType
    _sum?: NutritionSumAggregateInputType
    _min?: NutritionMinAggregateInputType
    _max?: NutritionMaxAggregateInputType
  }

  export type NutritionGroupByOutputType = {
    id: number
    code: string
    name: string
    energy_kj: Decimal | null
    energy_kcal: Decimal | null
    water: Decimal | null
    protein: Decimal | null
    fat: Decimal | null
    carbohydrate: Decimal | null
    dietary_fiber: Decimal | null
    minerals: Decimal | null
    organic_acids: Decimal | null
    alcohol: Decimal | null
    vitamin_a: Decimal | null
    retinol: Decimal | null
    carotene: Decimal | null
    vitamin_d: Decimal | null
    vitamin_e_eq: Decimal | null
    vitamin_e: Decimal | null
    vitamin_k: Decimal | null
    vitamin_b1: Decimal | null
    vitamin_b2: Decimal | null
    niacine: Decimal | null
    niacine_equiv: Decimal | null
    pantothenic_acid: Decimal | null
    vitamin_b6: Decimal | null
    biotine: Decimal | null
    folic_acid_eq: Decimal | null
    total_folic_acid: Decimal | null
    free_folic_acid: Decimal | null
    vitamin_b12: Decimal | null
    vitamin_c: Decimal | null
    sodium: Decimal | null
    potassium: Decimal | null
    calcium: Decimal | null
    magnesium: Decimal | null
    phosphorus: Decimal | null
    sulfur: Decimal | null
    chlorine: Decimal | null
    iron: Decimal | null
    zinc: Decimal | null
    copper: Decimal | null
    manganese: Decimal | null
    fluorine: Decimal | null
    iodine: Decimal | null
    mannitol: Decimal | null
    sorbitol: Decimal | null
    xylitol: Decimal | null
    all_sugar_alcohols: Decimal | null
    glucose: Decimal | null
    fructose: Decimal | null
    galactose: Decimal | null
    monosaccharides: Decimal | null
    sucrose: Decimal | null
    maltose: Decimal | null
    lactose: Decimal | null
    disaccharides: Decimal | null
    oligosaccharides_resorbable: Decimal | null
    oligosaccharides_non_resorbable: Decimal | null
    glycogen: Decimal | null
    starch: Decimal | null
    polysaccharides: Decimal | null
    poly_pentoses: Decimal | null
    poly_hexoses: Decimal | null
    poly_uronic_acids: Decimal | null
    cellulose: Decimal | null
    lignin: Decimal | null
    water_soluble_dietary_fiber: Decimal | null
    water_insoluble_dietary_fiber: Decimal | null
    isoleucine: Decimal | null
    leucine: Decimal | null
    lysine: Decimal | null
    methionine: Decimal | null
    cysteine: Decimal | null
    phenylalanine: Decimal | null
    tyrosine: Decimal | null
    threonine: Decimal | null
    tryptophan: Decimal | null
    valine: Decimal | null
    arginine: Decimal | null
    histidine: Decimal | null
    essential_amino_acids: Decimal | null
    alanine: Decimal | null
    aspartic_acid: Decimal | null
    glutamic_acid: Decimal | null
    glycine: Decimal | null
    proline: Decimal | null
    serine: Decimal | null
    non_essential_amino_acids: Decimal | null
    vegetable_protein: Decimal | null
    uric_acid: Decimal | null
    purine_nitrogen: Decimal | null
    butyric_acid: Decimal | null
    capronic_acid: Decimal | null
    caprylic_acid: Decimal | null
    caprinic_acid: Decimal | null
    lauric_acid: Decimal | null
    myristic_acid: Decimal | null
    pentadecanoic_acid: Decimal | null
    palmitic_acid: Decimal | null
    margaric_acid: Decimal | null
    stearic_acid: Decimal | null
    arachidic_acid: Decimal | null
    behenic_acid: Decimal | null
    lignoceric_acid: Decimal | null
    saturated_fatty_acids: Decimal | null
    tetradecenoic_acid: Decimal | null
    pentadecenoic_acid: Decimal | null
    palmitoleic_acid: Decimal | null
    heptadecenoic_acid: Decimal | null
    oleic_acid: Decimal | null
    eicosenoic_acid: Decimal | null
    erucic_acid: Decimal | null
    selacholeic_acid: Decimal | null
    monounsaturated_fatty_acids: Decimal | null
    hexadecadienoic_acid: Decimal | null
    hexadecatetraenoic_acid: Decimal | null
    linoleic_acid: Decimal | null
    linolenic_acid: Decimal | null
    stearidonic_acid: Decimal | null
    nonadecatrienoic_acid: Decimal | null
    eicosadienoic_acid: Decimal | null
    eicosatrienoic_acid: Decimal | null
    arachidonic_acid: Decimal | null
    eicosapentaenoic_acid: Decimal | null
    docosadienoic_acid: Decimal | null
    docosatrienoic_acid: Decimal | null
    docosatetraenoic_acid: Decimal | null
    docosapentaenoic_acid: Decimal | null
    docosahexaenoic_acid: Decimal | null
    polyunsaturated_fatty_acids: Decimal | null
    short_chain_fatty_acids: Decimal | null
    medium_chain_fatty_acids: Decimal | null
    long_chain_fatty_acids: Decimal | null
    glycerol_and_lipoids: Decimal | null
    cholesterol: Decimal | null
    bread_units: Decimal | null
    nacl: Decimal | null
    createdAt: Date
    updatedAt: Date
    _count: NutritionCountAggregateOutputType | null
    _avg: NutritionAvgAggregateOutputType | null
    _sum: NutritionSumAggregateOutputType | null
    _min: NutritionMinAggregateOutputType | null
    _max: NutritionMaxAggregateOutputType | null
  }

  type GetNutritionGroupByPayload<T extends NutritionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NutritionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NutritionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NutritionGroupByOutputType[P]>
            : GetScalarType<T[P], NutritionGroupByOutputType[P]>
        }
      >
    >


  export type NutritionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    energy_kj?: boolean
    energy_kcal?: boolean
    water?: boolean
    protein?: boolean
    fat?: boolean
    carbohydrate?: boolean
    dietary_fiber?: boolean
    minerals?: boolean
    organic_acids?: boolean
    alcohol?: boolean
    vitamin_a?: boolean
    retinol?: boolean
    carotene?: boolean
    vitamin_d?: boolean
    vitamin_e_eq?: boolean
    vitamin_e?: boolean
    vitamin_k?: boolean
    vitamin_b1?: boolean
    vitamin_b2?: boolean
    niacine?: boolean
    niacine_equiv?: boolean
    pantothenic_acid?: boolean
    vitamin_b6?: boolean
    biotine?: boolean
    folic_acid_eq?: boolean
    total_folic_acid?: boolean
    free_folic_acid?: boolean
    vitamin_b12?: boolean
    vitamin_c?: boolean
    sodium?: boolean
    potassium?: boolean
    calcium?: boolean
    magnesium?: boolean
    phosphorus?: boolean
    sulfur?: boolean
    chlorine?: boolean
    iron?: boolean
    zinc?: boolean
    copper?: boolean
    manganese?: boolean
    fluorine?: boolean
    iodine?: boolean
    mannitol?: boolean
    sorbitol?: boolean
    xylitol?: boolean
    all_sugar_alcohols?: boolean
    glucose?: boolean
    fructose?: boolean
    galactose?: boolean
    monosaccharides?: boolean
    sucrose?: boolean
    maltose?: boolean
    lactose?: boolean
    disaccharides?: boolean
    oligosaccharides_resorbable?: boolean
    oligosaccharides_non_resorbable?: boolean
    glycogen?: boolean
    starch?: boolean
    polysaccharides?: boolean
    poly_pentoses?: boolean
    poly_hexoses?: boolean
    poly_uronic_acids?: boolean
    cellulose?: boolean
    lignin?: boolean
    water_soluble_dietary_fiber?: boolean
    water_insoluble_dietary_fiber?: boolean
    isoleucine?: boolean
    leucine?: boolean
    lysine?: boolean
    methionine?: boolean
    cysteine?: boolean
    phenylalanine?: boolean
    tyrosine?: boolean
    threonine?: boolean
    tryptophan?: boolean
    valine?: boolean
    arginine?: boolean
    histidine?: boolean
    essential_amino_acids?: boolean
    alanine?: boolean
    aspartic_acid?: boolean
    glutamic_acid?: boolean
    glycine?: boolean
    proline?: boolean
    serine?: boolean
    non_essential_amino_acids?: boolean
    vegetable_protein?: boolean
    uric_acid?: boolean
    purine_nitrogen?: boolean
    butyric_acid?: boolean
    capronic_acid?: boolean
    caprylic_acid?: boolean
    caprinic_acid?: boolean
    lauric_acid?: boolean
    myristic_acid?: boolean
    pentadecanoic_acid?: boolean
    palmitic_acid?: boolean
    margaric_acid?: boolean
    stearic_acid?: boolean
    arachidic_acid?: boolean
    behenic_acid?: boolean
    lignoceric_acid?: boolean
    saturated_fatty_acids?: boolean
    tetradecenoic_acid?: boolean
    pentadecenoic_acid?: boolean
    palmitoleic_acid?: boolean
    heptadecenoic_acid?: boolean
    oleic_acid?: boolean
    eicosenoic_acid?: boolean
    erucic_acid?: boolean
    selacholeic_acid?: boolean
    monounsaturated_fatty_acids?: boolean
    hexadecadienoic_acid?: boolean
    hexadecatetraenoic_acid?: boolean
    linoleic_acid?: boolean
    linolenic_acid?: boolean
    stearidonic_acid?: boolean
    nonadecatrienoic_acid?: boolean
    eicosadienoic_acid?: boolean
    eicosatrienoic_acid?: boolean
    arachidonic_acid?: boolean
    eicosapentaenoic_acid?: boolean
    docosadienoic_acid?: boolean
    docosatrienoic_acid?: boolean
    docosatetraenoic_acid?: boolean
    docosapentaenoic_acid?: boolean
    docosahexaenoic_acid?: boolean
    polyunsaturated_fatty_acids?: boolean
    short_chain_fatty_acids?: boolean
    medium_chain_fatty_acids?: boolean
    long_chain_fatty_acids?: boolean
    glycerol_and_lipoids?: boolean
    cholesterol?: boolean
    bread_units?: boolean
    nacl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    daily_meal_plan?: boolean | Nutrition$daily_meal_planArgs<ExtArgs>
    _count?: boolean | NutritionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nutrition"]>

  export type NutritionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    energy_kj?: boolean
    energy_kcal?: boolean
    water?: boolean
    protein?: boolean
    fat?: boolean
    carbohydrate?: boolean
    dietary_fiber?: boolean
    minerals?: boolean
    organic_acids?: boolean
    alcohol?: boolean
    vitamin_a?: boolean
    retinol?: boolean
    carotene?: boolean
    vitamin_d?: boolean
    vitamin_e_eq?: boolean
    vitamin_e?: boolean
    vitamin_k?: boolean
    vitamin_b1?: boolean
    vitamin_b2?: boolean
    niacine?: boolean
    niacine_equiv?: boolean
    pantothenic_acid?: boolean
    vitamin_b6?: boolean
    biotine?: boolean
    folic_acid_eq?: boolean
    total_folic_acid?: boolean
    free_folic_acid?: boolean
    vitamin_b12?: boolean
    vitamin_c?: boolean
    sodium?: boolean
    potassium?: boolean
    calcium?: boolean
    magnesium?: boolean
    phosphorus?: boolean
    sulfur?: boolean
    chlorine?: boolean
    iron?: boolean
    zinc?: boolean
    copper?: boolean
    manganese?: boolean
    fluorine?: boolean
    iodine?: boolean
    mannitol?: boolean
    sorbitol?: boolean
    xylitol?: boolean
    all_sugar_alcohols?: boolean
    glucose?: boolean
    fructose?: boolean
    galactose?: boolean
    monosaccharides?: boolean
    sucrose?: boolean
    maltose?: boolean
    lactose?: boolean
    disaccharides?: boolean
    oligosaccharides_resorbable?: boolean
    oligosaccharides_non_resorbable?: boolean
    glycogen?: boolean
    starch?: boolean
    polysaccharides?: boolean
    poly_pentoses?: boolean
    poly_hexoses?: boolean
    poly_uronic_acids?: boolean
    cellulose?: boolean
    lignin?: boolean
    water_soluble_dietary_fiber?: boolean
    water_insoluble_dietary_fiber?: boolean
    isoleucine?: boolean
    leucine?: boolean
    lysine?: boolean
    methionine?: boolean
    cysteine?: boolean
    phenylalanine?: boolean
    tyrosine?: boolean
    threonine?: boolean
    tryptophan?: boolean
    valine?: boolean
    arginine?: boolean
    histidine?: boolean
    essential_amino_acids?: boolean
    alanine?: boolean
    aspartic_acid?: boolean
    glutamic_acid?: boolean
    glycine?: boolean
    proline?: boolean
    serine?: boolean
    non_essential_amino_acids?: boolean
    vegetable_protein?: boolean
    uric_acid?: boolean
    purine_nitrogen?: boolean
    butyric_acid?: boolean
    capronic_acid?: boolean
    caprylic_acid?: boolean
    caprinic_acid?: boolean
    lauric_acid?: boolean
    myristic_acid?: boolean
    pentadecanoic_acid?: boolean
    palmitic_acid?: boolean
    margaric_acid?: boolean
    stearic_acid?: boolean
    arachidic_acid?: boolean
    behenic_acid?: boolean
    lignoceric_acid?: boolean
    saturated_fatty_acids?: boolean
    tetradecenoic_acid?: boolean
    pentadecenoic_acid?: boolean
    palmitoleic_acid?: boolean
    heptadecenoic_acid?: boolean
    oleic_acid?: boolean
    eicosenoic_acid?: boolean
    erucic_acid?: boolean
    selacholeic_acid?: boolean
    monounsaturated_fatty_acids?: boolean
    hexadecadienoic_acid?: boolean
    hexadecatetraenoic_acid?: boolean
    linoleic_acid?: boolean
    linolenic_acid?: boolean
    stearidonic_acid?: boolean
    nonadecatrienoic_acid?: boolean
    eicosadienoic_acid?: boolean
    eicosatrienoic_acid?: boolean
    arachidonic_acid?: boolean
    eicosapentaenoic_acid?: boolean
    docosadienoic_acid?: boolean
    docosatrienoic_acid?: boolean
    docosatetraenoic_acid?: boolean
    docosapentaenoic_acid?: boolean
    docosahexaenoic_acid?: boolean
    polyunsaturated_fatty_acids?: boolean
    short_chain_fatty_acids?: boolean
    medium_chain_fatty_acids?: boolean
    long_chain_fatty_acids?: boolean
    glycerol_and_lipoids?: boolean
    cholesterol?: boolean
    bread_units?: boolean
    nacl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nutrition"]>

  export type NutritionSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    energy_kj?: boolean
    energy_kcal?: boolean
    water?: boolean
    protein?: boolean
    fat?: boolean
    carbohydrate?: boolean
    dietary_fiber?: boolean
    minerals?: boolean
    organic_acids?: boolean
    alcohol?: boolean
    vitamin_a?: boolean
    retinol?: boolean
    carotene?: boolean
    vitamin_d?: boolean
    vitamin_e_eq?: boolean
    vitamin_e?: boolean
    vitamin_k?: boolean
    vitamin_b1?: boolean
    vitamin_b2?: boolean
    niacine?: boolean
    niacine_equiv?: boolean
    pantothenic_acid?: boolean
    vitamin_b6?: boolean
    biotine?: boolean
    folic_acid_eq?: boolean
    total_folic_acid?: boolean
    free_folic_acid?: boolean
    vitamin_b12?: boolean
    vitamin_c?: boolean
    sodium?: boolean
    potassium?: boolean
    calcium?: boolean
    magnesium?: boolean
    phosphorus?: boolean
    sulfur?: boolean
    chlorine?: boolean
    iron?: boolean
    zinc?: boolean
    copper?: boolean
    manganese?: boolean
    fluorine?: boolean
    iodine?: boolean
    mannitol?: boolean
    sorbitol?: boolean
    xylitol?: boolean
    all_sugar_alcohols?: boolean
    glucose?: boolean
    fructose?: boolean
    galactose?: boolean
    monosaccharides?: boolean
    sucrose?: boolean
    maltose?: boolean
    lactose?: boolean
    disaccharides?: boolean
    oligosaccharides_resorbable?: boolean
    oligosaccharides_non_resorbable?: boolean
    glycogen?: boolean
    starch?: boolean
    polysaccharides?: boolean
    poly_pentoses?: boolean
    poly_hexoses?: boolean
    poly_uronic_acids?: boolean
    cellulose?: boolean
    lignin?: boolean
    water_soluble_dietary_fiber?: boolean
    water_insoluble_dietary_fiber?: boolean
    isoleucine?: boolean
    leucine?: boolean
    lysine?: boolean
    methionine?: boolean
    cysteine?: boolean
    phenylalanine?: boolean
    tyrosine?: boolean
    threonine?: boolean
    tryptophan?: boolean
    valine?: boolean
    arginine?: boolean
    histidine?: boolean
    essential_amino_acids?: boolean
    alanine?: boolean
    aspartic_acid?: boolean
    glutamic_acid?: boolean
    glycine?: boolean
    proline?: boolean
    serine?: boolean
    non_essential_amino_acids?: boolean
    vegetable_protein?: boolean
    uric_acid?: boolean
    purine_nitrogen?: boolean
    butyric_acid?: boolean
    capronic_acid?: boolean
    caprylic_acid?: boolean
    caprinic_acid?: boolean
    lauric_acid?: boolean
    myristic_acid?: boolean
    pentadecanoic_acid?: boolean
    palmitic_acid?: boolean
    margaric_acid?: boolean
    stearic_acid?: boolean
    arachidic_acid?: boolean
    behenic_acid?: boolean
    lignoceric_acid?: boolean
    saturated_fatty_acids?: boolean
    tetradecenoic_acid?: boolean
    pentadecenoic_acid?: boolean
    palmitoleic_acid?: boolean
    heptadecenoic_acid?: boolean
    oleic_acid?: boolean
    eicosenoic_acid?: boolean
    erucic_acid?: boolean
    selacholeic_acid?: boolean
    monounsaturated_fatty_acids?: boolean
    hexadecadienoic_acid?: boolean
    hexadecatetraenoic_acid?: boolean
    linoleic_acid?: boolean
    linolenic_acid?: boolean
    stearidonic_acid?: boolean
    nonadecatrienoic_acid?: boolean
    eicosadienoic_acid?: boolean
    eicosatrienoic_acid?: boolean
    arachidonic_acid?: boolean
    eicosapentaenoic_acid?: boolean
    docosadienoic_acid?: boolean
    docosatrienoic_acid?: boolean
    docosatetraenoic_acid?: boolean
    docosapentaenoic_acid?: boolean
    docosahexaenoic_acid?: boolean
    polyunsaturated_fatty_acids?: boolean
    short_chain_fatty_acids?: boolean
    medium_chain_fatty_acids?: boolean
    long_chain_fatty_acids?: boolean
    glycerol_and_lipoids?: boolean
    cholesterol?: boolean
    bread_units?: boolean
    nacl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NutritionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daily_meal_plan?: boolean | Nutrition$daily_meal_planArgs<ExtArgs>
    _count?: boolean | NutritionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NutritionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NutritionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nutrition"
    objects: {
      daily_meal_plan: Prisma.$DailyMealPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      energy_kj: Prisma.Decimal | null
      energy_kcal: Prisma.Decimal | null
      water: Prisma.Decimal | null
      protein: Prisma.Decimal | null
      fat: Prisma.Decimal | null
      carbohydrate: Prisma.Decimal | null
      dietary_fiber: Prisma.Decimal | null
      minerals: Prisma.Decimal | null
      organic_acids: Prisma.Decimal | null
      alcohol: Prisma.Decimal | null
      vitamin_a: Prisma.Decimal | null
      retinol: Prisma.Decimal | null
      carotene: Prisma.Decimal | null
      vitamin_d: Prisma.Decimal | null
      vitamin_e_eq: Prisma.Decimal | null
      vitamin_e: Prisma.Decimal | null
      vitamin_k: Prisma.Decimal | null
      vitamin_b1: Prisma.Decimal | null
      vitamin_b2: Prisma.Decimal | null
      niacine: Prisma.Decimal | null
      niacine_equiv: Prisma.Decimal | null
      pantothenic_acid: Prisma.Decimal | null
      vitamin_b6: Prisma.Decimal | null
      biotine: Prisma.Decimal | null
      folic_acid_eq: Prisma.Decimal | null
      total_folic_acid: Prisma.Decimal | null
      free_folic_acid: Prisma.Decimal | null
      vitamin_b12: Prisma.Decimal | null
      vitamin_c: Prisma.Decimal | null
      sodium: Prisma.Decimal | null
      potassium: Prisma.Decimal | null
      calcium: Prisma.Decimal | null
      magnesium: Prisma.Decimal | null
      phosphorus: Prisma.Decimal | null
      sulfur: Prisma.Decimal | null
      chlorine: Prisma.Decimal | null
      iron: Prisma.Decimal | null
      zinc: Prisma.Decimal | null
      copper: Prisma.Decimal | null
      manganese: Prisma.Decimal | null
      fluorine: Prisma.Decimal | null
      iodine: Prisma.Decimal | null
      mannitol: Prisma.Decimal | null
      sorbitol: Prisma.Decimal | null
      xylitol: Prisma.Decimal | null
      all_sugar_alcohols: Prisma.Decimal | null
      glucose: Prisma.Decimal | null
      fructose: Prisma.Decimal | null
      galactose: Prisma.Decimal | null
      monosaccharides: Prisma.Decimal | null
      sucrose: Prisma.Decimal | null
      maltose: Prisma.Decimal | null
      lactose: Prisma.Decimal | null
      disaccharides: Prisma.Decimal | null
      oligosaccharides_resorbable: Prisma.Decimal | null
      oligosaccharides_non_resorbable: Prisma.Decimal | null
      glycogen: Prisma.Decimal | null
      starch: Prisma.Decimal | null
      polysaccharides: Prisma.Decimal | null
      poly_pentoses: Prisma.Decimal | null
      poly_hexoses: Prisma.Decimal | null
      poly_uronic_acids: Prisma.Decimal | null
      cellulose: Prisma.Decimal | null
      lignin: Prisma.Decimal | null
      water_soluble_dietary_fiber: Prisma.Decimal | null
      water_insoluble_dietary_fiber: Prisma.Decimal | null
      isoleucine: Prisma.Decimal | null
      leucine: Prisma.Decimal | null
      lysine: Prisma.Decimal | null
      methionine: Prisma.Decimal | null
      cysteine: Prisma.Decimal | null
      phenylalanine: Prisma.Decimal | null
      tyrosine: Prisma.Decimal | null
      threonine: Prisma.Decimal | null
      tryptophan: Prisma.Decimal | null
      valine: Prisma.Decimal | null
      arginine: Prisma.Decimal | null
      histidine: Prisma.Decimal | null
      essential_amino_acids: Prisma.Decimal | null
      alanine: Prisma.Decimal | null
      aspartic_acid: Prisma.Decimal | null
      glutamic_acid: Prisma.Decimal | null
      glycine: Prisma.Decimal | null
      proline: Prisma.Decimal | null
      serine: Prisma.Decimal | null
      non_essential_amino_acids: Prisma.Decimal | null
      vegetable_protein: Prisma.Decimal | null
      uric_acid: Prisma.Decimal | null
      purine_nitrogen: Prisma.Decimal | null
      butyric_acid: Prisma.Decimal | null
      capronic_acid: Prisma.Decimal | null
      caprylic_acid: Prisma.Decimal | null
      caprinic_acid: Prisma.Decimal | null
      lauric_acid: Prisma.Decimal | null
      myristic_acid: Prisma.Decimal | null
      pentadecanoic_acid: Prisma.Decimal | null
      palmitic_acid: Prisma.Decimal | null
      margaric_acid: Prisma.Decimal | null
      stearic_acid: Prisma.Decimal | null
      arachidic_acid: Prisma.Decimal | null
      behenic_acid: Prisma.Decimal | null
      lignoceric_acid: Prisma.Decimal | null
      saturated_fatty_acids: Prisma.Decimal | null
      tetradecenoic_acid: Prisma.Decimal | null
      pentadecenoic_acid: Prisma.Decimal | null
      palmitoleic_acid: Prisma.Decimal | null
      heptadecenoic_acid: Prisma.Decimal | null
      oleic_acid: Prisma.Decimal | null
      eicosenoic_acid: Prisma.Decimal | null
      erucic_acid: Prisma.Decimal | null
      selacholeic_acid: Prisma.Decimal | null
      monounsaturated_fatty_acids: Prisma.Decimal | null
      hexadecadienoic_acid: Prisma.Decimal | null
      hexadecatetraenoic_acid: Prisma.Decimal | null
      linoleic_acid: Prisma.Decimal | null
      linolenic_acid: Prisma.Decimal | null
      stearidonic_acid: Prisma.Decimal | null
      nonadecatrienoic_acid: Prisma.Decimal | null
      eicosadienoic_acid: Prisma.Decimal | null
      eicosatrienoic_acid: Prisma.Decimal | null
      arachidonic_acid: Prisma.Decimal | null
      eicosapentaenoic_acid: Prisma.Decimal | null
      docosadienoic_acid: Prisma.Decimal | null
      docosatrienoic_acid: Prisma.Decimal | null
      docosatetraenoic_acid: Prisma.Decimal | null
      docosapentaenoic_acid: Prisma.Decimal | null
      docosahexaenoic_acid: Prisma.Decimal | null
      polyunsaturated_fatty_acids: Prisma.Decimal | null
      short_chain_fatty_acids: Prisma.Decimal | null
      medium_chain_fatty_acids: Prisma.Decimal | null
      long_chain_fatty_acids: Prisma.Decimal | null
      glycerol_and_lipoids: Prisma.Decimal | null
      cholesterol: Prisma.Decimal | null
      bread_units: Prisma.Decimal | null
      nacl: Prisma.Decimal | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nutrition"]>
    composites: {}
  }

  type NutritionGetPayload<S extends boolean | null | undefined | NutritionDefaultArgs> = $Result.GetResult<Prisma.$NutritionPayload, S>

  type NutritionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NutritionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NutritionCountAggregateInputType | true
    }

  export interface NutritionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nutrition'], meta: { name: 'Nutrition' } }
    /**
     * Find zero or one Nutrition that matches the filter.
     * @param {NutritionFindUniqueArgs} args - Arguments to find a Nutrition
     * @example
     * // Get one Nutrition
     * const nutrition = await prisma.nutrition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NutritionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NutritionFindUniqueArgs<ExtArgs>>
    ): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Nutrition that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NutritionFindUniqueOrThrowArgs} args - Arguments to find a Nutrition
     * @example
     * // Get one Nutrition
     * const nutrition = await prisma.nutrition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NutritionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NutritionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Nutrition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionFindFirstArgs} args - Arguments to find a Nutrition
     * @example
     * // Get one Nutrition
     * const nutrition = await prisma.nutrition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NutritionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NutritionFindFirstArgs<ExtArgs>>
    ): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Nutrition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionFindFirstOrThrowArgs} args - Arguments to find a Nutrition
     * @example
     * // Get one Nutrition
     * const nutrition = await prisma.nutrition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NutritionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NutritionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Nutritions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nutritions
     * const nutritions = await prisma.nutrition.findMany()
     * 
     * // Get first 10 Nutritions
     * const nutritions = await prisma.nutrition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nutritionWithIdOnly = await prisma.nutrition.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NutritionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NutritionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Nutrition.
     * @param {NutritionCreateArgs} args - Arguments to create a Nutrition.
     * @example
     * // Create one Nutrition
     * const Nutrition = await prisma.nutrition.create({
     *   data: {
     *     // ... data to create a Nutrition
     *   }
     * })
     * 
    **/
    create<T extends NutritionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NutritionCreateArgs<ExtArgs>>
    ): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Nutritions.
     * @param {NutritionCreateManyArgs} args - Arguments to create many Nutritions.
     * @example
     * // Create many Nutritions
     * const nutrition = await prisma.nutrition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends NutritionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NutritionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nutritions and returns the data saved in the database.
     * @param {NutritionCreateManyAndReturnArgs} args - Arguments to create many Nutritions.
     * @example
     * // Create many Nutritions
     * const nutrition = await prisma.nutrition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nutritions and only return the `id`
     * const nutritionWithIdOnly = await prisma.nutrition.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends NutritionCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, NutritionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Nutrition.
     * @param {NutritionDeleteArgs} args - Arguments to delete one Nutrition.
     * @example
     * // Delete one Nutrition
     * const Nutrition = await prisma.nutrition.delete({
     *   where: {
     *     // ... filter to delete one Nutrition
     *   }
     * })
     * 
    **/
    delete<T extends NutritionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NutritionDeleteArgs<ExtArgs>>
    ): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Nutrition.
     * @param {NutritionUpdateArgs} args - Arguments to update one Nutrition.
     * @example
     * // Update one Nutrition
     * const nutrition = await prisma.nutrition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NutritionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NutritionUpdateArgs<ExtArgs>>
    ): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Nutritions.
     * @param {NutritionDeleteManyArgs} args - Arguments to filter Nutritions to delete.
     * @example
     * // Delete a few Nutritions
     * const { count } = await prisma.nutrition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NutritionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NutritionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nutritions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nutritions
     * const nutrition = await prisma.nutrition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NutritionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NutritionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Nutrition.
     * @param {NutritionUpsertArgs} args - Arguments to update or create a Nutrition.
     * @example
     * // Update or create a Nutrition
     * const nutrition = await prisma.nutrition.upsert({
     *   create: {
     *     // ... data to create a Nutrition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nutrition we want to update
     *   }
     * })
    **/
    upsert<T extends NutritionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NutritionUpsertArgs<ExtArgs>>
    ): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Nutritions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionCountArgs} args - Arguments to filter Nutritions to count.
     * @example
     * // Count the number of Nutritions
     * const count = await prisma.nutrition.count({
     *   where: {
     *     // ... the filter for the Nutritions we want to count
     *   }
     * })
    **/
    count<T extends NutritionCountArgs>(
      args?: Subset<T, NutritionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NutritionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nutrition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NutritionAggregateArgs>(args: Subset<T, NutritionAggregateArgs>): Prisma.PrismaPromise<GetNutritionAggregateType<T>>

    /**
     * Group by Nutrition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NutritionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NutritionGroupByArgs['orderBy'] }
        : { orderBy?: NutritionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NutritionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNutritionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nutrition model
   */
  readonly fields: NutritionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nutrition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NutritionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    daily_meal_plan<T extends Nutrition$daily_meal_planArgs<ExtArgs> = {}>(args?: Subset<T, Nutrition$daily_meal_planArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMealPlanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Nutrition model
   */ 
  interface NutritionFieldRefs {
    readonly id: FieldRef<"Nutrition", 'Int'>
    readonly code: FieldRef<"Nutrition", 'String'>
    readonly name: FieldRef<"Nutrition", 'String'>
    readonly energy_kj: FieldRef<"Nutrition", 'Decimal'>
    readonly energy_kcal: FieldRef<"Nutrition", 'Decimal'>
    readonly water: FieldRef<"Nutrition", 'Decimal'>
    readonly protein: FieldRef<"Nutrition", 'Decimal'>
    readonly fat: FieldRef<"Nutrition", 'Decimal'>
    readonly carbohydrate: FieldRef<"Nutrition", 'Decimal'>
    readonly dietary_fiber: FieldRef<"Nutrition", 'Decimal'>
    readonly minerals: FieldRef<"Nutrition", 'Decimal'>
    readonly organic_acids: FieldRef<"Nutrition", 'Decimal'>
    readonly alcohol: FieldRef<"Nutrition", 'Decimal'>
    readonly vitamin_a: FieldRef<"Nutrition", 'Decimal'>
    readonly retinol: FieldRef<"Nutrition", 'Decimal'>
    readonly carotene: FieldRef<"Nutrition", 'Decimal'>
    readonly vitamin_d: FieldRef<"Nutrition", 'Decimal'>
    readonly vitamin_e_eq: FieldRef<"Nutrition", 'Decimal'>
    readonly vitamin_e: FieldRef<"Nutrition", 'Decimal'>
    readonly vitamin_k: FieldRef<"Nutrition", 'Decimal'>
    readonly vitamin_b1: FieldRef<"Nutrition", 'Decimal'>
    readonly vitamin_b2: FieldRef<"Nutrition", 'Decimal'>
    readonly niacine: FieldRef<"Nutrition", 'Decimal'>
    readonly niacine_equiv: FieldRef<"Nutrition", 'Decimal'>
    readonly pantothenic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly vitamin_b6: FieldRef<"Nutrition", 'Decimal'>
    readonly biotine: FieldRef<"Nutrition", 'Decimal'>
    readonly folic_acid_eq: FieldRef<"Nutrition", 'Decimal'>
    readonly total_folic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly free_folic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly vitamin_b12: FieldRef<"Nutrition", 'Decimal'>
    readonly vitamin_c: FieldRef<"Nutrition", 'Decimal'>
    readonly sodium: FieldRef<"Nutrition", 'Decimal'>
    readonly potassium: FieldRef<"Nutrition", 'Decimal'>
    readonly calcium: FieldRef<"Nutrition", 'Decimal'>
    readonly magnesium: FieldRef<"Nutrition", 'Decimal'>
    readonly phosphorus: FieldRef<"Nutrition", 'Decimal'>
    readonly sulfur: FieldRef<"Nutrition", 'Decimal'>
    readonly chlorine: FieldRef<"Nutrition", 'Decimal'>
    readonly iron: FieldRef<"Nutrition", 'Decimal'>
    readonly zinc: FieldRef<"Nutrition", 'Decimal'>
    readonly copper: FieldRef<"Nutrition", 'Decimal'>
    readonly manganese: FieldRef<"Nutrition", 'Decimal'>
    readonly fluorine: FieldRef<"Nutrition", 'Decimal'>
    readonly iodine: FieldRef<"Nutrition", 'Decimal'>
    readonly mannitol: FieldRef<"Nutrition", 'Decimal'>
    readonly sorbitol: FieldRef<"Nutrition", 'Decimal'>
    readonly xylitol: FieldRef<"Nutrition", 'Decimal'>
    readonly all_sugar_alcohols: FieldRef<"Nutrition", 'Decimal'>
    readonly glucose: FieldRef<"Nutrition", 'Decimal'>
    readonly fructose: FieldRef<"Nutrition", 'Decimal'>
    readonly galactose: FieldRef<"Nutrition", 'Decimal'>
    readonly monosaccharides: FieldRef<"Nutrition", 'Decimal'>
    readonly sucrose: FieldRef<"Nutrition", 'Decimal'>
    readonly maltose: FieldRef<"Nutrition", 'Decimal'>
    readonly lactose: FieldRef<"Nutrition", 'Decimal'>
    readonly disaccharides: FieldRef<"Nutrition", 'Decimal'>
    readonly oligosaccharides_resorbable: FieldRef<"Nutrition", 'Decimal'>
    readonly oligosaccharides_non_resorbable: FieldRef<"Nutrition", 'Decimal'>
    readonly glycogen: FieldRef<"Nutrition", 'Decimal'>
    readonly starch: FieldRef<"Nutrition", 'Decimal'>
    readonly polysaccharides: FieldRef<"Nutrition", 'Decimal'>
    readonly poly_pentoses: FieldRef<"Nutrition", 'Decimal'>
    readonly poly_hexoses: FieldRef<"Nutrition", 'Decimal'>
    readonly poly_uronic_acids: FieldRef<"Nutrition", 'Decimal'>
    readonly cellulose: FieldRef<"Nutrition", 'Decimal'>
    readonly lignin: FieldRef<"Nutrition", 'Decimal'>
    readonly water_soluble_dietary_fiber: FieldRef<"Nutrition", 'Decimal'>
    readonly water_insoluble_dietary_fiber: FieldRef<"Nutrition", 'Decimal'>
    readonly isoleucine: FieldRef<"Nutrition", 'Decimal'>
    readonly leucine: FieldRef<"Nutrition", 'Decimal'>
    readonly lysine: FieldRef<"Nutrition", 'Decimal'>
    readonly methionine: FieldRef<"Nutrition", 'Decimal'>
    readonly cysteine: FieldRef<"Nutrition", 'Decimal'>
    readonly phenylalanine: FieldRef<"Nutrition", 'Decimal'>
    readonly tyrosine: FieldRef<"Nutrition", 'Decimal'>
    readonly threonine: FieldRef<"Nutrition", 'Decimal'>
    readonly tryptophan: FieldRef<"Nutrition", 'Decimal'>
    readonly valine: FieldRef<"Nutrition", 'Decimal'>
    readonly arginine: FieldRef<"Nutrition", 'Decimal'>
    readonly histidine: FieldRef<"Nutrition", 'Decimal'>
    readonly essential_amino_acids: FieldRef<"Nutrition", 'Decimal'>
    readonly alanine: FieldRef<"Nutrition", 'Decimal'>
    readonly aspartic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly glutamic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly glycine: FieldRef<"Nutrition", 'Decimal'>
    readonly proline: FieldRef<"Nutrition", 'Decimal'>
    readonly serine: FieldRef<"Nutrition", 'Decimal'>
    readonly non_essential_amino_acids: FieldRef<"Nutrition", 'Decimal'>
    readonly vegetable_protein: FieldRef<"Nutrition", 'Decimal'>
    readonly uric_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly purine_nitrogen: FieldRef<"Nutrition", 'Decimal'>
    readonly butyric_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly capronic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly caprylic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly caprinic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly lauric_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly myristic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly pentadecanoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly palmitic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly margaric_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly stearic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly arachidic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly behenic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly lignoceric_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly saturated_fatty_acids: FieldRef<"Nutrition", 'Decimal'>
    readonly tetradecenoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly pentadecenoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly palmitoleic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly heptadecenoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly oleic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly eicosenoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly erucic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly selacholeic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly monounsaturated_fatty_acids: FieldRef<"Nutrition", 'Decimal'>
    readonly hexadecadienoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly hexadecatetraenoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly linoleic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly linolenic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly stearidonic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly nonadecatrienoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly eicosadienoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly eicosatrienoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly arachidonic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly eicosapentaenoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly docosadienoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly docosatrienoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly docosatetraenoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly docosapentaenoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly docosahexaenoic_acid: FieldRef<"Nutrition", 'Decimal'>
    readonly polyunsaturated_fatty_acids: FieldRef<"Nutrition", 'Decimal'>
    readonly short_chain_fatty_acids: FieldRef<"Nutrition", 'Decimal'>
    readonly medium_chain_fatty_acids: FieldRef<"Nutrition", 'Decimal'>
    readonly long_chain_fatty_acids: FieldRef<"Nutrition", 'Decimal'>
    readonly glycerol_and_lipoids: FieldRef<"Nutrition", 'Decimal'>
    readonly cholesterol: FieldRef<"Nutrition", 'Decimal'>
    readonly bread_units: FieldRef<"Nutrition", 'Decimal'>
    readonly nacl: FieldRef<"Nutrition", 'Decimal'>
    readonly createdAt: FieldRef<"Nutrition", 'DateTime'>
    readonly updatedAt: FieldRef<"Nutrition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Nutrition findUnique
   */
  export type NutritionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * Filter, which Nutrition to fetch.
     */
    where: NutritionWhereUniqueInput
  }

  /**
   * Nutrition findUniqueOrThrow
   */
  export type NutritionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * Filter, which Nutrition to fetch.
     */
    where: NutritionWhereUniqueInput
  }

  /**
   * Nutrition findFirst
   */
  export type NutritionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * Filter, which Nutrition to fetch.
     */
    where?: NutritionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionOrderByWithRelationInput | NutritionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nutritions.
     */
    cursor?: NutritionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nutritions.
     */
    distinct?: NutritionScalarFieldEnum | NutritionScalarFieldEnum[]
  }

  /**
   * Nutrition findFirstOrThrow
   */
  export type NutritionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * Filter, which Nutrition to fetch.
     */
    where?: NutritionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionOrderByWithRelationInput | NutritionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nutritions.
     */
    cursor?: NutritionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nutritions.
     */
    distinct?: NutritionScalarFieldEnum | NutritionScalarFieldEnum[]
  }

  /**
   * Nutrition findMany
   */
  export type NutritionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * Filter, which Nutritions to fetch.
     */
    where?: NutritionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionOrderByWithRelationInput | NutritionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nutritions.
     */
    cursor?: NutritionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    distinct?: NutritionScalarFieldEnum | NutritionScalarFieldEnum[]
  }

  /**
   * Nutrition create
   */
  export type NutritionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * The data needed to create a Nutrition.
     */
    data: XOR<NutritionCreateInput, NutritionUncheckedCreateInput>
  }

  /**
   * Nutrition createMany
   */
  export type NutritionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nutritions.
     */
    data: NutritionCreateManyInput | NutritionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nutrition createManyAndReturn
   */
  export type NutritionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Nutritions.
     */
    data: NutritionCreateManyInput | NutritionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nutrition update
   */
  export type NutritionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * The data needed to update a Nutrition.
     */
    data: XOR<NutritionUpdateInput, NutritionUncheckedUpdateInput>
    /**
     * Choose, which Nutrition to update.
     */
    where: NutritionWhereUniqueInput
  }

  /**
   * Nutrition updateMany
   */
  export type NutritionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nutritions.
     */
    data: XOR<NutritionUpdateManyMutationInput, NutritionUncheckedUpdateManyInput>
    /**
     * Filter which Nutritions to update
     */
    where?: NutritionWhereInput
  }

  /**
   * Nutrition upsert
   */
  export type NutritionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * The filter to search for the Nutrition to update in case it exists.
     */
    where: NutritionWhereUniqueInput
    /**
     * In case the Nutrition found by the `where` argument doesn't exist, create a new Nutrition with this data.
     */
    create: XOR<NutritionCreateInput, NutritionUncheckedCreateInput>
    /**
     * In case the Nutrition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NutritionUpdateInput, NutritionUncheckedUpdateInput>
  }

  /**
   * Nutrition delete
   */
  export type NutritionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * Filter which Nutrition to delete.
     */
    where: NutritionWhereUniqueInput
  }

  /**
   * Nutrition deleteMany
   */
  export type NutritionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nutritions to delete
     */
    where?: NutritionWhereInput
  }

  /**
   * Nutrition.daily_meal_plan
   */
  export type Nutrition$daily_meal_planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMealPlan
     */
    select?: DailyMealPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMealPlanInclude<ExtArgs> | null
    where?: DailyMealPlanWhereInput
    orderBy?: DailyMealPlanOrderByWithRelationInput | DailyMealPlanOrderByWithRelationInput[]
    cursor?: DailyMealPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyMealPlanScalarFieldEnum | DailyMealPlanScalarFieldEnum[]
  }

  /**
   * Nutrition without action
   */
  export type NutritionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    cratedAt: 'cratedAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    cover: 'cover',
    title: 'title',
    content: 'content',
    viewers: 'viewers',
    cratedAt: 'cratedAt',
    updatedAt: 'updatedAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const DailyMealPlanScalarFieldEnum: {
    id: 'id',
    order: 'order',
    date: 'date',
    user_id: 'user_id',
    category_id: 'category_id',
    nutrition_id: 'nutrition_id'
  };

  export type DailyMealPlanScalarFieldEnum = (typeof DailyMealPlanScalarFieldEnum)[keyof typeof DailyMealPlanScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const NutritionScalarFieldEnum: {
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

  export type NutritionScalarFieldEnum = (typeof NutritionScalarFieldEnum)[keyof typeof NutritionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    cratedAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    daily_meal_plan?: DailyMealPlanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    cratedAt?: SortOrder
    updatedAt?: SortOrder
    daily_meal_plan?: DailyMealPlanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    cratedAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    daily_meal_plan?: DailyMealPlanListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    cratedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    cratedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: IntFilter<"Blog"> | number
    cover?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    viewers?: IntFilter<"Blog"> | number
    cratedAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    cover?: SortOrder
    title?: SortOrder
    content?: SortOrder
    viewers?: SortOrder
    cratedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    cover?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    viewers?: IntFilter<"Blog"> | number
    cratedAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }, "id">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    cover?: SortOrder
    title?: SortOrder
    content?: SortOrder
    viewers?: SortOrder
    cratedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Blog"> | number
    cover?: StringWithAggregatesFilter<"Blog"> | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    content?: StringWithAggregatesFilter<"Blog"> | string
    viewers?: IntWithAggregatesFilter<"Blog"> | number
    cratedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type DailyMealPlanWhereInput = {
    AND?: DailyMealPlanWhereInput | DailyMealPlanWhereInput[]
    OR?: DailyMealPlanWhereInput[]
    NOT?: DailyMealPlanWhereInput | DailyMealPlanWhereInput[]
    id?: IntFilter<"DailyMealPlan"> | number
    order?: IntFilter<"DailyMealPlan"> | number
    date?: DateTimeFilter<"DailyMealPlan"> | Date | string
    user_id?: IntFilter<"DailyMealPlan"> | number
    category_id?: IntFilter<"DailyMealPlan"> | number
    nutrition_id?: IntFilter<"DailyMealPlan"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    nutrition?: XOR<NutritionRelationFilter, NutritionWhereInput>
  }

  export type DailyMealPlanOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    date?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    nutrition_id?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    nutrition?: NutritionOrderByWithRelationInput
  }

  export type DailyMealPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DailyMealPlanWhereInput | DailyMealPlanWhereInput[]
    OR?: DailyMealPlanWhereInput[]
    NOT?: DailyMealPlanWhereInput | DailyMealPlanWhereInput[]
    order?: IntFilter<"DailyMealPlan"> | number
    date?: DateTimeFilter<"DailyMealPlan"> | Date | string
    user_id?: IntFilter<"DailyMealPlan"> | number
    category_id?: IntFilter<"DailyMealPlan"> | number
    nutrition_id?: IntFilter<"DailyMealPlan"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    nutrition?: XOR<NutritionRelationFilter, NutritionWhereInput>
  }, "id">

  export type DailyMealPlanOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    date?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    nutrition_id?: SortOrder
    _count?: DailyMealPlanCountOrderByAggregateInput
    _avg?: DailyMealPlanAvgOrderByAggregateInput
    _max?: DailyMealPlanMaxOrderByAggregateInput
    _min?: DailyMealPlanMinOrderByAggregateInput
    _sum?: DailyMealPlanSumOrderByAggregateInput
  }

  export type DailyMealPlanScalarWhereWithAggregatesInput = {
    AND?: DailyMealPlanScalarWhereWithAggregatesInput | DailyMealPlanScalarWhereWithAggregatesInput[]
    OR?: DailyMealPlanScalarWhereWithAggregatesInput[]
    NOT?: DailyMealPlanScalarWhereWithAggregatesInput | DailyMealPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyMealPlan"> | number
    order?: IntWithAggregatesFilter<"DailyMealPlan"> | number
    date?: DateTimeWithAggregatesFilter<"DailyMealPlan"> | Date | string
    user_id?: IntWithAggregatesFilter<"DailyMealPlan"> | number
    category_id?: IntWithAggregatesFilter<"DailyMealPlan"> | number
    nutrition_id?: IntWithAggregatesFilter<"DailyMealPlan"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    daily_meal_plan?: DailyMealPlanListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    daily_meal_plan?: DailyMealPlanOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    daily_meal_plan?: DailyMealPlanListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type NutritionWhereInput = {
    AND?: NutritionWhereInput | NutritionWhereInput[]
    OR?: NutritionWhereInput[]
    NOT?: NutritionWhereInput | NutritionWhereInput[]
    id?: IntFilter<"Nutrition"> | number
    code?: StringFilter<"Nutrition"> | string
    name?: StringFilter<"Nutrition"> | string
    energy_kj?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    energy_kcal?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    water?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    protein?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    fat?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    carbohydrate?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    dietary_fiber?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    minerals?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    organic_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    alcohol?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_a?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    retinol?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    carotene?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_d?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_e_eq?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_e?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_k?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_b1?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_b2?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    niacine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    niacine_equiv?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    pantothenic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_b6?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    biotine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    folic_acid_eq?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    total_folic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    free_folic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_b12?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_c?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    sodium?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    potassium?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    calcium?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    magnesium?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    phosphorus?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    sulfur?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    chlorine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    iron?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    zinc?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    copper?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    manganese?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    fluorine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    iodine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    mannitol?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    sorbitol?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    xylitol?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    all_sugar_alcohols?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    glucose?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    fructose?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    galactose?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    monosaccharides?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    sucrose?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    maltose?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    lactose?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    disaccharides?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_resorbable?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_non_resorbable?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    glycogen?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    starch?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    polysaccharides?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    poly_pentoses?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    poly_hexoses?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    poly_uronic_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    cellulose?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    lignin?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    water_soluble_dietary_fiber?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    water_insoluble_dietary_fiber?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    isoleucine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    leucine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    lysine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    methionine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    cysteine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    phenylalanine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    tyrosine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    threonine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    tryptophan?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    valine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    arginine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    histidine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    essential_amino_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    alanine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    aspartic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    glutamic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    glycine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    proline?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    serine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    non_essential_amino_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vegetable_protein?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    uric_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    purine_nitrogen?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    butyric_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    capronic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    caprylic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    caprinic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    lauric_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    myristic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    pentadecanoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    palmitic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    margaric_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    stearic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    arachidic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    behenic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    lignoceric_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    saturated_fatty_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    tetradecenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    pentadecenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    palmitoleic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    heptadecenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    oleic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    eicosenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    erucic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    selacholeic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    monounsaturated_fatty_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    hexadecadienoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    hexadecatetraenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    linoleic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    linolenic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    stearidonic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    nonadecatrienoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    eicosadienoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    eicosatrienoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    arachidonic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    eicosapentaenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    docosadienoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    docosatrienoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    docosatetraenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    docosapentaenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    docosahexaenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    polyunsaturated_fatty_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    short_chain_fatty_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    medium_chain_fatty_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    long_chain_fatty_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    glycerol_and_lipoids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    cholesterol?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    bread_units?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    nacl?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Nutrition"> | Date | string
    updatedAt?: DateTimeFilter<"Nutrition"> | Date | string
    daily_meal_plan?: DailyMealPlanListRelationFilter
  }

  export type NutritionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    energy_kj?: SortOrderInput | SortOrder
    energy_kcal?: SortOrderInput | SortOrder
    water?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    carbohydrate?: SortOrderInput | SortOrder
    dietary_fiber?: SortOrderInput | SortOrder
    minerals?: SortOrderInput | SortOrder
    organic_acids?: SortOrderInput | SortOrder
    alcohol?: SortOrderInput | SortOrder
    vitamin_a?: SortOrderInput | SortOrder
    retinol?: SortOrderInput | SortOrder
    carotene?: SortOrderInput | SortOrder
    vitamin_d?: SortOrderInput | SortOrder
    vitamin_e_eq?: SortOrderInput | SortOrder
    vitamin_e?: SortOrderInput | SortOrder
    vitamin_k?: SortOrderInput | SortOrder
    vitamin_b1?: SortOrderInput | SortOrder
    vitamin_b2?: SortOrderInput | SortOrder
    niacine?: SortOrderInput | SortOrder
    niacine_equiv?: SortOrderInput | SortOrder
    pantothenic_acid?: SortOrderInput | SortOrder
    vitamin_b6?: SortOrderInput | SortOrder
    biotine?: SortOrderInput | SortOrder
    folic_acid_eq?: SortOrderInput | SortOrder
    total_folic_acid?: SortOrderInput | SortOrder
    free_folic_acid?: SortOrderInput | SortOrder
    vitamin_b12?: SortOrderInput | SortOrder
    vitamin_c?: SortOrderInput | SortOrder
    sodium?: SortOrderInput | SortOrder
    potassium?: SortOrderInput | SortOrder
    calcium?: SortOrderInput | SortOrder
    magnesium?: SortOrderInput | SortOrder
    phosphorus?: SortOrderInput | SortOrder
    sulfur?: SortOrderInput | SortOrder
    chlorine?: SortOrderInput | SortOrder
    iron?: SortOrderInput | SortOrder
    zinc?: SortOrderInput | SortOrder
    copper?: SortOrderInput | SortOrder
    manganese?: SortOrderInput | SortOrder
    fluorine?: SortOrderInput | SortOrder
    iodine?: SortOrderInput | SortOrder
    mannitol?: SortOrderInput | SortOrder
    sorbitol?: SortOrderInput | SortOrder
    xylitol?: SortOrderInput | SortOrder
    all_sugar_alcohols?: SortOrderInput | SortOrder
    glucose?: SortOrderInput | SortOrder
    fructose?: SortOrderInput | SortOrder
    galactose?: SortOrderInput | SortOrder
    monosaccharides?: SortOrderInput | SortOrder
    sucrose?: SortOrderInput | SortOrder
    maltose?: SortOrderInput | SortOrder
    lactose?: SortOrderInput | SortOrder
    disaccharides?: SortOrderInput | SortOrder
    oligosaccharides_resorbable?: SortOrderInput | SortOrder
    oligosaccharides_non_resorbable?: SortOrderInput | SortOrder
    glycogen?: SortOrderInput | SortOrder
    starch?: SortOrderInput | SortOrder
    polysaccharides?: SortOrderInput | SortOrder
    poly_pentoses?: SortOrderInput | SortOrder
    poly_hexoses?: SortOrderInput | SortOrder
    poly_uronic_acids?: SortOrderInput | SortOrder
    cellulose?: SortOrderInput | SortOrder
    lignin?: SortOrderInput | SortOrder
    water_soluble_dietary_fiber?: SortOrderInput | SortOrder
    water_insoluble_dietary_fiber?: SortOrderInput | SortOrder
    isoleucine?: SortOrderInput | SortOrder
    leucine?: SortOrderInput | SortOrder
    lysine?: SortOrderInput | SortOrder
    methionine?: SortOrderInput | SortOrder
    cysteine?: SortOrderInput | SortOrder
    phenylalanine?: SortOrderInput | SortOrder
    tyrosine?: SortOrderInput | SortOrder
    threonine?: SortOrderInput | SortOrder
    tryptophan?: SortOrderInput | SortOrder
    valine?: SortOrderInput | SortOrder
    arginine?: SortOrderInput | SortOrder
    histidine?: SortOrderInput | SortOrder
    essential_amino_acids?: SortOrderInput | SortOrder
    alanine?: SortOrderInput | SortOrder
    aspartic_acid?: SortOrderInput | SortOrder
    glutamic_acid?: SortOrderInput | SortOrder
    glycine?: SortOrderInput | SortOrder
    proline?: SortOrderInput | SortOrder
    serine?: SortOrderInput | SortOrder
    non_essential_amino_acids?: SortOrderInput | SortOrder
    vegetable_protein?: SortOrderInput | SortOrder
    uric_acid?: SortOrderInput | SortOrder
    purine_nitrogen?: SortOrderInput | SortOrder
    butyric_acid?: SortOrderInput | SortOrder
    capronic_acid?: SortOrderInput | SortOrder
    caprylic_acid?: SortOrderInput | SortOrder
    caprinic_acid?: SortOrderInput | SortOrder
    lauric_acid?: SortOrderInput | SortOrder
    myristic_acid?: SortOrderInput | SortOrder
    pentadecanoic_acid?: SortOrderInput | SortOrder
    palmitic_acid?: SortOrderInput | SortOrder
    margaric_acid?: SortOrderInput | SortOrder
    stearic_acid?: SortOrderInput | SortOrder
    arachidic_acid?: SortOrderInput | SortOrder
    behenic_acid?: SortOrderInput | SortOrder
    lignoceric_acid?: SortOrderInput | SortOrder
    saturated_fatty_acids?: SortOrderInput | SortOrder
    tetradecenoic_acid?: SortOrderInput | SortOrder
    pentadecenoic_acid?: SortOrderInput | SortOrder
    palmitoleic_acid?: SortOrderInput | SortOrder
    heptadecenoic_acid?: SortOrderInput | SortOrder
    oleic_acid?: SortOrderInput | SortOrder
    eicosenoic_acid?: SortOrderInput | SortOrder
    erucic_acid?: SortOrderInput | SortOrder
    selacholeic_acid?: SortOrderInput | SortOrder
    monounsaturated_fatty_acids?: SortOrderInput | SortOrder
    hexadecadienoic_acid?: SortOrderInput | SortOrder
    hexadecatetraenoic_acid?: SortOrderInput | SortOrder
    linoleic_acid?: SortOrderInput | SortOrder
    linolenic_acid?: SortOrderInput | SortOrder
    stearidonic_acid?: SortOrderInput | SortOrder
    nonadecatrienoic_acid?: SortOrderInput | SortOrder
    eicosadienoic_acid?: SortOrderInput | SortOrder
    eicosatrienoic_acid?: SortOrderInput | SortOrder
    arachidonic_acid?: SortOrderInput | SortOrder
    eicosapentaenoic_acid?: SortOrderInput | SortOrder
    docosadienoic_acid?: SortOrderInput | SortOrder
    docosatrienoic_acid?: SortOrderInput | SortOrder
    docosatetraenoic_acid?: SortOrderInput | SortOrder
    docosapentaenoic_acid?: SortOrderInput | SortOrder
    docosahexaenoic_acid?: SortOrderInput | SortOrder
    polyunsaturated_fatty_acids?: SortOrderInput | SortOrder
    short_chain_fatty_acids?: SortOrderInput | SortOrder
    medium_chain_fatty_acids?: SortOrderInput | SortOrder
    long_chain_fatty_acids?: SortOrderInput | SortOrder
    glycerol_and_lipoids?: SortOrderInput | SortOrder
    cholesterol?: SortOrderInput | SortOrder
    bread_units?: SortOrderInput | SortOrder
    nacl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    daily_meal_plan?: DailyMealPlanOrderByRelationAggregateInput
  }

  export type NutritionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NutritionWhereInput | NutritionWhereInput[]
    OR?: NutritionWhereInput[]
    NOT?: NutritionWhereInput | NutritionWhereInput[]
    code?: StringFilter<"Nutrition"> | string
    name?: StringFilter<"Nutrition"> | string
    energy_kj?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    energy_kcal?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    water?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    protein?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    fat?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    carbohydrate?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    dietary_fiber?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    minerals?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    organic_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    alcohol?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_a?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    retinol?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    carotene?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_d?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_e_eq?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_e?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_k?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_b1?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_b2?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    niacine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    niacine_equiv?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    pantothenic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_b6?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    biotine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    folic_acid_eq?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    total_folic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    free_folic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_b12?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_c?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    sodium?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    potassium?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    calcium?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    magnesium?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    phosphorus?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    sulfur?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    chlorine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    iron?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    zinc?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    copper?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    manganese?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    fluorine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    iodine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    mannitol?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    sorbitol?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    xylitol?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    all_sugar_alcohols?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    glucose?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    fructose?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    galactose?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    monosaccharides?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    sucrose?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    maltose?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    lactose?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    disaccharides?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_resorbable?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_non_resorbable?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    glycogen?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    starch?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    polysaccharides?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    poly_pentoses?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    poly_hexoses?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    poly_uronic_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    cellulose?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    lignin?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    water_soluble_dietary_fiber?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    water_insoluble_dietary_fiber?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    isoleucine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    leucine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    lysine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    methionine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    cysteine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    phenylalanine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    tyrosine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    threonine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    tryptophan?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    valine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    arginine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    histidine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    essential_amino_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    alanine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    aspartic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    glutamic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    glycine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    proline?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    serine?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    non_essential_amino_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vegetable_protein?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    uric_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    purine_nitrogen?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    butyric_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    capronic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    caprylic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    caprinic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    lauric_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    myristic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    pentadecanoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    palmitic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    margaric_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    stearic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    arachidic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    behenic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    lignoceric_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    saturated_fatty_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    tetradecenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    pentadecenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    palmitoleic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    heptadecenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    oleic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    eicosenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    erucic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    selacholeic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    monounsaturated_fatty_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    hexadecadienoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    hexadecatetraenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    linoleic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    linolenic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    stearidonic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    nonadecatrienoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    eicosadienoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    eicosatrienoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    arachidonic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    eicosapentaenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    docosadienoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    docosatrienoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    docosatetraenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    docosapentaenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    docosahexaenoic_acid?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    polyunsaturated_fatty_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    short_chain_fatty_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    medium_chain_fatty_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    long_chain_fatty_acids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    glycerol_and_lipoids?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    cholesterol?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    bread_units?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    nacl?: DecimalNullableFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Nutrition"> | Date | string
    updatedAt?: DateTimeFilter<"Nutrition"> | Date | string
    daily_meal_plan?: DailyMealPlanListRelationFilter
  }, "id">

  export type NutritionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    energy_kj?: SortOrderInput | SortOrder
    energy_kcal?: SortOrderInput | SortOrder
    water?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    carbohydrate?: SortOrderInput | SortOrder
    dietary_fiber?: SortOrderInput | SortOrder
    minerals?: SortOrderInput | SortOrder
    organic_acids?: SortOrderInput | SortOrder
    alcohol?: SortOrderInput | SortOrder
    vitamin_a?: SortOrderInput | SortOrder
    retinol?: SortOrderInput | SortOrder
    carotene?: SortOrderInput | SortOrder
    vitamin_d?: SortOrderInput | SortOrder
    vitamin_e_eq?: SortOrderInput | SortOrder
    vitamin_e?: SortOrderInput | SortOrder
    vitamin_k?: SortOrderInput | SortOrder
    vitamin_b1?: SortOrderInput | SortOrder
    vitamin_b2?: SortOrderInput | SortOrder
    niacine?: SortOrderInput | SortOrder
    niacine_equiv?: SortOrderInput | SortOrder
    pantothenic_acid?: SortOrderInput | SortOrder
    vitamin_b6?: SortOrderInput | SortOrder
    biotine?: SortOrderInput | SortOrder
    folic_acid_eq?: SortOrderInput | SortOrder
    total_folic_acid?: SortOrderInput | SortOrder
    free_folic_acid?: SortOrderInput | SortOrder
    vitamin_b12?: SortOrderInput | SortOrder
    vitamin_c?: SortOrderInput | SortOrder
    sodium?: SortOrderInput | SortOrder
    potassium?: SortOrderInput | SortOrder
    calcium?: SortOrderInput | SortOrder
    magnesium?: SortOrderInput | SortOrder
    phosphorus?: SortOrderInput | SortOrder
    sulfur?: SortOrderInput | SortOrder
    chlorine?: SortOrderInput | SortOrder
    iron?: SortOrderInput | SortOrder
    zinc?: SortOrderInput | SortOrder
    copper?: SortOrderInput | SortOrder
    manganese?: SortOrderInput | SortOrder
    fluorine?: SortOrderInput | SortOrder
    iodine?: SortOrderInput | SortOrder
    mannitol?: SortOrderInput | SortOrder
    sorbitol?: SortOrderInput | SortOrder
    xylitol?: SortOrderInput | SortOrder
    all_sugar_alcohols?: SortOrderInput | SortOrder
    glucose?: SortOrderInput | SortOrder
    fructose?: SortOrderInput | SortOrder
    galactose?: SortOrderInput | SortOrder
    monosaccharides?: SortOrderInput | SortOrder
    sucrose?: SortOrderInput | SortOrder
    maltose?: SortOrderInput | SortOrder
    lactose?: SortOrderInput | SortOrder
    disaccharides?: SortOrderInput | SortOrder
    oligosaccharides_resorbable?: SortOrderInput | SortOrder
    oligosaccharides_non_resorbable?: SortOrderInput | SortOrder
    glycogen?: SortOrderInput | SortOrder
    starch?: SortOrderInput | SortOrder
    polysaccharides?: SortOrderInput | SortOrder
    poly_pentoses?: SortOrderInput | SortOrder
    poly_hexoses?: SortOrderInput | SortOrder
    poly_uronic_acids?: SortOrderInput | SortOrder
    cellulose?: SortOrderInput | SortOrder
    lignin?: SortOrderInput | SortOrder
    water_soluble_dietary_fiber?: SortOrderInput | SortOrder
    water_insoluble_dietary_fiber?: SortOrderInput | SortOrder
    isoleucine?: SortOrderInput | SortOrder
    leucine?: SortOrderInput | SortOrder
    lysine?: SortOrderInput | SortOrder
    methionine?: SortOrderInput | SortOrder
    cysteine?: SortOrderInput | SortOrder
    phenylalanine?: SortOrderInput | SortOrder
    tyrosine?: SortOrderInput | SortOrder
    threonine?: SortOrderInput | SortOrder
    tryptophan?: SortOrderInput | SortOrder
    valine?: SortOrderInput | SortOrder
    arginine?: SortOrderInput | SortOrder
    histidine?: SortOrderInput | SortOrder
    essential_amino_acids?: SortOrderInput | SortOrder
    alanine?: SortOrderInput | SortOrder
    aspartic_acid?: SortOrderInput | SortOrder
    glutamic_acid?: SortOrderInput | SortOrder
    glycine?: SortOrderInput | SortOrder
    proline?: SortOrderInput | SortOrder
    serine?: SortOrderInput | SortOrder
    non_essential_amino_acids?: SortOrderInput | SortOrder
    vegetable_protein?: SortOrderInput | SortOrder
    uric_acid?: SortOrderInput | SortOrder
    purine_nitrogen?: SortOrderInput | SortOrder
    butyric_acid?: SortOrderInput | SortOrder
    capronic_acid?: SortOrderInput | SortOrder
    caprylic_acid?: SortOrderInput | SortOrder
    caprinic_acid?: SortOrderInput | SortOrder
    lauric_acid?: SortOrderInput | SortOrder
    myristic_acid?: SortOrderInput | SortOrder
    pentadecanoic_acid?: SortOrderInput | SortOrder
    palmitic_acid?: SortOrderInput | SortOrder
    margaric_acid?: SortOrderInput | SortOrder
    stearic_acid?: SortOrderInput | SortOrder
    arachidic_acid?: SortOrderInput | SortOrder
    behenic_acid?: SortOrderInput | SortOrder
    lignoceric_acid?: SortOrderInput | SortOrder
    saturated_fatty_acids?: SortOrderInput | SortOrder
    tetradecenoic_acid?: SortOrderInput | SortOrder
    pentadecenoic_acid?: SortOrderInput | SortOrder
    palmitoleic_acid?: SortOrderInput | SortOrder
    heptadecenoic_acid?: SortOrderInput | SortOrder
    oleic_acid?: SortOrderInput | SortOrder
    eicosenoic_acid?: SortOrderInput | SortOrder
    erucic_acid?: SortOrderInput | SortOrder
    selacholeic_acid?: SortOrderInput | SortOrder
    monounsaturated_fatty_acids?: SortOrderInput | SortOrder
    hexadecadienoic_acid?: SortOrderInput | SortOrder
    hexadecatetraenoic_acid?: SortOrderInput | SortOrder
    linoleic_acid?: SortOrderInput | SortOrder
    linolenic_acid?: SortOrderInput | SortOrder
    stearidonic_acid?: SortOrderInput | SortOrder
    nonadecatrienoic_acid?: SortOrderInput | SortOrder
    eicosadienoic_acid?: SortOrderInput | SortOrder
    eicosatrienoic_acid?: SortOrderInput | SortOrder
    arachidonic_acid?: SortOrderInput | SortOrder
    eicosapentaenoic_acid?: SortOrderInput | SortOrder
    docosadienoic_acid?: SortOrderInput | SortOrder
    docosatrienoic_acid?: SortOrderInput | SortOrder
    docosatetraenoic_acid?: SortOrderInput | SortOrder
    docosapentaenoic_acid?: SortOrderInput | SortOrder
    docosahexaenoic_acid?: SortOrderInput | SortOrder
    polyunsaturated_fatty_acids?: SortOrderInput | SortOrder
    short_chain_fatty_acids?: SortOrderInput | SortOrder
    medium_chain_fatty_acids?: SortOrderInput | SortOrder
    long_chain_fatty_acids?: SortOrderInput | SortOrder
    glycerol_and_lipoids?: SortOrderInput | SortOrder
    cholesterol?: SortOrderInput | SortOrder
    bread_units?: SortOrderInput | SortOrder
    nacl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NutritionCountOrderByAggregateInput
    _avg?: NutritionAvgOrderByAggregateInput
    _max?: NutritionMaxOrderByAggregateInput
    _min?: NutritionMinOrderByAggregateInput
    _sum?: NutritionSumOrderByAggregateInput
  }

  export type NutritionScalarWhereWithAggregatesInput = {
    AND?: NutritionScalarWhereWithAggregatesInput | NutritionScalarWhereWithAggregatesInput[]
    OR?: NutritionScalarWhereWithAggregatesInput[]
    NOT?: NutritionScalarWhereWithAggregatesInput | NutritionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Nutrition"> | number
    code?: StringWithAggregatesFilter<"Nutrition"> | string
    name?: StringWithAggregatesFilter<"Nutrition"> | string
    energy_kj?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    energy_kcal?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    water?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    protein?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    fat?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    carbohydrate?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    dietary_fiber?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    minerals?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    organic_acids?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    alcohol?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_a?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    retinol?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    carotene?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_d?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_e_eq?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_e?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_k?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_b1?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_b2?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    niacine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    niacine_equiv?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    pantothenic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_b6?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    biotine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    folic_acid_eq?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    total_folic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    free_folic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_b12?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vitamin_c?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    sodium?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    potassium?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    calcium?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    magnesium?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    phosphorus?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    sulfur?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    chlorine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    iron?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    zinc?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    copper?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    manganese?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    fluorine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    iodine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    mannitol?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    sorbitol?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    xylitol?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    all_sugar_alcohols?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    glucose?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    fructose?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    galactose?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    monosaccharides?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    sucrose?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    maltose?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    lactose?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    disaccharides?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_resorbable?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_non_resorbable?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    glycogen?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    starch?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    polysaccharides?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    poly_pentoses?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    poly_hexoses?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    poly_uronic_acids?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    cellulose?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    lignin?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    water_soluble_dietary_fiber?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    water_insoluble_dietary_fiber?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    isoleucine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    leucine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    lysine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    methionine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    cysteine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    phenylalanine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    tyrosine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    threonine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    tryptophan?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    valine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    arginine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    histidine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    essential_amino_acids?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    alanine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    aspartic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    glutamic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    glycine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    proline?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    serine?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    non_essential_amino_acids?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    vegetable_protein?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    uric_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    purine_nitrogen?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    butyric_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    capronic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    caprylic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    caprinic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    lauric_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    myristic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    pentadecanoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    palmitic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    margaric_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    stearic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    arachidic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    behenic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    lignoceric_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    saturated_fatty_acids?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    tetradecenoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    pentadecenoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    palmitoleic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    heptadecenoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    oleic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    eicosenoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    erucic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    selacholeic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    monounsaturated_fatty_acids?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    hexadecadienoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    hexadecatetraenoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    linoleic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    linolenic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    stearidonic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    nonadecatrienoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    eicosadienoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    eicosatrienoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    arachidonic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    eicosapentaenoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    docosadienoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    docosatrienoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    docosatetraenoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    docosapentaenoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    docosahexaenoic_acid?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    polyunsaturated_fatty_acids?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    short_chain_fatty_acids?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    medium_chain_fatty_acids?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    long_chain_fatty_acids?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    glycerol_and_lipoids?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    cholesterol?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    bread_units?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    nacl?: DecimalNullableWithAggregatesFilter<"Nutrition"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Nutrition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Nutrition"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name: string
    password: string
    cratedAt?: Date | string
    updatedAt?: Date | string
    daily_meal_plan?: DailyMealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    password: string
    cratedAt?: Date | string
    updatedAt?: Date | string
    daily_meal_plan?: DailyMealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_meal_plan?: DailyMealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_meal_plan?: DailyMealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    password: string
    cratedAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    cover: string
    title: string
    content: string
    viewers?: number
    cratedAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUncheckedCreateInput = {
    id?: number
    cover: string
    title: string
    content: string
    viewers?: number
    cratedAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateInput = {
    cover?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    viewers?: IntFieldUpdateOperationsInput | number
    cratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cover?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    viewers?: IntFieldUpdateOperationsInput | number
    cratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManyInput = {
    id?: number
    cover: string
    title: string
    content: string
    viewers?: number
    cratedAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    cover?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    viewers?: IntFieldUpdateOperationsInput | number
    cratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cover?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    viewers?: IntFieldUpdateOperationsInput | number
    cratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyMealPlanCreateInput = {
    order: number
    date: Date | string
    user: UserCreateNestedOneWithoutDaily_meal_planInput
    category: CategoryCreateNestedOneWithoutDaily_meal_planInput
    nutrition: NutritionCreateNestedOneWithoutDaily_meal_planInput
  }

  export type DailyMealPlanUncheckedCreateInput = {
    id?: number
    order: number
    date: Date | string
    user_id: number
    category_id: number
    nutrition_id: number
  }

  export type DailyMealPlanUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDaily_meal_planNestedInput
    category?: CategoryUpdateOneRequiredWithoutDaily_meal_planNestedInput
    nutrition?: NutritionUpdateOneRequiredWithoutDaily_meal_planNestedInput
  }

  export type DailyMealPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    nutrition_id?: IntFieldUpdateOperationsInput | number
  }

  export type DailyMealPlanCreateManyInput = {
    id?: number
    order: number
    date: Date | string
    user_id: number
    category_id: number
    nutrition_id: number
  }

  export type DailyMealPlanUpdateManyMutationInput = {
    order?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyMealPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    nutrition_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name: string
    daily_meal_plan?: DailyMealPlanCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    daily_meal_plan?: DailyMealPlanUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    daily_meal_plan?: DailyMealPlanUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    daily_meal_plan?: DailyMealPlanUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NutritionCreateInput = {
    code: string
    name: string
    energy_kj?: Decimal | DecimalJsLike | number | string | null
    energy_kcal?: Decimal | DecimalJsLike | number | string | null
    water?: Decimal | DecimalJsLike | number | string | null
    protein?: Decimal | DecimalJsLike | number | string | null
    fat?: Decimal | DecimalJsLike | number | string | null
    carbohydrate?: Decimal | DecimalJsLike | number | string | null
    dietary_fiber?: Decimal | DecimalJsLike | number | string | null
    minerals?: Decimal | DecimalJsLike | number | string | null
    organic_acids?: Decimal | DecimalJsLike | number | string | null
    alcohol?: Decimal | DecimalJsLike | number | string | null
    vitamin_a?: Decimal | DecimalJsLike | number | string | null
    retinol?: Decimal | DecimalJsLike | number | string | null
    carotene?: Decimal | DecimalJsLike | number | string | null
    vitamin_d?: Decimal | DecimalJsLike | number | string | null
    vitamin_e_eq?: Decimal | DecimalJsLike | number | string | null
    vitamin_e?: Decimal | DecimalJsLike | number | string | null
    vitamin_k?: Decimal | DecimalJsLike | number | string | null
    vitamin_b1?: Decimal | DecimalJsLike | number | string | null
    vitamin_b2?: Decimal | DecimalJsLike | number | string | null
    niacine?: Decimal | DecimalJsLike | number | string | null
    niacine_equiv?: Decimal | DecimalJsLike | number | string | null
    pantothenic_acid?: Decimal | DecimalJsLike | number | string | null
    vitamin_b6?: Decimal | DecimalJsLike | number | string | null
    biotine?: Decimal | DecimalJsLike | number | string | null
    folic_acid_eq?: Decimal | DecimalJsLike | number | string | null
    total_folic_acid?: Decimal | DecimalJsLike | number | string | null
    free_folic_acid?: Decimal | DecimalJsLike | number | string | null
    vitamin_b12?: Decimal | DecimalJsLike | number | string | null
    vitamin_c?: Decimal | DecimalJsLike | number | string | null
    sodium?: Decimal | DecimalJsLike | number | string | null
    potassium?: Decimal | DecimalJsLike | number | string | null
    calcium?: Decimal | DecimalJsLike | number | string | null
    magnesium?: Decimal | DecimalJsLike | number | string | null
    phosphorus?: Decimal | DecimalJsLike | number | string | null
    sulfur?: Decimal | DecimalJsLike | number | string | null
    chlorine?: Decimal | DecimalJsLike | number | string | null
    iron?: Decimal | DecimalJsLike | number | string | null
    zinc?: Decimal | DecimalJsLike | number | string | null
    copper?: Decimal | DecimalJsLike | number | string | null
    manganese?: Decimal | DecimalJsLike | number | string | null
    fluorine?: Decimal | DecimalJsLike | number | string | null
    iodine?: Decimal | DecimalJsLike | number | string | null
    mannitol?: Decimal | DecimalJsLike | number | string | null
    sorbitol?: Decimal | DecimalJsLike | number | string | null
    xylitol?: Decimal | DecimalJsLike | number | string | null
    all_sugar_alcohols?: Decimal | DecimalJsLike | number | string | null
    glucose?: Decimal | DecimalJsLike | number | string | null
    fructose?: Decimal | DecimalJsLike | number | string | null
    galactose?: Decimal | DecimalJsLike | number | string | null
    monosaccharides?: Decimal | DecimalJsLike | number | string | null
    sucrose?: Decimal | DecimalJsLike | number | string | null
    maltose?: Decimal | DecimalJsLike | number | string | null
    lactose?: Decimal | DecimalJsLike | number | string | null
    disaccharides?: Decimal | DecimalJsLike | number | string | null
    oligosaccharides_resorbable?: Decimal | DecimalJsLike | number | string | null
    oligosaccharides_non_resorbable?: Decimal | DecimalJsLike | number | string | null
    glycogen?: Decimal | DecimalJsLike | number | string | null
    starch?: Decimal | DecimalJsLike | number | string | null
    polysaccharides?: Decimal | DecimalJsLike | number | string | null
    poly_pentoses?: Decimal | DecimalJsLike | number | string | null
    poly_hexoses?: Decimal | DecimalJsLike | number | string | null
    poly_uronic_acids?: Decimal | DecimalJsLike | number | string | null
    cellulose?: Decimal | DecimalJsLike | number | string | null
    lignin?: Decimal | DecimalJsLike | number | string | null
    water_soluble_dietary_fiber?: Decimal | DecimalJsLike | number | string | null
    water_insoluble_dietary_fiber?: Decimal | DecimalJsLike | number | string | null
    isoleucine?: Decimal | DecimalJsLike | number | string | null
    leucine?: Decimal | DecimalJsLike | number | string | null
    lysine?: Decimal | DecimalJsLike | number | string | null
    methionine?: Decimal | DecimalJsLike | number | string | null
    cysteine?: Decimal | DecimalJsLike | number | string | null
    phenylalanine?: Decimal | DecimalJsLike | number | string | null
    tyrosine?: Decimal | DecimalJsLike | number | string | null
    threonine?: Decimal | DecimalJsLike | number | string | null
    tryptophan?: Decimal | DecimalJsLike | number | string | null
    valine?: Decimal | DecimalJsLike | number | string | null
    arginine?: Decimal | DecimalJsLike | number | string | null
    histidine?: Decimal | DecimalJsLike | number | string | null
    essential_amino_acids?: Decimal | DecimalJsLike | number | string | null
    alanine?: Decimal | DecimalJsLike | number | string | null
    aspartic_acid?: Decimal | DecimalJsLike | number | string | null
    glutamic_acid?: Decimal | DecimalJsLike | number | string | null
    glycine?: Decimal | DecimalJsLike | number | string | null
    proline?: Decimal | DecimalJsLike | number | string | null
    serine?: Decimal | DecimalJsLike | number | string | null
    non_essential_amino_acids?: Decimal | DecimalJsLike | number | string | null
    vegetable_protein?: Decimal | DecimalJsLike | number | string | null
    uric_acid?: Decimal | DecimalJsLike | number | string | null
    purine_nitrogen?: Decimal | DecimalJsLike | number | string | null
    butyric_acid?: Decimal | DecimalJsLike | number | string | null
    capronic_acid?: Decimal | DecimalJsLike | number | string | null
    caprylic_acid?: Decimal | DecimalJsLike | number | string | null
    caprinic_acid?: Decimal | DecimalJsLike | number | string | null
    lauric_acid?: Decimal | DecimalJsLike | number | string | null
    myristic_acid?: Decimal | DecimalJsLike | number | string | null
    pentadecanoic_acid?: Decimal | DecimalJsLike | number | string | null
    palmitic_acid?: Decimal | DecimalJsLike | number | string | null
    margaric_acid?: Decimal | DecimalJsLike | number | string | null
    stearic_acid?: Decimal | DecimalJsLike | number | string | null
    arachidic_acid?: Decimal | DecimalJsLike | number | string | null
    behenic_acid?: Decimal | DecimalJsLike | number | string | null
    lignoceric_acid?: Decimal | DecimalJsLike | number | string | null
    saturated_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    tetradecenoic_acid?: Decimal | DecimalJsLike | number | string | null
    pentadecenoic_acid?: Decimal | DecimalJsLike | number | string | null
    palmitoleic_acid?: Decimal | DecimalJsLike | number | string | null
    heptadecenoic_acid?: Decimal | DecimalJsLike | number | string | null
    oleic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosenoic_acid?: Decimal | DecimalJsLike | number | string | null
    erucic_acid?: Decimal | DecimalJsLike | number | string | null
    selacholeic_acid?: Decimal | DecimalJsLike | number | string | null
    monounsaturated_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    hexadecadienoic_acid?: Decimal | DecimalJsLike | number | string | null
    hexadecatetraenoic_acid?: Decimal | DecimalJsLike | number | string | null
    linoleic_acid?: Decimal | DecimalJsLike | number | string | null
    linolenic_acid?: Decimal | DecimalJsLike | number | string | null
    stearidonic_acid?: Decimal | DecimalJsLike | number | string | null
    nonadecatrienoic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosadienoic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosatrienoic_acid?: Decimal | DecimalJsLike | number | string | null
    arachidonic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosapentaenoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosadienoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosatrienoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosatetraenoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosapentaenoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosahexaenoic_acid?: Decimal | DecimalJsLike | number | string | null
    polyunsaturated_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    short_chain_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    medium_chain_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    long_chain_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    glycerol_and_lipoids?: Decimal | DecimalJsLike | number | string | null
    cholesterol?: Decimal | DecimalJsLike | number | string | null
    bread_units?: Decimal | DecimalJsLike | number | string | null
    nacl?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    daily_meal_plan?: DailyMealPlanCreateNestedManyWithoutNutritionInput
  }

  export type NutritionUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    energy_kj?: Decimal | DecimalJsLike | number | string | null
    energy_kcal?: Decimal | DecimalJsLike | number | string | null
    water?: Decimal | DecimalJsLike | number | string | null
    protein?: Decimal | DecimalJsLike | number | string | null
    fat?: Decimal | DecimalJsLike | number | string | null
    carbohydrate?: Decimal | DecimalJsLike | number | string | null
    dietary_fiber?: Decimal | DecimalJsLike | number | string | null
    minerals?: Decimal | DecimalJsLike | number | string | null
    organic_acids?: Decimal | DecimalJsLike | number | string | null
    alcohol?: Decimal | DecimalJsLike | number | string | null
    vitamin_a?: Decimal | DecimalJsLike | number | string | null
    retinol?: Decimal | DecimalJsLike | number | string | null
    carotene?: Decimal | DecimalJsLike | number | string | null
    vitamin_d?: Decimal | DecimalJsLike | number | string | null
    vitamin_e_eq?: Decimal | DecimalJsLike | number | string | null
    vitamin_e?: Decimal | DecimalJsLike | number | string | null
    vitamin_k?: Decimal | DecimalJsLike | number | string | null
    vitamin_b1?: Decimal | DecimalJsLike | number | string | null
    vitamin_b2?: Decimal | DecimalJsLike | number | string | null
    niacine?: Decimal | DecimalJsLike | number | string | null
    niacine_equiv?: Decimal | DecimalJsLike | number | string | null
    pantothenic_acid?: Decimal | DecimalJsLike | number | string | null
    vitamin_b6?: Decimal | DecimalJsLike | number | string | null
    biotine?: Decimal | DecimalJsLike | number | string | null
    folic_acid_eq?: Decimal | DecimalJsLike | number | string | null
    total_folic_acid?: Decimal | DecimalJsLike | number | string | null
    free_folic_acid?: Decimal | DecimalJsLike | number | string | null
    vitamin_b12?: Decimal | DecimalJsLike | number | string | null
    vitamin_c?: Decimal | DecimalJsLike | number | string | null
    sodium?: Decimal | DecimalJsLike | number | string | null
    potassium?: Decimal | DecimalJsLike | number | string | null
    calcium?: Decimal | DecimalJsLike | number | string | null
    magnesium?: Decimal | DecimalJsLike | number | string | null
    phosphorus?: Decimal | DecimalJsLike | number | string | null
    sulfur?: Decimal | DecimalJsLike | number | string | null
    chlorine?: Decimal | DecimalJsLike | number | string | null
    iron?: Decimal | DecimalJsLike | number | string | null
    zinc?: Decimal | DecimalJsLike | number | string | null
    copper?: Decimal | DecimalJsLike | number | string | null
    manganese?: Decimal | DecimalJsLike | number | string | null
    fluorine?: Decimal | DecimalJsLike | number | string | null
    iodine?: Decimal | DecimalJsLike | number | string | null
    mannitol?: Decimal | DecimalJsLike | number | string | null
    sorbitol?: Decimal | DecimalJsLike | number | string | null
    xylitol?: Decimal | DecimalJsLike | number | string | null
    all_sugar_alcohols?: Decimal | DecimalJsLike | number | string | null
    glucose?: Decimal | DecimalJsLike | number | string | null
    fructose?: Decimal | DecimalJsLike | number | string | null
    galactose?: Decimal | DecimalJsLike | number | string | null
    monosaccharides?: Decimal | DecimalJsLike | number | string | null
    sucrose?: Decimal | DecimalJsLike | number | string | null
    maltose?: Decimal | DecimalJsLike | number | string | null
    lactose?: Decimal | DecimalJsLike | number | string | null
    disaccharides?: Decimal | DecimalJsLike | number | string | null
    oligosaccharides_resorbable?: Decimal | DecimalJsLike | number | string | null
    oligosaccharides_non_resorbable?: Decimal | DecimalJsLike | number | string | null
    glycogen?: Decimal | DecimalJsLike | number | string | null
    starch?: Decimal | DecimalJsLike | number | string | null
    polysaccharides?: Decimal | DecimalJsLike | number | string | null
    poly_pentoses?: Decimal | DecimalJsLike | number | string | null
    poly_hexoses?: Decimal | DecimalJsLike | number | string | null
    poly_uronic_acids?: Decimal | DecimalJsLike | number | string | null
    cellulose?: Decimal | DecimalJsLike | number | string | null
    lignin?: Decimal | DecimalJsLike | number | string | null
    water_soluble_dietary_fiber?: Decimal | DecimalJsLike | number | string | null
    water_insoluble_dietary_fiber?: Decimal | DecimalJsLike | number | string | null
    isoleucine?: Decimal | DecimalJsLike | number | string | null
    leucine?: Decimal | DecimalJsLike | number | string | null
    lysine?: Decimal | DecimalJsLike | number | string | null
    methionine?: Decimal | DecimalJsLike | number | string | null
    cysteine?: Decimal | DecimalJsLike | number | string | null
    phenylalanine?: Decimal | DecimalJsLike | number | string | null
    tyrosine?: Decimal | DecimalJsLike | number | string | null
    threonine?: Decimal | DecimalJsLike | number | string | null
    tryptophan?: Decimal | DecimalJsLike | number | string | null
    valine?: Decimal | DecimalJsLike | number | string | null
    arginine?: Decimal | DecimalJsLike | number | string | null
    histidine?: Decimal | DecimalJsLike | number | string | null
    essential_amino_acids?: Decimal | DecimalJsLike | number | string | null
    alanine?: Decimal | DecimalJsLike | number | string | null
    aspartic_acid?: Decimal | DecimalJsLike | number | string | null
    glutamic_acid?: Decimal | DecimalJsLike | number | string | null
    glycine?: Decimal | DecimalJsLike | number | string | null
    proline?: Decimal | DecimalJsLike | number | string | null
    serine?: Decimal | DecimalJsLike | number | string | null
    non_essential_amino_acids?: Decimal | DecimalJsLike | number | string | null
    vegetable_protein?: Decimal | DecimalJsLike | number | string | null
    uric_acid?: Decimal | DecimalJsLike | number | string | null
    purine_nitrogen?: Decimal | DecimalJsLike | number | string | null
    butyric_acid?: Decimal | DecimalJsLike | number | string | null
    capronic_acid?: Decimal | DecimalJsLike | number | string | null
    caprylic_acid?: Decimal | DecimalJsLike | number | string | null
    caprinic_acid?: Decimal | DecimalJsLike | number | string | null
    lauric_acid?: Decimal | DecimalJsLike | number | string | null
    myristic_acid?: Decimal | DecimalJsLike | number | string | null
    pentadecanoic_acid?: Decimal | DecimalJsLike | number | string | null
    palmitic_acid?: Decimal | DecimalJsLike | number | string | null
    margaric_acid?: Decimal | DecimalJsLike | number | string | null
    stearic_acid?: Decimal | DecimalJsLike | number | string | null
    arachidic_acid?: Decimal | DecimalJsLike | number | string | null
    behenic_acid?: Decimal | DecimalJsLike | number | string | null
    lignoceric_acid?: Decimal | DecimalJsLike | number | string | null
    saturated_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    tetradecenoic_acid?: Decimal | DecimalJsLike | number | string | null
    pentadecenoic_acid?: Decimal | DecimalJsLike | number | string | null
    palmitoleic_acid?: Decimal | DecimalJsLike | number | string | null
    heptadecenoic_acid?: Decimal | DecimalJsLike | number | string | null
    oleic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosenoic_acid?: Decimal | DecimalJsLike | number | string | null
    erucic_acid?: Decimal | DecimalJsLike | number | string | null
    selacholeic_acid?: Decimal | DecimalJsLike | number | string | null
    monounsaturated_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    hexadecadienoic_acid?: Decimal | DecimalJsLike | number | string | null
    hexadecatetraenoic_acid?: Decimal | DecimalJsLike | number | string | null
    linoleic_acid?: Decimal | DecimalJsLike | number | string | null
    linolenic_acid?: Decimal | DecimalJsLike | number | string | null
    stearidonic_acid?: Decimal | DecimalJsLike | number | string | null
    nonadecatrienoic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosadienoic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosatrienoic_acid?: Decimal | DecimalJsLike | number | string | null
    arachidonic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosapentaenoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosadienoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosatrienoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosatetraenoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosapentaenoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosahexaenoic_acid?: Decimal | DecimalJsLike | number | string | null
    polyunsaturated_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    short_chain_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    medium_chain_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    long_chain_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    glycerol_and_lipoids?: Decimal | DecimalJsLike | number | string | null
    cholesterol?: Decimal | DecimalJsLike | number | string | null
    bread_units?: Decimal | DecimalJsLike | number | string | null
    nacl?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    daily_meal_plan?: DailyMealPlanUncheckedCreateNestedManyWithoutNutritionInput
  }

  export type NutritionUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    energy_kj?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    energy_kcal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbohydrate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minerals?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    organic_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alcohol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_a?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    retinol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carotene?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_e_eq?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_e?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_k?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    niacine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    niacine_equiv?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pantothenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b6?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    biotine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    folic_acid_eq?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_folic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    free_folic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b12?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sodium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potassium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calcium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    magnesium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phosphorus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sulfur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    chlorine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    iron?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    zinc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    copper?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    manganese?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fluorine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    iodine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mannitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sorbitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    xylitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    all_sugar_alcohols?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glucose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fructose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galactose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monosaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sucrose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maltose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lactose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_resorbable?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_non_resorbable?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycogen?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    starch?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polysaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_pentoses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_hexoses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_uronic_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cellulose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lignin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water_soluble_dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water_insoluble_dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isoleucine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    leucine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lysine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    methionine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cysteine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phenylalanine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tyrosine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    threonine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tryptophan?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arginine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    histidine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    essential_amino_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alanine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aspartic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glutamic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proline?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    serine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    non_essential_amino_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vegetable_protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    uric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purine_nitrogen?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    butyric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capronic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    caprylic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    caprinic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lauric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    myristic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pentadecanoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    palmitic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    margaric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stearic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arachidic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    behenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lignoceric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tetradecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pentadecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    palmitoleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heptadecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    erucic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selacholeic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monounsaturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hexadecadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hexadecatetraenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    linoleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    linolenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stearidonic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nonadecatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arachidonic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosapentaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosatetraenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosapentaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosahexaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polyunsaturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    short_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    medium_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    long_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycerol_and_lipoids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cholesterol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bread_units?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nacl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_meal_plan?: DailyMealPlanUpdateManyWithoutNutritionNestedInput
  }

  export type NutritionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    energy_kj?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    energy_kcal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbohydrate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minerals?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    organic_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alcohol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_a?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    retinol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carotene?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_e_eq?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_e?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_k?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    niacine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    niacine_equiv?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pantothenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b6?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    biotine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    folic_acid_eq?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_folic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    free_folic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b12?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sodium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potassium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calcium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    magnesium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phosphorus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sulfur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    chlorine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    iron?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    zinc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    copper?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    manganese?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fluorine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    iodine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mannitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sorbitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    xylitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    all_sugar_alcohols?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glucose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fructose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galactose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monosaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sucrose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maltose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lactose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_resorbable?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_non_resorbable?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycogen?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    starch?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polysaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_pentoses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_hexoses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_uronic_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cellulose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lignin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water_soluble_dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water_insoluble_dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isoleucine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    leucine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lysine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    methionine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cysteine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phenylalanine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tyrosine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    threonine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tryptophan?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arginine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    histidine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    essential_amino_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alanine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aspartic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glutamic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proline?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    serine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    non_essential_amino_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vegetable_protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    uric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purine_nitrogen?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    butyric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capronic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    caprylic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    caprinic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lauric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    myristic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pentadecanoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    palmitic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    margaric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stearic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arachidic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    behenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lignoceric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tetradecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pentadecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    palmitoleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heptadecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    erucic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selacholeic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monounsaturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hexadecadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hexadecatetraenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    linoleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    linolenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stearidonic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nonadecatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arachidonic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosapentaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosatetraenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosapentaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosahexaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polyunsaturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    short_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    medium_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    long_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycerol_and_lipoids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cholesterol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bread_units?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nacl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_meal_plan?: DailyMealPlanUncheckedUpdateManyWithoutNutritionNestedInput
  }

  export type NutritionCreateManyInput = {
    id?: number
    code: string
    name: string
    energy_kj?: Decimal | DecimalJsLike | number | string | null
    energy_kcal?: Decimal | DecimalJsLike | number | string | null
    water?: Decimal | DecimalJsLike | number | string | null
    protein?: Decimal | DecimalJsLike | number | string | null
    fat?: Decimal | DecimalJsLike | number | string | null
    carbohydrate?: Decimal | DecimalJsLike | number | string | null
    dietary_fiber?: Decimal | DecimalJsLike | number | string | null
    minerals?: Decimal | DecimalJsLike | number | string | null
    organic_acids?: Decimal | DecimalJsLike | number | string | null
    alcohol?: Decimal | DecimalJsLike | number | string | null
    vitamin_a?: Decimal | DecimalJsLike | number | string | null
    retinol?: Decimal | DecimalJsLike | number | string | null
    carotene?: Decimal | DecimalJsLike | number | string | null
    vitamin_d?: Decimal | DecimalJsLike | number | string | null
    vitamin_e_eq?: Decimal | DecimalJsLike | number | string | null
    vitamin_e?: Decimal | DecimalJsLike | number | string | null
    vitamin_k?: Decimal | DecimalJsLike | number | string | null
    vitamin_b1?: Decimal | DecimalJsLike | number | string | null
    vitamin_b2?: Decimal | DecimalJsLike | number | string | null
    niacine?: Decimal | DecimalJsLike | number | string | null
    niacine_equiv?: Decimal | DecimalJsLike | number | string | null
    pantothenic_acid?: Decimal | DecimalJsLike | number | string | null
    vitamin_b6?: Decimal | DecimalJsLike | number | string | null
    biotine?: Decimal | DecimalJsLike | number | string | null
    folic_acid_eq?: Decimal | DecimalJsLike | number | string | null
    total_folic_acid?: Decimal | DecimalJsLike | number | string | null
    free_folic_acid?: Decimal | DecimalJsLike | number | string | null
    vitamin_b12?: Decimal | DecimalJsLike | number | string | null
    vitamin_c?: Decimal | DecimalJsLike | number | string | null
    sodium?: Decimal | DecimalJsLike | number | string | null
    potassium?: Decimal | DecimalJsLike | number | string | null
    calcium?: Decimal | DecimalJsLike | number | string | null
    magnesium?: Decimal | DecimalJsLike | number | string | null
    phosphorus?: Decimal | DecimalJsLike | number | string | null
    sulfur?: Decimal | DecimalJsLike | number | string | null
    chlorine?: Decimal | DecimalJsLike | number | string | null
    iron?: Decimal | DecimalJsLike | number | string | null
    zinc?: Decimal | DecimalJsLike | number | string | null
    copper?: Decimal | DecimalJsLike | number | string | null
    manganese?: Decimal | DecimalJsLike | number | string | null
    fluorine?: Decimal | DecimalJsLike | number | string | null
    iodine?: Decimal | DecimalJsLike | number | string | null
    mannitol?: Decimal | DecimalJsLike | number | string | null
    sorbitol?: Decimal | DecimalJsLike | number | string | null
    xylitol?: Decimal | DecimalJsLike | number | string | null
    all_sugar_alcohols?: Decimal | DecimalJsLike | number | string | null
    glucose?: Decimal | DecimalJsLike | number | string | null
    fructose?: Decimal | DecimalJsLike | number | string | null
    galactose?: Decimal | DecimalJsLike | number | string | null
    monosaccharides?: Decimal | DecimalJsLike | number | string | null
    sucrose?: Decimal | DecimalJsLike | number | string | null
    maltose?: Decimal | DecimalJsLike | number | string | null
    lactose?: Decimal | DecimalJsLike | number | string | null
    disaccharides?: Decimal | DecimalJsLike | number | string | null
    oligosaccharides_resorbable?: Decimal | DecimalJsLike | number | string | null
    oligosaccharides_non_resorbable?: Decimal | DecimalJsLike | number | string | null
    glycogen?: Decimal | DecimalJsLike | number | string | null
    starch?: Decimal | DecimalJsLike | number | string | null
    polysaccharides?: Decimal | DecimalJsLike | number | string | null
    poly_pentoses?: Decimal | DecimalJsLike | number | string | null
    poly_hexoses?: Decimal | DecimalJsLike | number | string | null
    poly_uronic_acids?: Decimal | DecimalJsLike | number | string | null
    cellulose?: Decimal | DecimalJsLike | number | string | null
    lignin?: Decimal | DecimalJsLike | number | string | null
    water_soluble_dietary_fiber?: Decimal | DecimalJsLike | number | string | null
    water_insoluble_dietary_fiber?: Decimal | DecimalJsLike | number | string | null
    isoleucine?: Decimal | DecimalJsLike | number | string | null
    leucine?: Decimal | DecimalJsLike | number | string | null
    lysine?: Decimal | DecimalJsLike | number | string | null
    methionine?: Decimal | DecimalJsLike | number | string | null
    cysteine?: Decimal | DecimalJsLike | number | string | null
    phenylalanine?: Decimal | DecimalJsLike | number | string | null
    tyrosine?: Decimal | DecimalJsLike | number | string | null
    threonine?: Decimal | DecimalJsLike | number | string | null
    tryptophan?: Decimal | DecimalJsLike | number | string | null
    valine?: Decimal | DecimalJsLike | number | string | null
    arginine?: Decimal | DecimalJsLike | number | string | null
    histidine?: Decimal | DecimalJsLike | number | string | null
    essential_amino_acids?: Decimal | DecimalJsLike | number | string | null
    alanine?: Decimal | DecimalJsLike | number | string | null
    aspartic_acid?: Decimal | DecimalJsLike | number | string | null
    glutamic_acid?: Decimal | DecimalJsLike | number | string | null
    glycine?: Decimal | DecimalJsLike | number | string | null
    proline?: Decimal | DecimalJsLike | number | string | null
    serine?: Decimal | DecimalJsLike | number | string | null
    non_essential_amino_acids?: Decimal | DecimalJsLike | number | string | null
    vegetable_protein?: Decimal | DecimalJsLike | number | string | null
    uric_acid?: Decimal | DecimalJsLike | number | string | null
    purine_nitrogen?: Decimal | DecimalJsLike | number | string | null
    butyric_acid?: Decimal | DecimalJsLike | number | string | null
    capronic_acid?: Decimal | DecimalJsLike | number | string | null
    caprylic_acid?: Decimal | DecimalJsLike | number | string | null
    caprinic_acid?: Decimal | DecimalJsLike | number | string | null
    lauric_acid?: Decimal | DecimalJsLike | number | string | null
    myristic_acid?: Decimal | DecimalJsLike | number | string | null
    pentadecanoic_acid?: Decimal | DecimalJsLike | number | string | null
    palmitic_acid?: Decimal | DecimalJsLike | number | string | null
    margaric_acid?: Decimal | DecimalJsLike | number | string | null
    stearic_acid?: Decimal | DecimalJsLike | number | string | null
    arachidic_acid?: Decimal | DecimalJsLike | number | string | null
    behenic_acid?: Decimal | DecimalJsLike | number | string | null
    lignoceric_acid?: Decimal | DecimalJsLike | number | string | null
    saturated_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    tetradecenoic_acid?: Decimal | DecimalJsLike | number | string | null
    pentadecenoic_acid?: Decimal | DecimalJsLike | number | string | null
    palmitoleic_acid?: Decimal | DecimalJsLike | number | string | null
    heptadecenoic_acid?: Decimal | DecimalJsLike | number | string | null
    oleic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosenoic_acid?: Decimal | DecimalJsLike | number | string | null
    erucic_acid?: Decimal | DecimalJsLike | number | string | null
    selacholeic_acid?: Decimal | DecimalJsLike | number | string | null
    monounsaturated_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    hexadecadienoic_acid?: Decimal | DecimalJsLike | number | string | null
    hexadecatetraenoic_acid?: Decimal | DecimalJsLike | number | string | null
    linoleic_acid?: Decimal | DecimalJsLike | number | string | null
    linolenic_acid?: Decimal | DecimalJsLike | number | string | null
    stearidonic_acid?: Decimal | DecimalJsLike | number | string | null
    nonadecatrienoic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosadienoic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosatrienoic_acid?: Decimal | DecimalJsLike | number | string | null
    arachidonic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosapentaenoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosadienoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosatrienoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosatetraenoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosapentaenoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosahexaenoic_acid?: Decimal | DecimalJsLike | number | string | null
    polyunsaturated_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    short_chain_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    medium_chain_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    long_chain_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    glycerol_and_lipoids?: Decimal | DecimalJsLike | number | string | null
    cholesterol?: Decimal | DecimalJsLike | number | string | null
    bread_units?: Decimal | DecimalJsLike | number | string | null
    nacl?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NutritionUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    energy_kj?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    energy_kcal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbohydrate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minerals?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    organic_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alcohol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_a?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    retinol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carotene?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_e_eq?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_e?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_k?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    niacine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    niacine_equiv?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pantothenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b6?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    biotine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    folic_acid_eq?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_folic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    free_folic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b12?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sodium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potassium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calcium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    magnesium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phosphorus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sulfur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    chlorine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    iron?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    zinc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    copper?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    manganese?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fluorine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    iodine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mannitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sorbitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    xylitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    all_sugar_alcohols?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glucose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fructose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galactose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monosaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sucrose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maltose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lactose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_resorbable?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_non_resorbable?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycogen?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    starch?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polysaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_pentoses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_hexoses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_uronic_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cellulose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lignin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water_soluble_dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water_insoluble_dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isoleucine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    leucine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lysine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    methionine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cysteine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phenylalanine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tyrosine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    threonine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tryptophan?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arginine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    histidine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    essential_amino_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alanine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aspartic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glutamic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proline?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    serine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    non_essential_amino_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vegetable_protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    uric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purine_nitrogen?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    butyric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capronic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    caprylic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    caprinic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lauric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    myristic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pentadecanoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    palmitic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    margaric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stearic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arachidic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    behenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lignoceric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tetradecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pentadecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    palmitoleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heptadecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    erucic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selacholeic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monounsaturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hexadecadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hexadecatetraenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    linoleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    linolenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stearidonic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nonadecatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arachidonic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosapentaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosatetraenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosapentaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosahexaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polyunsaturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    short_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    medium_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    long_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycerol_and_lipoids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cholesterol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bread_units?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nacl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutritionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    energy_kj?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    energy_kcal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbohydrate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minerals?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    organic_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alcohol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_a?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    retinol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carotene?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_e_eq?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_e?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_k?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    niacine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    niacine_equiv?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pantothenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b6?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    biotine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    folic_acid_eq?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_folic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    free_folic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b12?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sodium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potassium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calcium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    magnesium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phosphorus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sulfur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    chlorine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    iron?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    zinc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    copper?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    manganese?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fluorine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    iodine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mannitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sorbitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    xylitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    all_sugar_alcohols?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glucose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fructose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galactose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monosaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sucrose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maltose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lactose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_resorbable?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_non_resorbable?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycogen?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    starch?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polysaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_pentoses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_hexoses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_uronic_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cellulose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lignin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water_soluble_dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water_insoluble_dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isoleucine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    leucine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lysine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    methionine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cysteine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phenylalanine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tyrosine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    threonine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tryptophan?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arginine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    histidine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    essential_amino_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alanine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aspartic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glutamic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proline?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    serine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    non_essential_amino_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vegetable_protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    uric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purine_nitrogen?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    butyric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capronic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    caprylic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    caprinic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lauric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    myristic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pentadecanoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    palmitic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    margaric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stearic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arachidic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    behenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lignoceric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tetradecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pentadecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    palmitoleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heptadecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    erucic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selacholeic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monounsaturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hexadecadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hexadecatetraenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    linoleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    linolenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stearidonic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nonadecatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arachidonic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosapentaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosatetraenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosapentaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosahexaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polyunsaturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    short_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    medium_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    long_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycerol_and_lipoids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cholesterol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bread_units?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nacl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DailyMealPlanListRelationFilter = {
    every?: DailyMealPlanWhereInput
    some?: DailyMealPlanWhereInput
    none?: DailyMealPlanWhereInput
  }

  export type DailyMealPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    cratedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    cratedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    cratedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    cover?: SortOrder
    title?: SortOrder
    content?: SortOrder
    viewers?: SortOrder
    cratedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    id?: SortOrder
    viewers?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    cover?: SortOrder
    title?: SortOrder
    content?: SortOrder
    viewers?: SortOrder
    cratedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    cover?: SortOrder
    title?: SortOrder
    content?: SortOrder
    viewers?: SortOrder
    cratedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    id?: SortOrder
    viewers?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type NutritionRelationFilter = {
    is?: NutritionWhereInput
    isNot?: NutritionWhereInput
  }

  export type DailyMealPlanCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    date?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    nutrition_id?: SortOrder
  }

  export type DailyMealPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    nutrition_id?: SortOrder
  }

  export type DailyMealPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    date?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    nutrition_id?: SortOrder
  }

  export type DailyMealPlanMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    date?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    nutrition_id?: SortOrder
  }

  export type DailyMealPlanSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    nutrition_id?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NutritionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    energy_kj?: SortOrder
    energy_kcal?: SortOrder
    water?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    carbohydrate?: SortOrder
    dietary_fiber?: SortOrder
    minerals?: SortOrder
    organic_acids?: SortOrder
    alcohol?: SortOrder
    vitamin_a?: SortOrder
    retinol?: SortOrder
    carotene?: SortOrder
    vitamin_d?: SortOrder
    vitamin_e_eq?: SortOrder
    vitamin_e?: SortOrder
    vitamin_k?: SortOrder
    vitamin_b1?: SortOrder
    vitamin_b2?: SortOrder
    niacine?: SortOrder
    niacine_equiv?: SortOrder
    pantothenic_acid?: SortOrder
    vitamin_b6?: SortOrder
    biotine?: SortOrder
    folic_acid_eq?: SortOrder
    total_folic_acid?: SortOrder
    free_folic_acid?: SortOrder
    vitamin_b12?: SortOrder
    vitamin_c?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    calcium?: SortOrder
    magnesium?: SortOrder
    phosphorus?: SortOrder
    sulfur?: SortOrder
    chlorine?: SortOrder
    iron?: SortOrder
    zinc?: SortOrder
    copper?: SortOrder
    manganese?: SortOrder
    fluorine?: SortOrder
    iodine?: SortOrder
    mannitol?: SortOrder
    sorbitol?: SortOrder
    xylitol?: SortOrder
    all_sugar_alcohols?: SortOrder
    glucose?: SortOrder
    fructose?: SortOrder
    galactose?: SortOrder
    monosaccharides?: SortOrder
    sucrose?: SortOrder
    maltose?: SortOrder
    lactose?: SortOrder
    disaccharides?: SortOrder
    oligosaccharides_resorbable?: SortOrder
    oligosaccharides_non_resorbable?: SortOrder
    glycogen?: SortOrder
    starch?: SortOrder
    polysaccharides?: SortOrder
    poly_pentoses?: SortOrder
    poly_hexoses?: SortOrder
    poly_uronic_acids?: SortOrder
    cellulose?: SortOrder
    lignin?: SortOrder
    water_soluble_dietary_fiber?: SortOrder
    water_insoluble_dietary_fiber?: SortOrder
    isoleucine?: SortOrder
    leucine?: SortOrder
    lysine?: SortOrder
    methionine?: SortOrder
    cysteine?: SortOrder
    phenylalanine?: SortOrder
    tyrosine?: SortOrder
    threonine?: SortOrder
    tryptophan?: SortOrder
    valine?: SortOrder
    arginine?: SortOrder
    histidine?: SortOrder
    essential_amino_acids?: SortOrder
    alanine?: SortOrder
    aspartic_acid?: SortOrder
    glutamic_acid?: SortOrder
    glycine?: SortOrder
    proline?: SortOrder
    serine?: SortOrder
    non_essential_amino_acids?: SortOrder
    vegetable_protein?: SortOrder
    uric_acid?: SortOrder
    purine_nitrogen?: SortOrder
    butyric_acid?: SortOrder
    capronic_acid?: SortOrder
    caprylic_acid?: SortOrder
    caprinic_acid?: SortOrder
    lauric_acid?: SortOrder
    myristic_acid?: SortOrder
    pentadecanoic_acid?: SortOrder
    palmitic_acid?: SortOrder
    margaric_acid?: SortOrder
    stearic_acid?: SortOrder
    arachidic_acid?: SortOrder
    behenic_acid?: SortOrder
    lignoceric_acid?: SortOrder
    saturated_fatty_acids?: SortOrder
    tetradecenoic_acid?: SortOrder
    pentadecenoic_acid?: SortOrder
    palmitoleic_acid?: SortOrder
    heptadecenoic_acid?: SortOrder
    oleic_acid?: SortOrder
    eicosenoic_acid?: SortOrder
    erucic_acid?: SortOrder
    selacholeic_acid?: SortOrder
    monounsaturated_fatty_acids?: SortOrder
    hexadecadienoic_acid?: SortOrder
    hexadecatetraenoic_acid?: SortOrder
    linoleic_acid?: SortOrder
    linolenic_acid?: SortOrder
    stearidonic_acid?: SortOrder
    nonadecatrienoic_acid?: SortOrder
    eicosadienoic_acid?: SortOrder
    eicosatrienoic_acid?: SortOrder
    arachidonic_acid?: SortOrder
    eicosapentaenoic_acid?: SortOrder
    docosadienoic_acid?: SortOrder
    docosatrienoic_acid?: SortOrder
    docosatetraenoic_acid?: SortOrder
    docosapentaenoic_acid?: SortOrder
    docosahexaenoic_acid?: SortOrder
    polyunsaturated_fatty_acids?: SortOrder
    short_chain_fatty_acids?: SortOrder
    medium_chain_fatty_acids?: SortOrder
    long_chain_fatty_acids?: SortOrder
    glycerol_and_lipoids?: SortOrder
    cholesterol?: SortOrder
    bread_units?: SortOrder
    nacl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NutritionAvgOrderByAggregateInput = {
    id?: SortOrder
    energy_kj?: SortOrder
    energy_kcal?: SortOrder
    water?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    carbohydrate?: SortOrder
    dietary_fiber?: SortOrder
    minerals?: SortOrder
    organic_acids?: SortOrder
    alcohol?: SortOrder
    vitamin_a?: SortOrder
    retinol?: SortOrder
    carotene?: SortOrder
    vitamin_d?: SortOrder
    vitamin_e_eq?: SortOrder
    vitamin_e?: SortOrder
    vitamin_k?: SortOrder
    vitamin_b1?: SortOrder
    vitamin_b2?: SortOrder
    niacine?: SortOrder
    niacine_equiv?: SortOrder
    pantothenic_acid?: SortOrder
    vitamin_b6?: SortOrder
    biotine?: SortOrder
    folic_acid_eq?: SortOrder
    total_folic_acid?: SortOrder
    free_folic_acid?: SortOrder
    vitamin_b12?: SortOrder
    vitamin_c?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    calcium?: SortOrder
    magnesium?: SortOrder
    phosphorus?: SortOrder
    sulfur?: SortOrder
    chlorine?: SortOrder
    iron?: SortOrder
    zinc?: SortOrder
    copper?: SortOrder
    manganese?: SortOrder
    fluorine?: SortOrder
    iodine?: SortOrder
    mannitol?: SortOrder
    sorbitol?: SortOrder
    xylitol?: SortOrder
    all_sugar_alcohols?: SortOrder
    glucose?: SortOrder
    fructose?: SortOrder
    galactose?: SortOrder
    monosaccharides?: SortOrder
    sucrose?: SortOrder
    maltose?: SortOrder
    lactose?: SortOrder
    disaccharides?: SortOrder
    oligosaccharides_resorbable?: SortOrder
    oligosaccharides_non_resorbable?: SortOrder
    glycogen?: SortOrder
    starch?: SortOrder
    polysaccharides?: SortOrder
    poly_pentoses?: SortOrder
    poly_hexoses?: SortOrder
    poly_uronic_acids?: SortOrder
    cellulose?: SortOrder
    lignin?: SortOrder
    water_soluble_dietary_fiber?: SortOrder
    water_insoluble_dietary_fiber?: SortOrder
    isoleucine?: SortOrder
    leucine?: SortOrder
    lysine?: SortOrder
    methionine?: SortOrder
    cysteine?: SortOrder
    phenylalanine?: SortOrder
    tyrosine?: SortOrder
    threonine?: SortOrder
    tryptophan?: SortOrder
    valine?: SortOrder
    arginine?: SortOrder
    histidine?: SortOrder
    essential_amino_acids?: SortOrder
    alanine?: SortOrder
    aspartic_acid?: SortOrder
    glutamic_acid?: SortOrder
    glycine?: SortOrder
    proline?: SortOrder
    serine?: SortOrder
    non_essential_amino_acids?: SortOrder
    vegetable_protein?: SortOrder
    uric_acid?: SortOrder
    purine_nitrogen?: SortOrder
    butyric_acid?: SortOrder
    capronic_acid?: SortOrder
    caprylic_acid?: SortOrder
    caprinic_acid?: SortOrder
    lauric_acid?: SortOrder
    myristic_acid?: SortOrder
    pentadecanoic_acid?: SortOrder
    palmitic_acid?: SortOrder
    margaric_acid?: SortOrder
    stearic_acid?: SortOrder
    arachidic_acid?: SortOrder
    behenic_acid?: SortOrder
    lignoceric_acid?: SortOrder
    saturated_fatty_acids?: SortOrder
    tetradecenoic_acid?: SortOrder
    pentadecenoic_acid?: SortOrder
    palmitoleic_acid?: SortOrder
    heptadecenoic_acid?: SortOrder
    oleic_acid?: SortOrder
    eicosenoic_acid?: SortOrder
    erucic_acid?: SortOrder
    selacholeic_acid?: SortOrder
    monounsaturated_fatty_acids?: SortOrder
    hexadecadienoic_acid?: SortOrder
    hexadecatetraenoic_acid?: SortOrder
    linoleic_acid?: SortOrder
    linolenic_acid?: SortOrder
    stearidonic_acid?: SortOrder
    nonadecatrienoic_acid?: SortOrder
    eicosadienoic_acid?: SortOrder
    eicosatrienoic_acid?: SortOrder
    arachidonic_acid?: SortOrder
    eicosapentaenoic_acid?: SortOrder
    docosadienoic_acid?: SortOrder
    docosatrienoic_acid?: SortOrder
    docosatetraenoic_acid?: SortOrder
    docosapentaenoic_acid?: SortOrder
    docosahexaenoic_acid?: SortOrder
    polyunsaturated_fatty_acids?: SortOrder
    short_chain_fatty_acids?: SortOrder
    medium_chain_fatty_acids?: SortOrder
    long_chain_fatty_acids?: SortOrder
    glycerol_and_lipoids?: SortOrder
    cholesterol?: SortOrder
    bread_units?: SortOrder
    nacl?: SortOrder
  }

  export type NutritionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    energy_kj?: SortOrder
    energy_kcal?: SortOrder
    water?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    carbohydrate?: SortOrder
    dietary_fiber?: SortOrder
    minerals?: SortOrder
    organic_acids?: SortOrder
    alcohol?: SortOrder
    vitamin_a?: SortOrder
    retinol?: SortOrder
    carotene?: SortOrder
    vitamin_d?: SortOrder
    vitamin_e_eq?: SortOrder
    vitamin_e?: SortOrder
    vitamin_k?: SortOrder
    vitamin_b1?: SortOrder
    vitamin_b2?: SortOrder
    niacine?: SortOrder
    niacine_equiv?: SortOrder
    pantothenic_acid?: SortOrder
    vitamin_b6?: SortOrder
    biotine?: SortOrder
    folic_acid_eq?: SortOrder
    total_folic_acid?: SortOrder
    free_folic_acid?: SortOrder
    vitamin_b12?: SortOrder
    vitamin_c?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    calcium?: SortOrder
    magnesium?: SortOrder
    phosphorus?: SortOrder
    sulfur?: SortOrder
    chlorine?: SortOrder
    iron?: SortOrder
    zinc?: SortOrder
    copper?: SortOrder
    manganese?: SortOrder
    fluorine?: SortOrder
    iodine?: SortOrder
    mannitol?: SortOrder
    sorbitol?: SortOrder
    xylitol?: SortOrder
    all_sugar_alcohols?: SortOrder
    glucose?: SortOrder
    fructose?: SortOrder
    galactose?: SortOrder
    monosaccharides?: SortOrder
    sucrose?: SortOrder
    maltose?: SortOrder
    lactose?: SortOrder
    disaccharides?: SortOrder
    oligosaccharides_resorbable?: SortOrder
    oligosaccharides_non_resorbable?: SortOrder
    glycogen?: SortOrder
    starch?: SortOrder
    polysaccharides?: SortOrder
    poly_pentoses?: SortOrder
    poly_hexoses?: SortOrder
    poly_uronic_acids?: SortOrder
    cellulose?: SortOrder
    lignin?: SortOrder
    water_soluble_dietary_fiber?: SortOrder
    water_insoluble_dietary_fiber?: SortOrder
    isoleucine?: SortOrder
    leucine?: SortOrder
    lysine?: SortOrder
    methionine?: SortOrder
    cysteine?: SortOrder
    phenylalanine?: SortOrder
    tyrosine?: SortOrder
    threonine?: SortOrder
    tryptophan?: SortOrder
    valine?: SortOrder
    arginine?: SortOrder
    histidine?: SortOrder
    essential_amino_acids?: SortOrder
    alanine?: SortOrder
    aspartic_acid?: SortOrder
    glutamic_acid?: SortOrder
    glycine?: SortOrder
    proline?: SortOrder
    serine?: SortOrder
    non_essential_amino_acids?: SortOrder
    vegetable_protein?: SortOrder
    uric_acid?: SortOrder
    purine_nitrogen?: SortOrder
    butyric_acid?: SortOrder
    capronic_acid?: SortOrder
    caprylic_acid?: SortOrder
    caprinic_acid?: SortOrder
    lauric_acid?: SortOrder
    myristic_acid?: SortOrder
    pentadecanoic_acid?: SortOrder
    palmitic_acid?: SortOrder
    margaric_acid?: SortOrder
    stearic_acid?: SortOrder
    arachidic_acid?: SortOrder
    behenic_acid?: SortOrder
    lignoceric_acid?: SortOrder
    saturated_fatty_acids?: SortOrder
    tetradecenoic_acid?: SortOrder
    pentadecenoic_acid?: SortOrder
    palmitoleic_acid?: SortOrder
    heptadecenoic_acid?: SortOrder
    oleic_acid?: SortOrder
    eicosenoic_acid?: SortOrder
    erucic_acid?: SortOrder
    selacholeic_acid?: SortOrder
    monounsaturated_fatty_acids?: SortOrder
    hexadecadienoic_acid?: SortOrder
    hexadecatetraenoic_acid?: SortOrder
    linoleic_acid?: SortOrder
    linolenic_acid?: SortOrder
    stearidonic_acid?: SortOrder
    nonadecatrienoic_acid?: SortOrder
    eicosadienoic_acid?: SortOrder
    eicosatrienoic_acid?: SortOrder
    arachidonic_acid?: SortOrder
    eicosapentaenoic_acid?: SortOrder
    docosadienoic_acid?: SortOrder
    docosatrienoic_acid?: SortOrder
    docosatetraenoic_acid?: SortOrder
    docosapentaenoic_acid?: SortOrder
    docosahexaenoic_acid?: SortOrder
    polyunsaturated_fatty_acids?: SortOrder
    short_chain_fatty_acids?: SortOrder
    medium_chain_fatty_acids?: SortOrder
    long_chain_fatty_acids?: SortOrder
    glycerol_and_lipoids?: SortOrder
    cholesterol?: SortOrder
    bread_units?: SortOrder
    nacl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NutritionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    energy_kj?: SortOrder
    energy_kcal?: SortOrder
    water?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    carbohydrate?: SortOrder
    dietary_fiber?: SortOrder
    minerals?: SortOrder
    organic_acids?: SortOrder
    alcohol?: SortOrder
    vitamin_a?: SortOrder
    retinol?: SortOrder
    carotene?: SortOrder
    vitamin_d?: SortOrder
    vitamin_e_eq?: SortOrder
    vitamin_e?: SortOrder
    vitamin_k?: SortOrder
    vitamin_b1?: SortOrder
    vitamin_b2?: SortOrder
    niacine?: SortOrder
    niacine_equiv?: SortOrder
    pantothenic_acid?: SortOrder
    vitamin_b6?: SortOrder
    biotine?: SortOrder
    folic_acid_eq?: SortOrder
    total_folic_acid?: SortOrder
    free_folic_acid?: SortOrder
    vitamin_b12?: SortOrder
    vitamin_c?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    calcium?: SortOrder
    magnesium?: SortOrder
    phosphorus?: SortOrder
    sulfur?: SortOrder
    chlorine?: SortOrder
    iron?: SortOrder
    zinc?: SortOrder
    copper?: SortOrder
    manganese?: SortOrder
    fluorine?: SortOrder
    iodine?: SortOrder
    mannitol?: SortOrder
    sorbitol?: SortOrder
    xylitol?: SortOrder
    all_sugar_alcohols?: SortOrder
    glucose?: SortOrder
    fructose?: SortOrder
    galactose?: SortOrder
    monosaccharides?: SortOrder
    sucrose?: SortOrder
    maltose?: SortOrder
    lactose?: SortOrder
    disaccharides?: SortOrder
    oligosaccharides_resorbable?: SortOrder
    oligosaccharides_non_resorbable?: SortOrder
    glycogen?: SortOrder
    starch?: SortOrder
    polysaccharides?: SortOrder
    poly_pentoses?: SortOrder
    poly_hexoses?: SortOrder
    poly_uronic_acids?: SortOrder
    cellulose?: SortOrder
    lignin?: SortOrder
    water_soluble_dietary_fiber?: SortOrder
    water_insoluble_dietary_fiber?: SortOrder
    isoleucine?: SortOrder
    leucine?: SortOrder
    lysine?: SortOrder
    methionine?: SortOrder
    cysteine?: SortOrder
    phenylalanine?: SortOrder
    tyrosine?: SortOrder
    threonine?: SortOrder
    tryptophan?: SortOrder
    valine?: SortOrder
    arginine?: SortOrder
    histidine?: SortOrder
    essential_amino_acids?: SortOrder
    alanine?: SortOrder
    aspartic_acid?: SortOrder
    glutamic_acid?: SortOrder
    glycine?: SortOrder
    proline?: SortOrder
    serine?: SortOrder
    non_essential_amino_acids?: SortOrder
    vegetable_protein?: SortOrder
    uric_acid?: SortOrder
    purine_nitrogen?: SortOrder
    butyric_acid?: SortOrder
    capronic_acid?: SortOrder
    caprylic_acid?: SortOrder
    caprinic_acid?: SortOrder
    lauric_acid?: SortOrder
    myristic_acid?: SortOrder
    pentadecanoic_acid?: SortOrder
    palmitic_acid?: SortOrder
    margaric_acid?: SortOrder
    stearic_acid?: SortOrder
    arachidic_acid?: SortOrder
    behenic_acid?: SortOrder
    lignoceric_acid?: SortOrder
    saturated_fatty_acids?: SortOrder
    tetradecenoic_acid?: SortOrder
    pentadecenoic_acid?: SortOrder
    palmitoleic_acid?: SortOrder
    heptadecenoic_acid?: SortOrder
    oleic_acid?: SortOrder
    eicosenoic_acid?: SortOrder
    erucic_acid?: SortOrder
    selacholeic_acid?: SortOrder
    monounsaturated_fatty_acids?: SortOrder
    hexadecadienoic_acid?: SortOrder
    hexadecatetraenoic_acid?: SortOrder
    linoleic_acid?: SortOrder
    linolenic_acid?: SortOrder
    stearidonic_acid?: SortOrder
    nonadecatrienoic_acid?: SortOrder
    eicosadienoic_acid?: SortOrder
    eicosatrienoic_acid?: SortOrder
    arachidonic_acid?: SortOrder
    eicosapentaenoic_acid?: SortOrder
    docosadienoic_acid?: SortOrder
    docosatrienoic_acid?: SortOrder
    docosatetraenoic_acid?: SortOrder
    docosapentaenoic_acid?: SortOrder
    docosahexaenoic_acid?: SortOrder
    polyunsaturated_fatty_acids?: SortOrder
    short_chain_fatty_acids?: SortOrder
    medium_chain_fatty_acids?: SortOrder
    long_chain_fatty_acids?: SortOrder
    glycerol_and_lipoids?: SortOrder
    cholesterol?: SortOrder
    bread_units?: SortOrder
    nacl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NutritionSumOrderByAggregateInput = {
    id?: SortOrder
    energy_kj?: SortOrder
    energy_kcal?: SortOrder
    water?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    carbohydrate?: SortOrder
    dietary_fiber?: SortOrder
    minerals?: SortOrder
    organic_acids?: SortOrder
    alcohol?: SortOrder
    vitamin_a?: SortOrder
    retinol?: SortOrder
    carotene?: SortOrder
    vitamin_d?: SortOrder
    vitamin_e_eq?: SortOrder
    vitamin_e?: SortOrder
    vitamin_k?: SortOrder
    vitamin_b1?: SortOrder
    vitamin_b2?: SortOrder
    niacine?: SortOrder
    niacine_equiv?: SortOrder
    pantothenic_acid?: SortOrder
    vitamin_b6?: SortOrder
    biotine?: SortOrder
    folic_acid_eq?: SortOrder
    total_folic_acid?: SortOrder
    free_folic_acid?: SortOrder
    vitamin_b12?: SortOrder
    vitamin_c?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    calcium?: SortOrder
    magnesium?: SortOrder
    phosphorus?: SortOrder
    sulfur?: SortOrder
    chlorine?: SortOrder
    iron?: SortOrder
    zinc?: SortOrder
    copper?: SortOrder
    manganese?: SortOrder
    fluorine?: SortOrder
    iodine?: SortOrder
    mannitol?: SortOrder
    sorbitol?: SortOrder
    xylitol?: SortOrder
    all_sugar_alcohols?: SortOrder
    glucose?: SortOrder
    fructose?: SortOrder
    galactose?: SortOrder
    monosaccharides?: SortOrder
    sucrose?: SortOrder
    maltose?: SortOrder
    lactose?: SortOrder
    disaccharides?: SortOrder
    oligosaccharides_resorbable?: SortOrder
    oligosaccharides_non_resorbable?: SortOrder
    glycogen?: SortOrder
    starch?: SortOrder
    polysaccharides?: SortOrder
    poly_pentoses?: SortOrder
    poly_hexoses?: SortOrder
    poly_uronic_acids?: SortOrder
    cellulose?: SortOrder
    lignin?: SortOrder
    water_soluble_dietary_fiber?: SortOrder
    water_insoluble_dietary_fiber?: SortOrder
    isoleucine?: SortOrder
    leucine?: SortOrder
    lysine?: SortOrder
    methionine?: SortOrder
    cysteine?: SortOrder
    phenylalanine?: SortOrder
    tyrosine?: SortOrder
    threonine?: SortOrder
    tryptophan?: SortOrder
    valine?: SortOrder
    arginine?: SortOrder
    histidine?: SortOrder
    essential_amino_acids?: SortOrder
    alanine?: SortOrder
    aspartic_acid?: SortOrder
    glutamic_acid?: SortOrder
    glycine?: SortOrder
    proline?: SortOrder
    serine?: SortOrder
    non_essential_amino_acids?: SortOrder
    vegetable_protein?: SortOrder
    uric_acid?: SortOrder
    purine_nitrogen?: SortOrder
    butyric_acid?: SortOrder
    capronic_acid?: SortOrder
    caprylic_acid?: SortOrder
    caprinic_acid?: SortOrder
    lauric_acid?: SortOrder
    myristic_acid?: SortOrder
    pentadecanoic_acid?: SortOrder
    palmitic_acid?: SortOrder
    margaric_acid?: SortOrder
    stearic_acid?: SortOrder
    arachidic_acid?: SortOrder
    behenic_acid?: SortOrder
    lignoceric_acid?: SortOrder
    saturated_fatty_acids?: SortOrder
    tetradecenoic_acid?: SortOrder
    pentadecenoic_acid?: SortOrder
    palmitoleic_acid?: SortOrder
    heptadecenoic_acid?: SortOrder
    oleic_acid?: SortOrder
    eicosenoic_acid?: SortOrder
    erucic_acid?: SortOrder
    selacholeic_acid?: SortOrder
    monounsaturated_fatty_acids?: SortOrder
    hexadecadienoic_acid?: SortOrder
    hexadecatetraenoic_acid?: SortOrder
    linoleic_acid?: SortOrder
    linolenic_acid?: SortOrder
    stearidonic_acid?: SortOrder
    nonadecatrienoic_acid?: SortOrder
    eicosadienoic_acid?: SortOrder
    eicosatrienoic_acid?: SortOrder
    arachidonic_acid?: SortOrder
    eicosapentaenoic_acid?: SortOrder
    docosadienoic_acid?: SortOrder
    docosatrienoic_acid?: SortOrder
    docosatetraenoic_acid?: SortOrder
    docosapentaenoic_acid?: SortOrder
    docosahexaenoic_acid?: SortOrder
    polyunsaturated_fatty_acids?: SortOrder
    short_chain_fatty_acids?: SortOrder
    medium_chain_fatty_acids?: SortOrder
    long_chain_fatty_acids?: SortOrder
    glycerol_and_lipoids?: SortOrder
    cholesterol?: SortOrder
    bread_units?: SortOrder
    nacl?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DailyMealPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyMealPlanCreateWithoutUserInput, DailyMealPlanUncheckedCreateWithoutUserInput> | DailyMealPlanCreateWithoutUserInput[] | DailyMealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyMealPlanCreateOrConnectWithoutUserInput | DailyMealPlanCreateOrConnectWithoutUserInput[]
    createMany?: DailyMealPlanCreateManyUserInputEnvelope
    connect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
  }

  export type DailyMealPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyMealPlanCreateWithoutUserInput, DailyMealPlanUncheckedCreateWithoutUserInput> | DailyMealPlanCreateWithoutUserInput[] | DailyMealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyMealPlanCreateOrConnectWithoutUserInput | DailyMealPlanCreateOrConnectWithoutUserInput[]
    createMany?: DailyMealPlanCreateManyUserInputEnvelope
    connect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DailyMealPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyMealPlanCreateWithoutUserInput, DailyMealPlanUncheckedCreateWithoutUserInput> | DailyMealPlanCreateWithoutUserInput[] | DailyMealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyMealPlanCreateOrConnectWithoutUserInput | DailyMealPlanCreateOrConnectWithoutUserInput[]
    upsert?: DailyMealPlanUpsertWithWhereUniqueWithoutUserInput | DailyMealPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyMealPlanCreateManyUserInputEnvelope
    set?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    disconnect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    delete?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    connect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    update?: DailyMealPlanUpdateWithWhereUniqueWithoutUserInput | DailyMealPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyMealPlanUpdateManyWithWhereWithoutUserInput | DailyMealPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyMealPlanScalarWhereInput | DailyMealPlanScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DailyMealPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyMealPlanCreateWithoutUserInput, DailyMealPlanUncheckedCreateWithoutUserInput> | DailyMealPlanCreateWithoutUserInput[] | DailyMealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyMealPlanCreateOrConnectWithoutUserInput | DailyMealPlanCreateOrConnectWithoutUserInput[]
    upsert?: DailyMealPlanUpsertWithWhereUniqueWithoutUserInput | DailyMealPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyMealPlanCreateManyUserInputEnvelope
    set?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    disconnect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    delete?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    connect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    update?: DailyMealPlanUpdateWithWhereUniqueWithoutUserInput | DailyMealPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyMealPlanUpdateManyWithWhereWithoutUserInput | DailyMealPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyMealPlanScalarWhereInput | DailyMealPlanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDaily_meal_planInput = {
    create?: XOR<UserCreateWithoutDaily_meal_planInput, UserUncheckedCreateWithoutDaily_meal_planInput>
    connectOrCreate?: UserCreateOrConnectWithoutDaily_meal_planInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutDaily_meal_planInput = {
    create?: XOR<CategoryCreateWithoutDaily_meal_planInput, CategoryUncheckedCreateWithoutDaily_meal_planInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDaily_meal_planInput
    connect?: CategoryWhereUniqueInput
  }

  export type NutritionCreateNestedOneWithoutDaily_meal_planInput = {
    create?: XOR<NutritionCreateWithoutDaily_meal_planInput, NutritionUncheckedCreateWithoutDaily_meal_planInput>
    connectOrCreate?: NutritionCreateOrConnectWithoutDaily_meal_planInput
    connect?: NutritionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDaily_meal_planNestedInput = {
    create?: XOR<UserCreateWithoutDaily_meal_planInput, UserUncheckedCreateWithoutDaily_meal_planInput>
    connectOrCreate?: UserCreateOrConnectWithoutDaily_meal_planInput
    upsert?: UserUpsertWithoutDaily_meal_planInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDaily_meal_planInput, UserUpdateWithoutDaily_meal_planInput>, UserUncheckedUpdateWithoutDaily_meal_planInput>
  }

  export type CategoryUpdateOneRequiredWithoutDaily_meal_planNestedInput = {
    create?: XOR<CategoryCreateWithoutDaily_meal_planInput, CategoryUncheckedCreateWithoutDaily_meal_planInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDaily_meal_planInput
    upsert?: CategoryUpsertWithoutDaily_meal_planInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutDaily_meal_planInput, CategoryUpdateWithoutDaily_meal_planInput>, CategoryUncheckedUpdateWithoutDaily_meal_planInput>
  }

  export type NutritionUpdateOneRequiredWithoutDaily_meal_planNestedInput = {
    create?: XOR<NutritionCreateWithoutDaily_meal_planInput, NutritionUncheckedCreateWithoutDaily_meal_planInput>
    connectOrCreate?: NutritionCreateOrConnectWithoutDaily_meal_planInput
    upsert?: NutritionUpsertWithoutDaily_meal_planInput
    connect?: NutritionWhereUniqueInput
    update?: XOR<XOR<NutritionUpdateToOneWithWhereWithoutDaily_meal_planInput, NutritionUpdateWithoutDaily_meal_planInput>, NutritionUncheckedUpdateWithoutDaily_meal_planInput>
  }

  export type DailyMealPlanCreateNestedManyWithoutCategoryInput = {
    create?: XOR<DailyMealPlanCreateWithoutCategoryInput, DailyMealPlanUncheckedCreateWithoutCategoryInput> | DailyMealPlanCreateWithoutCategoryInput[] | DailyMealPlanUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DailyMealPlanCreateOrConnectWithoutCategoryInput | DailyMealPlanCreateOrConnectWithoutCategoryInput[]
    createMany?: DailyMealPlanCreateManyCategoryInputEnvelope
    connect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
  }

  export type DailyMealPlanUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<DailyMealPlanCreateWithoutCategoryInput, DailyMealPlanUncheckedCreateWithoutCategoryInput> | DailyMealPlanCreateWithoutCategoryInput[] | DailyMealPlanUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DailyMealPlanCreateOrConnectWithoutCategoryInput | DailyMealPlanCreateOrConnectWithoutCategoryInput[]
    createMany?: DailyMealPlanCreateManyCategoryInputEnvelope
    connect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
  }

  export type DailyMealPlanUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<DailyMealPlanCreateWithoutCategoryInput, DailyMealPlanUncheckedCreateWithoutCategoryInput> | DailyMealPlanCreateWithoutCategoryInput[] | DailyMealPlanUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DailyMealPlanCreateOrConnectWithoutCategoryInput | DailyMealPlanCreateOrConnectWithoutCategoryInput[]
    upsert?: DailyMealPlanUpsertWithWhereUniqueWithoutCategoryInput | DailyMealPlanUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: DailyMealPlanCreateManyCategoryInputEnvelope
    set?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    disconnect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    delete?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    connect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    update?: DailyMealPlanUpdateWithWhereUniqueWithoutCategoryInput | DailyMealPlanUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: DailyMealPlanUpdateManyWithWhereWithoutCategoryInput | DailyMealPlanUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: DailyMealPlanScalarWhereInput | DailyMealPlanScalarWhereInput[]
  }

  export type DailyMealPlanUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<DailyMealPlanCreateWithoutCategoryInput, DailyMealPlanUncheckedCreateWithoutCategoryInput> | DailyMealPlanCreateWithoutCategoryInput[] | DailyMealPlanUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DailyMealPlanCreateOrConnectWithoutCategoryInput | DailyMealPlanCreateOrConnectWithoutCategoryInput[]
    upsert?: DailyMealPlanUpsertWithWhereUniqueWithoutCategoryInput | DailyMealPlanUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: DailyMealPlanCreateManyCategoryInputEnvelope
    set?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    disconnect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    delete?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    connect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    update?: DailyMealPlanUpdateWithWhereUniqueWithoutCategoryInput | DailyMealPlanUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: DailyMealPlanUpdateManyWithWhereWithoutCategoryInput | DailyMealPlanUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: DailyMealPlanScalarWhereInput | DailyMealPlanScalarWhereInput[]
  }

  export type DailyMealPlanCreateNestedManyWithoutNutritionInput = {
    create?: XOR<DailyMealPlanCreateWithoutNutritionInput, DailyMealPlanUncheckedCreateWithoutNutritionInput> | DailyMealPlanCreateWithoutNutritionInput[] | DailyMealPlanUncheckedCreateWithoutNutritionInput[]
    connectOrCreate?: DailyMealPlanCreateOrConnectWithoutNutritionInput | DailyMealPlanCreateOrConnectWithoutNutritionInput[]
    createMany?: DailyMealPlanCreateManyNutritionInputEnvelope
    connect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
  }

  export type DailyMealPlanUncheckedCreateNestedManyWithoutNutritionInput = {
    create?: XOR<DailyMealPlanCreateWithoutNutritionInput, DailyMealPlanUncheckedCreateWithoutNutritionInput> | DailyMealPlanCreateWithoutNutritionInput[] | DailyMealPlanUncheckedCreateWithoutNutritionInput[]
    connectOrCreate?: DailyMealPlanCreateOrConnectWithoutNutritionInput | DailyMealPlanCreateOrConnectWithoutNutritionInput[]
    createMany?: DailyMealPlanCreateManyNutritionInputEnvelope
    connect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DailyMealPlanUpdateManyWithoutNutritionNestedInput = {
    create?: XOR<DailyMealPlanCreateWithoutNutritionInput, DailyMealPlanUncheckedCreateWithoutNutritionInput> | DailyMealPlanCreateWithoutNutritionInput[] | DailyMealPlanUncheckedCreateWithoutNutritionInput[]
    connectOrCreate?: DailyMealPlanCreateOrConnectWithoutNutritionInput | DailyMealPlanCreateOrConnectWithoutNutritionInput[]
    upsert?: DailyMealPlanUpsertWithWhereUniqueWithoutNutritionInput | DailyMealPlanUpsertWithWhereUniqueWithoutNutritionInput[]
    createMany?: DailyMealPlanCreateManyNutritionInputEnvelope
    set?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    disconnect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    delete?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    connect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    update?: DailyMealPlanUpdateWithWhereUniqueWithoutNutritionInput | DailyMealPlanUpdateWithWhereUniqueWithoutNutritionInput[]
    updateMany?: DailyMealPlanUpdateManyWithWhereWithoutNutritionInput | DailyMealPlanUpdateManyWithWhereWithoutNutritionInput[]
    deleteMany?: DailyMealPlanScalarWhereInput | DailyMealPlanScalarWhereInput[]
  }

  export type DailyMealPlanUncheckedUpdateManyWithoutNutritionNestedInput = {
    create?: XOR<DailyMealPlanCreateWithoutNutritionInput, DailyMealPlanUncheckedCreateWithoutNutritionInput> | DailyMealPlanCreateWithoutNutritionInput[] | DailyMealPlanUncheckedCreateWithoutNutritionInput[]
    connectOrCreate?: DailyMealPlanCreateOrConnectWithoutNutritionInput | DailyMealPlanCreateOrConnectWithoutNutritionInput[]
    upsert?: DailyMealPlanUpsertWithWhereUniqueWithoutNutritionInput | DailyMealPlanUpsertWithWhereUniqueWithoutNutritionInput[]
    createMany?: DailyMealPlanCreateManyNutritionInputEnvelope
    set?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    disconnect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    delete?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    connect?: DailyMealPlanWhereUniqueInput | DailyMealPlanWhereUniqueInput[]
    update?: DailyMealPlanUpdateWithWhereUniqueWithoutNutritionInput | DailyMealPlanUpdateWithWhereUniqueWithoutNutritionInput[]
    updateMany?: DailyMealPlanUpdateManyWithWhereWithoutNutritionInput | DailyMealPlanUpdateManyWithWhereWithoutNutritionInput[]
    deleteMany?: DailyMealPlanScalarWhereInput | DailyMealPlanScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DailyMealPlanCreateWithoutUserInput = {
    order: number
    date: Date | string
    category: CategoryCreateNestedOneWithoutDaily_meal_planInput
    nutrition: NutritionCreateNestedOneWithoutDaily_meal_planInput
  }

  export type DailyMealPlanUncheckedCreateWithoutUserInput = {
    id?: number
    order: number
    date: Date | string
    category_id: number
    nutrition_id: number
  }

  export type DailyMealPlanCreateOrConnectWithoutUserInput = {
    where: DailyMealPlanWhereUniqueInput
    create: XOR<DailyMealPlanCreateWithoutUserInput, DailyMealPlanUncheckedCreateWithoutUserInput>
  }

  export type DailyMealPlanCreateManyUserInputEnvelope = {
    data: DailyMealPlanCreateManyUserInput | DailyMealPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyMealPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyMealPlanWhereUniqueInput
    update: XOR<DailyMealPlanUpdateWithoutUserInput, DailyMealPlanUncheckedUpdateWithoutUserInput>
    create: XOR<DailyMealPlanCreateWithoutUserInput, DailyMealPlanUncheckedCreateWithoutUserInput>
  }

  export type DailyMealPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyMealPlanWhereUniqueInput
    data: XOR<DailyMealPlanUpdateWithoutUserInput, DailyMealPlanUncheckedUpdateWithoutUserInput>
  }

  export type DailyMealPlanUpdateManyWithWhereWithoutUserInput = {
    where: DailyMealPlanScalarWhereInput
    data: XOR<DailyMealPlanUpdateManyMutationInput, DailyMealPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyMealPlanScalarWhereInput = {
    AND?: DailyMealPlanScalarWhereInput | DailyMealPlanScalarWhereInput[]
    OR?: DailyMealPlanScalarWhereInput[]
    NOT?: DailyMealPlanScalarWhereInput | DailyMealPlanScalarWhereInput[]
    id?: IntFilter<"DailyMealPlan"> | number
    order?: IntFilter<"DailyMealPlan"> | number
    date?: DateTimeFilter<"DailyMealPlan"> | Date | string
    user_id?: IntFilter<"DailyMealPlan"> | number
    category_id?: IntFilter<"DailyMealPlan"> | number
    nutrition_id?: IntFilter<"DailyMealPlan"> | number
  }

  export type UserCreateWithoutDaily_meal_planInput = {
    email: string
    name: string
    password: string
    cratedAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutDaily_meal_planInput = {
    id?: number
    email: string
    name: string
    password: string
    cratedAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutDaily_meal_planInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDaily_meal_planInput, UserUncheckedCreateWithoutDaily_meal_planInput>
  }

  export type CategoryCreateWithoutDaily_meal_planInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutDaily_meal_planInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutDaily_meal_planInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutDaily_meal_planInput, CategoryUncheckedCreateWithoutDaily_meal_planInput>
  }

  export type NutritionCreateWithoutDaily_meal_planInput = {
    code: string
    name: string
    energy_kj?: Decimal | DecimalJsLike | number | string | null
    energy_kcal?: Decimal | DecimalJsLike | number | string | null
    water?: Decimal | DecimalJsLike | number | string | null
    protein?: Decimal | DecimalJsLike | number | string | null
    fat?: Decimal | DecimalJsLike | number | string | null
    carbohydrate?: Decimal | DecimalJsLike | number | string | null
    dietary_fiber?: Decimal | DecimalJsLike | number | string | null
    minerals?: Decimal | DecimalJsLike | number | string | null
    organic_acids?: Decimal | DecimalJsLike | number | string | null
    alcohol?: Decimal | DecimalJsLike | number | string | null
    vitamin_a?: Decimal | DecimalJsLike | number | string | null
    retinol?: Decimal | DecimalJsLike | number | string | null
    carotene?: Decimal | DecimalJsLike | number | string | null
    vitamin_d?: Decimal | DecimalJsLike | number | string | null
    vitamin_e_eq?: Decimal | DecimalJsLike | number | string | null
    vitamin_e?: Decimal | DecimalJsLike | number | string | null
    vitamin_k?: Decimal | DecimalJsLike | number | string | null
    vitamin_b1?: Decimal | DecimalJsLike | number | string | null
    vitamin_b2?: Decimal | DecimalJsLike | number | string | null
    niacine?: Decimal | DecimalJsLike | number | string | null
    niacine_equiv?: Decimal | DecimalJsLike | number | string | null
    pantothenic_acid?: Decimal | DecimalJsLike | number | string | null
    vitamin_b6?: Decimal | DecimalJsLike | number | string | null
    biotine?: Decimal | DecimalJsLike | number | string | null
    folic_acid_eq?: Decimal | DecimalJsLike | number | string | null
    total_folic_acid?: Decimal | DecimalJsLike | number | string | null
    free_folic_acid?: Decimal | DecimalJsLike | number | string | null
    vitamin_b12?: Decimal | DecimalJsLike | number | string | null
    vitamin_c?: Decimal | DecimalJsLike | number | string | null
    sodium?: Decimal | DecimalJsLike | number | string | null
    potassium?: Decimal | DecimalJsLike | number | string | null
    calcium?: Decimal | DecimalJsLike | number | string | null
    magnesium?: Decimal | DecimalJsLike | number | string | null
    phosphorus?: Decimal | DecimalJsLike | number | string | null
    sulfur?: Decimal | DecimalJsLike | number | string | null
    chlorine?: Decimal | DecimalJsLike | number | string | null
    iron?: Decimal | DecimalJsLike | number | string | null
    zinc?: Decimal | DecimalJsLike | number | string | null
    copper?: Decimal | DecimalJsLike | number | string | null
    manganese?: Decimal | DecimalJsLike | number | string | null
    fluorine?: Decimal | DecimalJsLike | number | string | null
    iodine?: Decimal | DecimalJsLike | number | string | null
    mannitol?: Decimal | DecimalJsLike | number | string | null
    sorbitol?: Decimal | DecimalJsLike | number | string | null
    xylitol?: Decimal | DecimalJsLike | number | string | null
    all_sugar_alcohols?: Decimal | DecimalJsLike | number | string | null
    glucose?: Decimal | DecimalJsLike | number | string | null
    fructose?: Decimal | DecimalJsLike | number | string | null
    galactose?: Decimal | DecimalJsLike | number | string | null
    monosaccharides?: Decimal | DecimalJsLike | number | string | null
    sucrose?: Decimal | DecimalJsLike | number | string | null
    maltose?: Decimal | DecimalJsLike | number | string | null
    lactose?: Decimal | DecimalJsLike | number | string | null
    disaccharides?: Decimal | DecimalJsLike | number | string | null
    oligosaccharides_resorbable?: Decimal | DecimalJsLike | number | string | null
    oligosaccharides_non_resorbable?: Decimal | DecimalJsLike | number | string | null
    glycogen?: Decimal | DecimalJsLike | number | string | null
    starch?: Decimal | DecimalJsLike | number | string | null
    polysaccharides?: Decimal | DecimalJsLike | number | string | null
    poly_pentoses?: Decimal | DecimalJsLike | number | string | null
    poly_hexoses?: Decimal | DecimalJsLike | number | string | null
    poly_uronic_acids?: Decimal | DecimalJsLike | number | string | null
    cellulose?: Decimal | DecimalJsLike | number | string | null
    lignin?: Decimal | DecimalJsLike | number | string | null
    water_soluble_dietary_fiber?: Decimal | DecimalJsLike | number | string | null
    water_insoluble_dietary_fiber?: Decimal | DecimalJsLike | number | string | null
    isoleucine?: Decimal | DecimalJsLike | number | string | null
    leucine?: Decimal | DecimalJsLike | number | string | null
    lysine?: Decimal | DecimalJsLike | number | string | null
    methionine?: Decimal | DecimalJsLike | number | string | null
    cysteine?: Decimal | DecimalJsLike | number | string | null
    phenylalanine?: Decimal | DecimalJsLike | number | string | null
    tyrosine?: Decimal | DecimalJsLike | number | string | null
    threonine?: Decimal | DecimalJsLike | number | string | null
    tryptophan?: Decimal | DecimalJsLike | number | string | null
    valine?: Decimal | DecimalJsLike | number | string | null
    arginine?: Decimal | DecimalJsLike | number | string | null
    histidine?: Decimal | DecimalJsLike | number | string | null
    essential_amino_acids?: Decimal | DecimalJsLike | number | string | null
    alanine?: Decimal | DecimalJsLike | number | string | null
    aspartic_acid?: Decimal | DecimalJsLike | number | string | null
    glutamic_acid?: Decimal | DecimalJsLike | number | string | null
    glycine?: Decimal | DecimalJsLike | number | string | null
    proline?: Decimal | DecimalJsLike | number | string | null
    serine?: Decimal | DecimalJsLike | number | string | null
    non_essential_amino_acids?: Decimal | DecimalJsLike | number | string | null
    vegetable_protein?: Decimal | DecimalJsLike | number | string | null
    uric_acid?: Decimal | DecimalJsLike | number | string | null
    purine_nitrogen?: Decimal | DecimalJsLike | number | string | null
    butyric_acid?: Decimal | DecimalJsLike | number | string | null
    capronic_acid?: Decimal | DecimalJsLike | number | string | null
    caprylic_acid?: Decimal | DecimalJsLike | number | string | null
    caprinic_acid?: Decimal | DecimalJsLike | number | string | null
    lauric_acid?: Decimal | DecimalJsLike | number | string | null
    myristic_acid?: Decimal | DecimalJsLike | number | string | null
    pentadecanoic_acid?: Decimal | DecimalJsLike | number | string | null
    palmitic_acid?: Decimal | DecimalJsLike | number | string | null
    margaric_acid?: Decimal | DecimalJsLike | number | string | null
    stearic_acid?: Decimal | DecimalJsLike | number | string | null
    arachidic_acid?: Decimal | DecimalJsLike | number | string | null
    behenic_acid?: Decimal | DecimalJsLike | number | string | null
    lignoceric_acid?: Decimal | DecimalJsLike | number | string | null
    saturated_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    tetradecenoic_acid?: Decimal | DecimalJsLike | number | string | null
    pentadecenoic_acid?: Decimal | DecimalJsLike | number | string | null
    palmitoleic_acid?: Decimal | DecimalJsLike | number | string | null
    heptadecenoic_acid?: Decimal | DecimalJsLike | number | string | null
    oleic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosenoic_acid?: Decimal | DecimalJsLike | number | string | null
    erucic_acid?: Decimal | DecimalJsLike | number | string | null
    selacholeic_acid?: Decimal | DecimalJsLike | number | string | null
    monounsaturated_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    hexadecadienoic_acid?: Decimal | DecimalJsLike | number | string | null
    hexadecatetraenoic_acid?: Decimal | DecimalJsLike | number | string | null
    linoleic_acid?: Decimal | DecimalJsLike | number | string | null
    linolenic_acid?: Decimal | DecimalJsLike | number | string | null
    stearidonic_acid?: Decimal | DecimalJsLike | number | string | null
    nonadecatrienoic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosadienoic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosatrienoic_acid?: Decimal | DecimalJsLike | number | string | null
    arachidonic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosapentaenoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosadienoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosatrienoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosatetraenoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosapentaenoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosahexaenoic_acid?: Decimal | DecimalJsLike | number | string | null
    polyunsaturated_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    short_chain_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    medium_chain_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    long_chain_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    glycerol_and_lipoids?: Decimal | DecimalJsLike | number | string | null
    cholesterol?: Decimal | DecimalJsLike | number | string | null
    bread_units?: Decimal | DecimalJsLike | number | string | null
    nacl?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NutritionUncheckedCreateWithoutDaily_meal_planInput = {
    id?: number
    code: string
    name: string
    energy_kj?: Decimal | DecimalJsLike | number | string | null
    energy_kcal?: Decimal | DecimalJsLike | number | string | null
    water?: Decimal | DecimalJsLike | number | string | null
    protein?: Decimal | DecimalJsLike | number | string | null
    fat?: Decimal | DecimalJsLike | number | string | null
    carbohydrate?: Decimal | DecimalJsLike | number | string | null
    dietary_fiber?: Decimal | DecimalJsLike | number | string | null
    minerals?: Decimal | DecimalJsLike | number | string | null
    organic_acids?: Decimal | DecimalJsLike | number | string | null
    alcohol?: Decimal | DecimalJsLike | number | string | null
    vitamin_a?: Decimal | DecimalJsLike | number | string | null
    retinol?: Decimal | DecimalJsLike | number | string | null
    carotene?: Decimal | DecimalJsLike | number | string | null
    vitamin_d?: Decimal | DecimalJsLike | number | string | null
    vitamin_e_eq?: Decimal | DecimalJsLike | number | string | null
    vitamin_e?: Decimal | DecimalJsLike | number | string | null
    vitamin_k?: Decimal | DecimalJsLike | number | string | null
    vitamin_b1?: Decimal | DecimalJsLike | number | string | null
    vitamin_b2?: Decimal | DecimalJsLike | number | string | null
    niacine?: Decimal | DecimalJsLike | number | string | null
    niacine_equiv?: Decimal | DecimalJsLike | number | string | null
    pantothenic_acid?: Decimal | DecimalJsLike | number | string | null
    vitamin_b6?: Decimal | DecimalJsLike | number | string | null
    biotine?: Decimal | DecimalJsLike | number | string | null
    folic_acid_eq?: Decimal | DecimalJsLike | number | string | null
    total_folic_acid?: Decimal | DecimalJsLike | number | string | null
    free_folic_acid?: Decimal | DecimalJsLike | number | string | null
    vitamin_b12?: Decimal | DecimalJsLike | number | string | null
    vitamin_c?: Decimal | DecimalJsLike | number | string | null
    sodium?: Decimal | DecimalJsLike | number | string | null
    potassium?: Decimal | DecimalJsLike | number | string | null
    calcium?: Decimal | DecimalJsLike | number | string | null
    magnesium?: Decimal | DecimalJsLike | number | string | null
    phosphorus?: Decimal | DecimalJsLike | number | string | null
    sulfur?: Decimal | DecimalJsLike | number | string | null
    chlorine?: Decimal | DecimalJsLike | number | string | null
    iron?: Decimal | DecimalJsLike | number | string | null
    zinc?: Decimal | DecimalJsLike | number | string | null
    copper?: Decimal | DecimalJsLike | number | string | null
    manganese?: Decimal | DecimalJsLike | number | string | null
    fluorine?: Decimal | DecimalJsLike | number | string | null
    iodine?: Decimal | DecimalJsLike | number | string | null
    mannitol?: Decimal | DecimalJsLike | number | string | null
    sorbitol?: Decimal | DecimalJsLike | number | string | null
    xylitol?: Decimal | DecimalJsLike | number | string | null
    all_sugar_alcohols?: Decimal | DecimalJsLike | number | string | null
    glucose?: Decimal | DecimalJsLike | number | string | null
    fructose?: Decimal | DecimalJsLike | number | string | null
    galactose?: Decimal | DecimalJsLike | number | string | null
    monosaccharides?: Decimal | DecimalJsLike | number | string | null
    sucrose?: Decimal | DecimalJsLike | number | string | null
    maltose?: Decimal | DecimalJsLike | number | string | null
    lactose?: Decimal | DecimalJsLike | number | string | null
    disaccharides?: Decimal | DecimalJsLike | number | string | null
    oligosaccharides_resorbable?: Decimal | DecimalJsLike | number | string | null
    oligosaccharides_non_resorbable?: Decimal | DecimalJsLike | number | string | null
    glycogen?: Decimal | DecimalJsLike | number | string | null
    starch?: Decimal | DecimalJsLike | number | string | null
    polysaccharides?: Decimal | DecimalJsLike | number | string | null
    poly_pentoses?: Decimal | DecimalJsLike | number | string | null
    poly_hexoses?: Decimal | DecimalJsLike | number | string | null
    poly_uronic_acids?: Decimal | DecimalJsLike | number | string | null
    cellulose?: Decimal | DecimalJsLike | number | string | null
    lignin?: Decimal | DecimalJsLike | number | string | null
    water_soluble_dietary_fiber?: Decimal | DecimalJsLike | number | string | null
    water_insoluble_dietary_fiber?: Decimal | DecimalJsLike | number | string | null
    isoleucine?: Decimal | DecimalJsLike | number | string | null
    leucine?: Decimal | DecimalJsLike | number | string | null
    lysine?: Decimal | DecimalJsLike | number | string | null
    methionine?: Decimal | DecimalJsLike | number | string | null
    cysteine?: Decimal | DecimalJsLike | number | string | null
    phenylalanine?: Decimal | DecimalJsLike | number | string | null
    tyrosine?: Decimal | DecimalJsLike | number | string | null
    threonine?: Decimal | DecimalJsLike | number | string | null
    tryptophan?: Decimal | DecimalJsLike | number | string | null
    valine?: Decimal | DecimalJsLike | number | string | null
    arginine?: Decimal | DecimalJsLike | number | string | null
    histidine?: Decimal | DecimalJsLike | number | string | null
    essential_amino_acids?: Decimal | DecimalJsLike | number | string | null
    alanine?: Decimal | DecimalJsLike | number | string | null
    aspartic_acid?: Decimal | DecimalJsLike | number | string | null
    glutamic_acid?: Decimal | DecimalJsLike | number | string | null
    glycine?: Decimal | DecimalJsLike | number | string | null
    proline?: Decimal | DecimalJsLike | number | string | null
    serine?: Decimal | DecimalJsLike | number | string | null
    non_essential_amino_acids?: Decimal | DecimalJsLike | number | string | null
    vegetable_protein?: Decimal | DecimalJsLike | number | string | null
    uric_acid?: Decimal | DecimalJsLike | number | string | null
    purine_nitrogen?: Decimal | DecimalJsLike | number | string | null
    butyric_acid?: Decimal | DecimalJsLike | number | string | null
    capronic_acid?: Decimal | DecimalJsLike | number | string | null
    caprylic_acid?: Decimal | DecimalJsLike | number | string | null
    caprinic_acid?: Decimal | DecimalJsLike | number | string | null
    lauric_acid?: Decimal | DecimalJsLike | number | string | null
    myristic_acid?: Decimal | DecimalJsLike | number | string | null
    pentadecanoic_acid?: Decimal | DecimalJsLike | number | string | null
    palmitic_acid?: Decimal | DecimalJsLike | number | string | null
    margaric_acid?: Decimal | DecimalJsLike | number | string | null
    stearic_acid?: Decimal | DecimalJsLike | number | string | null
    arachidic_acid?: Decimal | DecimalJsLike | number | string | null
    behenic_acid?: Decimal | DecimalJsLike | number | string | null
    lignoceric_acid?: Decimal | DecimalJsLike | number | string | null
    saturated_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    tetradecenoic_acid?: Decimal | DecimalJsLike | number | string | null
    pentadecenoic_acid?: Decimal | DecimalJsLike | number | string | null
    palmitoleic_acid?: Decimal | DecimalJsLike | number | string | null
    heptadecenoic_acid?: Decimal | DecimalJsLike | number | string | null
    oleic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosenoic_acid?: Decimal | DecimalJsLike | number | string | null
    erucic_acid?: Decimal | DecimalJsLike | number | string | null
    selacholeic_acid?: Decimal | DecimalJsLike | number | string | null
    monounsaturated_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    hexadecadienoic_acid?: Decimal | DecimalJsLike | number | string | null
    hexadecatetraenoic_acid?: Decimal | DecimalJsLike | number | string | null
    linoleic_acid?: Decimal | DecimalJsLike | number | string | null
    linolenic_acid?: Decimal | DecimalJsLike | number | string | null
    stearidonic_acid?: Decimal | DecimalJsLike | number | string | null
    nonadecatrienoic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosadienoic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosatrienoic_acid?: Decimal | DecimalJsLike | number | string | null
    arachidonic_acid?: Decimal | DecimalJsLike | number | string | null
    eicosapentaenoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosadienoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosatrienoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosatetraenoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosapentaenoic_acid?: Decimal | DecimalJsLike | number | string | null
    docosahexaenoic_acid?: Decimal | DecimalJsLike | number | string | null
    polyunsaturated_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    short_chain_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    medium_chain_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    long_chain_fatty_acids?: Decimal | DecimalJsLike | number | string | null
    glycerol_and_lipoids?: Decimal | DecimalJsLike | number | string | null
    cholesterol?: Decimal | DecimalJsLike | number | string | null
    bread_units?: Decimal | DecimalJsLike | number | string | null
    nacl?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NutritionCreateOrConnectWithoutDaily_meal_planInput = {
    where: NutritionWhereUniqueInput
    create: XOR<NutritionCreateWithoutDaily_meal_planInput, NutritionUncheckedCreateWithoutDaily_meal_planInput>
  }

  export type UserUpsertWithoutDaily_meal_planInput = {
    update: XOR<UserUpdateWithoutDaily_meal_planInput, UserUncheckedUpdateWithoutDaily_meal_planInput>
    create: XOR<UserCreateWithoutDaily_meal_planInput, UserUncheckedCreateWithoutDaily_meal_planInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDaily_meal_planInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDaily_meal_planInput, UserUncheckedUpdateWithoutDaily_meal_planInput>
  }

  export type UserUpdateWithoutDaily_meal_planInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutDaily_meal_planInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithoutDaily_meal_planInput = {
    update: XOR<CategoryUpdateWithoutDaily_meal_planInput, CategoryUncheckedUpdateWithoutDaily_meal_planInput>
    create: XOR<CategoryCreateWithoutDaily_meal_planInput, CategoryUncheckedCreateWithoutDaily_meal_planInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutDaily_meal_planInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutDaily_meal_planInput, CategoryUncheckedUpdateWithoutDaily_meal_planInput>
  }

  export type CategoryUpdateWithoutDaily_meal_planInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutDaily_meal_planInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NutritionUpsertWithoutDaily_meal_planInput = {
    update: XOR<NutritionUpdateWithoutDaily_meal_planInput, NutritionUncheckedUpdateWithoutDaily_meal_planInput>
    create: XOR<NutritionCreateWithoutDaily_meal_planInput, NutritionUncheckedCreateWithoutDaily_meal_planInput>
    where?: NutritionWhereInput
  }

  export type NutritionUpdateToOneWithWhereWithoutDaily_meal_planInput = {
    where?: NutritionWhereInput
    data: XOR<NutritionUpdateWithoutDaily_meal_planInput, NutritionUncheckedUpdateWithoutDaily_meal_planInput>
  }

  export type NutritionUpdateWithoutDaily_meal_planInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    energy_kj?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    energy_kcal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbohydrate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minerals?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    organic_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alcohol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_a?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    retinol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carotene?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_e_eq?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_e?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_k?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    niacine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    niacine_equiv?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pantothenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b6?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    biotine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    folic_acid_eq?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_folic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    free_folic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b12?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sodium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potassium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calcium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    magnesium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phosphorus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sulfur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    chlorine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    iron?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    zinc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    copper?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    manganese?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fluorine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    iodine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mannitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sorbitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    xylitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    all_sugar_alcohols?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glucose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fructose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galactose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monosaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sucrose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maltose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lactose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_resorbable?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_non_resorbable?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycogen?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    starch?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polysaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_pentoses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_hexoses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_uronic_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cellulose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lignin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water_soluble_dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water_insoluble_dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isoleucine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    leucine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lysine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    methionine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cysteine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phenylalanine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tyrosine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    threonine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tryptophan?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arginine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    histidine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    essential_amino_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alanine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aspartic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glutamic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proline?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    serine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    non_essential_amino_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vegetable_protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    uric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purine_nitrogen?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    butyric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capronic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    caprylic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    caprinic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lauric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    myristic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pentadecanoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    palmitic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    margaric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stearic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arachidic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    behenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lignoceric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tetradecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pentadecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    palmitoleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heptadecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    erucic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selacholeic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monounsaturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hexadecadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hexadecatetraenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    linoleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    linolenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stearidonic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nonadecatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arachidonic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosapentaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosatetraenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosapentaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosahexaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polyunsaturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    short_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    medium_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    long_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycerol_and_lipoids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cholesterol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bread_units?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nacl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutritionUncheckedUpdateWithoutDaily_meal_planInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    energy_kj?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    energy_kcal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbohydrate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minerals?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    organic_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alcohol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_a?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    retinol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carotene?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_e_eq?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_e?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_k?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    niacine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    niacine_equiv?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pantothenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b6?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    biotine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    folic_acid_eq?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_folic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    free_folic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_b12?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vitamin_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sodium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potassium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calcium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    magnesium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phosphorus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sulfur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    chlorine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    iron?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    zinc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    copper?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    manganese?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fluorine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    iodine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mannitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sorbitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    xylitol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    all_sugar_alcohols?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glucose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fructose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galactose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monosaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sucrose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maltose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lactose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_resorbable?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oligosaccharides_non_resorbable?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycogen?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    starch?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polysaccharides?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_pentoses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_hexoses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poly_uronic_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cellulose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lignin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water_soluble_dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    water_insoluble_dietary_fiber?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isoleucine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    leucine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lysine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    methionine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cysteine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phenylalanine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tyrosine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    threonine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tryptophan?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arginine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    histidine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    essential_amino_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alanine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aspartic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glutamic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proline?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    serine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    non_essential_amino_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vegetable_protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    uric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purine_nitrogen?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    butyric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capronic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    caprylic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    caprinic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lauric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    myristic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pentadecanoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    palmitic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    margaric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stearic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arachidic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    behenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lignoceric_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tetradecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pentadecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    palmitoleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    heptadecenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    erucic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selacholeic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monounsaturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hexadecadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hexadecatetraenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    linoleic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    linolenic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stearidonic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nonadecatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    arachidonic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eicosapentaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosadienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosatrienoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosatetraenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosapentaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    docosahexaenoic_acid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polyunsaturated_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    short_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    medium_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    long_chain_fatty_acids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    glycerol_and_lipoids?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cholesterol?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bread_units?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nacl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyMealPlanCreateWithoutCategoryInput = {
    order: number
    date: Date | string
    user: UserCreateNestedOneWithoutDaily_meal_planInput
    nutrition: NutritionCreateNestedOneWithoutDaily_meal_planInput
  }

  export type DailyMealPlanUncheckedCreateWithoutCategoryInput = {
    id?: number
    order: number
    date: Date | string
    user_id: number
    nutrition_id: number
  }

  export type DailyMealPlanCreateOrConnectWithoutCategoryInput = {
    where: DailyMealPlanWhereUniqueInput
    create: XOR<DailyMealPlanCreateWithoutCategoryInput, DailyMealPlanUncheckedCreateWithoutCategoryInput>
  }

  export type DailyMealPlanCreateManyCategoryInputEnvelope = {
    data: DailyMealPlanCreateManyCategoryInput | DailyMealPlanCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type DailyMealPlanUpsertWithWhereUniqueWithoutCategoryInput = {
    where: DailyMealPlanWhereUniqueInput
    update: XOR<DailyMealPlanUpdateWithoutCategoryInput, DailyMealPlanUncheckedUpdateWithoutCategoryInput>
    create: XOR<DailyMealPlanCreateWithoutCategoryInput, DailyMealPlanUncheckedCreateWithoutCategoryInput>
  }

  export type DailyMealPlanUpdateWithWhereUniqueWithoutCategoryInput = {
    where: DailyMealPlanWhereUniqueInput
    data: XOR<DailyMealPlanUpdateWithoutCategoryInput, DailyMealPlanUncheckedUpdateWithoutCategoryInput>
  }

  export type DailyMealPlanUpdateManyWithWhereWithoutCategoryInput = {
    where: DailyMealPlanScalarWhereInput
    data: XOR<DailyMealPlanUpdateManyMutationInput, DailyMealPlanUncheckedUpdateManyWithoutCategoryInput>
  }

  export type DailyMealPlanCreateWithoutNutritionInput = {
    order: number
    date: Date | string
    user: UserCreateNestedOneWithoutDaily_meal_planInput
    category: CategoryCreateNestedOneWithoutDaily_meal_planInput
  }

  export type DailyMealPlanUncheckedCreateWithoutNutritionInput = {
    id?: number
    order: number
    date: Date | string
    user_id: number
    category_id: number
  }

  export type DailyMealPlanCreateOrConnectWithoutNutritionInput = {
    where: DailyMealPlanWhereUniqueInput
    create: XOR<DailyMealPlanCreateWithoutNutritionInput, DailyMealPlanUncheckedCreateWithoutNutritionInput>
  }

  export type DailyMealPlanCreateManyNutritionInputEnvelope = {
    data: DailyMealPlanCreateManyNutritionInput | DailyMealPlanCreateManyNutritionInput[]
    skipDuplicates?: boolean
  }

  export type DailyMealPlanUpsertWithWhereUniqueWithoutNutritionInput = {
    where: DailyMealPlanWhereUniqueInput
    update: XOR<DailyMealPlanUpdateWithoutNutritionInput, DailyMealPlanUncheckedUpdateWithoutNutritionInput>
    create: XOR<DailyMealPlanCreateWithoutNutritionInput, DailyMealPlanUncheckedCreateWithoutNutritionInput>
  }

  export type DailyMealPlanUpdateWithWhereUniqueWithoutNutritionInput = {
    where: DailyMealPlanWhereUniqueInput
    data: XOR<DailyMealPlanUpdateWithoutNutritionInput, DailyMealPlanUncheckedUpdateWithoutNutritionInput>
  }

  export type DailyMealPlanUpdateManyWithWhereWithoutNutritionInput = {
    where: DailyMealPlanScalarWhereInput
    data: XOR<DailyMealPlanUpdateManyMutationInput, DailyMealPlanUncheckedUpdateManyWithoutNutritionInput>
  }

  export type DailyMealPlanCreateManyUserInput = {
    id?: number
    order: number
    date: Date | string
    category_id: number
    nutrition_id: number
  }

  export type DailyMealPlanUpdateWithoutUserInput = {
    order?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutDaily_meal_planNestedInput
    nutrition?: NutritionUpdateOneRequiredWithoutDaily_meal_planNestedInput
  }

  export type DailyMealPlanUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: IntFieldUpdateOperationsInput | number
    nutrition_id?: IntFieldUpdateOperationsInput | number
  }

  export type DailyMealPlanUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: IntFieldUpdateOperationsInput | number
    nutrition_id?: IntFieldUpdateOperationsInput | number
  }

  export type DailyMealPlanCreateManyCategoryInput = {
    id?: number
    order: number
    date: Date | string
    user_id: number
    nutrition_id: number
  }

  export type DailyMealPlanUpdateWithoutCategoryInput = {
    order?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDaily_meal_planNestedInput
    nutrition?: NutritionUpdateOneRequiredWithoutDaily_meal_planNestedInput
  }

  export type DailyMealPlanUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    nutrition_id?: IntFieldUpdateOperationsInput | number
  }

  export type DailyMealPlanUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    nutrition_id?: IntFieldUpdateOperationsInput | number
  }

  export type DailyMealPlanCreateManyNutritionInput = {
    id?: number
    order: number
    date: Date | string
    user_id: number
    category_id: number
  }

  export type DailyMealPlanUpdateWithoutNutritionInput = {
    order?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDaily_meal_planNestedInput
    category?: CategoryUpdateOneRequiredWithoutDaily_meal_planNestedInput
  }

  export type DailyMealPlanUncheckedUpdateWithoutNutritionInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type DailyMealPlanUncheckedUpdateManyWithoutNutritionInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NutritionCountOutputTypeDefaultArgs instead
     */
    export type NutritionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NutritionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogDefaultArgs instead
     */
    export type BlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyMealPlanDefaultArgs instead
     */
    export type DailyMealPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyMealPlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NutritionDefaultArgs instead
     */
    export type NutritionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NutritionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}