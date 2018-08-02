import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Table from './Table';

(() => {
  kintone.events.on(['app.record.index.show'], event => {
    ReactDOM.render(<Header />, kintone.app.getHeaderMenuSpaceElement());

    if (event.viewId !== 5519993) return event;
    ReactDOM.render(<Table records={event.records} />, document.querySelector('div#app'));

    return event;
  });
})();
