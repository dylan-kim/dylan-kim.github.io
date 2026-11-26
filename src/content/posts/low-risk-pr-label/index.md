---
title: A GitHub Action to label low-risk pull requests
description: With so many AI-generated pull requests, a simple "low-risk" label helps the team focus its reviews on the riskier ones.
pubDatetime: 2026-11-26T18:00:00+01:00
tags:
  - github-actions
  - code-review
  - ai
---

Code reviews have a lot of benefits, like finding bugs, suggesting ways to simplify, or just learning. But with so many pull requests generated with AI, it becomes hard for the owning team to keep up.

One way could be to have the team focus on riskier PRs before they go into production. I built this small GitHub Action for fun with Claude Code. It adds a `low-risk` label when a PR passes some checks:

- it is not a draft
- its author is not a bot and has 3 or more merged PRs in this repo (not counting this one)
- its change size (additions + deletions) is below 1,000, not counting lockfiles and generated files
- it doesn't touch sensitive files: no Flyway migrations, no BPMN files, and the list can be extended to cover the production application YAML, etc.

The numbers are defaults and can be configured.

```yaml
name: low-risk
on:
  pull_request:
    types: [opened, synchronize, reopened, ready_for_review, converted_to_draft]
permissions:
  pull-requests: write
concurrency:
  group: low-risk-${{ github.event.pull_request.number }}
  cancel-in-progress: true
jobs:
  label:
    runs-on: ubuntu-latest
    steps:
      - uses: dylan-kim/low-risk-pr-labeler@v1
        # with:                    # all optional
        #   max_lines: "500"
        #   min_merged_prs: "3"
        #   risky_globs: |
        #     **/db/migration/**
        #     **/*.bpmn
        #   ignored_globs: |
        #     **/package-lock.json
        #   label: low-risk
        #   label_color: "0E8A16"
```

This can be a lightweight alternative to the newly released Claude Approvals.

For reference: [https://lnkd.in/etbN4ikM](https://lnkd.in/etbN4ikM)
