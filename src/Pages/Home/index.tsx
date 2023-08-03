import React from 'react';
class HomePage extends React.Component {
  // State
  state = { count: 0 };
  // Actions
  public handleIncrement = (): void => {
    this.setState({ count: this.state.count + 1 });
  };
  public handleDecrement = (): void => {
    this.setState({ count: Math.max(0, this.state.count - 1) });
  };
  // LifeCycle Update
  componentDidUpdate(): void {
    console.log('Update Counter');
  }
  // Return JSX
  render(): React.ReactNode {
    return (
      <div className="flex flex-row items-center justify-center m-2 gap-3">
        <section className="flex gap-3">
          <button
            className="px-4 py-2 bg-orange-400 rounded-lg"
            onClick={this.handleDecrement}
          >
            -
          </button>
          <button
            className="px-4 py-2 bg-orange-400 rounded-lg"
            onClick={this.handleIncrement}
          >
            +
          </button>
        </section>
        <section>{this.state.count}</section>
      </div>
    );
  }
}

export default HomePage;
