import addDOMEventListener from 'add-dom-event-listener';
import ReactDOM from 'react-dom';

export default function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  const callback = ReactDOM.unstable_batchedUpdates ? function run(e) {
    ReactDOM.unstable_batchedUpdates(cb, e);
  } : cb;
  return addDOMEventListener(target, eventType, callback);
}