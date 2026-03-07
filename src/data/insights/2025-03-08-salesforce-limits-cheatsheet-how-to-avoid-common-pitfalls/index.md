---
title: "How to Avoid Salesforce Limits: The Ultimate Developer Cheatsheet 2025"
date: 2025-03-08
categories:
- "Apex"
---

![](/images/Cheatsheet.png)


Salesforce is a powerful platform, but it operates within a shared, multi-tenant environment. To ensure fair usage and optimal performance for all users, Salesforce enforces **governor limits**. These limits restrict the amount of resources (like memory, CPU time, and database operations) that your Apex code can use. Exceeding these limits can cause your code to fail, leading to errors and disruptions in your application.

In this blog, we’ll explore the most common Salesforce limits, why they exist, and how you can avoid hitting them. By understanding and working within these limits, you can build more efficient and reliable Salesforce applications.

### Why Do Salesforce Limits Exist?

Salesforce limits are designed to ensure that no single organization monopolizes shared resources, which could degrade performance for others. These limits encourage developers to write efficient, scalable, and well-optimized code. While they may seem restrictive at first, they ultimately help maintain the stability and performance of the Salesforce platform.

## Common Salesforce Limits to Watch Out For

Here are some of the most common Salesforce limits and tips to avoid hitting them:.

#### 1\. SOQL Query Limits

Salesforce allows a maximum of **100 SOQL queries** in a single transaction for synchronous code and **200 for asynchronous code**. To avoid hitting this limit:

- **Bulkify Your Code**: Write code that processes multiple records at once instead of querying inside loops.
    
- **Use Efficient Queries**: Retrieve only the fields and records you need, and use indexed fields in WHERE clauses.
    
- **Leverage Relationships**: Use parent-child or child-parent queries to reduce the number of queries needed.
    

#### 2\. DML Operation Limits

You can perform a maximum of **150 DML operations** (e.g., insert, update, delete) in a single transaction. To stay within this limit:

- **Batch DML Operations**: Perform DML operations on collections of records instead of individual records.
    
- **Use Database Methods**: Methods like `Database.insert` allow partial success, which can help manage errors and reduce the number of retries.
    

#### 3\. CPU Time Limits

Salesforce enforces a **10-second CPU time limit** for synchronous transactions and **60 seconds for asynchronous transactions**. To optimize CPU usage:

- **Avoid Complex Logic in Loops**: Move complex calculations or logic outside of loops.
    
- **Use Efficient Algorithms**: Optimize your code to reduce unnecessary computations.
    
- **Leverage Asynchronous Processing**: Use tools like Batch Apex or Queueable Apex for long-running processes.
    

#### 4\. Heap Size Limits

The **heap size** is the amount of memory allocated to your Apex transaction. The limit is **6 MB for synchronous code** and **12 MB for asynchronous code**. To manage heap size:

- **Limit Data Storage**: Only store the data you need in memory.
    
- **Use Collections Wisely**: Avoid storing large datasets in collections like Lists or Maps.
    
- **Process Data in Chunks**: Use Batch Apex to process large datasets in smaller, manageable chunks.
    

#### 5\. Callout Limits

Salesforce allows a maximum of **100 callouts** (HTTP requests to external systems) in a single transaction. To avoid exceeding this limit:

- **Batch Callouts**: Combine multiple requests into a single callout if possible.
    
- **Use Asynchronous Callouts**: Use `@future` or Queueable Apex for callouts that don’t need to be processed immediately.
    
- **Cache Responses**: Store responses from external systems to reduce the need for repeated callouts.
    

#### 6\. Query Row Limits

You can retrieve a maximum of **50,000 rows** in a single transaction. To stay within this limit:

- **Use Filters**: Add WHERE clauses to limit the number of rows returned.
    
- **Pagination**: Use the `LIMIT` and `OFFSET` clauses to process data in smaller batches.
    
- **Avoid Unnecessary Queries**: Only query the data you need for the current operation.
    

## Best Practices to Avoid Salesforce Limits

Here are some general best practices to help you avoid hitting Salesforce limits:

### 1. **Bulkify Your Code**

Always write code that can handle multiple records at once. This is especially important for triggers, which can process up to 200 records in a single batch.

* * *

### 2. **Test with Realistic Data**

Test your code with realistic datasets to ensure it performs well under real-world conditions. Use tools like the Salesforce Data Loader to simulate large data volumes.

* * *

### 3. **Monitor and Debug**

Use the `Limits` class in Apex to monitor resource usage and debug potential issues. This helps you identify and address bottlenecks before they become a problem.

* * *

### 4. **Use Asynchronous Processing**

For long-running operations, use asynchronous tools like Batch Apex, Queueable Apex, or Scheduled Apex. This helps avoid hitting limits like CPU time and heap size.

* * *

### 5. **Optimize Queries and DML**

Write efficient SOQL queries and DML operations by retrieving only the data you need and processing it in bulk.

## Conclusion

Salesforce limits are an essential part of the platform’s architecture, ensuring fair usage and optimal performance for all users. By understanding these limits and following best practices, you can write efficient, scalable, and reliable Apex code that avoids common pitfalls.

Remember: **Working within Salesforce limits is not just about avoiding errors—it’s about building better applications.** Take the time to optimize your code, and you’ll create solutions that perform well under any conditions.   

                                                                                                                                                                       **-Jeet Singh**
