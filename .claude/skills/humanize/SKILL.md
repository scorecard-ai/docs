---
name: humanize
description: Rewrite AI-sounding text so it reads like a human wrote it — strip LLM tells (filler intensifiers, rule-of-three, "it's not X, it's Y", em-dash overuse, hollow transitions) while keeping the meaning. Use when the user asks to humanize, de-AI, or remove "AI smell" from writing, make a draft sound less like ChatGPT, or tighten docs/changelog/marketing copy that reads as machine-generated.
allowed-tools: Read, Edit, Write
---

# Humanize writing

Take text that reads as AI-generated and rewrite it so a careful human reader can't tell a model wrote it — without changing what it says. The goal is **substance over polish**: cut the reflexive patterns LLMs fall into, keep concrete information.

## Operating principle

LLM writing isn't bad because it's wrong — it's bad because it's *hollow and patterned*. It reaches for the same rhythms, the same intensifiers, the same "insightful" framings regardless of content. Humanizing means breaking the pattern, not adding flourish. When in doubt, **cut** rather than rephrase: most AI tells are padding that carries no information.

Do **not** introduce errors, fake folksiness, deliberate typos, or slang to "seem human." Clear, plain, specific writing is the target.

## Process

1. **Read the source.** If the user gave a file, Read it. If they pasted text, work from that. Note the register (docs, changelog, marketing, casual) — match it.
2. **Scan for tells.** Run the text against `references/tells.md`. Flag every match.
3. **Rewrite, don't decorate.** For each tell:
   - Delete pure padding (intensifiers, hollow transitions, throat-clearing).
   - Collapse rule-of-three lists to the one or two items that matter.
   - Convert "it's not X, it's Y" and "less about X, more about Y" into a direct claim.
   - Vary sentence length deliberately — AI text has a monotone rhythm; humans don't.
   - Replace abstract jargon ("load bearing", "blast radius", "leverage") with the plain word.
   - Cut em dashes and semicolons down to what a person would actually use; prefer periods.
4. **Preserve meaning and facts.** Every claim, number, link, and code reference in the source must survive. If removing a tell would drop information, rephrase instead of cutting.
5. **Report.** Show the rewritten text. If editing a file, make the Edit. Briefly list the main tells you removed (2–5 bullets) so the user can spot-check.

## Guardrails

- Keep the author's voice and the doc's house style (see the repo's `CLAUDE.md` for changelog/MDX conventions).
- Don't flatten technical precision into vagueness — "humanize" ≠ "dumb down".
- Don't remove a structure just because it appears in the tells list if it's genuinely the clearest option (e.g. a real rule-of-three, a legitimately needed em dash). The list is a prompt to scrutinize, not a banlist.
- If the text is already clean, say so instead of forcing changes.

## Quick reference

The full catalog with examples lives in `references/tells.md`. The highest-signal offenders:

- **Filler intensifiers**: "genuinely", "actually", "really", "honestly", "straight up" — almost always deletable.
- **Negation-elevation**: "It's not just X — it's Y", "less about X, more about Y".
- **Rule of three**: "Smooth. Effortless. A perfect fit." / three clauses where the third fuses the first two.
- **Hollow framings**: "The honest truth:", "Here's the thing:", "what most people miss", "the uncomfortable truth".
- **Em-dash / colon-tag overload**: "The smoking gun: …", chained em dashes.
- **Corporate abstractions**: "leverage", "robust", "seamless", "delve", "load bearing", "blast radius".
- **Sycophancy** (in conversational text): "Great question!", "You're absolutely right!".
