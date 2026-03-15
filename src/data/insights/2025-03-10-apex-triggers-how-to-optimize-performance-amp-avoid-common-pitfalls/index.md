Apex Triggers are a powerful tool in Salesforce that allow developers to **automate processes and enforce business rules** at the database level. However, if not optimized properly, triggers can lead to **performance issues, governor limit breaches, and unexpected errors**. To ensure efficient execution, it is crucial to follow best practices and avoid common pitfalls when writing Apex Triggers.

In this blog, we’ll explore **how to optimize Apex Triggers for better performance** and **avoid mistakes that can impact your Salesforce org**.

## Understanding Apex Triggers in Salesforce

Apex Triggers run **before or after** records are inserted, updated, deleted, or undeleted. They are mainly used for:

- Automating workflows and field updates.
- Enforcing complex validation rules.
- Managing related records based on changes.
- Handling integrations and external API calls.

While triggers enhance functionality, **poorly written triggers can slow down transactions** and lead to scalability issues. Optimizing them is key to ensuring a smooth user experience.

## How to Optimize Apex Trigger Performance

#### 1\. Use Bulk Processing to Handle Multiple Records

Apex Triggers are executed **in bulk**, meaning they process multiple records at once during DML operations. Writing triggers without considering bulk processing can result in **governor limit errors**.

**Optimization Strategy:**

- Always use **for loops** to iterate through `Trigger.new` instead of processing a single record.
- Avoid **SOQL queries and DML statements inside loops**.
- Use **collections like Lists, Maps, and Sets** to handle multiple records efficiently.

#### 2\. Implement Trigger Frameworks for Better Maintainability

As business logic grows, **monolithic triggers** become harder to manage. A best practice is to use a **Trigger Handler Framework**, which separates logic into different Apex classes.

**Benefits of a Trigger Framework:**

- Improves **code reusability and maintainability**.
- Reduces **code duplication** and makes debugging easier.
- Allows better **control over execution order** when multiple triggers exist.

A common approach is the **Trigger Handler Pattern**, where the trigger calls a separate handler class for execution.

#### 3\. Reduce SOQL Queries & Use Query Optimization

Salesforce enforces **governor limits** on SOQL queries, allowing only **100 queries per transaction**. Triggers that run SOQL inside loops can quickly exceed this limit.

**Best Practices for SOQL Optimization:**

- Query all required records **before the loop** and store them in a collection.
- Use **relationship queries (SOQL joins)** to fetch related data in a single query.
- Implement **SELECTIVE queries with WHERE conditions and indexed fields** to speed up execution.

Example of optimized SOQL:

```
 Map accountMap = new Map(
    [SELECT Id, Name FROM Account WHERE Id IN :Trigger.newMap.keySet()]
); 
```

This approach prevents running multiple queries inside a loop.

#### 4\. Minimize DML Operations to Improve Performance

Salesforce allows only **150 DML operations per transaction**. Unoptimized triggers performing multiple `insert`, `update`, or `delete` operations can exceed this limit.

**How to Optimize DML Usage:**

- **Group DML operations** into a single transaction instead of executing them inside loops.
- Use **Lists to batch DML statements** instead of running them one by one.
- **Avoid unnecessary record updates** to prevent recursive trigger execution.

Example of optimized DML:

```
 List contactsToUpdate = new List();
for (Contact c : Trigger.new) {
    if (c.Email == null) {
        c.Email = 'default@example.com';
        contactsToUpdate.add(c);
    }
}
update contactsToUpdate; 
```

Here, all updates are performed in **one DML statement** instead of inside the loop..

#### 5\. Handle Recursive Trigger Execution

Recursive triggers occur when a trigger **calls itself multiple times**, either directly or indirectly, leading to **infinite loops and performance issues**.

**Ways to Prevent Recursion:**

- Use **Static Boolean Flags** to control execution flow.
- Implement a **Trigger Handler Class** that checks if the logic has already run.
- Use **Set or Map collections** to track processed records and prevent duplicate operations.

Example using a static Boolean flag:

```
 public class TriggerHelper {
    public static Boolean isTriggerExecuted = false;
} 
```

Then, in the trigger:

```
 if (!TriggerHelper.isTriggerExecuted) {
    TriggerHelper.isTriggerExecuted = true;
    // Execute logic
} 
```

This ensures the trigger **runs only once per transaction**.

#### 6\. Use Asynchronous Processing for Heavy Operations

For triggers that perform **API calls, large data updates, or complex calculations**, using **asynchronous processing** can improve performance.

**Best Methods for Asynchronous Processing:**

- Use **@future methods** for callouts and long-running tasks.
- Implement **Batch Apex** for large data updates.
- Use **Queueable Apex** for chaining multiple processes.

Example of a **Queueable Apex Class**:

```
public class ProcessLargeRecords implements Queueable {
    public void execute(QueueableContext context) {
        List accounts = [SELECT Id, Name FROM Account WHERE Industry = 'Technology'];
        for (Account acc : accounts) {
            acc.Rating = 'Hot';
        }
        update accounts;
    }
} 
```

To run this in a trigger:

```
 System.enqueueJob(new ProcessLargeRecords()); 
```

This offloads processing to **run in the background**, preventing trigger execution limits.

## Common Pitfalls to Avoid in Apex Triggers

### **1\. Writing Logic Directly in Triggers**

Having all logic inside a trigger makes it **hard to debug and maintain**. Always separate logic into **a handler class**.

### **2\. Not Handling Bulk Operations**

Triggers must be designed to **handle multiple records efficiently**. Avoid single record processing inside loops.

### **3\. Hardcoding IDs & Values**

Hardcoding record IDs and values makes the trigger **inflexible and difficult to maintain**. Use **Custom Metadata or Custom Settings** instead.

### **4\. Ignoring Governor Limits**

Exceeding Salesforce governor limits causes **runtime errors and failed transactions**. Always optimize SOQL, DML, and memory usage.

### **5\. Not Testing Triggers Properly**

Writing **unit tests** with proper assertions ensures that triggers work as expected. Always test with **bulk data** and different record conditions.

## Conclusion

Optimizing Apex Triggers in Salesforce requires **efficient bulk processing, proper SOQL and DML management, and structured trigger frameworks**. By implementing these best practices, developers can **improve performance, avoid governor limits, and ensure scalable automation**.

Adopting **asynchronous processing, recursive prevention, and robust testing** will help organizations maintain a **high-performing Salesforce environment** while delivering seamless automation.

                                                                                                                                                                **-Jeet Singh**
