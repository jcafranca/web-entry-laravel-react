
import { z } from "zod";

export const userInfo = z.object({
    id: z.string(),
    name: z.string(),
    username: z.string(),
    is_connected: z.string(),
});

export const mainTableSchema = z.object({
    id: z.string(),
    date: z.string(),
    reason: z.string(),
    remarks: z.string(),
    period: z.string(),
    status: z.string(),
    headremarks: z.string(),
});

export const monitoringTableSchema = z.object({
    id: z.string(),
    pronumber: z.string(),
    date: z.string(),
    remarks: z.string(),
    start_time: z.string(),
    end_time: z.string(),
    elasped_time: z.string(),
    status: z.string(),
    user: userInfo,
});

export type MainTableTask = z.infer<typeof mainTableSchema>;
export type MonitoringTableTask = z.infer<typeof monitoringTableSchema>;

