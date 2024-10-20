import {
  AlertStatus,
  CreateToastFnReturn,
  ToastId,
  useToast,
} from '@chakra-ui/react';
import React, { ReactNode, useCallback, useMemo } from 'react';
import { standaloneToast } from '../../theme-chakra/ChakraThemeProvider';
import { Notification } from './Notification';

export interface INotification {
  /** Title of the alert. */
  title: string | ReactNode;
  /** Content under the title. */
  content: string | ReactNode;
  /** Duration in milliseconds. E.g. 5000 by default */
  duration?: number;
  /** Status e.g. warning, error, success */
  status?: AlertStatus;
  /** A unique ID that blocks other notifications with the same ID */
  uniqueId?: ToastId;
}

const buildNotifier =
  (toast: CreateToastFnReturn, status: AlertStatus) =>
  (notification: INotification) => {
    const duration = notification.duration ?? 5000;
    const render = ({ onClose, id }: { onClose(): void; id: ToastId }) => {
      const duration = notification.duration ?? 5000;

      const dontLetToastDisappear = () =>
        toast.update(id, {
          duration: 1e6,
          render,
        });

      const letToastDisappear = () =>
        toast.update(id, {
          duration,
          render,
        });

      return (
        <Notification
          title={notification.title}
          content={notification.content}
          onClose={onClose}
          status={status}
          onMouseEnter={dontLetToastDisappear}
          onMouseLeave={letToastDisappear}
        />
      );
    };

    if (!(notification.uniqueId && toast.isActive(notification.uniqueId))) {
      return toast({
        position: 'top-right',
        status,
        duration,
        isClosable: true,
        render,
        id: notification.uniqueId,
      });
    }
    return null;
  };

type Notifier = ReturnType<typeof buildNotifier>;

const createMethods = (
  toast: CreateToastFnReturn,
  notifyWithStatus: (status: AlertStatus) => Notifier,
) => ({
  success: notifyWithStatus('success'),
  error: notifyWithStatus('error'),
  info: notifyWithStatus('info'),
  warning: notifyWithStatus('warning'),
  closeAll: toast.closeAll,
  close: toast.close,
});

export const useNotifier = () => {
  const toast = useToast();

  const notifyWithStatus = useCallback(
    (status: AlertStatus) => buildNotifier(toast, status),
    [toast],
  );

  return useMemo(
    () => createMethods(toast, notifyWithStatus),
    [notifyWithStatus, toast],
  );
};

export const createNotifier = () => {
  const notifyWithStatus = (status: AlertStatus) =>
    buildNotifier(standaloneToast, status);

  return createMethods(standaloneToast, notifyWithStatus);
};
