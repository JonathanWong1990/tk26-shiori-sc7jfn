# Dad's trip page

A phone-first, read-only page for the family (Traditional Chinese by default, with an English toggle). It will be hosted on GitHub Pages.

- `trip-data.js` holds **all the content**. Update this file when the plan changes. The format is described at the top of the file.
- `index.html` holds the layout and design. It shouldn't need changes when the content changes.
- `_drafts/` holds design explorations. Don't publish it.

Planning research lives in the markdown files in the parent folder. That's the source of truth, and `trip-data.js` is the family-friendly version of it. Each round:

1. Increase `version`, set `updated`, and rewrite `changes` (what's new since the last version, in plain words).
2. Write as the planners speaking ("我", "我哋"). Dad's partner is 阿姨. Don't put names, booking references, passport details or phone numbers in it while the page is public.
3. Keep `status` as 計劃中 until the trip is final.
