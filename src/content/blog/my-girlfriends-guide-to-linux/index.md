---
title: "My girlfriend's guide to Linux"
summary: "A whistlestop tour of Linux for those with little or no interest in it"
date: "Aug 01 2025"
tags:
- Linux
---
My girlfriend is about to start her career in tech, and one thing she keeps seeing in job postings is Linux.

Unfortunately for her, she also hears quite a lot about Linux from me, with various hobby projects I have been working on.

Naturally, she made the terrible mistake of asking me to run her through the basics, and we even installed it on a PC for her to play with.

I thought it would be useful to write out a little guide, answering her questions and laying out some key ideas she is likely to come across. Maybe you might enjoy it too.

Let's start with her - rather blunt - first question, and go from there:

# Why would I actually care?

Because Windows is bloated and slow, and Apple doesn't like you. Both think you are an idiot, and just want your money and for you to go away.

I think people can really get stuck in a bubble thinking these are the only two options, and consequently end-up with a very rigid mindset on how a computer can look and act.

They therefore settle for systems with ugly or counter-intuitive interfaces, and with a bombardment of popups, programs, and background tasks that serve very little use other than to ruin the battery life of your lovely laptop.

Even if you don't care about the blatant invasions of privacy, manipulative tactics to convince you to buy programs you don't need, or lack of control and customisation given over your own device, Linux is a genuinely interesting project. Being able to tweak and customise every aspect of your system can be really fun, massively improve your productivity, and help you become more knowledgeable about how your system actually works.

Plus you get the street cred of not following the dogma of the Big-Two.

# So what actually is Linux?

Linux is one part of an operating system (OS).

An operating system (OS) is a collection of software (programs) that manage computer resources and other software.

The OS is installed on your disk (a.k.a. hard-drive / SSD), just like any other program, but is always the first program to be started after your computer turns on.

Linux is what is called a kernel, which is the core part of an OS: it is a bridge between the hardware and the software; the kernel decides how much memory each program gets, and how to use the physical network card to create an internet connection.

Linux is almost always used with something called GNU - pronounced 'Guh-new'. GNU stands for 'GNU's Not Unix' - don't worry about it. All you need to know is GNU is a collection of open-source software that make up the rest of an operating system.

Colloquially, people will call Linux an OS, but pedantic nerds will triumphantly point out that the 'Linux with GNU' is the OS. Ignore these people.

# But what makes Linux different?
Linux is open source.

This means anyone can go and look at and contribute to the code right now: https://github.com/torvalds/linux.

Linux was started by a 21 year old Finnish student named Linus Torvald (hence the name) in 1991, and has been worked on by tens of thousands of people around the world.

Because of this, everyone can review every update to the codebase, making it very secure and privacy-first.

It also benefits from the expertise and innovations of programmers around the world, incentivised purely by the glory of helping the community, rather than to please shareholders.

Linux also has a much cooler logo/mascot - a Penguin called Tux.
![Tux](./Tux.png)
*(Behold, Tux)*

# What is a Linux distribution?

A Linux distribution is a full OS built with/on top of the Linux kernel (and usually GNU).

Some common distributions include [Ubuntu](https://ubuntu.com/), [Arch](https://archlinux.org/), [Fedora](https://fedoraproject.org/), [Debian](https://www.debian.org/), and [Linux Mint](https://linuxmint.com/). All have been developed with different goals in mind, and so are suited for different use cases.

Ubuntu, for example, is designed to be a stable and ready to use OS, for all types of users. Some distributions build off of Ubuntu to further this goal, like Linux Mint which aims to make all aspects of using the OS as user friendly as possible.

A distribution like Arch on the other hand seeks to give maximal control and customisation, providing a very minimal out of the box experience which needs to be built on and finished by the user for their specific needs. It is therefore very performant and can be great for increasing productivity. Arch is particularly renowned for its community which has created extensive documentation in the form of the [Arch Wiki](https://wiki.archlinux.org/title/Main_page).

*"I use arch, by the way." - is a phrase Arch users like to employ to seek street cred for demonstrating the knowledge and skill to set up and run Arch linux. As it happens I wrote this blog post on Arch, by the way.*

All distros provide something a little different, and many Linux enthusiasts will enjoy 'distro-hopping' to see what they like.

Picking a distro can be overwhelming - there are literally hundreds. https://distrochooser.de/ can be great for exploring what might be suited for you.

# Why are Linux users always using the terminal?

A terminal provides a "command line" where you can type commands for your computer to execute. Computers used to just be a terminal - the whole screen was a black box for inputting instructions. But as computers became more complex, there were more and more commands to learn and remember.

So, instead we developed graphical user interfaces (GUIs), because visual memory and exploration of commands is much easier for humans.

But, if you don't mind a little memorising, some tasks can still be more convenient to do on the terminal. One of the most common programs to run from the command line is a package manager.

## What's a package manager?

A program that makes installing and managing other programs (packages) very easy.

For example, Ubuntu comes with the Advanced Package Tool (APT) to install Google Chrome, simply open a terminal and type
```sh
apt install google-chrome-stable
```
And boom. You've got Google Chrome. Much easier than finding the website, downloading an installer, finding where you saved it, and running it.

## What is a desktop environment?

A Desktop Environment (DE) is another part of the OS. It provides a GUI for using the system. It is the thing you are looking at on the screen that isn't your own programs: it gives you controls to move windows around, it might display a task bar with shortcuts to your favorite apps, or may provide you with a settings menu to customize your machine.

Common desktop environments include GNOME, KDE Plasma, and Xfce, which just like distros have their own aims, usually some balance between features, performance impact, and aesthetics.

Something I like to tell people about is a sub-part of a DE, called a window manager (WM).

## What's a window manager?

A WM, does what it says on the tin - it controls how your program windows are placed, sized, and managed. Usually, this in the form of 'floating' boxes you can maximise and minimise, scale, and drag around, and place programs on top of each other.

However, there are other approaches, such as tiling window managers, where windows are automatically placed in non-overlapping tile patterns, which can be very useful for multitasking, and is my personal preference. It is a subtle and interesting change to your system that can change how you see how you can interact with your computer.

If you are interested you should checkout [hyprland](https://hypr.land/). You can make some really beautiful customisations that are highly optimised for your particular needs.

# So, how should I get started?

Pick a major distro, and just start using it.

You may be surprised just how little you need to think about, especially if you use one of the more beginner friendly distros like Linux Mint.

I would suggest making clear to yourself what your goals are, and what sort of programs you are likely to run before picking a distro.

This is particularly true if you need specific programs like for work or gaming, but for the most part all major distros will be able to do what you need.

If you are wanting to learn about Linux, I would encourage you to use the terminal as much as you can, but you really can get quite far without ever needing to touch it.

To finish up, here are some terminal commands you will definitely use at some point:

- `sudo <command>` - 'super-do', means run as admin. Any command after `sudo` will be ran with administrator privileges.

- `cd <directory-name>` - changes the location where the terminal is looking to the speciifed directory

- `ls` - '**l**i**s**t', lists the current directory

- `mkdir <directory-name>` - 'make-directory', creates a directory (a.k.a. folder) with the given name

- `touch <file-name>` - creates the file with the given name

- `rm <file-name>` - '**r**e**m**ove', removes the given file

---

Thank you for reading! Do get in touch if you find any horrendous errors, typos, or if you want to say something nice (hello@joshuahitchon.com).

\- Josh



