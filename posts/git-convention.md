---
title: "Git Naming Convention"
date: "2023-04-12"
---

**Branch Naming Convention**

#

**_Category_**

#

A git branch should start with a category. Pick one of these: feature, bugfix, hotfix, or test:

#

-_feature_ is for adding, refactoring or removing a feature

#

-_bugfix_ is for fixing a bug

#

-_hotfix_ is for changing code with a temporary solution and/or without following the usual process (usually because of an emergency)

#

-_test_ is for experimenting outside of an issue/ticket

#

**_Reference_**

After the category, there should be a / followed by the reference of the issue/ticket you are working on. If there's no reference, just add _no-ref_.

**_Description_**

After the reference, there should be another / followed by a description which sums up the purpose of this specific branch. This description should be short and "kebab-cased".
By default, you can use the title of the issue/ticket you are working on. Just replace any special character by -.
