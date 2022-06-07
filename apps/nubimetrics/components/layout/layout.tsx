// Base
import Navbar from '../navbar/navbar';
import { PropsWithChildren } from 'react';
// Base end

// Styles
import styles from './layout.module.scss';
// Styles end

export interface LayoutProps {
  children?: JSX.Element;
}

export function Layout(props: PropsWithChildren<LayoutProps>): JSX.Element {
  const { children } = props;
  return (
    <div className={styles['container']}>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
