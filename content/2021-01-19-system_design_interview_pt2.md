---
slug: '2021-01-19-system_design_interview_pt2'
title: 'System Design Part 2.'
headline: 'More Prep for the System Design Interview'
image: "./images/icons/system-design.jpg"
sortdate: "2021-01-19"
originaldate: "2021-01-19"
tags: ['Software Development']
---

I will hopefully be having an interview soon to move up to the next level of Software Developer, and I have been doing some prep work for this. I have previously written a blog post on this, which <a href="https://joshlearningto.code.blog/2020/08/04/distributed-system-design/" target="_blank">you can see here</a>.

There's a few more things I am looking into, so I wanted to write another post to cover them.

# HTTP Push and Pull

HTTP stands for Hypertext Transfer Protocol, and is designed to transfer information between devices on networks. Generally one device sends a HTTP request, the other receives it and sends a HTTP response.

***HTTP Pull*** is the default method of HTTP communication. Every time you access a webpage in your browser, it is likely using HTTP Pull; a request is sent from the client (your browser) and the server responds with the data (the website).

***HTTP Push*** is where the client sends a request for information once, and the server will keep pushing data to the client whenever there are updates. Think receiving notifications for messages. There are a few ways to do this, such as long polling, <a href="https://joshlearningto.code.blog/2020/02/07/microsoft-70-480-exam-prep/" target="_blank">web sockets</a> and streaming over <a href="https://joshlearningto.code.blog/2020/01/03/http-pipelining-and-multiplexing/" target="_blank">HTTP (using HTTP 2.0)</a>. I've covered both of these previously too.

## Long Polling

Quick note on long polling as polling is used a lot and I haven't touched on it before.

Regular polling is where requests are sent to the server at regular intervals, for example 10 seconds, asking if there are any updates. If there are then the server will send the response with the updates. This is good but there are downsides; firstly theres a delay between messages depending on the interval between responses, and secondly you are bombarding the server with requests.

Long Polling is an alternative way of polling. The way it works is the client sends the request for new information same as before, and if there are no updates, the server keeps the connection alive until there is. Once it has an update to send, it sends it to the client and closes the connection. The client then receives the response, and immediately sends a new request for information starting the process again.

<div id="imageDiv">
    <figure>
        <img src="https://joshlearningtocode.files.wordpress.com/2021/01/long-polling.png" alt="Long Polling">
        <figcaption>Long Polling</figcaption>
    </figure>
</div>

If the connection is lost, due to something like a network error, the client immediately sends another request.

I found a lot of helpful information on <a href="https://medium.com/must-know-computer-science/system-design-client-server-communication-674818ca448d" target="_blank">this medium blog post</a>.

# IP/TCP

HTTP is how the data is sent from two network connected devices, IP (Internet Protocol) is the way in which the network connections are made. IP just makes the connections, and does no packet ordering or error checking, which is where TCP (Transmission Control Protocol) comes in. <a href="https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/" target="_blank">Cloudflare</a> has a good example which makes this easy to understand which I am going to hopefully explain below.

Imagine you have a jigsaw puzzle with a message written on it, each puzzle piece is a data packet. The puzzle pieces are given to someone else (IP) and are all mixed up. The other person (TCP) then re-assembles the puzzle to be able to read the message.

<div id="imageDiv">
    <figure>
        <img src="https://joshlearningtocode.files.wordpress.com/2021/01/tcp-ip.png" alt="IP/TCP">
        <figcaption>IP/TCP</figcaption>
    </figure>
</div>

# Authentication vs Authorisation

Although they may sound similar, in system design Authentication and Authorisation are quite different. 

***Authentication*** is validating who you are. Most commonly this would be entering your username and password, or using your fingerprint to unlock your phone.

***Authorisation*** is what you have access to. After you authenticate the application will authorise you to use certain things. 

For example on Instagram, you log in to your account by authenticating who you are with a username and password. Once logged in you are authorised to post pictures to your account, but you are not authorised to post pictures to other peoples accounts.

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/01/authentication-vs-authorization.jpg" alt="Authentication vs Authorisation"/>
    <figcaption>Source: <a href="https://www.ssl2buy.com/wiki/authentication-vs-authorization-whats-the-difference" target="_blank">SSL2Buy</a> - Authentication vs Authorisation</figcaption>
  </figure>
