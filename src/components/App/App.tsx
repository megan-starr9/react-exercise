import * as React from 'react';

import Path from '../Path/Path';
import Counter from '../Counter/Counter';
import config from '../../config';

type Props = Record<string, unknown>;
type State = {
  stats: Array<Statistic>,
};

class App extends React.Component<Props, State> {
  state = {
    stats: config.stats,
  };

  // Handles when a point selection is made
  toggleStatHandler = (stat: Statistic, adjustment: number): void => {
    this.setState((currentState: State) => {
      const updatedIndex = currentState.stats.findIndex((curr) => curr.name === stat.name && curr.path === stat.path);
      const statsCopy = [
        ...currentState.stats,
      ];
      statsCopy[updatedIndex].points = (currentState.stats[updatedIndex].points || 0) + adjustment;
      return {
        stats: statsCopy,
      };
    });
  }

  render() {
    const {
      stats,
    } = this.state;
    const points = stats.reduce((total, stat) => total += (stat.points || 0), 0);

    return (
      <div className="main">
        <header className="header">
          <h1>TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</h1>
        </header>
        <section className="content">
          <div className="trees">
            <Path
              name="Talent Path 1"
              onStatChange={this.toggleStatHandler}
              disabled={points >= config.pointMax}
              stats={stats.filter((stat) => stat.path === 1)}
            />
            <Path
              name="Talent Path 2"
              onStatChange={this.toggleStatHandler}
              disabled={points >= config.pointMax}
              stats={stats.filter((stat) => stat.path === 2)}
            />
          </div>
          <Counter current={points} max={config.pointMax} />
        </section>
      </div>
    );
  }
}

export default App;
