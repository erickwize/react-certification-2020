import React, { useState } from 'react';

export const useHistory = (keyword = '') => {
  const [history, setHistory] = useState('');
  const setHistoryVal = (keyword) => setHistory(keyword);

  return { history, setHistoryVal };
}

// export { useHistory };
