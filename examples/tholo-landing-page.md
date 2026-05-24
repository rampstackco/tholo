# Tholo worked example: build a landing page

A single-step build task. Tholo decomposes it, the catalog selection picks one clear skill, the plan is ready, and the execute seam stops Tholo before the build runs.

## The task

```
Goal: build a landing page for a new product
```

## The plan Tholo produces

```
Status: ready
Decomposition (1 step):
  - step-1: "build a landing page for a new product"
      selected: landing-page-copy
      dispatch: 1 skill, 6 inputs

Required inputs (union, 6):
  - The product, service, or offer
  - The target audience and the specific objection they bring
  - The conversion goal (one specific action)
  - Brand voice
  - Existing customer language (testimonials, support tickets, sales calls)
  - Any constraints (length, format, regulatory)

Execute seam: prepared, not run
  "plan prepared; execution is a human action. Run the dispatch yourself once you have approved it."
```

## What Tholo did, and did not, do

- Decomposed the build task into one step. A single-surface task does not get over-decomposed; one coherent unit of work the catalog has a skill for.
- Selected the skill set: one clear winner, no ambiguity. The dispatch carries the skill and the unioned required inputs the human will need before running it.
- Stopped at the execute seam. Tholo prepares the plan and the dispatch; running the build writes files and changes a system, which is irreversible, so it is the human's call to trigger. The seam is the legible boundary, not a default that gets overridden.

## What you do next

Read the required inputs, gather them, and run the build yourself once you have approved the plan. Tholo does not auto-run it.
