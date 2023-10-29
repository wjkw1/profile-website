---
title: Talking Tech, to Non-Tech
date: "2020-08-17"
description: "Early in my career, I attended a workshop that taught me how to explain technical concepts to non-technical people. The session also covered some key aspects worth sharing. Keep reading to learn about my key takeaways."
---

Early on in my career, I took part in a workshop that aimed to bridge the gap between technical and non-technical people when talking about technical concepts. The session also touched on some key aspects worth sharing. Read on to hear about some of my key takeaways...

# Talking Tech

The easiest way to talk tech to non-technical people is to create analogies that explain the concepts you're trying to teach. During the day
we explored a variety of analogies for different terminology (_We'll explore a couple in the next sections_). We also discussed that it's important to teach in a variety of ways, for example, some people are visual learners so a diagram helps.

# Server, Client and the Stack

Applications will be built will on top of a 'Stack', the 'Stack' in general comprises a Client, Server, and a Database. There are other variations but for simplicity, we'll use this as the example for this post.
The client is the end-user with a Laptop or Mobile device. The server takes requests from the client, processes them, and gives a response back.

An analogy for the stack would be a person withdrawing money from a bank. Think of a stack as all the moving parts that make up an application.

    Front-end -> Person/Client
    Server    -> Bank Teller
    Database  -> Money Stash

# Different Types of Applications

For simplicity, we will talk about the following

    1. Web Application
    2. Desktop Application
    3. Mobile Application

Web applications run inside your internet browser, for example, Chrome, Edge, or Firefox. Desktop and Mobile applications run directly on your machine, desktop, or mobile phone.
Netflix, Spotify, and Instagram are 3 examples of software with applications on all 3 platforms. Instagram tends to push users toward their Mobile Application (if using a mobile browser) because they have more control over the data. Netflix allows concurrent and synchronised use across all platforms. Spotify gives users synchronised experience also.
There is technology on the market like [React Native](https://reactnative.dev/), which helps you create a Mobile Application using the same language as the web developers. This allows developers proficient in ReactJS to deliver benefits to customers faster using React Native framework.

# APIs

An Application Programming Interface (API) is a way we can communicate with a piece of technology. For example, to communicate with Chorus we engage their technology calling an end-point their API functions.

As an analogy, we can talk about ordering fast food at a restaurant.

    1. Client   - the person ordering food
    2. Server   - the cashier who takes the order
    3. Database - the chefs who give back the order

API in this above instance would then be the Menu we use to order food.
For example, you go to Maccas and ask for a Big Mac, they understand your request given the
money as input, then you receive a Big Mac burger.
If you go to Burger King and order a Big Mac, they will not understand that request as it is not on
their Menu.

> _[Check out this link](https://rapidapi.com/blog/access-global-weather-data-with-these-weather-apis/) for a list of basic weather APIs you can try out..._

# Types of People

Understanding the types of people in your team, what are they driven by?

- Detectives - Love to investigate the mess and fix it up.
- Cowboy / Go-getter - Pushes code out the door fastest, but generally leave a little bit of a dirty
  sink
- Artist or Creative - Cleans as they go, makes sure the code looks beautiful and is readable by
  others may be a slower coder but will introduce less technical debt
- Mad scientist - Loves to hook into the next best tech, looks forward to playing with new
  libraries and trying out the latest features

# Coding Takes Time

Coding is a complicated process with many moving parts. Developers tend to put headphones on and disappear for 3+ hours, this gets them in the flow state. A simple Slack notification or tap on the shoulder of a Developer who is in the flow state can stop productivity dead in its tracks. It takes time to get in the groove of things and it is important to remember that coding takes time.
What can you do to help keep the devs productive? Keep your meetings grouped in the morning or afternoon (not scattered), to give them large chunks of time. You will see more productivity and happier devs :D

# Future Technology

## Full Stack Development

Full-stack development is a powerful concept that is relevant now and sure to be more so in the future. Two reasons why:

- One language for all parts of the stack
- Some libraries translate a web app into Desktop and Mobile Apps
  We looked at React (front-end) with Node.js (database/server) and AWS cloud architecture (database/server) as an example of a full-stack system. React Native was an example of using ReactJS to build a basic mobile application.

## Distributed Technology

Distributed systems, like BitTorrent for example. This is where the community share big downloads
in chunks across the network.

Blockchain is an interesting technology with real-world applications. I tend to think of blockchain is similar to how Git works, everyone has a copy of the entirety of a project. Everyone agrees communally what the final version is. They have a “ledger” in block-chain tech, this is a list of all transactions made. Everyone has this ledger and when it updates in one place, everyone else gets the update. This has a benefit for no single point of failure, is secured by encryption too.