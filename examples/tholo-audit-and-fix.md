# Tholo worked example: audit and fix the SEO on an existing page

A multi-step build task. Tholo decomposes the verb-and-verb pattern into two steps, selects per step, and one step comes back ambiguous. Tholo stops the plan at needs-clarification rather than guess a dispatch over an ambiguous selection.

## The task

```
Goal: audit and fix the SEO on an existing page
```

## The plan Tholo produces

```
Status: needs_clarification
Decomposition (2 steps):
  - step-1: "audit the SEO on an existing page"
      needs_clarification: true; dispatch withheld
  - step-2: "fix the SEO on an existing page"
      selected: seo-onpage, landing-page-copy
      dispatch: 2 skills, 9 inputs

Clarifications:
  - step-1: the task matched several audit skills too closely to choose
            between with confidence. Narrow the goal for a sharper selection.

Required inputs: withheld until the ambiguous step is resolved

Execute seam: prepared, not run
```

## What Tholo did, and did not, do

- Decomposed the verb-and-verb pattern: "audit and fix the SEO on an existing page" became an audit step and a fix step, each carrying the shared object.
- Selected per step. The fix step came back with a confident selection and a prepared dispatch.
- The audit step came back ambiguous: the task matched several audit skills too closely to choose between with confidence. Tholo did not pick for the human and did not prepare a dispatch it was not confident in. The plan stopped at needs-clarification, with the step named and the narrowing suggested.
- Withheld the unioned required inputs while any step is ambiguous, since the input list is unreliable until the ambiguity is narrowed.
- Stopped at the execute seam even on a partial plan. The seam is structural; it does not depend on plan status.

## What you do next

Narrow the audit step's goal to the dimension you mean ("audit the page's title and meta", "audit the page's internal links", "audit the page's content quality and headers") and re-run. The fix step is already prepared and passes through unchanged once the audit step is resolved.
