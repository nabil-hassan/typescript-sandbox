====================================================================================================================
Zod
====================================================================================================================

To run the example: npx ts-node zod.ts

See aws sandbox s3 lambda project for advanced examples

> To get corresponding type for a Zod schema field

    type FishEnum = z.infer<typeof FishEnum>;

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