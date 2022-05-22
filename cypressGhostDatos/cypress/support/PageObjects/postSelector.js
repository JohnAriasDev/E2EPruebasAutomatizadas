class PostSelector{
    getButtonPostList(){        
        return cy.get('a[href="#/posts/"]', { timeout: 20000 })
    }
    getButtonPostListDraft(){        
        return cy.get('a[href="#/posts/?type=draft"]', { timeout: 20000 })
    }
    getButtonPostSettings(){        
        return cy.get('button.post-settings', { timeout: 20000 })
    }
    getNewPostButton(){
        return cy.get('a.gh-nav-new-post', { timeout: 20000 })
    }    
    getTextAreaTitle(){
        return cy.get('textarea.gh-editor-title', { timeout: 20000 })
    }
    getBackButton(){
        return cy.get('a.gh-editor-back-button', { timeout: 20000 })
    }
    getFilterByStatus(){
        return cy.get('div.gh-contentfilter-menu:nth-child(2) > div:nth-child(2)', { timeout: 20000 })
    }
    getDrafOption(){
        return cy.get('a[href="#/posts/?type=draft"]', { timeout: 20000 })
    }
    getPublishOption(){
        return cy.get('a[href="#/posts/?type=published"]', { timeout: 20000 })
    }
    getScheduleOption(){
        return cy.get('a[href="#/posts/?type=scheduled"]', { timeout: 20000 })
    }
    getTitleFirstElementTitle(){
        return cy.get('.posts-list.gh-list>li', { timeout: 20000 }).eq(1).children('.gh-post-list-title').children('.gh-content-entry-title');
    }
    getTitleElementPost(index){
        return cy.get('.posts-list.gh-list>li', { timeout: 20000 }).eq(index).children('.gh-post-list-title').children('.gh-content-entry-title');
    }
    getParagraphInput(){
        return cy.get('.koenig-editor__editor', { timeout: 20000 })
    }
    getFirstElementTable(){
        return cy.get('.posts-list.gh-list>li', { timeout: 20000 }).eq(1).children('.gh-post-list-title').children('.gh-content-entry-title')
    }
    getTable(){
        return cy.get('.posts-list.gh-list>li', { timeout: 20000 })
    }
    getSettings(){
        return cy.get('button.settings-menu-toggle', { timeout: 20000 })
    }
    getDeleteButton(){
        return cy.get('button.settings-menu-delete-button', { timeout: 20000 })
    }
    getDeleteButtonConfirm(){
        return cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view', { timeout: 20000 })
    }
    getNumberChildrenTable(){
        return cy.get('ol.posts-list.gh-list', { timeout: 20000 }).children('.gh-list-row').its('length')
    }
    getPublishDropdown(){
        return cy.get('.gh-publishmenu-trigger', { timeout: 20000 });
    }
    getPublishButton(){
        return cy.get('.gh-publishmenu-button', { timeout: 20000 });
    }
    getPublishButtonConfirm(){
        return cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view', { timeout: 20000 });
    }
    getRadioScheduleCheck(){
        return cy.get('div.gh-publishmenu-radio:nth-child(2) > div:nth-child(1)', { timeout: 20000 });
    }
    getUnplashImageButton(){
        return cy.get('.gh-editor-feature-image-unsplash', { timeout: 20000 });
    }
    getUnplashImageInsert(){
        return cy.get('a.gh-unsplash-button', { timeout: 20000 }).eq(2);
    }
    getMetadataButton(){
        return cy.get('ul.nav-list.nav-list-block>li', { timeout: 20000 }).eq(0).first();
    }
    getTwitterButton(){
        return cy.get('ul.nav-list.nav-list-block>li', { timeout: 20000 }).eq(1).first();
    }
    getFacebookButton(){
        return cy.get('ul.nav-list.nav-list-block>li', { timeout: 20000 }).eq(2).first();
    }
    getMetadataTitle(){
        return cy.get('input[name="post-setting-meta-title"]', { timeout: 20000 });
    }
    getMetadataDesc(){
        return cy.get('textarea[name="post-setting-meta-description"]', { timeout: 20000 });
    }
    getPageOption(){
        return cy.get('a[href="#/pages/"]', { timeout: 20000 });
    }
    getNewPageButton(){
        return cy.get('a[href="#/editor/page/"]', { timeout: 20000 });
    }
    getFilterOptions(){
        return cy.get('.gh-contentfilter-menu-trigger', { timeout: 20000 });
    }
    getFilterDraft(){
        return cy.get('ul.ember-power-select-options>li', { timeout: 20000 }).eq(1);
    }
    getFilterPublish(){
        return cy.get('ul.ember-power-select-options>li', { timeout: 20000 }).eq(2);
    }
    getTitleFirstElementPages(){
        return cy.get('ol.gh-list>li', { timeout: 20000 }).eq(1).children('.gh-post-list-title').children('h3.gh-content-entry-title');
    }
    getFirstElementPages(){
        return cy.get('ol.gh-list>li', { timeout: 20000 }).eq(1).children('.gh-post-list-title');
    }
    getEditor(){
        return cy.get('.koenig-editor__editor', { timeout: 20000 });
    }
    getPreview(){
        return cy.get('.gh-editor-preview-trigger', { timeout: 20000 });
    }
    getTablePage(){
        return cy.get('.gh-list>li', { timeout: 20000 });
    }
    getFirstTablePage(){
        return cy.get('.gh-list>li', { timeout: 20000 });
    }
    getTagOption(){
        return cy.get('a[href="#/tags/"]', { timeout: 20000 });
    }
    getNewTagButton(){
        return cy.get('a[href="#/tags/new/"]', { timeout: 20000 });
    }
    getTagNameInput(){
        return cy.get('#tag-name', { timeout: 20000 })
    }
    getTagSlugInput(){
        return cy.get('#tag-slug', { timeout: 20000 })
    }
    getTagDescInput(){
        return cy.get('#tag-description', { timeout: 20000 })
    }
    getTagColorInput(){
        return cy.get('input.gh-input[name="accent-color"]', { timeout: 20000 })
    }
    getSaveButton(){
        return cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view')
    }
    getTitleElementTag(index){
        return cy.get('.gh-list>li', { timeout: 20000 }).eq(index).children('.gh-tag-list-title').children('.gh-tag-list-name');
    }
    getElementTag(index){
        return cy.get('.gh-list>li', { timeout: 20000 }).eq(index).children('.gh-tag-list-title');
    }
    waitForList(){
        return cy.get('h3.gh-content-entry-title', { timeout: 20000 });
    }
    getUrlPreviewPage(){
        return cy.get('.gh-post-preview-url-container', { timeout: 20000 });
    }
    getTitlePreview(){
        return cy.get('.article-title', { timeout: 20000 });
    }  
    getTagTitles(){
        return cy.get('h3.gh-tag-list-name', { timeout: 20000 });
    }
    getMemberOption(){
        return cy.get('a[href="#/members/"]', { timeout: 20000 });
    }
    getNewMemberButton(){
        return cy.get('a[href="#/members/new/"]', { timeout: 20000 });
    }
    getMemberNameInput(){
        return cy.get('#member-name', { timeout: 20000 })
    }
    getMemberEmailInput(){
        return cy.get('#member-email', { timeout: 20000 })
    }
    getMemberNoteInput(){
        return cy.get('#member-note', { timeout: 20000 })
    }
    getFirstElementMembers(){
        return cy.get('tbody>tr', { timeout: 20000 }).eq(0).children().first().children('div');
    }
    getElementsMembers(){
        return cy.get('tbody>tr', { timeout: 20000 });
    }
    getErrorEmailMember(){
        return cy.get('.error', { timeout: 20000 }).children('p');
    }
    getDeleteButtonTag(){
        return cy.get('button.gh-btn-red', { timeout: 20000 });
    }
    getDeleteButtonTagConfirmation(){
        return cy.get('div.modal-footer', { timeout: 20000 }).first().children('button.gh-btn-red');
    }
    getSettingsButtonMember(){
        return cy.get('button.icon-only', { timeout: 20000 });
    }
    getDeleteButtonMember(){
        return cy.get('ul.gh-member-actions-menu>li', { timeout: 20000 }).eq(1).children('button');
    }
    getScreenShot(version, escenario, index){
        cy.wait(500);
        cy.screenshot(`${escenario}-${index}`, {overwrite: true});
    }
    getInputTime(){
        return cy.get('.gh-date-time-picker-time', { timeout: 20000 }).children('input');
    }
    getErrorInputTime(){
        return cy.get('.gh-date-time-picker-error', { timeout: 20000 });
    }
    getInputDate(){
        return cy.get('.gh-date-time-picker-date', { timeout: 20000 }).children('input');
    }
    getInputExcerpt(){
        return cy.get('#custom-excerpt', { timeout: 20000 });
    }
    getErrorInputExcerpt(){
        return cy.get('#custom-excerpt', { timeout: 20000 }).parent('.form-group').children('p.response');
    }
    getUrlInput(){
        return cy.get('input[name="post-setting-canonicalUrl"]', { timeout: 20000 });
    }
    getErrorUrlInput(){
        return cy.get('input[name="post-setting-canonicalUrl"]', { timeout: 20000 }).parent('.form-group').children('p.response');
    }
    getTwitterTitleInput(){
        return cy.get('input[name="post-setting-twitter-title"]', { timeout: 20000 });
    }
    getTwitterErrorTitleInput(){
        return cy.get('input[name="post-setting-twitter-title"]', { timeout: 20000 }).parent('.form-group').children('p.response');
    }
    getTwitterDescriptionInput(){
        return cy.get('textarea[name="post-setting-twitter-description"]', { timeout: 20000 });
    }
    getTwitterErrorDescriptionInput(){
        return cy.get('textarea[name="post-setting-twitter-description"]', { timeout: 20000 }).parent('.form-group').children('p.response');
    }
    getFacebookTitleInput(){
        return cy.get('input[name="post-setting-og-title"]', { timeout: 20000 });
    }
    getFacebookErrorTitleInput(){
        return cy.get('input[name="post-setting-og-title"]', { timeout: 20000 }).parent('.form-group').children('p.response');
    }
    getFacebookDescriptionInput(){
        return cy.get('textarea[name="post-setting-og-description"]', { timeout: 20000 });
    }
    getFacebookErrorDescriptionInput(){
        return cy.get('textarea[name="post-setting-og-description"]', { timeout: 20000 }).parent('.form-group').children('p.response');
    }     
    getPostTitles(){
        return cy.get('h3.gh-content-entry-title', { timeout: 20000 });
    }

}

export default PostSelector