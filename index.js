var hljs = require('highlight.js');

function highlight(lang, code) {
    if(!lang) return {
        body: code,
        html: false
    };

    try {
        return hljs.highlight(lang, code).value;
    } catch(e) { }

    return {
        body: code,
        html: false
    };
}

module.exports = {
    website: {
        assets: "./assets",
        css: [
            "gitbook-plugin-component-style.css"
        ],
        scripts: [
            "srcdoc-polyfill.min.js"
        ]
    },
    blocks: {
        component: {
            process: function(block) {
                const code = '<pre><code class="lang-html">' + highlight('html', block.body).trim() + '</code></pre>';
                const iframe = `<iframe srcdoc="${block.body.trim().replace(/"/g, "'")}" style="resize: both; width: 100%; max-width: 100%;"></iframe>`;
                template = `
                    <div class="gitbook-plugin-component">
                        ${iframe}
                        ${code}
                    </div>
                `;

                return template;
            }
        }
    },
};