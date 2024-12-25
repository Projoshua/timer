 import bcrypt from 'bcrypt';
 import { db } from '@vercel/postgres';
 import { invoices, customers, revenue, users } from '../lib/placeholder-data';

 const client = await db.connect();
