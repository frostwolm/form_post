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
        this.options.NOT_VALID_CSS_CLASS = "valid-form__input--not-valid";
        this.options.FORM_HTML = options.FORM_HTML || `<form action="${this.options.URL}" method="post" id="">
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="post-title-1" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="post-title-1" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-2" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="post-title-2" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="post-title-2" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-3" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="post-title-3" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="post-title-3" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-4" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="post-title-4" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="post-title-4" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-5" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="post-title-5" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="post-title-5" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-6" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="post-title-6" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="post-title-6" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-7" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="post-title-7" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="post-title-7" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-8" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="post-title-8" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="post-title-8" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-9" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="post-title-9" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="post-title-9" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-10" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="post-title-10" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="post-title-10" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-11" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="post-title-11" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="post-title-11" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-12" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="post-title-12" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="post-title-12" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-13" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="post-title-13" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="post-title-13" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-14" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="post-title-14" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="post-title-14" cols="30" rows="10" style="display: block;"></textarea>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name" id="" style="display: block;" >
                                                                <div class="radio-container"><input type="radio" name="sex-radio-15" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                                                <input type="text" name="post-title" id="post-title-15" style="display: block;" placeholder="Title">
                                                                <textarea name="post-text" id="post-title-15" cols="30" rows="10" style="display: block;"></textarea>
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
        let inputData = new FormData();
        const lstFields = evt.currentTarget.getElementsByClassName('post-container');
        for (let j = 0; j < lstFields.length; j++) {
            const field = lstFields[j];
            let lstInputs = field.children('input');
            let isRadioChecked = false;
            let isHasTextValue = false;
            let isInputValid = true;
            let isPostText = false;
            let isPostTitle = false;

            for (let i = 0; i < lstInputs.length; i++) {
                const input = lstInputs[i];
                
                if (input.getAttribute('name') === 'name') {
                    isHasTextValue = input.value.trim() !== '';
                    if (isHasTextValue) {
                        inputData.append(`name-${i}`, input.value.trim());
                    }
                }

                if (input.getAttribute('type') === 'radio') {
                    isRadioChecked = isRadioChecked || input.checked;
                    if (isRadioChecked) {
                        inputData.append(`sex-${i}`, input.value);
                    }
                }

                if (input.getAttribute('name') === 'post-title') {
                    isPostTitle = input.value.trim() !== '';
                    if (isPostTitle) {
                        inputData.append(`post-title-${i}`, input.value.trim());
                    }
                }

                if (input.getAttribute('name') === 'post-text') {
                    isPostText = input.value.trim() !== '';
                    if (isPostText) {
                        inputData.append(`post-text-${i}`, input.value.trim());
                    }
                }
            }

            let isObligatoryConditions = isPostTitle && isPostText;

            if (isObligatoryConditions) {
                if (isHasTextValue) {
                    isInputValid = isRadioChecked;    
                }else{
                    isInputValid = true;
                }
            } else {
                isInputValid = false;
            }
            
            isFormValid = isObligatoryConditions;
            
            if (isInputValid) {
                if (field.classList.contains(this.options.NOT_VALID_CSS_CLASS)) {
                    field.classList.remove(this.options.NOT_VALID_CSS_CLASS);
                }


            }else{
                if (!field.classList.contains(this.options.NOT_VALID_CSS_CLASS)) {
                    field.classList.add(this.options.NOT_VALID_CSS_CLASS);
                }  
            }
        }
        
        

        if (isFormValid) {
            let oReq = new XMLHttpRequest();
            oReq.open(`${evt.currentTarget.getAttribute("method")}`, `${evt.currentTarget.getAttribute("action")}`, true);
            oReq.send(inputData);  
        }
    }
}

const formPost = new FormPosting('test');