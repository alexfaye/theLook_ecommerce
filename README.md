# theLook_eCommerce
This is a pratical data analysis with theLook eCoomerce dataset with BigQuery and Dataform.

This README is designed to showcase your transition from a **Web Developer** to a **Data-Driven Growth Engineer**. It highlights your ability to handle the entire data pipeline—from raw BigQuery data to actionable marketing insights.

# E-commerce Growth & Marketing Analytics (thelook_ecommerce)

## 📌 Project Overview
This project transforms raw, fragmented e-commerce data into a high-performance marketing decision engine. Using the **thelook_ecommerce** dataset, I built a scalable data pipeline to analyze user behavior, attribution, and conversion funnels. 

The goal is to bridge the gap between **Web Development** and **Business Intelligence**, providing business owners with the "Why" behind their website's performance.

## 🛠️ Tech Stack
* **Data Warehouse:** Google BigQuery
* **Data Modeling & Transformation:** Dataform (SQLX)
* **Visualization:** Looker Studio
* **Concepts:** Star Schema, One Wide Table, Session Attribution, CRO (Conversion Rate Optimization).

## 🚀 Key Features & Data Modeling

### 1. Data Transformation with Dataform
Instead of querying raw tables, I used **Dataform** to create a clean, orchestrated pipeline. Key transformations include:
* **The "One Wide Table" Strategy:** Consolidating users, orders, and web events into a single performant table for rapid BI exploration.
* **Session Reconstruction:** Logic to group individual events into marketing sessions to calculate true Bounce Rates and Session Duration.
* **User Lifetime Value (LTV):** Aggregating historical purchase data to identify VIP customer segments.

### 2. Marketing-Centric Analytics
This project focuses on the metrics that drive ROI:
* **Multi-Channel Attribution:** Analyzing which sources (Search, Social, Organic) initiate vs. close the sale.
* **Conversion Funnel Leakage:** Identifying exactly where users drop off—from `product_view` to `cart_add` to `purchase`.
* **Product Affinity (Basket Analysis):** Identifying products frequently bought together to inform cross-selling UI/UX designs.

## 📊 Business Impact & Decision Support
This dashboard doesn't just show "numbers"; it provides **strategic recommendations**:
* **Budget Optimization:** Identifies underperforming ad channels where CAC (Customer Acquisition Cost) exceeds LTV.
* **UX Friction Detection:** Highlights pages with high drop-off rates, signaling the need for technical performance audits or mobile responsiveness fixes.
* **Inventory Intelligence:** Correlates sales trends with stock levels to prevent lost revenue from "Out of Stock" scenarios.

## 📈 Dashboard Preview (Looker Studio)
*The dashboard includes three primary views:*
1.  **Executive Summary:** High-level Revenue, AOV (Average Order Value), and Conversion Rate.
2.  **Marketing Deep-Dive:** Channel performance and attribution breakdown.
3.  **Customer Behavior:** Cohort analysis and geographic distribution (focused on the Australian market context).

## 👨‍💻 About Me
I am a **Web Designer & Developer** with a passion for **Data & Digital Marketing**. I believe that every line of code and every design choice should be backed by data. 

* **Location:** Adelaide, Australia
* **Specialties:** WordPress/Shopify Dev, Technical SEO, GTM Server-Side Tracking, BigQuery Analytics.

### How to use this repo
1.  **Definitions:** Check the `definitions/` folder for the SQLX logic used in Dataform.
2.  **Schema:** View the `schema/` documentation for the structure of the final wide table.
