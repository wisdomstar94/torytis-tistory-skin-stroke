export declare namespace ICommon {
  export interface PostsHeadingTextElementDisplayRangeItem {
    element: HTMLElement;
    index: number;
    start: number;
    end: number;
  }

  export interface ElementItem {
    index: number;
    element: HTMLElement;
  }

  export interface SvgProps {
    className?: string;
    width?: number; 
    height?: number; 
    strokeWidth?: number;
  }
}