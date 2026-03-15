In Salesforce, **asynchronous Apex** allows you to run processes in the background, freeing up resources for more critical tasks. Whether you’re handling long-running operations, integrating with external systems, or processing large datasets, asynchronous Apex is a powerful tool for improving performance and scalability.

In this blog, we’ll explore the four types of asynchronous Apex—**Future**, **Queueable**, **Batch**, and **Scheduled**—and provide step-by-step guidance on how to write and use each one effectively.

#### Why Use Asynchronous Apex?

Asynchronous Apex is ideal for:

- **Long-Running Processes**: Avoid hitting governor limits like CPU timeouts.
    
- **Callouts**: Make HTTP requests to external systems without blocking the main transaction.
    
- **Large Data Volumes**: Process thousands of records efficiently.
    
- **Scheduled Tasks**: Run jobs at specific times or intervals.
    

By running processes asynchronously, you can improve the performance and reliability of your Salesforce applications

#### Types of Asynchronous Apex

Salesforce provides four ways to write asynchronous Apex:

1. **Future Methods**
    
2. **Queueable Apex**
    
3. **Batch Apex**
    
4. **Scheduled Apex**
    

Let’s dive into each type with examples and best practices.

.

#### 1\. Future Methods

Future methods are used to run processes asynchronously in the background. They are ideal for simple tasks like callouts or DML operations that don’t require complex chaining.

##### Key Features:

- Runs in a separate thread.
    
- Cannot return values.
    
- Limited to primitive data types as parameters.
    

###### Example:

```
public class FutureExample {
@future
public static void updateAccount(Set accountIds) {
List accountsToUpdate = [SELECT Id, Name FROM Account WHERE Id IN :accountIds];
for (Account acc : accountsToUpdate) {
acc.Name = acc.Name + ' - Updated';
}
update accountsToUpdate;
}
}
```

###### Usage:

```
Set accountIds = new Set{'001XXXXXXXXXXXX', '001YYYYYYYYYYYY'};
FutureExample.updateAccount(accountIds);
```

##### Best Practices:

- Use for simple, independent tasks.
    
- Avoid nesting future methods.
    
- Handle exceptions gracefully.
    

#### 2\. Queueable Apex

Queueable Apex is an advanced version of future methods. It allows you to chain jobs, use complex data types, and monitor job status

###### Key Features:

- Supports chaining of jobs.
    
- Can take complex objects as parameters.
    
- Implements the `Queueable` interface
    

###### Example:

```
public class QueueableExample implements Queueable {
private Set accountIds;
public QueueableExample(Set accountIds) {
this.accountIds = accountIds;
}
public void execute(QueueableContext context) {
List accountsToUpdate = [SELECT Id, Name FROM Account WHERE Id IN :accountIds];
for (Account acc : accountsToUpdate) {
acc.Name = acc.Name + ' - Processed';
}
update accountsToUpdate;
}
}
```

###### Usage:

```
Set accountIds = new Set{'001XXXXXXXXXXXX', '001YYYYYYYYYYYY'};
System.enqueueJob(new QueueableExample(accountIds));
```

#### Best Practices:

- Use for complex, chained operations.
    
- Monitor job status using `AsyncApexJob`.
    
- Avoid infinite chaining.
    

.

#### 3\. Batch Apex

Batch Apex is designed for processing large datasets in smaller chunks. It’s ideal for data migration, cleansing, or reporting.

###### Key Features:

- Processes records in batches (default batch size is 200).
    
- Implements the `Database.Batchable` interface.
    
- Can handle millions of records.
    

###### Example:

```
global class BatchExample implements Database.Batchable {
global Database.QueryLocator start(Database.BatchableContext bc) {
return Database.getQueryLocator('SELECT Id, Name FROM Account');
}
global void execute(Database.BatchableContext bc, List scope) {
for (Account acc : scope) {
acc.Name = acc.Name + ' - Batch Processed';
}
update scope;
}
global void finish(Database.BatchableContext bc) {
System.debug('Batch processing completed.');
}
}
```

###### Usage:

```
Database.executeBatch(new BatchExample());
```

#### Best Practices:

- Use for large data volumes.
    
- Test with realistic datasets.
    
- Monitor batch progress using `AsyncApexJob`
    

#### 4\. Scheduled Apex

Scheduled Apex allows you to run jobs at specific times or intervals. It’s ideal for recurring tasks like daily data updates or report generation.

###### Key Features:

- Runs on a schedule (e.g., daily, weekly).
    
- Implements the `Schedulable` interface.
    
- Can be scheduled via the Salesforce UI or code.
    

###### Example:

```
global class ScheduledExample implements Schedulable {
global void execute(SchedulableContext sc) {
List accounts = [SELECT Id, Name FROM Account LIMIT 1000];
for (Account acc : accounts) {
acc.Name = acc.Name + ' - Scheduled';
}
update accounts;
}
}
```

###### Usage:

```
// Schedule via code
String cronExp = '0 0 12 * * ?'; // Runs daily at 12 PM
System.schedule('Daily Account Update', cronExp, new ScheduledExample());
```

#### Best Practices:

- Use for recurring tasks.
    
- Avoid overlapping schedules.
    
- Monitor scheduled jobs in the **Scheduled Jobs** page.
    

##### Choosing the Right Asynchronous Tool

| **Tool** | **Use Case** |
| --- | --- |
| **Future** | Simple, one-off tasks like callouts or DML operations. |
| **Queueable** | Complex, chained operations with complex data types. |
| **Batch** | Processing large datasets in chunks. |
| **Scheduled** | Recurring tasks like daily updates or report generation. |

#### Best Practices for Asynchronous Apex

1. **Monitor Jobs**: Use `AsyncApexJob` to track the status of your jobs.
    
2. **Handle Errors**: Implement error handling and logging for robust operations.
    
3. **Test Thoroughly**: Test with realistic datasets to ensure performance and reliability.
    
4. **Avoid Overloading**: Limit the number of concurrent jobs to avoid system strain.
    

#### Conclusion

Asynchronous Apex is a powerful feature that enables you to handle long-running processes, large datasets, and recurring tasks efficiently. By understanding the differences between **Future**, **Queueable**, **Batch**, and **Scheduled** Apex, you can choose the right tool for your use case and build scalable, high-performing Salesforce applications.

Remember: **Asynchronous Apex is your ally for improving performance and scalability.** Use it wisely, and always test your code to ensure it meets your organization’s needs.   

                                                                                                                                          **-Jeet Singh**
