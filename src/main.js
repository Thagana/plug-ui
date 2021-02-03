import { ping } from './services/request'
import Widget from './components/Widget';
import ReactDOM from 'react-dom';
import React from 'react'


const supportedAPI = ['init', 'message']; 

function app(window) {

    let configurations = {
        someDefaultConfiguration: false
    };

    let globalObject = window[window['plug-ui']];
    let queue = globalObject.q;

    let temporary = document.createElement('div');
    temporary.setAttribute('id', 'plug-ui');

    if (queue) {
        for (var i = 0; i < queue.length; i++) {
            if (queue[i][0].toLowerCase() == 'init') {

                let body = document.getElementsByTagName('body')[0];
                body.appendChild(temporary);
                configurations = extendObject(configurations, queue[i][1]);
                ReactDOM.render(<Widget />, document.getElementById('plug-ui'));
            }
            else
                apiHandler(queue[i][0], queue[i][1]);
        }
    }

    globalObject = apiHandler;
    globalObject.configurations = configurations;
}

function apiHandler(api, params) {
    if (!api) throw Error('API method required');
    api = api.toLowerCase();

    if (supportedAPI.indexOf(api) === -1) throw Error(`Method ${api} is not supported`);

    console.log(`Handling API call ${api}`, params);

    switch (api) {
        case 'message':
            // show(params);
            break;
        default:
            console.warn(`No handler defined for ${api}`);
    }
}

function extendObject(a, b) {
    for (var key in b)
        if (b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}

app(window);