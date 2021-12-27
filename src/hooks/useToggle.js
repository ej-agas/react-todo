import { useState } from 'react';

export default function useToggle(initialState = true) {
  const [visible, setVisible] = useState(initialState);

  function toggle() {
    setVisible((previousValue) => !previousValue);
  }

  return [visible, toggle];
}
