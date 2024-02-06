import { GoToScrollBottomButton } from "../../go-to-scroll-bottom-button/go-to-scroll-bottom-button.component";
import { GoToScrollTopButton } from "../../go-to-scroll-top-button/go-to-scroll-top-button.component";

export function FloatButtonArea() {
  return (
    <>
      <div
        className="inline-flex flex-nowrap fixed bottom-2 right-2 z-2 gap-2">
        <GoToScrollBottomButton />
        <GoToScrollTopButton />
      </div>
    </>
  );
}