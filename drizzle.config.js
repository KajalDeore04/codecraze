import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './configs/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_o3JxmOX6RkHB@ep-noisy-tree-a8xm4rzz-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
  },
});
