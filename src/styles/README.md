# CSS architecture

The Next.js app imports these files through `app/globals.css`.

Edit the ordered source files in this directory, then run:

```bash
npm.cmd run build
```

Order matters:

1. `00-tokens.css` - design tokens and theme variables
2. `01-effects.css` - global visual effects and keyframes
3. `02-base-accessibility.css` - reset, base accessibility, focus states
4. `03-navigation-ui.css` - navigation, buttons, badges, shared UI
5. `04-landing-sections.css` - home page sections
6. `05-content-pages.css` - blog and article pages
7. `06-utilities.css` - floating actions, progress bar, sharing
8. `07-responsive-accessibility.css` - reduced motion and final responsive overrides
