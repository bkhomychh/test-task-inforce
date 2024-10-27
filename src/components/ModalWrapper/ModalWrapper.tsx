'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import { useToggleGlobalScrollBlock } from '@/hooks';
import styles from './ModalWrapper.module.scss';

export interface IModalWrapper {
  isOpen: boolean;
  shouldCloseOnClickContent?: boolean;
  className?: string;
  onHide: () => void;
  children: ReactNode;
}

const ModalWrapper = ({
  isOpen,
  shouldCloseOnClickContent,
  className,
  onHide,
  children,
}: IModalWrapper) => {
  useToggleGlobalScrollBlock(isOpen);

  return createPortal(
    <div className={clsx(styles.backdrop, isOpen && styles.isOpen, className)} onClick={onHide}>
      <div
        className={styles.modal}
        onClick={shouldCloseOnClickContent ? undefined : e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!,
  );
};

ModalWrapper.propTypes = {};

export default ModalWrapper;
