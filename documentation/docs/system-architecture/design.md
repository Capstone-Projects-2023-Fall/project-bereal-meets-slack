---
sidebar_position: 1
---
# BMS Bot Design Document

# Components

## Chat Application

The chat application acts as both the user portal for the bot and as the running environment for the bot. The chat application facilitates user interaction with the bot and allows for it to act like a psuedo user that can post and interact with messages. There will be a level of UI/UX design for the bot in slack using both its API & libraries for command and interaction formatting as well as block kit for formatting of modals, popups, and responses. The application will also act as the display for all data visualization that moderators ask for.


## BMS Bot 

The bot itself is a chatbot that is hosted on Google Cloud via cloud run, as mentioned previous it will act as a pseudo user posting messages and accepting/reacting to user responses with triggers. It interfaces with the slack API to send messages, and interfaces with the database to both store and pull user reaction data. When dealing with moderation the bot will opt to DM moderators and generate either popups, modals, or interfaceable actions for approvals, data requests, or moderation features. When logging data the bot will leverage the server to send data to firebase for storage.

## Google Cloud Webserver

The Google Cloud webserver provides a hosting point for the bot using the cloud run service. The server allows for two things, bot uptime and bot access to the database, through the server the bot can make calls to the firebase database both for logging and for acces of data.

## Google Firebase Database

Text Goes here.



# Sequence Diagrams


# Document Requirements

**Purpose**

The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing.

**Requirements**

In addition to the general requirements the Design Document - Part I Architecture will contain:

A description the different components and their interfaces. For example: client, server, database.

For each component provide class diagrams showing the classes to be developed (or used) and their relationship.

Sequence diagrams showing the data flow for _all_ use cases. One sequence diagram corresponds to one use case and different use cases should have different corresponding sequence diagrams.

Describe algorithms employed in your project, e.g. neural network paradigm, training and training data set, etc.

If there is a database:

Entity-relation diagram.

Table design.

A check list for architecture design is attached here [architecture\_design\_checklist.pdf](https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1 "architecture_design_checklist.pdf")  and should be used as a guidance.
