# Ticket 3: The Hero Section

**Task:** Build the landing area of your site.

### Instructions

1. Before we start building the frontend, let’s set up the scaffolding: add a `components` folder so we have a place to drop every piece we’ll import later.
2. Next, bring your chosen palette into Tailwind by creating custom variables for the colors.
3. Use Tailwind’s `@theme` rule. In `index.css`, right under the Tailwind import, add:

```
@theme {

}
```

1. Inside this block, declare colors like `--color-name: #XXXXXX` (for example `--color-primary: #333333`) so Tailwind can reuse them.
2. Tailwind classes go into TSX via `className=""` instead of `class=""`. Reference your variables with names such as `text-primary`, and keep the [Tailwind docs](https://tailwindcss.com/docs/styling-with-utility-classes) open because there’s a lot to remember.
3. Let’s use that folder: create `hero.tsx` inside `components`. The hero is the first section visitors see.
4. For now, render a `<p>` that says “test” in one of your palette colors.
5. Clean up `App.tsx`: import the hero component, remove all the Vite boilerplate HTML, replace it with `<Hero />`, and drop the React logo, Vite logo, and the counter’s `useState()`.
6. With “test” showing, change the background so it matches your palette. In `index.css` under the `:root` rule, use `var(--color-name)` (e.g., `background-color: var(--color-primary)`). Once it looks right, feel free to change anything else. Documentation or a googling stuff can help when it gets confusing.
7. The foundation is now set. Build the full hero using Tailwind and put this code in the first HTML tag to make sure the tests pass: `[data-testid="hero-section"]`. Don’t hesitate to reach out if you get stuck.

**Definition of Done:**
- Running `npx playright test hero.test.ts` in your project directory passes
