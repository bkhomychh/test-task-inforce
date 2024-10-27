import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.scss';

export interface IMainLayoutProps {}

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Suspense fallback={<span>Loading ...</span>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainLayout;
