---
title: Birmingham Housing Investment Dashboard
summary: A Power BI dashboard and investment report that helps a property firm find the best-value housing opportunities across Birmingham.
category: BI Dashboards
period: Aug 2025
date: 2025-08-01
status: Completed
tech: [Power BI, Python, Descriptive analytics, Excel]
metrics:
  - value: "3"
    label: dashboard pages
  - value: £246–509
    label: price per sq ft, cheapest vs priciest postcode
  - value: "1"
    label: full investment report
cover: ../../assets/projects/birmingham-housing-dashboard/dashboard-1.png
coverAlt: Birmingham housing market overview dashboard
gallery:
  - src: ../../assets/projects/birmingham-housing-dashboard/dashboard-2.png
    alt: Location and affordability page
  - src: ../../assets/projects/birmingham-housing-dashboard/dashboard-3.png
    alt: Investment insights page
links:
  repo: https://github.com/Sanil-Gokarn/Birmingham-Housing-Dashboard
  report: https://github.com/Sanil-Gokarn/Birmingham-Housing-Dashboard/blob/main/Report/Report%20Completed.pdf
---

## Overview

Aldrich Property Investments, a UK real estate firm, is evaluating Birmingham for residential expansion. This project gives them a data-driven way to compare property types, postcodes and configurations before buying.

## What I did

- **Data collection and cleaning.** Built the dataset from OnTheMarket listings, dropped a column with 50% missing values, filled gaps with medians and modes, and added a price-per-square-foot measure.
- **Descriptive analytics in Python,** alongside a 3-page Power BI dashboard covering market overview, location and affordability, and investment insights.
- **Written report** with recommendations for the client.

## Key insights

- **Semi-detached and terraced homes** are the most listed types, which suggests strong liquidity.
- **Detached homes average about £549K**, while apartments average about £188K, giving a wide range of investment tiers.
- **3 to 4 bedroom homes** strike the best balance between price and capacity for rental demand.
- **B10 0SA is the best value postcode** at £246 per sq ft, while B6 4TB is the most expensive at £509 per sq ft.
