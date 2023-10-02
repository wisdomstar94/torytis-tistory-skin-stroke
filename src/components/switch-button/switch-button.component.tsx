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
            "inline-flex w-[96px] h-[32px] relative box-border border border-black rounded-[100px] cursor-pointer",
            "active:bg-black"
          )}
          >
          <div
            className={classes(
              "w-[62px] h-full left-0 top-0 absolute",
              "flex items-center justify-center text-xs leading-3 text-white",
            )}>
            ON
          </div>
          <div
            className={classes(
              "w-[62px] h-full right-0 top-0 absolute",
              "flex items-center justify-center text-xs leading-3 text-black",
            )}>
            OFF
          </div>
          <div
            className={classes(
              "w-[30px] h-[24px] block box-border rounded-full",
              "border border-black absolute top-[3px] left-[4px] bg-white",
              "parent-active:!top-[3px] parent-active:!left-[62px]",
            )}>

          </div>
        </div>
      </div>
    </>
  );
}