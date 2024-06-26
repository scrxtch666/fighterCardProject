import { defineDb, defineTable, column } from 'astro:db';

const fighterData = defineTable({
  columns: {
    name: column.text(),
    belt: column.text(),
    age: column.number(),
    weight: column.number(),
    height: column.number(),
    bio: column.text(),
  }
});

export default defineDb({
  tables: { fighterData},
})