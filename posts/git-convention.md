---
title: 'Git Naming Convention'
date: '2023-04-12'
---

## Branch Naming Convention
### Category

A git branch should start with a category. Pick one of these: feature, bugfix, hotfix, or test:

- **feature** is for adding, refactoring or removing a feature
- **bugfix** is for fixing a bug
- **hotfix** is for changing code with a temporary solution and/or without following the usual process (usually because of an emergency)
- **test** is for experimenting outside of an issue/ticket

### Reference

After the category, there should be a **/** followed by the reference of the issue/ticket you are working on. If there's no reference, just add **no-ref**.

### Description

After the reference, there should be another **/** followed by a description which sums up the purpose of this specific branch. This description should be short and "kebab-cased".
By default, you can use the title of the issue/ticket you are working on. Just replace any special character by **-**.       
