
Timer Class Spec
=============================


## Description

A class representing a simple timer.

## Properties

- `startTime`: The timestamp when the timer was started.
- `endTime`: The timestamp when the timer was stopped.

## Methods

### `start()`

Starts the timer by setting the `startTime` property to the current timestamp.

### `stop()`

Stops the timer, calculates the elapsed time in seconds, and sets the `endTime` property.

#### Returns:

- The elapsed time in seconds.

### `isRunning()`

Checks if the timer is currently running.

#### Returns:

- `true` if the timer is running; otherwise, `false`.

