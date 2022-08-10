import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useDeps } from './context/DepContext';
import { JsonPlaceHolderView } from './features/JsonPlaceHolder/JsonPlaceHolderView';



const App = () => {
  return (
    <div>
      <JsonPlaceHolderView></JsonPlaceHolderView>
    </div>
  );
}

export default App;
