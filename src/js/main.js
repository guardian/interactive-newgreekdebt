define([
    'reqwest',
    'json!data/sampleData.json',
    'text!templates/populated.html'
], function(
    reqwest,
    sampleData,
    templateHTML
) {
   'use strict';

    function logResponse(resp) {
        console.log(resp);
    }

    function handleRequestError(err, msg) {
        console.error('Failed: ', err, msg);
    }

    function afterRequest(resp) {
        //data = resp.sheets.Sheet1;
        //console.log(data);
        //buildFlowchart(data);
    }

    function init (el, context, config, mediator) {
        // DEBUG: What we get given on boot
        //console.log(el);

        // DOM template example
        el.innerHTML = templateHTML;

        // Load local JSON data
        //console.log(sampleData);

        // Load remote JSON data
        var key = '1t7W6zInunJpfyFSU8jcGObdDxW2jW1q6B3g3tfipfxU';
        var url = 'http://interactive.guim.co.uk/spreadsheetdata/'+key+'.json';

        reqwest({
            url: url,
            type: 'json',
            crossOrigin: true
        })
        .then(logResponse)
        .fail(handleRequestError)
        .always(afterRequest);
    }
    
    function buildFlowchart (data) {
        
        
    }
    
    

    return {
        init: init
    };
});
