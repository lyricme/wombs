define(function(require, exports, module) {
  
  var a = require( 'js/lib/stats.min.js'  );
  var b = require( 'js/lib/three.min.js'  );
  
  function Animator( womb ){

    this.womb = womb;

    this.clock = new THREE.Clock();
    this.clock.autostart = false;

    this.stats = new Stats();
    this.stats.domElement.style.position  = 'absolute';
    this.stats.domElement.style.bottom    = '0px';
    this.stats.domElement.style.right     = '0px';
    this.stats.domElement.style.zIndex    = '999';
    //this.stats.domElement.style.display   = 'none';

    this.requestAnimationFrame = requestAnimationFrame;

    this.delta = 0;

    this.womb.interface.domElement.appendChild( this.stats.domElement );


  }

  Animator.prototype.start = function(){
   
    if( !this.running ){
      this.running = true;
      this.clock.start();
      this.animate();
    }
  
  }

  Animator.prototype.stop = function(){

    this.running  = false;
  }

  Animator.prototype.animate = function( ){

    this.delta = this.clock.getDelta();
    this.stats.update();
    this.womb._update();
    this.update();

    if( this.running == true ){ 
      window.requestAnimationFrame( this.animate.bind( this ) );
    }

  }


  // Empty function, because it will be user defined
  Animator.prototype.update = function(){
  
  }

  return Animator

});

