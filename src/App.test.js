import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app main content', () => {
  render(<App />);
  const mainText = screen.getByText(/conteúdo da página principal/i);
  expect(mainText).toBeInTheDocument();
});
