# Know Your Constitution — A Citizen's Guide

A single-page, interactive web app that explains the Constitution of India in plain language, from the point of view of an everyday citizen rather than a law student.

## What's inside

- **Preamble seal** — tap any highlighted word in the Preamble to see what it actually promises you.
- **Fundamental Rights** (Art. 12–35) — six cards covering what the state can't do to you.
- **Fundamental Duties** (Art. 51A) — the eleven things you're expected to do in return.
- **Directive Principles** (Art. 36–51) — the government's non-enforceable to-do list, in a horizontal scroll.
- **How It Works** — the three branches of government (Legislature, Executive, Judiciary) as expandable cards, including how each one is kept in check.
- **Check Yourself** — a short, no-score self-quiz to see if the ideas stuck.

## Files

```
index.html   Page structure and content containers
style.css    All visual design — colours, type, layout, responsive rules
app.js       Content data (rights, duties, directives, quiz questions) + interactivity
README.md    This file
```

## Running it

No build step, no dependencies. Just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Design notes

- Fonts: **Fraunces** (display headlines), **Source Serif 4** (reading text), **IBM Plex Mono** (labels and article numbers) — loaded from Google Fonts.
- Palette is drawn from the Constitution itself as a physical object and India's civic colours: deep document-ink navy, aged parchment cream, seal-wax terracotta, republic green, and a restrained Ashoka-Chakra gold used only as a hairline/accent.
- Article numbers are used as real structural labels throughout (not decorative numbering) because the Constitution's own text is genuinely organised this way.

## Important caveat

Everything here is a **simplified, plain-language explanation** — not the legal text of the Constitution and not legal advice. For anything that actually matters (a court filing, a legal argument, an exam), go back to the original text of the Constitution of India or consult a qualified professional.

## Extending it

All content lives as plain JavaScript objects/arrays at the top of `app.js` (`RIGHTS`, `DUTIES`, `DIRECTIVES`, `BRANCHES`, `QUIZ`, `PROMISES`) — edit those arrays to add, remove, or reword content without touching the rendering logic

## Prototype Video

Watch the project demo here: https://youtu.be/2CwLcm80cpE?si=b_nhdY3qEKBOzniI

