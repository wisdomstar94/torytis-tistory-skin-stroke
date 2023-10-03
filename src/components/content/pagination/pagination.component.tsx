import { classes } from '../../../functions/common/common';
import './pagination.scss';
// import styles from './pagination.module.scss';

export function Pagination() {
  return (
    <>
      <div 
        className={classes(
          "block m-0 mt-4 p-0 relative",
        )}>
        <s_paging>
          <div 
            className={classes(
              "flex flex-wrap items-center justify-start relative",
            )}>
            <a 
              tt-onlyattr="[##_prev_page_##]"
              className={classes(
                "inline-flex flex-wrap text-sm cursor-pointer decoration-transparent text-inherit relative",
              )}>
              prev
            </a>
            <ul
              className={classes(
                "flex flex-wrap relative items-center justify-start my-0 mx-2 p-0",
              )}>
              <s_paging_rep>
                <li
                  className={classes(
                    "inline-flex bg-white list-none m-0 p-0 relative",
                  )}>
                  <a 
                    tt-onlyattr="[##_paging_rep_link_##]"
                    className={classes(
                      'num-a',
                    )}>
                    [##_paging_rep_link_num_##]
                  </a>
                </li>
              </s_paging_rep>
            </ul>
            <a 
              tt-onlyattr="[##_next_page_##]"
              className={classes(
                "inline-flex flex-wrap text-sm cursor-pointer decoration-transparent text-inherit relative",
              )}>
              next
            </a>
          </div>
        </s_paging>
      </div>
    </>
  );
}