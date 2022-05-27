
const ButtonBack = "a[href='#/posts/']";
const ButtonBackPages = 'a[href="#/pages/"]';
const DivPublish = "div.gh-publishmenu";
const TextAreaTitle = ".gh-editor-title.ember-text-area.gh-input.ember-view"; 
const ButtonPublish = "button.gh-publishmenu-button";
const SpanSettingsMenu = ".gh-publishmenu-trigger";
const ButtonPublishConfirmation =  "button.gh-btn.gh-btn-black.gh-btn-icon.ember-view";
const RadioButtonSchedule = ":nth-child(2) > .gh-publishmenu-radio-button";
const ButtonSchedule =  "/html/body/div[1]/div/footer/button[2]";
const ButtonScheduleConfirmation =  "button.gh-btn.gh-btn-black.gh-btn-icon.ember-view";
const ButtonPostSettings = "button[title='Settings']";
const ButtonDeletePost = "button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button";
const ButtonConfirmDeletePost =   "button.gh-btn.gh-btn-red.gh-btn-icon.ember-view ";
const ButtonCancel = "button.gh-btn.gh-btn-outline"
const AllOption = '[data-option-index="0"]';
const DraftOption = '[data-option-index="1"]';
const PublishedOption = '[data-option-index="2"]';
const ScheduledOption = '[data-option-index="3"]';
const NewPost = "a.gh-nav-new-post"; //ember419
const FilterByStatus = ".gh-contentfilter-type > .ember-view";
const ListPostItem = "li.gh-list-row.gh-posts-list-item";
const OlPostList = "ol.posts-list.gh-list";
const PostItemTitle = ".ember-view.permalink.gh-list-data.gh-post-list-title > h3.gh-content-entry-title";
const DraftToPublish = "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/div[1]/div[1]/ul[1]/li[1]/a[1]/span[1]"
const ListElements ="a.gh-list-data.gh-post-list-title"



const TagNewTagButton = 'a[href="#/tags/new/"]';
const TagNameInput = '#tag-name';
const TagColorInput = '.input-color > input';
const TagSlugInput = '#tag-slug';
const TagDescriptionInput = '#tag-description';
const TagSaveButton = '.view-actions > button';
const TagMenuManage = 'a[href="#/tags/"]';
const TagFirstRowList = '.ember-view.gh-list-data.gh-tag-list-title.gh-list-cellwidth-70';
const TagList = '.ember-view.gh-list-data.gh-tag-list-title.gh-list-cellwidth-70 > h3.gh-tag-list-name';
const TagListExists = 'body > div.gh-app > div > main > section > section > ol'
const TagErrorNameMessage = ".error > .response";
const TagErrorNameMessage2 = ".gh-tag-settings-multiprop > div > .error > p:nth-child(2)";
const TagErrorNameMessage3 = ".gh-tag-settings-multiprop > div > .error > p:nth-child(1)";
const TagErrorDescription = ".no-margin.form-group.error.ember-view > p.response"
const TagMetadataButton =".gh-btn.gh-btn-expand"
const TagTwitterButton = "/html/body/div[2]/div/main/section/form/div[2]/section/div[2]/div[1]/button"
const TagCodeInjectionButton ="/html/body/div[2]/div/main/section/form/div[2]/section/div[4]/div[1]/button"
const TagMetaTitle ="#meta-title"
const TagMetaDesc ="/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/form[1]/div[2]/section[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/textarea[1]"
const TagMetaCanonical ="#canonical-url"
const TagCodeInjectionHead ="/html/body/div[2]/div/main/section/form/div[2]/section/div[4]/div[2]/div/div/div/div[1]/div/div/div[6]/div[1]/div/div/div/div[5]/div/pre"
const TagTwitterTitleInput ="#twitter-title"
const TagTwitterDescInput = "/html/body/div[2]/div/main/section/form/div[2]/section/div[2]/div[2]/div/div/div/div/div[1]/div[3]/textarea"

const MemberNewTagButton = '.ember-view.gh-btn.gh-btn-primary';
const MemberNameInput = '#member-name';
const MemberEmailInput = '#member-email';
const MemberSaveButton = '.gh-btn.gh-btn-primary.gh-btn-icon.ember-view';
const MemberMenuManage = '/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]/a';
const MemberList = '.ember-view.gh-list-data > .flex.items-center > .w-80 > .ma0.pa0.gh-members-list-name';
const MemberErrorEmailMessage = '.form-group.max-width.error.ember-view > p.response';
const MemberFirstRowList = '.ember-view.gh-list-data';
const MemberListExists = 'body > div.gh-app > div > main > section > section > div.gh-list-scrolling.gh-list-with-helpsection > table'
const ImageButton = "button.gh-editor-feature-image-unsplash"
const unsplashimage = "/html/body/div[3]/div[2]/div[1]/div[1]/div[1]/section/div[1]/a[1]/div/div/div[2]/a"
const metadatabutton = ".nav-list-item" 
const MetaTitle= "input.post-setting-meta-title"
const MetaDescription = "textarea.post-setting-meta-description"


module.exports = {
  ButtonBack,
  ButtonBackPages,
  ButtonCancel,
  DivPublish,
  TextAreaTitle,
  ButtonPublish,
  ButtonSchedule,
  ButtonDeletePost,
  SpanSettingsMenu,
  ButtonPostSettings,
  RadioButtonSchedule,
  ButtonConfirmDeletePost,
  ButtonPublishConfirmation,
  ButtonScheduleConfirmation,
  NewPost,
  AllOption,
  DraftOption,
  PublishedOption,
  ScheduledOption,
  FilterByStatus,
  ListPostItem,
  OlPostList,
  PostItemTitle,
  NewPost,
  DraftToPublish,
  ListElements,
  TagNewTagButton,
  TagNameInput,
  TagColorInput,
  TagSlugInput,
  TagDescriptionInput,
  TagTwitterTitleInput,
  TagTwitterDescInput,
  TagSaveButton,
  TagMenuManage,
  TagList,
  MemberNewTagButton,
  MemberNameInput,
  MemberEmailInput,
  MemberSaveButton,
  MemberMenuManage,
  MemberList,
  MemberErrorEmailMessage,
  MemberFirstRowList,
  MemberListExists,
  TagFirstRowList,
  TagListExists,
  ImageButton,
  unsplashimage,
  metadatabutton,
  MetaTitle,
  MetaDescription,
  TagErrorNameMessage,
  TagErrorNameMessage2,
  TagErrorDescription,
  TagErrorNameMessage3,
  TagMetadataButton,
  TagTwitterButton,
  TagMetaTitle,
  TagMetaDesc,
  TagMetaCanonical,
  TagCodeInjectionButton,
  TagCodeInjectionHead
};
