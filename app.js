

class FormPosting{
    options = {};
    CONTAINER_ID = '';

    constructor(containerId, options){
        if (containerId === undefined) {
            console.error(`Form valid: set container id`);
        }
        
        this.setDefaultOptions(options);

        this.CONTAINER_ID = containerId;
        document.addEventListener('DOMContentLoaded', this.initform.bind(this));
    }

    setDefaultOptions(options){
        options = options || {};
        this.options.URL = options.URL || 'https://echo.htmlacademy.ru/';
        this.options.FORM_HTML = options.FORM_HTML || `<form action="${this.options.URL}" method="post" id="">
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <button type="submit">Post!</button>
                                                        </form>`;
    }

    initform(evt) {
        const containerElement = document.getElementById(this.CONTAINER_ID);
        containerElement.insertAdjacentHTML('afterbegin', this.options.FORM_HTML);
        const formElement = containerElement.firstChild;
        formElement.addEventListener('submit', this.onSubmitForm.bind(this));
    }

    onSubmitForm(evt) {
        evt.preventDefault();
        let isFormValid = true;
        
        if (isFormValid) {
            evt.currentTarget.submit();
        }  
    }
}

const formPost = new FormPosting('test');