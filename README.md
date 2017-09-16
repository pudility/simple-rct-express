## simple-rct-express
This is a dead-simple way to display jsx code with express and pass it data.

## Usage
### Install
```bash
npm install simple-rct-express --save
```
### Include it
`var parseRCT = require('simple-rct-express').parseRCT`

### Add it to your app
`res.send(parseRCT('pathto.jsx', obj));`

### Add it to your jsx
You can access the data you passed in to `parseRCT` via the variable name `server_data`.

If you havent already, make sure you add `ReactDOM.render` to your app:
```JavaScript
ReactDOM.render(
  React.createElement(ShoppingList), //replace ShoppingList with your react class or your jsx element
  document.getElementById('app')
);
```
NOTE: there is no need to require react or react-dom, we deal with that part for you.

## Example
### server.js
```JavaScript
var express = require('express');
var app = express();
var parseRCT = require('simple-rct-express').parseRCT

app.use('/views', express.static('views'))

app.get('/', function(req, res){
 	res.send(parseRCT('/views/element.jsx', {name: 'john'}));
});

app.listen(3000, () => {
  console.log('listening on port 3000');
})
```
### views/element.jsx
```JavaScript
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {server_data.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}


ReactDOM.render(
  React.createElement(ShoppingList),
  document.getElementById('app')
);
```