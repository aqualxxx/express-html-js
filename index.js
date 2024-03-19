module.exports = {
    /** Express engine collback function 
     * - filename - full path to layout file
     * - data { - object contain additional data
     *      title - page title
     *      content - page body content
     * }
     * - callback - function to retrieve html text
    */
    engine: (filename, data, callback) => {
        const render = require(filename);
        try {
            callback(null, render(data));
        } catch(err) {
            callback(err);
        };
    },
    /** render list element 
     *  - source: []        - array contain list data
     *  - options: {        - object contain element settings 
     *      [id,]             //element id
     *      [className,]      //CSS class name
     *      [style,]          //CSS inline style
     *      type: {ul|ol}     //ordered|unordered list (ul by default)
     * }
     *  - callback          - function to render list item
    */
    list: (source, options, callback) => {
        const type = options.type || 'ul';
        return `<${type}${attr(options)}>${source.reduce((innerHTML, item) => innerHTML += callback(item), '')}</${type}>`;
    },
    /** render table element 
     *  - source: [{..}]        - array contain table data
     *  - options: {            - object contain element settings
     *      [id,]               //element id
     *      [className,]        //CSS class name
     *      [style,]            //CSS inline style
     *      [caption,]          //table caption
     *      header: [title,..], //table headers (columns order)
     *      footer: [title,..], //table footers (columns order)
     * }
     *  - callback              - function to render table row
    */
    table: (source, options, callback) => {
        let thead = '', tfoot = '';
        if(options) {
            if(options.header) 
                thead = '<tr>' + options.header.reduce((innerHTML, title) => innerHTML += `<th>${title}</th>`, '') + '</tr>';
            else if (source && source.length)
                thead = '<tr>' +  Object.keys(source[0]).reduce((innerHTML, title) => innerHTML += `<th>${title}</th>`, '') + '</tr>';
            if(options.footer) 
                tfoot = '<tr>' + options.footer.reduce((innerHTML, title) => innerHTML += `<td>${title}</td>`, '') + '</tr>';
        };
        const tbody = source.reduce((innerHTML, row) => innerHTML += '<tr>' + callback(row) + '</tr>', '');
        return `<table${attr(options)}>
        <caption>${options.caption || ''}</caption>
        <thead>${thead}</thead>
        <tbody>${tbody}</tbody>
        <tfoot>${tfoot}</tbody>
        </table>`;
    },
};
/** Render common attributes for element 
 *  - options: { 
 *      [id,]             //element id
 *      [className,]      //CSS class name
 *      [style,]          //CSS inline style
 * }
*/
const attr = (options) => {
    let res = '';
    if(options['id'])
        res += ` id="${options['id']}"`;
    if(options['className'])    
        res += ` class="${options['className']}"`;
    if(options['style'])    
        res += ` style="${options['style']}"`;
    return res;
};