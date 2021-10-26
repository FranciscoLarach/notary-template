import Button from '@mui/material/Button';
import useIsMobile from '@hooks/useIsMobile';

function App() {
  const isMobile = useIsMobile();
  console.log(isMobile);
  return <Button variant='contained'>{('Hello World', isMobile?.toString())}</Button>;
}

export default App;
