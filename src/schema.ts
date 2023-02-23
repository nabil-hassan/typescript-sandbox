import z from "zod";

const changeTypeSchema = z.union([z.literal("CREATE"), z.literal("UPDATE")]);

const brandSchema = z.object({
    changeType: changeTypeSchema,
    entityType: z.literal("Brand"),
    data: z.object({
        id: z.string().uuid(),
        name: z.string(),
        externalSource: z.string(),
        externalId: z.string(),
        version: z.number(),
        brandCategoryIds: z.array(z.string()).optional().nullable(),
    }),
});

const brandCategorySchema = z.object({
    changeType: changeTypeSchema,
    entityType: z.literal("BrandCategory"),
    data: z.object({
        id: z.string().uuid(),
        name: z.string(),
        externalSource: z.string(),
        externalId: z.string(),
        parentId: z.string().uuid().optional().nullable(),
        version: z.number(),
    }),
});

const organizationRoleSchema = z.object({
    id: z.string().uuid(),
    role: z.string(),
    brandIds: z.array(z.string()).optional().nullable(),
    stoppedBrandIds: z.array(z.string()).optional().nullable(),
});

const organizationSchema = z.object({
    changeType: changeTypeSchema,
    entityType: z.literal("Organisation"),
    data: z.object({
        id: z.string().uuid(),
        name: z.string(),
        externalSource: z.string(),
        externalId: z.string(),
        roles: z.array(organizationRoleSchema),
        countryCode: z.string(),
        locale: z.string(),
        currency: z.string(),
        linkedToPublisherId: z.string().optional().nullable(),
        version: z.number(),
    }),
});

const eventSchema = z.union([
    brandSchema,
    brandCategorySchema,
    organizationSchema,
]);

const eventsSchema = z.object({
    events: z.array(eventSchema),
});

export default eventsSchema;