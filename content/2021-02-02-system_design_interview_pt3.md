---
slug: '2021-02-02-system_design_interview_pt3'
title: 'System Design Part 3.'
headline: 'Even More Prep for the System Design Interview'
image: "./images/icons/system-design.jpg"
sortdate: "2021-02-02"
originaldate: "2021-02-02"
tags: ['Software Development']
---

Check out <a href="https://joshlearningto.code.blog/2020/08/04/distributed-system-design/" target="_blank">Part 1</a> and <a href="blog/2021-01-19-system_design_interview_pt2" target="_blank">Part 2</a>.

Here's a few more things I wanted to cover.

# Load Balancing

A Load Balancer is a physical machine or virtual instance which distributes traffic to servers. It does this in order to reduce the load on each server, and subsequently reduce the time taken to respond. 

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/02/loadbalancer.png" alt="Load Balancer"/>
    <figcaption>Load Balancer</figcaption>
  </figure>
</div>

There are many different algorithms the load balancer could use to determine where to send the traffic, here are some of the more common ones:

## Round Robin

Round robin is simple in that it forwards each request to a different server based on a rotating list. This is very easy to implement, but doesn't take into account the load already on the server it is sending the request to.

## Least Connection Method

This method seeks to send the request to the server with the least number of active connections, therefore accounting for the load the server may be under.

## Least Response Time Method

This method is slightly more advanced than the least connection method, it will send a health check request to each server and monitor the time each takes to respond. The server that responds the quickest is likely to be under less load, and will also provide a faster response which is a better for the client who sent the request.

## Least Bandwidth Method and Least Packets Method

These two will look for the server serving the least traffic in either megabits per second or in terms of packets. 

# NAT Gateways

A Network Address Translation (NAT) gateway allows you to connect to the internet from a private cloud instance, make requests and receive responses, without allowing any incoming traffic or connections initiated from the internet.

## What is NAT

<blockquote>
NAT is a networking technique commonly used to give an entire private network access to the internet without assigning each host a public IPv4 address. The hosts can initiate connections to the internet and receive responses, but not receive inbound connections initiated from the internet.
<br>
When a host in the private network initiates an internet-bound connection, the NAT device's public IP address becomes the source IP address for the outbound traffic. The response traffic from the internet therefore uses that public IP address as the destination IP address. The NAT device then routes the response to the host in the private network that initiated the connection.
</blockquote>
Source: <a href="https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/NATgateway.htm" target="_blank">https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/NATgateway.htm</a>

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/02/network_nat_gateway.png" alt="NAT Gateway"/>
    <figcaption>Source: <a href="https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/NATgateway.htm" target="_blank">Oracle</a> - NAT Gateway and Internet Gateway</figcaption>
  </figure>
</div>

# Encryption

Encryption, in this case data encryption, is taking some text or data and converting it to a code that cannot be understood by others who are reading it. The key used when converting the data will be needed to decrypt the code back to the original data.

Encryption is important when sending data over the internet, as it prevents unauthorised people seeing it. There are various different encryption types, and each one varies on how much data they can handle, how they are decrypted and how easy they are to hack. The three main encryption types are ***DES***, ***AES*** and ***RSA***.

## DES (Data Encryption Standard)

This became a standard of encryption in the 70s, however is no longer considered safe to use on it's own. It only encrypts 56-bits of data at a time, and was easily hacked when it was introduced, however it served as a standard for more secure encryption tools to be built on.

### 3DES (Triple Data Encryption Standard)

3DES is a more modern version of this, where instead of using a single 56-bit key, it uses three separate 56-bit keys. Obviously doing it 3 times means that the encryption time is increased.

DES and 3DES are not widely used anymore. Banks and other businesses may still use it internally, however the industry has moved on.

## AES (Advanced Encryption Standard)

AES is one of the most secure encryption types, used by governments and security agencies. AES uses ***symmetric*** key encryption, the person on the receiving end of the data will need the same key to decode it that was used to encrypt it.

AES encrypts data in a single block rather than as individual bits of data. The size of the block determines which AES method it uses:

- AES-128 encrypts blocks of a 128-bit size
- AES-192 encrypts blocks of a 192-bit size
- AES-256 encrypts blocks of a 256-bit size

Each of these methods also has a differing number of ***rounds***. The rounds are the processes of changing plaintext data into encrypted data. AES-128 uses 10 rounds where AES-256 uses 14.

Most data tools on the market currently use AES encryption, as it works on many applications and is very secure.

