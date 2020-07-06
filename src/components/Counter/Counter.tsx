import * as React from 'react';

type Props = {
  current: number,
  max: number,
};

const Counter: React.FC<Props> = ({
  current,
  max,
}) => (
  <div className="counter">
    <span className="amount">
      {current}/{max}
    </span>
    <span className="description">
      Points Spent
    </span>
  </div>
);

export default Counter;
