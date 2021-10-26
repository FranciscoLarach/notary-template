import { useWindowSize } from 'react-use';
import mobileBreakpoints from '@styles/breakpoints/js-breakpoints.module.scss';

const useIsMobile = () => {
  const { width } = useWindowSize();
  const maxWidth = Number(mobileBreakpoints.md.slice(0, -2));
  return width <= maxWidth;
};

export default useIsMobile;
