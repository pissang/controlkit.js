var LayoutMode = require('./layout/LayoutMode');
var ColorMode = require('./color/ColorMode');

var Default = {
    KIT_TRIGGER         : false,
    KIT_HISTORY         : false,
    KIT_PANELS_CLOSABLE : false,
    KIT_OPACITY         : 1.0,

    /*---------------------------------------------------------------------------------*/

    PANEL_POSITION   : null,
    PANEL_WIDTH      : 300,
    PANEL_HEIGHT     : null,
    PANEL_WIDTH_MIN  : 100,
    PANEL_WIDTH_MAX  : 600,
    PANEL_RATIO      : 40,
    PANEL_LABEL      : 'Control Panel',
    PANEL_VALIGN     : LayoutMode.TOP,
    PANEL_ALIGN      : LayoutMode.RIGHT,
    PANEL_DOCK       : {align:LayoutMode.RIGHT,resizable:true},
    PANEL_ENABLE     : true,
    PANEL_OPACITY    : 1.0,
    PANEL_FIXED      : true,
    PANEL_VCONSTRAIN : true,

    /*---------------------------------------------------------------------------------*/

    BUTTON_LABEL : '',

    /*---------------------------------------------------------------------------------*/

    OUTPUT_HEIGHT : null,
    OUTPUT_WRAP   : false,
    OUTPUT_UPDATE : true,

    NUMBER_INPUT_DP     : 2,
    NUMBER_INPUT_STEP   : 1,
    NUMBER_INPUT_PRESET : null,
    NUMBER_OUTPUT_DP    : 2,

    STRING_INPUT_PRESET : null,

    /*---------------------------------------------------------------------------------*/

    PAD_BOUNDS_X : [-1,1],
    PAD_BOUNDS_Y : [-1,1],
    PAD_LABEL_X  : '',
    PAD_LABEL_Y  : '',

    /*---------------------------------------------------------------------------------*/

    RANGE_STEP : 1.0,
    RANGE_DP   : 2,

    /*---------------------------------------------------------------------------------*/

    SLIDER_STEP : 1.0,
    SLIDER_DP   : 2,

    /*---------------------------------------------------------------------------------*/

    VALUE_PLOTTER_RESOLUTION : 1,

    FUNCTION_PLOTTER_SHOW_MIN_MAX_LABELS : true,


    /*---------------------------------------------------------------------------------*/

    COLOR_COLOR_MODE : ColorMode.HEX,
    COLOR_PRESETS    : null,

    COLOR_PICKER_VALUE_HUE : 200.0,
    COLOR_PICKER_VALUE_SAT : 50.0,
    COLOR_PICKER_VALUE_VAL : 50.0

    /*---------------------------------------------------------------------------------*/
};

module.exports = Default;