---
slug: '2021-05-26-kubernetes'
title: 'Kubernetes.'
headline: 'All about Kubernetes'
image: "./images/icons/kubernetes.png"
sortdate: "2021-06-03"
originaldate: "2021-06-03"
tags: ['Software Development']
---

<blockquote>
Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.
<br>
<small><i>Source: <a href="https://kubernetes.io/" target="_blank">https://kubernetes.io/</a></i></small>
</blockquote>

To understand what Kubernetes does, we first need to know more about containers.

<br>

<h1 style="font-size:3em;">What Are Containers?</h1>

A container (in the software world) is a standalone package of code and all of its dependencies that can be run quickly and reliably from any computing environment. The package contains everything needed to run an application.

Docker is the most well known containerization software. The package is called a Docker image, which then becomes a container when run on Docker Engine. Docker Engine can be run on most machines, which means you can have containers running almost anywhere.

A container shares the Operating System with the host machine, so it doesn't need to have those set up, which reduces the overhead in starting them up.

<br>

<h2 style="font-size:2em;">Containers vs Virtual Machines</h2>

Before Containers, Virtual Machines were the main way of running applications.

<div id="imageDiv">
    <figure>
        <img src="https://joshlearningtocode.files.wordpress.com/2021/06/containers-vs-virtual-machines.png" alt="Containers vs Virtual Machines">
        <figcaption>Containers vs Virtual Machines</figcaption>
        <figcaption>Source: <a href="https://www.docker.com/resources/what-container" target="_blank">https://www.docker.com/resources/what-container</a></figcaption>
    </figure>
</div>

Multiple containers can run on the same machine and share the OS with other containers, each running as isolated processes. Containers take up less space than VMs (container images are typically tens of MBs in size).

Virtual machines (VMs) are an abstraction of physical hardware turning one server into many servers. The hypervisor allows multiple VMs to run on a single machine. Each VM includes a full copy of an operating system, the application, necessary libraries - taking up tens of GBs. VMs can also be slow to boot.

<br>

<h2 style="font-size:2em;">Benefits of using Containers</h2>

As we have just seen, unlike VMs, containers virtualise at the OS level which makes them far more lightweight, allowing for fast boot time and lower memory consumption.

The main benefit of using a container is the consistent runtime environment for your application. The Docker image running on your laptop will be the same as one running in production, as everything the application requires is bundled into the image.

Using containers allows for easier modularity, which is useful in microservice architecture. Having each microservice in its own container allows you to make changes to each part individually without effecting the whole service. 

<br>

<h1 style="font-size:3em;">What is Kubernetes?</h1>

Kubernetes (k8s) as we saw at the start of this post is a management system for containers. k8s will help you cluster together hosts which are running containers, and easily and efficiently manage those clusters.

Features of using k8s include:
- Automated rollouts and roll backs
- Service health monitoring & self healing
- Automated scaling
- Deploy anywhere

Kubernetes has a really great page about <a href="https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/" target="_blank">what it is here</a>, so I would recommend reading that for more detailed information.

But to put it really simply, k8s looks after your containers.

<br>

<h2 style="font-size:2em;">How does Kubernetes Work?</h2>

When you deploy Kubernetes, you get a cluster. A Kubernetes cluster consists of a set of worker machines, called ***Nodes***, and a Control Plane. Every cluster has at least one worker node. 

<div id="imageDiv">
    <figure>
        <img src="https://joshlearningtocode.files.wordpress.com/2021/06/k8s-cluster.jpg" alt="k8s Cluster" style="width:75%;">
        <figcaption>k8s Cluster</figcaption>
        <figcaption>Source: <a href="https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/" target="_blank">https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/</a></figcaption>
    </figure>
</div>

The Control Plane is responsible for managing the cluster. The Control Plane coordinates all activities in your cluster, such as scheduling applications, maintaining applications' desired state, scaling applications, and rolling out new updates. The Control Plane's automatic scheduling takes into account the available resources on each Node.

Nodes contain ***Pods***, which contain and run the containerised applications and their volumes.

<div id="imageDiv">
    <figure>
        <img src="https://joshlearningtocode.files.wordpress.com/2021/06/k8s-nodes-pods.jpg" alt="k8s Pods and Nodes" style="width:75%;">
        <figcaption>k8s Pods and Nodes</figcaption>
        <figcaption>Source: <a href="https://kubernetes.io/docs/tutorials/kubernetes-basics/explore/explore-intro/" target="_blank">https://kubernetes.io/docs/tutorials/kubernetes-basics/explore/explore-intro/</a></figcaption>
    </figure>
</div>

Every Kubernetes Node runs at least these two:
- Kubelet, a process responsible for communication between the Kubernetes Master and the Node; it manages the Pods and the containers running on a machine.
- A container runtime (like Docker) responsible for pulling the container image from a registry, unpacking the container, and running the application.

<br>

<h1 style="font-size:3em;">Kubernetes in the Cloud</h1>

I recently did a blog post on <a href="blog/2021-05-07-aws" target="_blank">AWS</a>, and so thought it would be good to talk about Kubernetes integration with a cloud platform like AWS.

<br>

<h2 style="font-size:2em;">Amazon EKS</h2>

In AWS, Kubernetes will manage clusters of EC2 instances, and run containers on them. Instead of manually configuring Kubernetes on AWS, you can use Amazon Elastic Kubernetes Service (Amazon EKS). EKS is a fully managed service that makes it easier to use k8s on AWS.

EKS still uses the open source Kubernetes software, so any applications running in EKS will also run in any other Kubernetes environment. EKS automatically runs k8s with three masters across three Availability Zones to protect against failure and improve resilience.

<div id="imageDiv">
    <figure>
        <img src="https://joshlearningtocode.files.wordpress.com/2021/06/amazon-eks.png" alt="EKS Resilience">
        <figcaption>EKS Resilience</figcaption>
        <figcaption>Source: <a href="https://aws.amazon.com/blogs/aws/amazon-elastic-container-service-for-kubernetes/" target="_blank">https://aws.amazon.com/blogs/aws/amazon-elastic-container-service-for-kubernetes/</a></figcaption>
    </figure>
</div>

AWS have something similar to EKS, ECS (Elastic Container Service), which you could use instead. One of the main benefits of using EKS though is that k8s clusters can be run and used anywhere that supports Kubernetes, whereas it would be tough to migrate from ECS to another provider.