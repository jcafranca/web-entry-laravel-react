import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const mainTableSchema = z.object({
  id: z.string(),
  date: z.string(),
  reason: z.string(),
  remarks: z.string(),
  period: z.string(),
  status: z.string(),
  headremarks: z.string()
})

export const monitoringTableSchema = z.object({
  id: z.string(),
  date: z.string(),
  reason: z.string(),
  remarks: z.string(),
  period: z.string(),
  status: z.string(),
  headremarks: z.string()
})

export type MainTableTask = z.infer<typeof mainTableSchema>
export type MonitoringTableTask = z.infer<typeof monitoringTableSchema>