</div>

# Caching

In computing, a cache is a high-speed data store which usually contains a subset of data compared to the primary data store. The cache can serve data back much faster than the primary data store, so data that is needed very often can be saved in the cache to reduce the time taken to respond. 

Usually the cache is fast access hardware, such as RAM. Because of this the storage size of a cache is generally much smaller, which means you need to trade off speed for the amount of data you can store.
                            
<blockquote>
In a distributed computing environment, a dedicated caching layer enables systems and applications to run independently from the cache with their own lifecycles without the risk of affecting the cache.

\- <a href="https://aws.amazon.com/caching/" target="_blank">https://aws.amazon.com/caching/</a>
</blockquote>

For distributed systems, having the cache be Highly Available is very important, and this can be achieved by using an In-Memory engine such as <a href="https://aws.amazon.com/redis/" target="_blank">Redis</a>.

Caching is used a lot by web browsers, which will cache web pages that you have visited before, which means the next time you visit the page will load faster.

Caching is very useful but may not be a good idea if your data is going to be changing all the time, as the cached data could get out of date quickly. The different methods of caching as well as the pros and cons of each are very well talked through <a href="https://aws.amazon.com/caching/best-practices/" target="_blank">here</a>.

# Sharding

Sharding is where you split a single database into multiple databases. This is generally useful when your database is growing to a very large size, as this would start to slow down queries and put a lot of strain on the single database. Sharding is also known as **horizontal partitioning**, as we are literally drawing a horizontal line in the database and splitting the data above and below. **Vertical partitioning** would be moving certain columns into another database, linking them via a key.

The pros of doing this are mainly that it would improve the database performance, and also it helps facilitate horizontal scaling of your application (adding more machines). Also it means that any outages may not effect all shards, so your data may still be available in this case. 

The cons are that it is hard to implement correctly, and doing it wrong could cause corruption. Also splitting the data may lead to you not being able to find some of it easily if you don't keep track of how they are sharded. Your data could also become unbalanced, where one shard has much more data than the others depending on how you split it.

<a href="https://www.digitalocean.com/community/tutorials/understanding-database-sharding" target="_blank">Check out this page</a> for some examples and a lot more information.

A couple of examples of ways to shard your data:

***Algorithmic Sharding*** - In the example below, we divide the `id` for each database entry by 4 and figure out the remainder, then put the row into a shard depending on what that remainder is.

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/01/algorithmic-sharding.png" style="width:50%;" alt="SOAP vs POST"/>
    <figcaption>Source: <a href="https://medium.com/@jeeyoungk/how-sharding-works-b4dec46b3f6" target="_blank">Medium: How Sharding Works - Jeeyoung Kim</a></figcaption>
  </figure>
</div>

***Dynamic Sharding*** - A separate locator service determines where each bit of data will go. This is more resilient, however a new single point of failure is introduced with the locator service, which is relied on to place the data and also retrieve it.

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/01/dynamic-sharding.png" style="width:50%;" alt="SOAP vs POST"/>
    <figcaption>Source: <a href="https://medium.com/@jeeyoungk/how-sharding-works-b4dec46b3f6" target="_blank">Medium: How Sharding Works - Jeeyoung Kim</a></figcaption>
  </figure>
</div>

# Replication

I found the below in a blog post which I think really introduces data replication well.

<blockquote>
A data replica is an exact copy of a database. Replicas are constantly, iteratively synced with one another so their contents are kept as identical as possible. They generally come in two flavours, active and passive. Active replicas support read and write access and play an (unsurprisingly) active role in serving clients. Active replicas can help with scale, resilience and location-base performance. Passive replicas are generally maintained for failover purposes; they don’t support read or write and are only synced in one direction (from the master data). The job of a passive replica is to be ready to take over from the main replica if it fails.

