import React from 'react';
import Switch from '@material-ui/core/Switch';

import './project.css';

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
       <Switch value="checkedC" inputProps={{ 'aria-label': 'primary checkbox' }} />
    </div>
  );
}
