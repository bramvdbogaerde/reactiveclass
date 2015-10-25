ReactiveClass = class{
    constructor(){
      this._created = false
    }

    /**
    * @method bind
    * @description creates reactive databindings for all properties for given Object
    * @argument {Object} context
    */
    bind(context){
      if(context == undefined){
        console.error("ERROR: you must pass a context as an argument to this function!")
        return
      }

      if(this._created){
        console.warn("WARNING: please only use .create(context) only once to avoid duplicate trackers\nTo add another binding please use .createFor(context, property)\nCalled from class "+context.constructor.name)
      }

      for(propsindex in Object.keys(context)){
        var prop = Object.keys(context)[propsindex]
        this.bindFor(context, prop)
      }

      this._created = true
    }

    /**
    * @method bindFor
    * @description Creates getters and setters with reactive databindings for given property
    * @argument context
    * @argument property
    */
    bindFor(context, prop){
      this[prop+"Dep"] = new Tracker.Dependency()
      context["get"+this._capitalize(prop)] = function(){
        this[prop+"Dep"].depend();
        return context[prop];
      }

      context["set"+this._capitalize(prop)] = function(to){
        context[prop] = to
        this[prop+"Dep"].changed();
      }
    }

    /**
    * @method _capitalize
    * @description Utility function to capitalize a string
    * @private
    * @argument {String} s
    * @return {String} capitalized string
    */
    _capitalize(s) {
      return s[0].toUpperCase() + s.substr(1);
    }
}
