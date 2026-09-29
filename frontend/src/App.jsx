import React from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { ErrorBoundary } from './components/common/ErrorBoundary';

export function App() {
  return (
    <ErrorBoundary>
      <AppLayout />
    </ErrorBoundary>
  );
}

export default App;
