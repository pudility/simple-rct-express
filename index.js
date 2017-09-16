'use strict'

var parseRCT = function (input, obj){
  return (
    `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.js"></script>
        <script>
        let server_data = ` + JSON.stringify(obj) + `
        </script>
      </head>
      <body>
        <div id = "app" >
        <script type="text/babel" src="` + input + `"></script>
        </div>
      </body>
      </html>`
  )
}

exports.parseRCT = parseRCT;