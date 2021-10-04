import React from 'react';

import './counter.scss';

const Counter = ({ nbTasks }) => (
  <div className="counter">
    {(nbTasks === 0) && ('Pas de tâche en cours')}
    {(nbTasks === 1) && ('1 tâche en cours')}
    {(nbTasks > 1) && (`${nbTasks} tâches en cours`)}
  </div>
);

export default Counter;
