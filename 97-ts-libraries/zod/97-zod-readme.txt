====================================================================================================================
Zod
====================================================================================================================

NB You can use transform() on a Zod schema element like so - this is very handy for dynamic or unknown input

    // example input - this should be an array but someone coded it like a map-type object with different keys
    // "creatives": {
    //     "2cf6148b-88c6-41f5-b1e9-33f41ff5eb72_313447004": {
    //       "md5_checksum": "99f45be70eb760f7a2cf95c3088871a7",
    //       "allow_as_padding": false,
    //       "url": "http://localhost:3000/bsAdCopy/313447004/313447004_7800_verymalls.zip.x-html-package?playerId=396133686"
    //     },
    //     "3721fc0a-1336-4b87-8149-35f27c922a53_999999999": {
    //       "md5_checksum": "21904b9876a98d71d8e9a1281313a023",
    //       "allow_as_padding": false,
    //       "url": "http://localhost:3000/bsAdCopy/999999999/999999999_7800_neighbours_1080x1920_v05.mp4?playerId=396133686"
    //     },
    //}
    const creativesSchema = z.any().transform((o) => {
      const map = new Map();
      Object.keys(o).forEach((key) => {
        map.set(key, CreativeSchema.parse(o[key]));
      });
      return map;
    });

    const externalPlaylistSchema = z.object({
      playerId: z.string(),
      creatives: creativesSchema,
    });



NB nullish is combination of optional AND nullable
   optional means you can omit the field - but it cannot be null


To run the example: npx ts-node zod.ts

See aws sandbox s3 lambda project for advanced examples

> To get corresponding type for a Zod schema field

    type FishEnum = z.infer<typeof FishEnum>;

> To get a Zod type from an existing complex type:

    z.ZodType<Prisma.PostCreateInput>;

> NB if you are using transforms the type inference is a bit different - the below explains

    const stringToNumber = z.string().transform((val) => val.length);

    // Important: z.infer returns the OUTPUT type!
    type input = z.input<typeof stringToNumber>; // string
    type output = z.output<typeof stringToNumber>; // number

    // equivalent to z.output!
    type inferred = z.infer<typeof stringToNumber>; // number

> If you need to transform field names do it like this:

const UserSchema = z.object({
  first_name: z.string(),
}).transform((user) => ({
  firstName: user.first_name
}));

> If you want your schema to live in a separate file:

// file: rule-file-metadata.ts
  import { z } from "zod";

  export const RuleFileMetadata = z.object({
      email: z.string().email(),
      ponumber: z.string()
  });

  export type RuleFileMetadata = z.infer<typeof RuleFileMetadata>;

// file: index.ts  
import { RuleFileMetadata } from './rule-file-metadata';

let {Metadata, ContentLength} = await s3.send(params);
console.log("MetaData: ", Metadata);
const fileMetadata = RuleFileMetadata.parse(Metadata);

====================================================================================================================
Composite Objects
====================================================================================================================

address: z.object({
  addressLine1: z.string(),
  addressLine2: z.string().optional(),
  city: z.string(),
  country: z.nativeEnum(CountryCode),
  postalCode: z.string().optional(),
  state: z.string(),
}),

====================================================================================================================
Custom Error Messages
====================================================================================================================

> To add a message you can use one of two forms:

  - inline:
    
    activestartdate: z.string().regex(dateTimeRegex, "Invalid date format. Required format: YYYY-MM-DDTHH24:MI:SS"),

  - nested

    const name = z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    });

====================================================================================================================
ZodError
====================================================================================================================

> Schema validation failures result in a ZodError being thrown.

> This can be customised using the instructions: https://github.com/colinhacks/zod/blob/master/ERROR_HANDLING.md

====================================================================================================================
Custom validation rules
====================================================================================================================

> Can be done using super refine as per below example where we validate the dates are in future etc

const RuleFileMetadata = z.object({
    createdby: z.string(),
    businessunitid: z.string(),
    buyerid: z.string(),
    activestartdate: z.string().regex(dateTimeRegex, dateTimeFormatMsg),
    activeenddate: z.string().regex(dateTimeRegex, dateTimeFormatMsg)
}).transform((result) => ({
    createdBy: result.createdby,
    businessUnitId: result.businessunitid,
    buyerId:    result.buyerid,
    activeStartDate: convertDate(result.activestartdate),
    activeEndDate : convertDate(result.activeenddate)
})).superRefine((result, ctx) => {
    const nowUtc = DateTime.now().setZone("UTC").toJSDate();
    
    if (result.activeStartDate < nowUtc || result.activeEndDate < nowUtc) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Active start/end date must be in the future.`,
        });
    }

    if (result.activeEndDate <= result.activeStartDate) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Active end date must be after active start date.`,
        });
    }
});