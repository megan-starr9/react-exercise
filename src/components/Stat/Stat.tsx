import * as React from 'react';
import cn from 'classnames';

type Props = {
  stat: Statistic,
  addDisabled: boolean,
  removeDisabled: boolean,
  onChange: (stat: Statistic, adjustment: number) => void,
};

class Stat extends React.Component<Props> {
  removePoint() {
    if(this.props.stat.points && !this.props.removeDisabled) {
      this.props.onChange(this.props.stat, -1);
    }
  }

  addPoint() {
    if (!this.props.stat.points && !this.props.addDisabled) {
      this.props.onChange(this.props.stat, 1);
    }
  }

  togglePoint() {
    if (this.props.stat.points) {
      this.removePoint();
    } else {
      this.addPoint();
    }
  }

  // Handle left click
  clickHandler = () => {
    this.addPoint();
  }
  // Handle right click
  contextHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    this.removePoint();
  }
  // Handle mobile touch
  touchHandler = (e: React.TouchEvent) => {
    console.log('touchEnd');
    e.preventDefault();
    this.togglePoint();
  }
  // Handle tab & enter
  keyHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      this.togglePoint();
    }
  }

  render() {
    const {
      stat,
    } = this.props;
    return (
      <div className={cn('stat', { active: stat.points })} title={stat.name}>
        <div
          className={cn('icon', stat.icon, { active: stat.points })}
          onTouchEnd={this.touchHandler}
          onClick={this.clickHandler}
          onContextMenu={this.contextHandler}
          onKeyPress={this.keyHandler}
          tabIndex={1}
        />
      </div>
    );
  }
}
export default Stat;
