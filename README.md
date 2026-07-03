# Blitz Insurance Calculator

## Description

This is a responsive React application for configuring modular insurance products. Users can select coverage, calculate module prices, add modules to the shopping cart, and see the total price.

## Practical Training Information

**Student:** Закусило Олександр Олександрович  
**Group:** ВТк-24-1  
**University:** Державний університет «Житомирська політехніка»  
**University address:** м. Житомир, вул. Чуднівська, 103  
**Faculty:** Факультет інформаційно-комп'ютерних технологій  
**Specialty:** 121 Інженерія програмного забезпечення  
**Educational program:** Веб-технології  

**Practical training company:** ТОВ "Український центр дуальної освіти"  
**Company address:** м. Житомир, вул. Мала Бердичівська, 17Б  

## Task Source

This project was created as part of practical training based on the frontend coding challenge from the file `Test task Blitz.docx`.

## Features

- Four insurance modules
- Coverage selection for each module
- Automatic price calculation using coverage and risk
- Add modules to shopping cart
- Update existing cart modules
- Remove modules from cart
- Clear cart
- Total price calculation
- Responsive layout
- ESLint configuration

## Insurance Modules

| Module | Coverage Range | Risk |
|--------|----------------|------|
| Bike | 0–3000 | 30% |
| Jewelry | 500–10000 | 5% |
| Electronics | 500–6000 | 35% |
| Sports Equipment | 0–20000 | 30% |

## Price Formula

```
price = coverage * risk
```

Currency is not specified in the task, so prices are displayed as plain numeric values.

## Technologies

- React.js
- JavaScript ES6+
- Vite
- CSS
- ESLint
- Vercel

## Installation and Running

```bash
npm install
npm run dev
```

The development server starts at `http://localhost:5173`.

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## GitHub

**GitHub profile:** https://github.com/ZakusyloAlexander

**Repository:** https://github.com/ZakusyloAlexander/Production-practice-Blitz

## Deployment

[The project is prepared for deployment on Vercel](https://production-practice-blitz.vercel.app/)

