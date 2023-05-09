export class Eventing {
  private events: {
    [key: string]: EventHandler[];
  } = {};
  on(eventName: string, callback: EventHandler) {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName) {
    this.events[eventName].map((callback) => {
      callback();
    });
  }
}
type EventHandler = () => void;
