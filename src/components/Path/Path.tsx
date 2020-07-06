import * as React from 'react';

import Stat from '../Stat/Stat';

type Props = {
  name: string,
  disabled: boolean,
  stats: Array<Statistic>,
  onStatChange: (stat: Statistic, adjustment: number) => void,
};

const Path: React.FC<Props> = ({
  name,
  disabled,
  stats,
  onStatChange,
}) => (
  <div className="path">
    <div className="title">
      {name}
    </div>
    <div className="stats">
      {stats.map((stat, index) => (
        <Stat
          stat={stat}
          addDisabled={disabled || (index > 0 && !stats[index - 1].points)}
          removeDisabled={(index < stats.length - 1) && Boolean(stats[index + 1].points)}
          onChange={onStatChange}
        />
      ))}
    </div>
  </div>
);

export default Path;
