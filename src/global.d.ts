type Icon = 'layers' | 'silverware' | 'cake' | 'crown' | 'ship' | 'scuba' | 'lightning' | 'skull';

type Statistic = {
  name: string,
  path: number,
  icon: Icon,
  points?: number,
};
