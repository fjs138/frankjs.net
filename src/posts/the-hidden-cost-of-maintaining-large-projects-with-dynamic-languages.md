---
title: "react nice"
date: "2019-01-01"
---

The Hidden Cost of Maintaining Large Projects with Dynamic Languages

I just did this, too.

## Topics

1. meat
2. cheese

If you are looking for a primer on what it means for a language to be statically or dynamically typed, you can check out my post The Difference Between Static and Dynamic Languages.

While it is difficult to maintain a large codebase in general, dynamic languages often introduce more complications than their static brethren. Let us define “large” in this context; too large for anyone involved to know every detail of every part of the system, often involving multiple teams with turnover, and coding stretching over many months or years and various versions.

These characteristics cause a reduced ability to understand the code and as a result, modify that code.

Maintainers of large codebases seek to mitigate these encumbrances. One way is through modularization, where code is is placed into modules with a specific responsibility. Once modularized, and documented, that module can now be used by others without understanding the details of the code within the module. In this same vein, encapsulation allows the distinction of a module’s code as public or private. This prevents changes to the module’s private code from directly interfering with the project as a whole.

One more way of helping a project’s coding go more smoothly is automated error detection. While you can build something that determines where programming errors have been found and subsequently notifies you about the error, a statically typed language offers a way of doing this “free of cost”. Their compiler looks for type errors. With a dynamically typed language you must annotate with information about what can go into variables, or storage locations. The result is that the work done by the compiler for static languages is work you must do. If mistakes are made by a programmer, regarding what type of data can be stored somewhere, they must be caught with your testing and review, not the compiler.

The more significant reasons that make maintaining large codebases more difficult with dynamically typed languages are actually not inherent to their being dynamic. It is due to the fact that, in general, dynamically typed languages are lacking the features that ease maintaining large codebases that are, in general, associated with statically typed languages.

Let us cherry-pick JavaScript, specifically the language in its earliest forms, as an example of a dynamic language that does not lend itself well to large software projects. It was not created with robust support for classes or encapsulation. Since JavaScript was designed originally for scripts viewed in a web browser, it has an appropriate way of managing errors. Web page scripts compared to mission critical software, are expected to fail more often, and with a low cost of failure. Making matters even worse, due to the fact that the end-user is the one who will be seeing any error messages and not the developer, there is little reason for verbosity. While ECMA2015/ECMAScript 6 introduced “classes”, these are “special functions”, and are largely “syntactic sugar”.

The additional test cases required to detect errors, efforts made to enforce correct typing, and utilization of frameworks to facilitate programming these large projects can all be additional costs to writing software with dynamic languages.