\- <a href="https://blog.container-solutions.com/what-is-a-distributed-system" target="_blank">https://blog.container-solutions.com/what-is-a-distributed-system</a>
</blockquote>

This is different from a backup as a backup is made less often but is kept in multiple locations to ensure it is safe in the case of an emergency.

Data replication in distributed systems is very useful for multiple reasons:

1. ***Higher Availability***: If one node fails, then you will have another node with the same data already ready to go. Depending on how you replicate the data, you still might lose a bit of data this way.
2. ***Reduced Latency***: If you have replicas in multiple regions, then you can reduce latency by picking the closest node to the client requesting the data.
3. ***Read Scalability***: Queries can be split over replicas reducing the time taken to respond and the workload of the database

There are a few ways of doing data replication, each with pros and cons. I found <a href="https://medium.com/@sandeep4.verma/data-replication-in-distributed-systems-part-1-13f52410faa3" target="_blank">an excellent blog post</a> which outlines all the below in a lot of detail, so below is my summary.

## Single Leader

This is the most common replication method. In single leader replication, a single node is designated as the primary node. Each other node then becomes a secondary node, and when the primary node receives data, it will write it, then send the data to each of the secondary nodes to also write. This can be done either synchronously or asynchronously. 

If done synchronously, then the primary node will await a response from all of the secondary nodes that says they were able to write the data successfully. If done asynchronously then the primary node sends the data to the other nodes but carries on regardless of whether they succeed or not. Doing it synchronously means that your data is consistent across all nodes, which means that any node could become the primary, and data can be read from any node at any time. However it is slow, as you need to wait for each node to update, and if one node suddenly becomes unavailable, then the whole system will hang waiting for it to respond. Asynchronous is therefore a lot faster, however can lead to issues where the nodes are not consistent with each other, leading to problems when reading data from a secondary node or if you have to switch primary nodes.

The reality is due to the drawbacks of both, a little of each is used, known as semi-synchronous replication. For example the primary node will send the data to all secondary nodes, but only wait until one or the majority of them has responded to carry on. This means that the data is definitely stored on another node, if not all of them. Again this has shortcomings as the node that successfully replicated the first bit of data, may not replicate any other data, and you would never know as long as the rest did, but it is a compromise between data availability and consistency.

## Multi Leader

Multi Leader is very similar to Single Leader, except each node is the primary node for certain data, and a secondary node for other data.

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/01/multi-leader-vs-single-leader.png" alt="Single vs Multi Leader"/>
    <figcaption>Single vs Multi Leader</figcaption>
  </figure>
</div>

This can help with latency, as data doesn't have to find the single primary node, it can find a primary node that is closer to it. It can also make it easier to handle any outages, and more robust against network interruption.

However there are of course downsides. There can be issues with consistency, where the same data could be being edited in two different primary nodes, in which case there may be conflicting data between nodes. You can handle this many ways (for example the latest write is taken), however you are almost certain to lose data.

## Leaderless

In Leaderless replication, every write must be sent to every replica. A write is considered successful when a certain number of nodes have acknowledged and successfully written the change. If you have *n* nodes, then *w* nodes must have written and acknowledged the change. Also you must be able to read the data from a certain number of nodes, *r*. The value of *k* + *r* is known as quorum. If *k* + *r* > *n* then a quorum has been reached. Leaderless replication has similar issues to multi leader, where changes made to individual nodes may conflict with each other.

In leaderless replication, the write may be sent to each node by the client, or a coordinator node which then sends it on to the others. This is not a primary node however as it does not enforce anything, just sends the update to every other node.

Looking into leaderless nodes I found <a href="https://www.erikthecoder.net/2019/12/31/leaderless-replication/" target="_blank">a great blog post</a> which really explained it well, check it out for more information.

The benefit of this is that the nodes will agree on an answer depending on what most of them think it is, and any that had a different response would be updated to reflect the correct answer. Also if any nodes go down, the others can still reach a quorum and provide an answer to the request. 

The main pro of leaderless replication is there is no need for a failover strategy. Failover strategies are there to tell the system what to do if the primary node goes down, but there is no primary node in leaderless replication. Leaderless replication also gives you higher availability as you can query any node, and still get an answer even if some nodes have gone down. 

