import { Var } from '../../../../torytis-variable-object';
import { classes } from '../../../functions/common/common';
import { CallJavascript } from '../../call-javascript-function/call-javascript-function.component';
import { SvgPhotoOff } from '../../svgs/svg-photo-off/svg-photo-off.component';
import { NormalPageTitleRow } from '../normal-page-title-row/normal-page-title-row.component';
import { PostsIndexItemOverlayContent } from '../posts-index-item-overlay-content/posts-index-item-overlay-content.component';

export function HomeCover() {
  return (
    <>
      <section 
        data-title="home-cover" 
        className={classes(
          'w-full flex flex-wrap gap-4 relative items-stretch content-start',
          Var['[##_var_cover_list_max_col_count_##]'],
          Var['[##_var_cover_list_half_max_col_count_##]'],
        )}>
        
        <NormalPageTitleRow />

        <s_cover_group>
          <section 
            data-title="home-cover-group" 
            className={classes(
              'home-cover-group',
              'w-full flex flex-wrap gap-4 relative items-stretch content-start',
            )}>

            <div
              className='hidden' 
              dangerouslySetInnerHTML={{
                __html: `
                  <style>
                    .normal-page-title-row {
                      display: none !important;
                    }
                  </style>
                `,
              }} />

            <s_cover_rep>
              <s_cover name='list'>
                <div 
                  data-title="home-cover-item" 
                  className={classes(
                    "home-cover-item",
                    "mb-6 sm:mb-2",
                    "w-full",
                    "relative flex flex-wrap gap-4",
                    "flex-col items-start content-start",
                  )}>
                  <div 
                    className={classes(
                      "w-full relative",
                    )}>
                    <div
                      className={classes(
                        // "normal-page-title-row",
                        "relative font-bold",
                        "text-3xl sm:text-2xl",
                        // "hidden tt-body-index:block",
                        "block",

                        "text-black dark:text-white dark-c:text-white",
                      )}>
                      <span>[##_cover_title_##]</span>
                      {/* <span>&nbsp;</span>
                      <span className="normal-page-title-row-count-info"></span>
                      <CallJavascript code="disposeNormalPageTitle(true)" /> */}
                    </div>
                  </div>

                  <ul 
                    className={classes(
                      "w-full flex flex-wrap items-stretch relative gap-4",
                      // "flex-1",
                    )}>
                    <s_cover_item>
                      <div 
                        className={classes(
                          "home-cover-item-item",
                          "inline-flex flex-wrap relative gap-4",

                          "posts-index-item",
                          "h-auto border border-solid cursor-pointer",
                          "hover:outline-2 hover:outline",
                          "hover:outline-black dark:hover:outline-white dark-c:outline-white",
                          "border-black dark:border-white dark-c:border-white",
                          "common-post-index-item",

                          "w-full",
                          "sm:cover_list_max_col_count_1:w-full sm:cover_list_max_col_count_2:w-1/2-gap-4 sm:cover_list_max_col_count_3:w-1/2-gap-4 sm:cover_list_max_col_count_4:w-1/2-gap-4 sm:cover_list_max_col_count_5:w-1/2-gap-4 sm:cover_list_max_col_count_6:w-1/2-gap-4 sm:cover_list_max_col_count_7:w-1/2-gap-4 sm:cover_list_max_col_count_8:w-1/2-gap-4",
                          "lg:cover_list_max_col_count_1:w-full lg:cover_list_max_col_count_2:w-1/2-gap-4 lg:cover_list_max_col_count_3:w-1/2-gap-4 lg:cover_list_max_col_count_4:w-1/3-gap-4 lg:cover_list_max_col_count_5:w-1/3-gap-4 lg:cover_list_max_col_count_6:w-1/4-gap-4 lg:cover_list_max_col_count_7:w-1/4-gap-4 lg:cover_list_max_col_count_8:w-1/6-gap-4",
                          "xl:cover_list_max_col_count_1:w-full xl:cover_list_max_col_count_2:w-1/2-gap-4 xl:cover_list_max_col_count_3:w-1/3-gap-4 xl:cover_list_max_col_count_4:w-1/4-gap-4 xl:cover_list_max_col_count_5:w-1/5-gap-4 xl:cover_list_max_col_count_6:w-1/6-gap-4 xl:cover_list_max_col_count_7:w-1/7-gap-4 xl:cover_list_max_col_count_8:w-1/8-gap-4",
                        )}>
                        <s_cover_item_article_info>
                          <a 
                            href="[##_cover_item_url_##]" 
                            className={classes(
                              "w-full flex flex-wrap items-start content-start relative text-inherit decoration-transparent",
                            )}
                            >
                            <div
                              className={classes(
                                "w-full block min-h-[140px] aspect-video relative",
                                "border-b bg-no-repeat bg-center bg-contain overflow-hidden",
                                // "bg-[url('./images/tistory_logo_image.png')]",
                                "border-b-black dark:border-b-white dark-c:border-b-white",
                                "text-black dark:text-white dark-c:text-white",
                              )}
                              >
                              <s_cover_item_thumbnail>
                                <div
                                  className={classes(
                                    "posts-index-item-thumbnail-img-default-container",
                                    "bg-white dark:bg-black dark-c:bg-black",
                                    "w-full h-full absolute top-0 left-0 flex flex-wrap items-center justify-center z-2",
                                  )}>
                                  <img  
                                    className='w-full h-full object-cover relative block'
                                    src="//i1.daumcdn.net/thumb/C148x148/?fname=[##_cover_item_thumbnail_##]" 
                                    />
                                </div>
                              </s_cover_item_thumbnail>
                                
                              <div className='w-full h-full flex flex-wrap items-center justify-center'>
                                <SvgPhotoOff width={100} height={100} strokeWidth={1} className="stroke-slate-400" />
                              </div>
                            </div>
                            <div
                              className={classes(
                                "w-full block m-0 p-5 relative box-border",
                                "bg-white dark:bg-black dark-c:bg-black",
                                "text-black dark:text-white dark-c:text-white",
                              )}>
                              <div
                                className={classes(
                                  "block m-0 mb-1 p-0 relative text-base font-bold",
                                )}>
                                [##_cover_item_title_##]
                              </div>
                              <div
                                className={classes(
                                  "w-full block m-0 mb-4 p-0 relative",
                                )}>
                                <span
                                  className={classes(
                                    "index-item-datetime-text",
                                    "text-xs",
                                    "text-666 dark:text-white dark-c:text-white",
                                  )}>
                                  [##_cover_item_date_##]
                                </span>
                              </div>
                              <div
                                className={classes(
                                  "w-full block m-0 p-0 relative text-sm whitespace-pre-line break-all overflow-hidden max-h-[120px]",
                                )}>[##_cover_item_summary_##]</div>
                            </div>
                            <PostsIndexItemOverlayContent />
                          </a>
                        </s_cover_item_article_info>

                        {/* <s_cover_item_not_article_info>
                          <div className="list_content">
                            <s_cover_item_thumbnail>
                              <a href="[##_cover_item_url_##]" className="thumbnail_post"><img src="//i1.daumcdn.net/thumb/C148x148/?fname=[##_cover_item_thumbnail_##]" /></a>
                            </s_cover_item_thumbnail>
                            <a href="[##_cover_item_url_##]" className="link_post">
                              <strong className="tit_post">[##_cover_item_title_##]</strong>
                              <p className="txt_post">[##_cover_item_summary_##]</p>
                            </a>
                          </div>
                        </s_cover_item_not_article_info> */}
                      </div>
                    </s_cover_item>
                  </ul>

                  <div className='w-full relative'>
                    <s_cover_url>
                      <a 
                        href="[##_cover_url_##]"
                        className={classes(
                          "text-sm text-black dark:text-white dark-c:text-white hover:underline",
                        )}
                        >
                        더보기
                      </a>
                    </s_cover_url>
                  </div>
                </div>
              </s_cover>

              <s_cover name='list_half'>
                <div 
                  data-title="home-cover-item" 
                  className={classes(
                    "home-cover-item",
                    "mb-6 sm:mb-2",
                    "w-full sm:w-1/2-gap-4",
                    "relative flex flex-wrap gap-4",
                    "flex-col items-start content-start",
                  )}>
                  <div 
                    className={classes(
                      "w-full relative",
                    )}>
                    <div
                      className={classes(
                        // "normal-page-title-row",
                        "relative font-bold",
                        "text-3xl sm:text-2xl",
                        // "hidden tt-body-index:block",
                        "block",

                        "text-black dark:text-white dark-c:text-white",
                      )}>
                      <span>[##_cover_title_##]</span>
                      {/* <span>&nbsp;</span>
                      <span className="normal-page-title-row-count-info"></span>
                      <CallJavascript code="disposeNormalPageTitle(true)" /> */}
                    </div>
                  </div>
                  
                  <ul 
                    className={classes(
                      "w-full flex flex-wrap items-stretch relative gap-4",
                      // "flex-1",
                    )}>
                    <s_cover_item>
                      <div 
                        className={classes(
                          "home-cover-item-item",
                          "inline-flex flex-wrap relative gap-4",

                          "posts-index-item",
                          "h-auto border border-solid cursor-pointer",
                          "hover:outline-2 hover:outline",
                          "hover:outline-black dark:hover:outline-white dark-c:outline-white",
                          "border-black dark:border-white dark-c:border-white",
                          "common-post-index-item",

                          "w-full",

                          "lg:cover_list_half_max_col_count_1:w-full lg:cover_list_half_max_col_count_2:w-1/2-gap-4 lg:cover_list_half_max_col_count_3:w-1/2-gap-4 lg:cover_list_half_max_col_count_4:w-1/2-gap-4",
                          "xl:cover_list_half_max_col_count_1:w-full xl:cover_list_half_max_col_count_2:w-1/2-gap-4 xl:cover_list_half_max_col_count_3:w-1/3-gap-4 xl:cover_list_half_max_col_count_4:w-1/4-gap-4",
                        )}>
                        <s_cover_item_article_info>
                          <a 
                            href="[##_cover_item_url_##]" 
                            className={classes(
                              "w-full flex flex-wrap items-start content-start relative text-inherit decoration-transparent",
                            )}
                            >
                            <div
                              className={classes(
                                "w-full block min-h-[140px] aspect-video relative",
                                "border-b bg-no-repeat bg-center bg-contain overflow-hidden",
                                // "bg-[url('./images/tistory_logo_image.png')]",
                                "border-b-black dark:border-b-white dark-c:border-b-white",
                                "text-black dark:text-white dark-c:text-white",
                              )}
                              >
                              <s_cover_item_thumbnail>
                                <div
                                  className={classes(
                                    "posts-index-item-thumbnail-img-default-container",
                                    "bg-white dark:bg-black dark-c:bg-black",
                                    "w-full h-full absolute top-0 left-0 flex flex-wrap items-center justify-center z-2",
                                  )}>
                                  <img  
                                    className='w-full h-full object-cover relative block'
                                    src="//i1.daumcdn.net/thumb/C148x148/?fname=[##_cover_item_thumbnail_##]" 
                                    />
                                </div>
                              </s_cover_item_thumbnail>
                                
                              <div className='w-full h-full flex flex-wrap items-center justify-center'>
                                <SvgPhotoOff width={100} height={100} strokeWidth={1} className="stroke-slate-400" />
                              </div>
                            </div>
                            <div
                              className={classes(
                                "w-full block m-0 p-5 relative box-border",
                                "bg-white dark:bg-black dark-c:bg-black",
                                "text-black dark:text-white dark-c:text-white",
                              )}>
                              <div
                                className={classes(
                                  "block m-0 mb-1 p-0 relative text-base font-bold",
                                )}>
                                [##_cover_item_title_##]
                              </div>
                              <div
                                className={classes(
                                  "w-full block m-0 mb-4 p-0 relative",
                                )}>
                                <span
                                  className={classes(
                                    "index-item-datetime-text",
                                    "text-xs",
                                    "text-666 dark:text-white dark-c:text-white",
                                  )}>
                                  [##_cover_item_date_##]
                                </span>
                              </div>
                              <div
                                className={classes(
                                  "w-full block m-0 p-0 relative text-sm whitespace-pre-line break-all overflow-hidden max-h-[120px]",
                                )}>[##_cover_item_summary_##]</div>
                            </div>
                            <PostsIndexItemOverlayContent />
                          </a>
                        </s_cover_item_article_info>

                        {/* <s_cover_item_not_article_info>
                          <div className="list_content">
                            <s_cover_item_thumbnail>
                              <a href="[##_cover_item_url_##]" className="thumbnail_post"><img src="//i1.daumcdn.net/thumb/C148x148/?fname=[##_cover_item_thumbnail_##]" /></a>
                            </s_cover_item_thumbnail>
                            <a href="[##_cover_item_url_##]" className="link_post">
                              <strong className="tit_post">[##_cover_item_title_##]</strong>
                              <p className="txt_post">[##_cover_item_summary_##]</p>
                            </a>
                          </div>
                        </s_cover_item_not_article_info> */}
                      </div>
                    </s_cover_item>
                  </ul>

                  <div className='w-full relative'>
                    <s_cover_url>
                      <a 
                        href="[##_cover_url_##]"
                        className={classes(
                          "text-sm text-black dark:text-white dark-c:text-white hover:underline",
                        )}
                        >
                        더보기
                      </a>
                    </s_cover_url>
                  </div>
                </div>
              </s_cover>
            </s_cover_rep>
          </section>

          <CallJavascript code="disposeIndexItemNewSymbol(true, '.home-cover-item-item')" />
        </s_cover_group>
      </section>
    </>
  );
}