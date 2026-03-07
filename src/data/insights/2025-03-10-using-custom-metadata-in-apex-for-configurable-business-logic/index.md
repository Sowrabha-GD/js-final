---
title: "Custom Metadata in Apex: How to Build Configurable Business Logic"
date: 2025-03-10
categories:
- "Apex"
---

![](/images/Metadata.png)


In Salesforce development, flexibility and maintainability are key to building scalable applications. Hardcoding business logic within Apex classes can lead to challenges when updates are needed, requiring frequent code changes and deployments. **Custom Metadata Types** provide a powerful solution, allowing developers to store configurable data and reference it dynamically in Apex.

In this blog, we’ll explore **how to use Custom Metadata in Apex** to make business logic more **configurable, maintainable, and scalable**.

## What is Custom Metadata in Salesforce?

Custom Metadata Types are **similar to Custom Objects**, but instead of being stored as data records, they are treated as metadata. This means they can be **deployed between environments, used in Apex, Flows, and Validation Rules**, and **do not count against SOQL limits**.

#### Key Benefits of Using Custom Metadata:

✅ **No SOQL Limitations** – Unlike Custom Settings or Custom Objects, queries on Custom Metadata **do not count** against SOQL governor limits.  
✅ **Configurable & Deployable** – Changes can be made **without modifying Apex code** and can be included in deployment packages.  
✅ **Easier Maintenance** – Business logic can be updated via metadata instead of requiring code changes and deployments.  
✅ **Improved Performance** – Since metadata is cached, queries are faster compared to querying Custom Objects or Custom Settings.

## Use Cases for Custom Metadata in Apex

- **Feature Toggles** – Enable or disable features dynamically.
- **Business Rules Configuration** – Store discount rates, approval conditions, or automation settings.
- **Integration Endpoints** – Manage API URLs and authentication credentials.
- **Mapping Data** – Store field mappings for integrations or data transformations.

## Creating and Using Custom Metadata in Apex

### **Step 1: Define a Custom Metadata Type**

1. **Go to**: Setup → Custom Metadata Types → New Custom Metadata Type.
2. **Give it a Name**, e.g., `Discount_Settings__mdt`.
3. **Add Custom Fields** to store business logic. For example:
    - **Discount\_Percentage\_\_c** (Number) – Stores the discount percentage.
    - **Customer\_Type\_\_c** (Text) – Defines which customers the rule applies to.

### **Step 2: Create Metadata Records**

Once the metadata type is created, add records by navigating to **Manage Records** and clicking **New**.  
Example records:

| Customer Type | Discount Percentage |
| --- | --- |
| VIP | 20% |
| Regular | 10% |

* * *

### **Step 3: Query Custom Metadata in Apex**

To use Custom Metadata in Apex, you can query it just like a Custom Object:

```
public class DiscountService {
    public static Decimal getDiscountPercentage(String customerType) {
        List< Discount_Settings__mdt> discountRecords = [
            SELECT Customer_Type__c, Discount_Percentage__c 
            FROM Discount_Settings__mdt
            WHERE Customer_Type__c = :customerType
        ];
        if (!discountRecords.isEmpty()) {
            return discountRecords[0].Discount_Percentage__c;
        }
        return 0;
    }
} 
```

This method retrieves the discount percentage based on the **customer type**, making it configurable without modifying Apex code.

### **Step 4: Using Custom Metadata in a Trigger or Class**

You can now use this logic in **a trigger, batch job, or service class**:

```
public class OrderProcessor {
    public static void applyDiscount(Opportunity opp) {
        Decimal discount = DiscountService.getDiscountPercentage(opp.Customer_Type__c);
        opp.Discount_Amount__c = (opp.Amount * discount) / 100;
        update opp;
    }
} 
```

Here, instead of hardcoding the discount logic, we dynamically retrieve it from **Custom Metadata**, making future changes easier without modifying code.

## Custom Metadata vs Other Configurable Options

| Feature | Custom Metadata Types | Custom Settings | Custom Objects |
| --- | --- | --- | --- |
| **SOQL Governor Limits** | ✅ Not counted | ❌ Counted | ❌ Counted |
| **Deployable** | ✅ Yes | ❌ No | ✅ Yes |
| **Bulk Query Performance** | ✅ Fast (cached) | ✅ Fast | ❌ Slower |
| **Ideal Use Case** | Business rules, API settings, feature toggles | User-specific settings | Large-scale configurable data |

## Conclusion

Custom Metadata Types provide a **powerful, flexible, and scalable** way to manage business logic in Salesforce **without hardcoding values in Apex**. By using metadata-driven configurations, developers can **reduce technical debt, improve maintainability, and deploy business rule changes efficiently** without requiring code changes.

Leveraging Custom Metadata in Apex ensures that **applications remain dynamic, efficient, and easy to update**, making it a best practice for Salesforce development.

                                                                                                                                                          **-Jeet Singh**
