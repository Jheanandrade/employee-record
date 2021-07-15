export default {
  type: "object",
  properties: {
    name: { type: 'string' },
    age: { type: 'number' },
    role: { type: 'string' }
  },
  required: ['name', 'age', 'role']
} as const;
