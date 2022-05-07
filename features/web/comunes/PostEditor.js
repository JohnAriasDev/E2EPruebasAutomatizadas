
const ButtonBack = "a.gh-editor-back-button";
const DivPublish = "div.gh-publishmenu";
const TextAreaTitle = "textarea.gh-editor-title";
const ButtonPublish = "button.gh-publishmenu-button";
const SpanSettingsMenu = ".settings-menu-toggle > span";
const ButtonPublishConfirmation =  "button.gh-btn.gh-btn-black.gh-btn-icon.ember-view";
const RadioButtonSchedule = ":nth-child(2) > .gh-publishmenu-radio-button";
const ButtonSchedule =  "button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view";
const ButtonScheduleConfirmation =  "button.gh-btn.gh-btn-black.gh-btn-icon.ember-view";
const ButtonPostSettings = "button.settings-menu-toggle";
const ButtonDeletePost = "button.settings-menu-delete-button";
const ButtonConfirmDeletePost =   "button.gh-btn.gh-btn-red.gh-btn-icon.ember-view";

const AllOption = '[data-option-index="0"]';
const DraftOption = '[data-option-index="1"]';
const PublishedOption = '[data-option-index="2"]';
const ScheduledOption = '[data-option-index="3"]';
const NewPost = "a.gh-nav-new-post"; //ember419
const FilterByStatus = ".gh-contentfilter-type > .ember-view";
const ListPostItem = "li.gh-list-row.gh-posts-list-item";
const OlPostList = "ol.posts-list.gh-list";
const PostItemTitle = "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/h3[1]";

const DraftToPublish = "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/div[1]/div[1]/ul[1]/li[1]/a[1]/span[1]"
const ListElements ="a.gh-list-data.gh-post-list-title"

const TagNewTagButton = '.ember-view.gh-btn.gh-btn-primary';
const TagNameInput = '#tag-name';
const TagColorInput = '/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input';
const TagSlugInput = '#tag-slug';
const TagDescriptionInput = '#tag-description';
const TagSaveButton = '.gh-btn.gh-btn-primary.gh-btn-icon.ember-view';
const TagMenuManage = '/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[3]/a';
const TagList = '.gh-tag-list-name > .ma0.pa0.f8.midgrey.gh-tag-list-description';

const MemberNewTagButton = '.ember-view.gh-btn.gh-btn-primary';
const MemberNameInput = '#member-name';
const MemberEmailInput = '#member-email';
const MemberSaveButton = '.gh-btn.gh-btn-primary.gh-btn-icon.ember-view';
const MemberMenuManage = '/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]/a';
const MemberList = '.ember-view.gh-list-data > .flex.items-center > .w-80 > .ma0.pa0.gh-members-list-name';
const MemberErrorEmailMessage = '.form-group.max-width.error.ember-view > p.response';

module.exports = {
  ButtonBack,
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
  TagSaveButton,
  TagMenuManage,
  TagList,
  MemberNewTagButton,
  MemberNameInput,
  MemberEmailInput,
  MemberSaveButton,
  MemberMenuManage,
  MemberList,
  MemberErrorEmailMessage
};
