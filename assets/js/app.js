// import {log1} from './log.js';

// import config from './config.json';
// console.log(config);

// let a = "salut les gens";
// log1(a);

// let b = 3;

// debugger;
// import $ from 'jquery';

//lazy loading webpack
document.getElementById('button').addEventListener('click', function() {
    import('jquery').then(($) => {
        $('body').css('backgroundColor','#000');
    })
})


