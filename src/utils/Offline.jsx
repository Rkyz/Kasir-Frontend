import { useState, useEffect } from 'react';

const useOfflineStatus = () => {
    const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);

    useEffect(() => {
        const handleOnline = () => {
            setOfflineStatus(false);
        };

        const handleOffline = () => {
            setOfflineStatus(true);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return offlineStatus;
};

export default useOfflineStatus;


