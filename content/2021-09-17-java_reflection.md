---
slug: '2021-09-17-java_reflection'
title: 'Java Reflection.'
headline: 'What is reflection in Java?'
image: "./images/icons/java.png"
sortdate: "2021-09-17"
originaldate: "2021-09-17"
tags: ['Software Development', 'Java']
---

Recently while having lunch with the more senior developers, the term Java Reflection was brought up quite a bit in a discussion regarding the pros and cons of Java versus other languages. It was something I had not really heard of before, so I made a note to look into what that actually meant.

Reflection as it turns out is something that a few languages support, and while as I mainly work with Java I will focus on Java Reflection, hopefully the idea behind it is applicable to other languages.

<blockquote>
Reflection is a feature in the Java programming language. It allows an executing Java program to examine or "introspect" upon itself, and manipulate internal properties of the program. For example, it's possible for a Java class to obtain the names of all its members and display them.
<br>
<small><i>Source: <a href="https://www.oracle.com/technical-resources/articles/java/javareflection.html" target="_blank">Oracle</a></i></small>
</blockquote>

So for example, say you have an Object with an unknown type, and you want to call a method `doStuff()` if it exists. Java isn't really designed to handle this, however with Java reflection, the code can look inside the Object and find out if it has the method, then call it if it exists.

<div id="codeSnippet">

```java
Method method = object.getClass().getMethod("doStuff", null);
method.invoke(object, null);
```
</div>

The practical use of this is when you have an object and you don't know it's type, but you want to know more about it. 

A simple example showing this...

Let's create a simple ***Car*** class with no methods.

<div id="codeSnippet">

```java
public class Car {
    private String brand;
    private int doors;
    private int seats;
}
```
</div>


Now using Java reflection we can discover all of the fields of the object:

<div id="codeSnippet">

```java
Object car = new Car();
Field[] fields = car.getClass().getDeclaredFields();

List<String> fieldNames = new ArrayList<>();
for (Field field : fields)
    fieldNames.add(field.getName());
return fieldNames;

fieldNames == List.of("brand", "doors", "seats")
```
</div>

<br>

<h2 style="font-size:2em;">Uses</h2>

***Extensibility Features***

An application can make use of external, user-defined classes by extending existing classes.

***Tests and Debugging***

Test engines may use the `@Test` annotation to tag tests, then use reflection to find them in the code where running the tests.
Debuggers may need to be able to examine private members of a class.

***Development Environments***

IDE's can make use of type information available in reflection to aid in writing code.


<br>

<h2 style="font-size:2em;">Drawbacks</h2>

Generally, despite its uses, if you can do something without reflection, you should.

***Performance***

Reflection is powerful but it stops the JVM optimising the code as much as it could without reflection. This means it performs a lot slower than non-reflective code. 

***Exposure of Internals***

Through reflection, you can perform some operations that you shouldn't be able to, such as accessing `private` variables. Reflective code also breaks abstractions.

See more here: 
<a href="https://docs.oracle.com/javase/tutorial/reflect/index.html" target="_blank">https://docs.oracle.com/javase/tutorial/reflect/index.html</a>


<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/09/java-reflection.png" alt="Java Reflection"/>
    <figcaption>Java Reflection</figcaption>
    <figcaption>Source: My incredible artistic talent</figcaption>
  </figure>
</div>
