---
title: "SOQL Performance Optimization: How to Avoid Governor Limits"
date: 2025-03-11
categories:
- "Apex"
---

![](/images/SOQLL.png)

SOQL (Salesforce Object Query Language) is a powerful tool for querying data in Salesforce. However, inefficient SOQL queries can quickly lead to **governor limit exceptions**, poor performance, and frustrated users. In this blog, we’ll explore proven strategies for optimizing SOQL performance and avoiding governor limits, ensuring your Salesforce applications run smoothly and efficiently.

#### Why SOQL Performance Matters

Salesforce operates in a multi-tenant environment, meaning resources like CPU time, memory, and database queries are shared across multiple organizations. To ensure fair usage, Salesforce enforces **governor limits**, such as:

- **Total SOQL queries**: 100 synchronous queries or 200 asynchronous queries per transaction.
    
- **Query timeout**: 10 seconds for synchronous queries and 60 seconds for asynchronous queries.
    
- **Query rows**: 50,000 rows retrieved per transaction.
    

If your SOQL queries aren’t optimized, you risk hitting these limits, which can cause your code to fail and disrupt business processes. Optimizing SOQL performance is essential for building scalable and reliable applications.

#### Key Strategies for SOQL Performance Optimization

Here are the top strategies to optimize your SOQL queries and avoid governor limits:

##### 1\. Select Only the Fields You Need

Always specify the fields you need in your SELECT statement instead of using `SELECT *`. Retrieving unnecessary fields increases the query’s execution time and consumes more resources.

###### Bad Example

```

List accounts = [SELECT * FROM Account];
```

###### Good Example

```

List accounts = [SELECT Id, Name, Industry FROM Account];
```

##### 2\. Use Filters to Limit Results

Use WHERE clauses to filter records and reduce the number of rows returned. This not only improves performance but also helps you stay within the **50,000-row limit**.

###### Example:

```

List accounts = [SELECT Id, Name FROM Account WHERE Industry = 'Technology'];
```

##### 3\. Leverage Indexed Fields

Salesforce automatically indexes certain fields, such as:

- Primary keys (e.g., `Id`)
    
- Foreign keys (e.g., `Lookup` and `Master-Detail` relationships)
    
- Audit fields (e.g., `CreatedDate`, `LastModifiedDate`)
    

Using indexed fields in your WHERE clauses can significantly improve query performance.

###### Example:

```

List accounts = [SELECT Id, Name FROM Account WHERE CreatedDate = TODAY];
```

##### 4\. Avoid Querying Inside Loops

Placing SOQL queries inside loops is a common mistake that can quickly exhaust your query limit. Instead, query data outside the loop and use collections to process records.

###### Bad Example

```

for (Contact con : [SELECT Id FROM Contact WHERE AccountId = :accId]) {
// Process contact
}
```

###### Good Example

```

List contacts = [SELECT Id FROM Contact WHERE AccountId = :accId];
for (Contact con : contacts) {
// Process contact
}
```

##### 5\. Use Relationship Queries

Instead of performing multiple queries, use relationship queries (parent-to-child or child-to-parent) to retrieve related records in a single query.

###### Example:

```

List accounts = [SELECT Id, Name, (SELECT Id, LastName FROM Contacts) FROM Account];
```

##### 6\. Limit the Number of Rows

Use the `LIMIT` clause to restrict the number of rows returned by your query. This is especially useful when you only need a subset of records.

###### Example:

```

List accounts = [SELECT Id, Name FROM Account LIMIT 100];
```

##### 7\. Use Aggregate Functions

If you only need summary data, use aggregate functions like `COUNT()`, `SUM()`, `AVG()`, `MIN()`, and `MAX()` to reduce the number of rows processed.

###### Example

```

AggregateResult result = [SELECT COUNT(Id) total FROM Account];
Integer totalAccounts = (Integer) result.get('total');
```

##### 8\. Avoid Null Comparisons

Avoid using `!= null` or `= null` in your WHERE clauses, as these can prevent Salesforce from using indexes. Instead, use indexed fields or alternative filters.

###### Bad Example:

```

    List accounts = [SELECT Id, Name FROM Account WHERE Industry != null];
```

###### Good Example:

```

List accounts = [SELECT Id, Name FROM Account WHERE Industry = 'Technology'];
```

#### Real-World Example: Optimizing a SOQL Query

Let’s say you need to retrieve all contacts for accounts in the "Technology" industry. Here’s how you can optimize the query:

###### Unoptimized Query:

```

List accounts = [SELECT Id FROM Account WHERE Industry = 'Technology'];
for (Account acc : accounts) {
List contacts = [SELECT Id, LastName FROM Contact WHERE AccountId = :acc.Id];
}
```

###### Optimized Query:

```

List accounts = [SELECT Id, (SELECT Id, LastName FROM Contacts) FROM Account WHERE Industry = 'Technology'];
```

**In the optimized version:  
**

- We use a relationship query to retrieve contacts in a single query.
    
- We avoid querying inside the loop, reducing the number of SOQL queries.
    

#### Common Pitfalls to Avoid

1. **Querying Unindexed Fields**: Avoid filtering on non-indexed fields, as this can lead to full table scans and slower performance.
    
2. **Overfetching Data**: Only retrieve the fields and rows you need to minimize resource usage.
    
3. **Ignoring Query Selectivity**: Ensure your WHERE clauses are selective enough to use indexes effectively.
    

#### Conclusion

Optimizing SOQL performance is critical for avoiding governor limits and ensuring your Salesforce applications run efficiently. By following the strategies outlined in this blog—such as selecting only necessary fields, leveraging indexed fields, and avoiding queries inside loops—you can build scalable and high-performing solutions.

Remember: **Efficient SOQL queries are the foundation of a well-optimized Salesforce application.** Take the time to review and refine your queries, and always test with large datasets to ensure they perform well under real-world conditions. 

                                                                                                                                       -Jeet Singh
