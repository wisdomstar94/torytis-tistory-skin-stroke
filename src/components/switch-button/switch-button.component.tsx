import { classes } from "../../functions/common/common";

export function SwitchButton(props: {
  id: string;
  name: string;
}) {
  return (
    <>
      <div
        className={classes(
          "switch-button-component",
          "inline-flex relative select-none",
        )}>
        <input 
          type="checkbox" 
          readOnly={true}
          className={classes(
            "switch-button-hidden-checkbox",
            "w-0 h-0 overflow-hidden opacity-0 m-0 p-0 absolute -z-10",
          )}
          id={props.id}
          name={props.name}
          />
        <div 
          className={classes(
            "switch-button-body",
            "inline-flex w-[96px] h-[32px] relative box-border border rounded-[100px] cursor-pointer",
            "border-black dark:border-white dark-c:border-white",
            "active:bg-black dark:active:bg-white dark-c:active:bg-white",
          )}
          >
          <div
            className={classes(
              "w-[62px] h-full left-0 top-0 absolute",
              "items-center justify-center text-xs leading-3",
              "hidden parent-1-active:flex",
              "text-white dark:text-black dark-c:text-black",
            )}>
            ON
          </div>
          <div
            className={classes(
              "w-[62px] h-full right-0 top-0 absolute",
              "items-center justify-center text-xs leading-3",
              "flex parent-1-active:hidden",
              "text-black dark:text-white dark-c:text-white",
            )}>
            OFF
          </div>
          <div
            className={classes(
              "w-[30px] h-[24px] block box-border rounded-full",
              "border absolute top-[3px] left-[4px]",
              "parent-1-active:!top-[3px] parent-1-active:!left-[62px]",

              "border-black dark:border-white dark-c:border-white dark:parent-1-active:border-black dark-c:parent-1-active:border-black",
              "bg-white dark:parent-1-active:bg-black dark-c:parent-1-active:bg-black",
            )}>

          </div>
        </div>
      </div>
    </>
  );
}