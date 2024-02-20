class BrowserHistory {
  constructor(homepage) {
    this.history = [homepage];
    this.current = 0;
  }

  visit(url) {
    this.current += 1;
    this.history = this.history.slice(0, this.current);
    this.history.push(url);
  }

  back(steps) {
    this.current = Math.max(0, this.current - steps);
    return this.history[this.current];
  }
  forward(steps) {
    this.current = Math.min(this.history.length - 1, this.current + steps);
    return this.history[this.current];
  }
}