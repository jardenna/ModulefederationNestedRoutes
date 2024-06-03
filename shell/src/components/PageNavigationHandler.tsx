import { FC, ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { AppEventNameEnums, PathEnums } from '../enums';
import useSyncAppRouter from '../hooks/useSyncAppRouter';

interface NavigationManagerProps {
  children: ReactNode;
  appPath: PathEnums;
  appEventName: AppEventNameEnums;
}

const PageNavigationHandler: FC<NavigationManagerProps> = ({
  children,
  appPath,
  appEventName,
}) => {
  useSyncAppRouter(appPath, appEventName);
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<span className="loader">Loading...</span>}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};
export default PageNavigationHandler;
