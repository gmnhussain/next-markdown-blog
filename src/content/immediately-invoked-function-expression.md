---
title: "Understanding Immediately Invoked Function Expressions (IIFE) in JavaScript"
date: "2025-02-03"
tags: ["javascript", "IIFE", "functions", "programming"]
excerpt: "Learn about Immediately Invoked Function Expressions (IIFE) in JavaScript, their syntax, use cases, and benefits."
featuredImage: "/images/javascript-iife.jpg"
author: "Nazmul Hussain"
---

## Introduction

In JavaScript, **Immediately Invoked Function Expressions (IIFE)** are an essential concept that allows developers to execute functions **immediately after their definition**.

An IIFE is a **function that runs as soon as it is defined**, without needing to be explicitly called. It helps in **encapsulation, avoiding polluting the global scope, and creating private variables**.

In this article, we’ll explore **what IIFE is, its syntax, use cases, and why it’s useful**.

---

## 1. **What is an IIFE?**

An **Immediately Invoked Function Expression (IIFE)** is a JavaScript function that is **executed right after it is defined**.

The basic syntax looks like this:

```js
(function () {
  console.log("I am an IIFE!");
})();
```
