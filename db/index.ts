import { neon } from "@neondatabase/serverless";
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import * as schema from "./schema.js";

// Kết nối được tạo khi có yêu cầu đầu tiên (không phải lúc nạp file) để nếu thiếu DATABASE_URL
// máy chủ vẫn chạy và báo lỗi dễ hiểu thay vì "sập" không rõ nguyên nhân.
let instance: NeonHttpDatabase<typeof schema> | null = null;
function getDb(): NeonHttpDatabase<typeof schema> {
  if (!instance) {
    const url = (process.env.DATABASE_URL || "").trim();
    if (!url) throw new Error("Thiếu biến môi trường DATABASE_URL");
    instance = drizzle(neon(url), { schema });
  }
  return instance;
}

export const db = new Proxy({} as NeonHttpDatabase<typeof schema>, {
  get(_target, prop) {
    const real = getDb() as any;
    const value = real[prop];
    return typeof value === "function" ? value.bind(real) : value;
  },
});
