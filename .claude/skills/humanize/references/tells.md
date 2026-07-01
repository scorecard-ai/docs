# LLM writing tells — catalog

A checklist of patterns that signal AI-generated text. Sourced from the HN "Various LLM Smells"
discussion (news.ycombinator.com/item?id=48313810) plus widely-noted general tells. Each entry: what
it is, why it reads as AI, and how to fix it.

Use this as a *scrutiny prompt*, not a hard banlist — any single pattern can be legitimate. The smell
comes from frequency and reflexiveness.

---

## 1. Filler intensifiers (fake credibility)

Words inserted to make a weak claim feel earned. Almost always deletable with zero loss.

- "genuinely", "actually", "really", "truly", "honestly", "straight up", "literally"
- "genuine", "actual", "real" as adjectives ("a genuine improvement", "the real reason")
- **Fix:** delete the word. If the sentence weakens, the claim was weak — strengthen it with a fact, not an adverb.

## 2. Negation-then-elevation

A false distinction that pretends to be insight.

- "It's not just X — it's Y"
- "It's not about X, it's about Y" / "less about X, more about Y"
- "This isn't X. It's Y."
- **Fix:** state Y directly. Drop the strawman X.

## 3. Rule of three

Three items where one or two would do, or a third clause that just fuses the first two.

- "Smooth. Effortless. A perfect fit."
- "Fast, reliable, and built to scale."
- The "jab, jab, thrust" rhythm: two short setups, one payoff.
- **Fix:** keep the items that carry distinct information; cut the rest. Vary the rhythm.

## 4. Hollow framing / throat-clearing

Phrases that announce insight without delivering any.

- "The honest truth:", "The honest answer:", "The honest caveat:"
- "Here's the thing:", "The thing to internalize:", "The thing is —"
- "What most people miss…", "And this is what most people get wrong"
- "The uncomfortable truth…", "Let's be honest", "Make no mistake"
- "At the end of the day", "When all is said and done"
- "It's worth noting that", "It's important to remember"
- **Fix:** delete the frame, keep the point. If there's no point after the frame, cut the whole sentence.

## 5. The "The [tag]:" colon construction

Labeling a sentence with a portentous noun phrase + colon.

- "The smoking gun:", "The kicker:", "The catch:", "The bottom line:"
- **Fix:** fold it into a normal sentence, or use it once at most.

## 6. Em-dash, semicolon, and colon overload

Models reach for em dashes and semicolons far more than people do.

- Chained em dashes mid-sentence — like this — repeatedly — in one paragraph.
- Semicolons joining clauses a human would just split into two sentences.
- **Fix:** prefer periods. Allow one em dash where it genuinely beats a comma or parens.

## 7. Corporate / abstract jargon

Vague power-words and metaphors used reflexively.

- "leverage", "robust", "seamless", "streamline", "utilize", "facilitate", "foster"
- "delve", "tapestry", "boasts", "navigate the landscape", "in the realm of"
- Figurative-architecture metaphors used outside their domain: "load bearing", "blast radius",
  "escape hatch", "smoke test", "belt-and-suspenders"
- "the shape of <abstract thing>"
- **Fix:** replace with the plain word ("use", "strong", "smooth") or the concrete thing it stands for.

## 8. Conclusion / transition boilerplate

- Openers: "In today's fast-paced world", "Imagine a world where…", "In an era of…"
- Closers: "In conclusion", "Ultimately", "In summary", "Overall"
- Connective filler: "Moreover", "Furthermore", "Additionally", "That said", "With that in mind"
- **Fix:** start with the content. End when the content ends. Most transitions can be dropped.

## 9. Sycophancy (conversational text)

- "Great question!", "You're absolutely right!", "That's a really insightful point."
- "I'd be happy to help with that."
- **Fix:** cut entirely; answer the thing.

## 10. Hedging swarms

Stacking qualifiers so no claim is ever made.

- "It's worth considering that it may potentially, in some cases, be possible that…"
- "generally", "typically", "often", "in many cases" piled together
- **Fix:** make the claim, or scope it once precisely.

## 11. Formatting tics

- Bolding **every** other phrase for emphasis until nothing stands out.
- Bullet lists where prose would read better; turning a two-item thought into a list.
- Every bullet shaped identically ("**Term**: explanation") down the whole list.
- Emoji as section icons or sentence punctuation (📊 🚀 ✨) in non-casual contexts.
- "Curious if anyone…" / "Would love to hear thoughts" social-post sign-offs.
- **Fix:** reserve bold for true emphasis; use prose for connected ideas; drop decorative emoji.

## 12. Anecdote / dialogue tics

- "Oh. Oh." (often the second italicized) as a fake realization beat.
- "And then it hit me." / "That's when everything changed."
- "I'm not like other girls"-style self-differentiation.
- **Fix:** cut the staged beat; tell what actually happened.

---

## Code / docs-specific tells

- Everything framed as a "contract"; overuse of "artifact".
- "backwards-compatible" and "versioned" applied to greenfield code that has no prior version.
- Comments that restate the code line-for-line.

## AI-generated UI tells (for design copy / screenshots, not prose)

- Default fonts: JetBrains Mono, Inter.
- Purple gradients, KPI/dashboard cards, generic card layouts.
- Oversized border radius; blue elements on black backgrounds.
- Emoji used as functional icons (accessibility-poor).
- Weak visual hierarchy — everything the same weight.
