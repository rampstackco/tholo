# Tholo

**An open orchestrator for the Claude Skills catalog.** Built by [RampStack](https://rampstack.co).

Tholo is an open orchestrator for the Claude Skills catalog, built by RampStack. It reads the [claude-skills](https://github.com/rampstackco/claude-skills) catalog, plans a build task, and selects only the skills the task needs, then prepares the work to hand to Claude Code. It turns a large skill library from a pile of files into a working build system, and it removes the two problems a big catalog creates: skills clashing with each other, and context bloat from loading more than the task needs.

This repository documents what Tholo does and shows worked examples. The orchestrator is operated by RampStack.

---

## The problem it solves

A skill catalog that grows past a few dozen entries develops two failures. Skills start to clash, more than one looks applicable and they pull the work in different directions. And loading the whole catalog to do one task floods the context with skills the task will never use.

Tholo addresses both by selecting. Given a task, it weighs the catalog against it, honors each skill's own stated boundaries to de-conflict overlaps, and returns the small relevant set, not the whole library. When a task is too broad to narrow, it says so rather than dumping everything. When nothing fits, it says that rather than forcing a pick.

---

## What it does

- **Reads the catalog.** Enumerates the skills, their descriptions, categories, and their stated when-to-use and when-NOT-to-use boundaries.
- **Plans a task.** Decomposes a build task into steps, each a coherent unit of work the catalog has skills for.
- **Selects per step.** Picks the relevant skills for each step, de-conflicts overlaps using the catalog's own declared boundaries, and prepares the dispatch with the inputs each skill needs.
- **Stops where it should.** When a step's selection is ambiguous, Tholo asks for a narrower goal instead of guessing. And it never runs the build itself: it prepares the plan and hands the execute decision to a person, because running a build writes files and changes a system.

The through-line: Tholo does the planning and selection, and stops at the two points that are yours, narrowing an ambiguous task and triggering the build.

---

## Worked examples

- [Build a landing page](examples/tholo-landing-page.md) - a single-step task: one clear skill, a ready plan, and the execute-seam stop.
- [Audit and fix SEO](examples/tholo-audit-and-fix.md) - a multi-step task where one step comes back ambiguous and Tholo stops the plan rather than guess.

Each example shows the plan Tholo produces and, as much as the result itself, where it stops.

---

## Artifacts and schemas

- [`examples/`](examples/) holds the worked examples and one real persisted run: [build a landing page for a new product](examples/build-a-landing-page-for-a-new-product-2026-06-12T05-03-31-067Z.public.md), captured verbatim from the operated engine planning that goal.
- [`schemas/`](schemas/) holds the shape of the public plan artifact as annotated types, for building against the engine's outputs. The types carry only what the published artifacts already show.

---

## About

Tholo is built by [RampStack](https://rampstack.co), which maintains the open [claude-skills](https://github.com/rampstackco/claude-skills) catalog Tholo runs on.

- RampStack: [rampstack.co](https://rampstack.co)
- The catalog: [github.com/rampstackco/claude-skills](https://github.com/rampstackco/claude-skills)

---

## The name

Tholo is the name of RampStack's open orchestrator, in active use since 2026. The name and its associated branding are used in commerce by RampStack. This documentation, dated and public, is part of that record.
