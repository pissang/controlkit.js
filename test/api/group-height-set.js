import ControlKit from '../../index';

window.addEventListener('load',()=>{
    const settings = {number:0};

    new ControlKit().addPanel({height:400})
        .addGroup({height:300})
        .addNumber(settings,'number')
        .addNumber(settings,'number')
        .addNumber(settings,'number')
        .addNumber(settings,'number')
        .addNumber(settings,'number')
        .addNumber(settings,'number')
        .addNumber(settings,'number')
        .addNumber(settings,'number')
        .addNumber(settings,'number')
        .addNumber(settings,'number')
        .addNumber(settings,'number')
        .addNumber(settings,'number')
        .addNumber(settings,'number');
});