The down side to using leaderless replication is that the quorum approach leads to higher latency, as each active node needs to respond to reach the quorum. Also there is the potential that the quorum reached could actually be stale data as not enough nodes received a write in the past, 

# REST vs SOAP

When writing APIs (Application Programming Interface), there are two main architectures, REST and SOAP.

***SOAP*** (Simple Object Access Protocol) is a standards-based web services access protocol that has been around for a long time, originally developed by Microsoft.

***REST*** (Representational State Transfer) is another standard, made in response to SOAP’s shortcomings, seeking to fix the problems with SOAP and provide a simpler method of accessing web services.

SOAP is a rigid set of patterns whereas REST is an architecture style so is more flexible. 

SOAP relies exclusively on XML to provide messages. This means that requests and responses can be very complex. SOAP has built in error-handling and works over many different protocols, not just HTTP, but SMTP and others.

REST is a lighter-weight flexible alternative, where you don't have to produce an exact XML structure every time. REST usually just relies on the URL, and the HTTP verb used (GET, POST, PUT etc.). 

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/01/soap-v-rest.png" style="width:50%;" alt="SOAP vs POST"/>
    <figcaption>Source: <a href="https://www.upwork.com/resources/soap-vs-rest-a-look-at-two-different-api-styles" target="_blank">Upwork</a> - SOAP vs Rest</figcaption>
  </figure>
</div>

Here is a good summary of the two:

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/01/soap-v-rest-table.png" style="width:50%;" alt="SOAP vs POST"/>
    <figcaption>Source: <a href="https://www.upwork.com/resources/soap-vs-rest-a-look-at-two-different-api-styles" target="_blank">Upwork</a> - SOAP vs Rest</figcaption>
  </figure>
</div>

## XML vs JSON

***XML*** (Extensible Markup Language) and ***JSON*** (JavaScript Object Notation) are both used to transfer data. The main difference is that XML is a Markup Language, and can therefore be queried, where JSON is a data format, comprised of key value pairs.
 
Here is an example of some information written in XML and JSON so you can see the difference:

<div id="codeSnippet">

```xml
<employees>
  <employee>
    <firstName>John</firstName> <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName> <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName> <lastName>Jones</lastName>
  </employee>
</employees>
```

```json
{
    "employees":[
        { "firstName":"John", "lastName":"Doe" },
        { "firstName":"Anna", "lastName":"Smith" },
        { "firstName":"Peter", "lastName":"Jones" }
    ]
}
```
</div>

JSON is much more popular now than XML when writing APIs, much to do with the rise in popularity of REST APIs. This is because despite the lack of powerful validation and the ability to query, JSON is extremely lightweight, and it is very easy to read and to parse without needing additional code. This makes it really accessible, if you are writing an API and want to return data, returning JSON means that anybody can parse it easily, whereas with XML they will need to write a lot more additional code to parse it.

# Whiteboarding

One thing I haven't mentioned is the actual interview itself. The way it is usually done at my company is you are given a technical problem to solve and you draw out your solution on a whiteboard. However currently I am working from home due to the national lockdown in England, so when I do the interview it will likely be over Microsoft Teams. I tried a mock interview, and I would advise anyone else who is going to be in this boat to figure out what software you will be using before you start, because I had a hard time at the start of my mock. I tried using the built in whiteboard in Teams, but that was not very good. Then I tried to find an online one and struggled to find a decent one. Eventually I downloaded a plain white jpeg, then opened it in Apples Preview, and drew over that! Not ideal but it worked.

Since then I have been looking for a better alternative, and I've settled on <a href="https://miro.com/app/dashboard/" target="_blank">Miro</a> for now as it has a lot of options, and I can use my phone for drawing which immediately syncs to the board on my laptop which I would be sharing. Still not the easiest but better than anything else I tried so far.

I have a few more things to write about but I will stick that in a <a href="https://joshglasson.co.uk/blog/2021-01-20-system_design_interview_pt3" target="_blank">Part 3</a>, as this is pretty long already.