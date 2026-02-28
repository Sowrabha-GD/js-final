---
title: "Building Secure REST API Endpoints in Salesforce: Apex Best Practices"
date: 2025-03-10
---

<figure>

![](images/Governor-Limits-Deep-Dive-How-to-Write-Efficient-Apex-Code-768x432.png)

<figcaption>

Governor Limits Deep Dive: How to Write Efficient Apex Code

</figcaption>

</figure>

## Understanding Governor Limits in Salesforce

Salesforce operates in a multi-tenant environment, meaning multiple organizations share the same resources. To ensure that no single organization monopolizes system performance, Salesforce enforces governor limits. These limits are designed to regulate database operations, memory usage, execution time, and callouts to external systems. While they may seem restrictive, governor limits encourage developers to write efficient, scalable Apex code that performs well under Salesforce’s constraints.

Without proper optimization, Apex code can quickly hit these limits, causing runtime errors and failed transactions. To avoid such issues, developers must follow best practices in areas such as SOQL queries, DML operations, CPU time management, and memory optimization. By understanding how these limits work, developers can build robust Salesforce applications that scale effectively.

## Optimizing SOQL Queries to Avoid Limits

One of the most common governor limits in Salesforce is the restriction on SOQL queries per transaction. Apex allows only a certain number of queries to be executed within a single execution context. If this limit is exceeded, Salesforce throws a runtime exception, causing the entire transaction to fail.

To avoid hitting this limit, it is essential to structure queries efficiently. Running SOQL inside loops is one of the biggest mistakes developers make, as it leads to multiple unnecessary queries being executed. Instead, developers should retrieve all required records in a single query and store them in collections such as maps or lists for efficient data processing. Additionally, retrieving only the necessary fields rather than selecting all fields reduces memory consumption and improves query performance.

## Efficient DML Operations for Bulk Processing

Salesforce also enforces limits on DML operations, which include insert, update, delete, and undelete statements. If too many DML statements are executed within a single transaction, Salesforce will terminate the process, causing a failure.

To work within these limits, developers should always use bulk processing techniques. Instead of executing DML operations inside loops, which can quickly exceed limits, records should be collected in lists and inserted or updated in bulk. This not only ensures compliance with governor limits but also improves performance by reducing the number of calls to the database.

## Managing CPU Time to Prevent Transaction Failures

Another critical governor limit in Salesforce is CPU time consumption. Apex transactions are only allowed to run for a specific amount of time, and if a process takes too long, it is automatically terminated. This limit is particularly important in complex calculations, loops, and recursive operations.

To optimize CPU time usage, developers should minimize the use of nested loops, avoid redundant computations, and leverage collections like maps for quick lookups instead of repeatedly querying the database. Processing logic should be streamlined, and heavy computations should be offloaded to asynchronous processes such as Batch Apex or Queueable Apex to distribute processing across multiple transactions.

## Optimizing Heap Size for Memory Efficiency

Heap size limits regulate the amount of memory an Apex transaction can consume. If too much data is stored in memory, such as large collections or unnecessary object allocations, the transaction can exceed its allowed heap size, leading to a failure.

To manage memory effectively, developers should retrieve only the required fields in SOQL queries and process records in batches instead of loading all records at once. Using transient variables in Visualforce controllers and offloading data-intensive operations to asynchronous processing can help reduce memory consumption.

## Handling Callout Limits in External Integrations

When integrating with external APIs, Salesforce imposes limits on the number of HTTP callouts a transaction can make. If too many callouts are executed within a single transaction, Salesforce enforces a limit, preventing further requests.

To avoid exceeding callout limits, developers should batch API requests whenever possible and leverage asynchronous processing methods like Future Methods or Queueable Apex. Using Named Credentials for authentication and caching responses where appropriate can further optimize external API interactions while staying within Salesforce’s restrictions.

## Conclusion

Governor limits are a fundamental aspect of Salesforce’s architecture, ensuring system stability and fair resource allocation. While these limits can pose challenges, they also encourage developers to write efficient, well-structured Apex code. By optimizing SOQL queries, using bulk DML operations, managing CPU time effectively, reducing memory usage, and handling callouts efficiently, developers can build scalable applications that perform reliably within Salesforce’s constraints.

Understanding and working within governor limits is not just about avoiding errors—it’s about writing high-performance code that maximizes Salesforce’s capabilities. By following best practices and adopting a strategic approach, developers can create robust solutions that deliver seamless user experiences without compromising performance.

                                                                                                                                                                      -**Jeet Singh**
