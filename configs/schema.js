import { pgTable, serial, varchar, boolean, json, integer, text, timestamp } from "drizzle-orm/pg-core";

export const USER_TABLE = pgTable('users', {
    id: serial("id").primaryKey(), // Using serial again
    name: varchar().notNull(),
    email: varchar().notNull(),
    isMember: boolean().default(false),
});

export const STUDY_MATERIAL_TABLE = pgTable('studyMaterial', {
    id: serial("id").primaryKey(),
    courseId: varchar().notNull(),
    courseType: varchar().notNull(),
    topic: varchar().notNull(),
    difficultyLevel: varchar().default('Easy'),
    courseLayout: json(),
    createdBy: varchar().notNull(),
    status: varchar().default('Generating'),
});

export const CHAPTER_NOTES_TABLE = pgTable('chapterNotes', {
    id: serial("id").primaryKey(),
    courseId: varchar().notNull(),
    chapterId: integer().notNull(),
    notes: text().notNull()
});

export const STUDY_TYPE_CONTENT_TABLE = pgTable('studyTypeContent', {
    id: serial("id").primaryKey(),
    courseId: varchar().notNull(),
    content: json(),
    type: varchar().notNull(),
    status: varchar().default('Generating')
});

export const PAYMENT_RECORD_TABLE = pgTable('paymentRecord', {
    id: serial("id").primaryKey(),
    sessionId: varchar()
});