## RSA (Rivest-Shamir-Adleman)

RSA is widely used for data sent online and relies on a public key to encrypt the data. Those on the receiving end of the data will have their own private key to decode the messages. It provides a secure way to send information between people who may not know each other and want to communicate without compromising their personal or sensitive data.

It can be used to verify a digital signature and make sure the person you are communicating with is who they say they are, however it is slow and is not practical for large amounts of data.

## End-to-end encryption

Something I wanted to touch on as it is something many people may have heard of, as it is used on chat apps such as WhatsApp. E2E encryption is the act of encrypting a message on one device so that only the device it is being sent to can decrypt it. The encrypted data is sent all the way from the sender to the recipient.

Another option is ***encryption-in-transit***, whereby messages are encrypted on the sender’s end, delivered to the server, decrypted there, re-encrypted, and then delivered to the recipient and decrypted on their end. This protects your data from interception whilst it is being sent, but leaves it vulnerable on the server.

Although E2E encryption can protect what you send, it does not hide from the server who you sent it to, which has caused some uproar with changes to <a href="https://www.bloomberg.com/news/articles/2021-01-11/why-whatsapp-s-privacy-rules-sparked-moves-to-rivals-quicktake" target="_blank">WhatsApp's TOS</a>. Also if someone gains access to your device, they would be able to read any data kept on there.

# SHA (Secure Hash Algorithm)

I wanted to include this too as SHA is something I have heard of but wasn't sure what it was, and mistakenly thought it was related to encryption.

SHA is used for ***cryptographic security*** to hash data, including certificate files. Every piece of data produces an irreversible and unique hash, irreversible in the sense that if you only had the hash, you could not convert it back to the original data, and unique as no two different pieces of data could produce the same hash.

The most common place you are likely to see this in action is SSL certificates. Most websites now are on HTTPS and have an SSL certificate, meaning the connection between you and the website is secure. I will go into more detail on this in the next section. The SSL certificate contains a public key which can be used by the client (your web browser) to encrypt any data you are sending. The owner of the certificate has a private key which allows them to decrypt said data. This is why these certificates are so important. When the certificate is issued, it is digitally signed by the Certificate Authority (CA) you have chosen. This gives proof that the certificate has not been modified or reproduced. SHA is used to digitally sign these certificates so they can be verified. 

Check out <a href="https://www.thesslstore.com/blog/difference-sha-1-sha-2-sha-256-hash-algorithms/" target="_blank">this post</a> for much more in depth information on SHA.

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/02/sha256.png" alt="SHA 256"/>
    <figcaption>SHA 256</figcaption>
  </figure>
</div>

# HTTPS, TLS and SSL

So HTTP we already know stands for Hypertext Transfer Protocol, and this is what allows data to be exchanged over the internet. Well HTTPS is the new, secure version (the S stands for secure!). HTTPS is powered by TLS (Transport Layer Security), the successor to SSL (Secure Sockets Layer). As talked about above, HTTPS ensures that any data you send to a server is encrypted, and can only be decrypted by the owner of the certificate. TLS will also authenticate the server you are connecting to and protects any data sent from being tampered with.

Confusingly, the certificates are still referred to as SSL certificates, even though they are now TLS certificates. SSL and TLS are very similar, so are often talked about together as SSL/TLS. In your web browser, you should see the padlock in the url bar next to any website url which starts with https, this should tell you that the connection is a secure TLS connection.

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/02/padlock.png" alt="SSL Certificate"/>
    <figcaption>SSL Certificate</figcaption>
  </figure>
</div>

Clicking more information on the above pop up lets you actually view the certificate. We can see here the SHA 256 is used with RSA:

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/02/sslcert.png" alt="SSL Certificate Details"/>
    <figcaption>SSL Certificate Details</figcaption>
  </figure>
</div>

Earlier I said that your browser would use the public key in the certificate to encrypt data so only the server with the private key could read it, but that isn't actually the whole process. This use of 2 different keys to encrypt and decrypt is called ***asymmetrical cryptography***, and the mathematical formula linking the two keys is incredibly complex. This means it takes lots of computing resources to do the encryption and decryption. I found a good explanation of ***asymmetrical cryptography*** which you can read below, in fact the whole post the quote is taken from is very useful:

