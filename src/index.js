'use strict';

var famous = require('famous');

var Camera = famous.components.Camera;
var DOMElement = famous.domRenderables.DOMElement;
var FamousEngine = famous.core.FamousEngine;
var Node = famous.core.Node;
var Position = famous.components.Position;


// The Demo lays out the dots in form of a grid.
function Demo() {
    Node.call(this);

    // Center demo
    this
        .setMountPoint(0.5, 0.5, 0.5)
        .setAlign(0.5, 0.5, 0.5)
        .setOrigin(0.5, 0.5, 0.5)
        .setPosition(0, 0, 300);

    // Add the DOMElement (DOMElements are components).
    this.el = new DOMElement(this, {
        properties: {
            background: "red",
        }
    });

    // Add the Position component.
    // The position component allows us to transition between different states
    // instead of instantly setting the final translation.
    this.position = new Position(this);

}

Demo.prototype = Object.create(Node.prototype);
Demo.prototype.constructor = Demo;


// Boilerplate
FamousEngine.init();
var leftScene = FamousEngine.createScene("#left");
var rightScene = FamousEngine.createScene("#right");

var demo = new Demo();

var leftCamera = new Camera(leftScene);
leftCamera.setDepth(2000);
leftScene.addChild(demo);

var rightCamera = new Camera(rightScene);
rightCamera.setDepth(2000);
rightScene.addChild(demo);
