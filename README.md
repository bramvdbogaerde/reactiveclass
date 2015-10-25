ReactiveClass
==================

This packages allows you to create setters and reactive getters for your ES6 class properties.

# Example

Simple counter example:

app.html
```
<template name="counter" >
	<button>Hit me</button>
	<p>You clicked the button {{counter}} times</p>
</template>
```
app.js
```
class Counter extends ReactiveClass{
	constructor(){
		super()

		this.counter = 0

		// Creates getters and setters
		this.bind(this)
	}

	add(){
		this.setCounter(this.counter+1)
	}
}

var myCounter = new Counter();
if(Meteor.isClient){
	Template.counter.helpers({
			counter: function(){
				return myCounter.getCounter();
			}
	})

	Template.counter.events({
			"click button": function(){
				myCounter.add();
			}
	})
}
```
