# Ticket 1: Initialize Your Project

**Task:** Set up the frontend infrastructure.

### Instructions

1. Open your terminal in this repository.
2. Run `npm create vite@latest portfolio -- --template react-ts`
3. Follow the prompts (Don't use rolldown-vite).
4. `cd portfolio` and run `npm install`.
5. Next, we will install Tailwind to make writing our CSS easier
6. Run `npm install tailwindcss @tailwindcss/vite`
7. Add the following to your vite config

```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
8. Add the following to the top of your index.css file `@import "tailwindcss";`
9. Run `npm run dev` to verify it works.
10. Once it works, push your code to your repo

**Definition of Done:**

- You have a folder named `portfolio`.
- You have pushed your initial Vite code to this repo.
- Running `npx playright test setup.test.ts` in your project directory passes

