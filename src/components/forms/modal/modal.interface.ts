import { ReactNode } from "react";

export declare namespace IModal {
  export type ShowState = 'show' | 'hide';

  export interface Props {
    id: string;
    children: ReactNode;
    defaultWidth: number | 'full';
    defaultHeight?: number | 'full';
    isOverflowXScroll?: boolean;
    isOverflowYScroll?: boolean;
    className?: string;
    initShowState?: ShowState;

    isTestMode?: boolean;
  }
}