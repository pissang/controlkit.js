var EventDispatcher = require('../core/event/EventDispatcher'),
    NodeEvent = require('../core/document/NodeEvent');
var Node      = require('../core/document/Node');

var PRESET_SHIFT_MULTIPLIER  = 10;
var NUM_REGEX = /^-?\d*\.?\d*$/;

NumberInput_Internal = function (stepValue, dp, onBegin, onChange, onFinish, onError) {
    EventDispatcher.apply(this, null);

    this._value = 0;
    this._valueStep = stepValue;
    this._valueDp   = dp;

    this._onBegin = onBegin || function (){};
    this._onChange = onChange || function () {};
    this._onFinish = onFinish || function() {};
    this._onError = onError || function() {};

    var input = this._input = new Node('text');
        input.setProperty('value', this._value);

    input.addEventListener('input',this._onInput.bind(this));
    input.addEventListener('keydown',this._onKeydown.bind(this));
    input.addEventListener('change',this._onChangeInput.bind(this));

    input.addEventListener('mousedown',this._onMouseDown.bind(this));

    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);

};
NumberInput_Internal.prototype = Object.create(EventDispatcher.prototype);
NumberInput_Internal.prototype.constructor = NumberInput_Internal;

NumberInput_Internal.prototype._setInput = function (val) {
    var input = this._input;
    val = this._formatValue(val);
    input.setProperty('value', val);
};

NumberInput_Internal.prototype._formatValue = function (val) {
    var val = parseFloat(val);
    var precision = this._valueStep / 10;
    val = +(Math.round(val / precision) * precision).toFixed(8);
    return val;
};

NumberInput_Internal.prototype._setValue = function(value){
    value = this._formatValue(value);
    this._value = value;
};

NumberInput_Internal.prototype._onInput = function(){
    var input = this._input;
        value = input.getProperty('value');
    this._setValue(value);
    this._onChange();
};

NumberInput_Internal.prototype._onChangeInput = function (e) {
    this._setInput(this.getValue());
    this._onFinish();
};

NumberInput_Internal.prototype._onKeydown = function(e){
    var keyCode = e.keyCode;

    var input  = this._input,
        value  = this._formatValue(input.getProperty('value'));

    var isShift = e.shiftKey,
        isUpDown = keyCode == 38 || keyCode == 40;

    //increase / decrease number by (step up / down) * multiplier on shift down
    if(isUpDown){
        var step = (isShift ? PRESET_SHIFT_MULTIPLIER : 1) * this._valueStep,
            mult = keyCode == 38 ? 1.0 : -1.0;
        value += step * mult;
        this._setInput(value);
        this._setValue(value);
        this._onChange();
        this._onFinish();
        e.preventDefault();
        return;
    }
};

NumberInput_Internal.prototype._onMouseDown = function(e) {
    this._x = e.clientX;
    this._y = e.clientY;

    this._valueTmp = this._value;

    document.body.addEventListener('mousemove', this._onMouseMove);
    document.body.addEventListener('mouseup', this._onMouseUp);
};
NumberInput_Internal.prototype._onMouseUp = function(e) {
    document.body.removeEventListener('mousemove', this._onMouseMove);
    document.body.removeEventListener('mouseup', this._onMouseUp);

    if (this._valueTmp !== this._value) {
        this._onFinish();
    }
};
NumberInput_Internal.prototype._onMouseMove = function(e) {
    var isShift = e.shiftKey;
    var step = (isShift ? PRESET_SHIFT_MULTIPLIER : 1) * this._valueStep;

    var dx = e.clientX - this._x;
    var dy = e.clientY - this._y;
    // var dd = Math.abs(dx) > Math.abs(dy) ? dx : -dy;
    var dd = -dy;
    var value = this._valueTmp + dd / 5 * step;

    this._setInput(value);
    this._setValue(value);
    this._onChange();
};

NumberInput_Internal.prototype.getValue = function () {
    return this._value;
};

NumberInput_Internal.prototype.setValue = function (n) {
    this._setValue(n);
    this._setInput(n);
};

NumberInput_Internal.prototype.getNode = function () {
    return this._input;
};

module.exports = NumberInput_Internal;
