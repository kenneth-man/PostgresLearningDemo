import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  define: {
    __PGHOST__: `"${process.env.PGHOST}"`,
	__PGPORT__: `"${process.env.PGPORT}"`,
	__PGDATABASE__: `"${process.env.PGDATABASE}"`,
	__PGUSER__: `"${process.env.PGUSER}"`,
	__PGPASSWORD__: `"${process.env.PGPASSWORD}"`,
  },
});
