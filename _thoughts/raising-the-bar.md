---
title: "Raising the bar"
excerpt: ""
date: "2/2/2024"
---

# Raising the bar

_This is a document I wrote while working at Complete. The goal was to communicate how I (and ideally, we) approach problem solving and building useful, beautiful products._

This document serves as a definition of our standards of product quality, to which all engineers should strive to achieve and exceed.

When writing, merging, and deploying new code and features, there are a series of questions we can ask ourselves to determine whether the work in question meets these standards. It should be expected that the engineer reviewing your work will ask you the same questions, or at the very least will ask the questions of your work.

Launch reviews are a perfect time to ask these questions and have these questions asked of you. Having other team members challenge our assumptions and honestly critique our work will make us all better.

### Are you proud of this work?

Not every piece of work we deliver needs to be life-changing, perfect, billion-dollar code- but you should always be proud of what you do. It is rarely worth it to purposely deliver low-quality code and incur tech debt to make a deadline. Our future selves will have to make up for it.

### Are you happy with this work?

Does it look good? Does it work well? Is it annoying to use?

### Are you introducing divergent behaviors, patterns, UI, UX, etc?

As we develop our application, we should strive to build repeatable, reusable patterns. For instance, if we need to add a new button with some new behavior, you should consider: Do I need to add a whole new button component, or can I adapt the current one? Will another component require this button at some point? Does something exist that can solve this problem, possibly in a slightly different way?

Sometimes, building code in a DRY, reusable way will take more time. These tradeoffs need to be handled on a case-by-case basis.

### Have you considered the edge cases?

Does this feature scale? What if there’s 10x more data loaded that what you’re developing with? 100x? 1000x?

What if the user accesses this page or endpoint when logged out?

If there’s a feature flag that limits access to this page, feature, or data, what happens if the user accesses it with that feature flag disabled?

What if the user has no data that can be displayed?

### Is the business logic in the right place?

Is it abstracted correctly? Where does that business logic live? We should be judicial about writing business logic in the frontend as opposed to the backend. We should try to focus on data-driven, "naive" UI as often as possible.

### Have you handled error and loading states properly?

In the current state of our application, some endpoints can take 5+ seconds to resolve. What is the user looking at during that time? Can we load things progressively? Can we avoid a full-page loading screen?

In an effort to reduce layout shift, ideally our loading states would be as similar to the content as possible. The simplest way this can be achieved by using loading skeletons (example [here](#)). Obviously this isn’t straightforward in all cases, especially when the content that will be rendered is of an unknown size, but we can make an educated guess. Consider the average case.

### If you encountered this in a product you were paying ($XX,XXX) for, how would you feel?

If your answer isn’t “I would feel great, satisfied, and I would look forward to a long, healthy relationship with this company”, ask yourself why!

### **Does this provide value to a customer?**

This question is one that should be asked as early as possible in the development process. At our size and velocity, we need to be judicious with what we spend our time on. If it doesn’t provide value to our customers, increase our velocity, or improve devex, why are we doing it?
