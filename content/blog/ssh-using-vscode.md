---
title: SSH-ing using VS Code
date: '2021-09-26'
description: 'Whether you’re a seasoned tech enthusiast or just starting out, this post will show you how to use VS Code to SSH into other boxes and write scripts on various servers.'
draft: true
---

# Overview
<!-- TODO write the value add from reading this blog -->

VS Code is so good, there are extensions for all types of development activities.

One very useful tip I learnt recently was how to set up VS code to be my primary ssh tool at work and at home. This way, you can use VS Codes full feature set while ssh-ing onto other boxes.

## What is VS Code
<!-- What is VS Code -->

## What is SSH?
<!-- TODO write this section -->


## Terminology for this blog

| Words    | Meaning                                                    |
| -------- | ---------------------------------------------------------- |
| ssh box  | The OTHER PC or box that you intend to ssh onto            |
| local pc | Your main PC you will use vs code on to ssh to other boxes |

# Step by step guide

It's a 3 step process:

1. install the vs code required files on the linux box/ box you want to ssh into
1. setup your ssh config file for vs code
1. (_optional_) create an ssh key to make logging in effortless
1. Enjoy vs code features while ssh-ing onto other pc!!

## Installing required VS Code packages on ssh box

## Setting up your ssh config file

## Creating an ssh key (_OPTIONAL_)

If you don't mind typing out passwords every time you login to your ssh sessions, then feel free to skip this step. I hate having to constantly type out my password, it's relatively easy to setup so I recommend you do it.

You'll need to add your public key to every box you want to ssh onto

This is also a 3 step process

1. Generate your ssh key
1. Append your ssh **public key** to your `~/.ssh/authorized_keys` file on the intended box you want to ssh to quickly!
1. On your local PC, add the ssh key as your `` into your VS Code config

### 1. Generating an ssh key

### 2. Appending to `authorized_keys` file

### 3. Specify the ssh key to use for your ssh connections