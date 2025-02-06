# Next.js 15 Hydration Mismatch Error with Server and Client Components

This repository demonstrates a hydration mismatch error encountered when using Server Components and Client Components together in a Next.js 15 app directory. The error occurs despite seemingly correct usage of `'use client'` and `'use server'` directives.

## Bug Description

A hydration mismatch error occurs when rendering a page containing both Server Components and Client Components. This error is unexpected given the usage of the directives intended to prevent this type of error.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the hydration mismatch error in the browser console.

## Solution

The solution involves properly isolating the Server and Client Components to ensure data is appropriately fetched and rendered.