<blockquote>
Think of the public key as information about the location of a locked mailbox with a slot on the front, and the private key as the key that unlocks the mailbox. Anyone who knows where the mailbox is can put a message in it; but for anyone else to read it, they need the private key.
</blockquote>
Source: <a href="https://www.csoonline.com/article/3246212/what-is-ssl-tls-and-how-this-encryption-protocol-works.html" target="_blank">https://www.csoonline.com/article/3246212/what-is-ssl-tls-and-how-this-encryption-protocol-works.html</a>

Because of the computing power involved in this, asymmetrical cryptography is not for every communication between the client and server. Actually your browser and the server perform a ***SSL/TLS Handshake***. To put it simply, the asymmetrical cryptography is used once at the start of the connection to verify that everything is as it should be, then the client and server agree on a generated shared key which is much easier to use for both, which speeds up the process but still ensures it is secure. Using this shared key is called ***symmetrical cryptography***. Here is the whole handshake process:

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/02/ssltls_handshake.png" alt="SSL/TLS Handshake"/>
    <figcaption>Source: <a href="https://www.ssl.com/article/ssl-tls-handshake-overview/" target="_blank">SSL</a> - SSL/TLS Handshake</figcaption>
  </figure>
</div>

# Cookies and Sessions

Cookies and Sessions are used by web browsers to store information. Cookies are only stored on the client-side machine, while sessions get stored on the client as well as a server. Alongside cookies and sessions, we also have LocalStorage and SessionStorage thanks to HTML5.

Cookies are text files stored on your machine and are used to keep track of persistent data across a websites pages. Sessions make use of cookies too, however the cookie is used to store a key which is then used to lookup the information on the server instead. Sessions are not stored indefinitely, and usually expire once you close the page.

LocalStorage is a way of storing data locally on the clients computer, via the use of key/value pairs. LocalStorage can be accessed by JavaScript and HTML5, and is only kept locally. My blog makes use of LocalStorage to remember your choice of Light or Dark mode across visits to the site. SessionStorage is similar in using key/value pairs, but this data is only kept until the page is closed.

Having it as key/value pairs means it's easy to use in other parts of the code, for example I use the theme when generating embedded tweets so that the theme of the tweet matches that of the blog.

# CDN (Content Delivery Network)

A CDN refers to a server which works to deliver content to users faster. Usually this is because they are located closer geographically to the user. A CDN for a website may contain assets like HTML, images and CSS so the webpage can load faster.

Aside from loading faster, a CDN can provide other benefits too, such as:

1. Reducing bandwidth costs - as assets are being served by the CDN, the origin server is providing less, therefore reducing the bandwidth used and the cost.
2. Increasing availability and redundancy - as the CDN is distributed, it can handle more traffic and withstand failure easier than the origin server might be able too on it's own. Also if the CDN goes down, the origin server can still serve the client, just slower.
3. Improving security - as the CDN is outside the origin server, it can be optimised to improve security.

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/02/cdn.png" alt="CDN"/>
    <figcaption>How a CDN Works</figcaption>
  </figure>
</div>

# Zookeeper

<a href="https://zookeeper.apache.org/" target="_blank">Apache ZooKeeper</a> is a service for maintaining configuration information, naming, synchronization, and group services across clusters in distributed systems.

<blockquote>
Put simply, applications can synchronize their tasks across the distributed cluster by updating their status in a ZooKeeper znode. The znode then informs the rest of the cluster of a specific node’s status change. This cluster-wide status centralization service is critical for management and serialization tasks across a large distributed set of servers.
</blockquote>
Source: <a href="https://www.ibm.com/analytics/hadoop/zookeeper" target="_blank">https://www.ibm.com/analytics/hadoop/zookeeper</a>

<blockquote>
The common services provided by ZooKeeper are as follows −

- Naming service − Identifying the nodes in a cluster by name. It is similar to DNS, but for nodes.
- Configuration management − Latest and up-to-date configuration information of the system for a joining node.
- Cluster management − Joining / leaving of a node in a cluster and node status at real time.
- Leader election − Electing a node as leader for coordination purpose.
- Locking and synchronization service − Locking the data while modifying it. This mechanism helps you in automatic fail recovery while connecting other distributed applications like Apache HBase.
- Highly reliable data registry − Availability of data even when one or a few nodes are down.

</blockquote>
Source: <a href="https://www.tutorialspoint.com/zookeeper/zookeeper_overview.htm" target="_blank">https://www.tutorialspoint.com/zookeeper/zookeeper_overview.htm</a>

Thats enough for this post, there may be a part 4 depending on if I find more things I want to look into!