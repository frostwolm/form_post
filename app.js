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
        this.options.URL = options.URL || 'https://intrigue.dating/wp-content/themes/_tk-master/includes/automate/comments.php';
        this.options.NOT_VALID_CSS_CLASS = "valid-form__input--not-valid";
        this.options.FORM_HTML = options.FORM_HTML || `<form action="${this.options.URL}" method="post" id="">
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name-1" id="" style="display: block;" >
                                                                <div name="radio-container"><label><input type="radio" name="sex-radio-1" id="" value="m">Man</label><label><input type="radio" name="sex-radio-1" id="" value="f">Woman</label></div>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name-2" id="" style="display: block;" >
                                                                <div name="radio-container"><label><input type="radio" name="sex-radio-2" id="" value="m">Man</label><label><input type="radio" name="sex-radio-2" id="" value="f">Woman</label></div>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name-3" id="" style="display: block;" >
                                                                <div name="radio-container"><label><input type="radio" name="sex-radio-3" id="" value="m">Man</label><label><input type="radio" name="sex-radio-3" id="" value="f">Woman</label></div>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name-4" id="" style="display: block;" >
                                                                <div name="radio-container"><label><input type="radio" name="sex-radio-4" id="" value="m">Man</label><label><input type="radio" name="sex-radio-4" id="" value="f">Woman</label></div>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name-5" id="" style="display: block;" >
                                                                <div name="radio-container"><label><input type="radio" name="sex-radio-5" id="" value="m">Man</label><label><input type="radio" name="sex-radio-5" id="" value="f">Woman</label></div>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name-6" id="" style="display: block;" >
                                                                <div name="radio-container"><label><input type="radio" name="sex-radio-6" id="" value="m">Man</label><label><input type="radio" name="sex-radio-6" id="" value="f">Woman</label></div>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name-7" id="" style="display: block;" >
                                                                <div name="radio-container"><label><input type="radio" name="sex-radio-7" id="" value="m">Man</label><label><input type="radio" name="sex-radio-7" id="" value="f">Woman</label></div>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name-8" id="" style="display: block;" >
                                                                <div name="radio-container"><label><input type="radio" name="sex-radio-8" id="" value="m">Man</label><label><input type="radio" name="sex-radio-8" id="" value="f">Woman</label></div>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name-9" id="" style="display: block;" >
                                                                <div name="radio-container"><label><input type="radio" name="sex-radio-9" id="" value="m">Man</label><label><input type="radio" name="sex-radio-9" id="" value="f">Woman</label></div>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name-10" id="" style="display: block;" >
                                                                <div name="radio-container"><label><input type="radio" name="sex-radio-10" id="" value="m">Man</label><label><input type="radio" name="sex-radio-10" id="" value="f">Woman</label></div>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name-11" id="" style="display: block;" >
                                                                <div name="radio-container"><label><input type="radio" name="sex-radio-11" id="" value="m">Man</label><label><input type="radio" name="sex-radio-11" id="" value="f">Woman</label></div>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name-12" id="" style="display: block;" >
                                                                <div name="radio-container"><label><input type="radio" name="sex-radio-12" id="" value="m">Man</label><label><input type="radio" name="sex-radio-12" id="" value="f">Woman</label></div>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name-13" id="" style="display: block;" >
                                                                <div name="radio-container"><label><input type="radio" name="sex-radio-13" id="" value="m">Man</label><label><input type="radio" name="sex-radio-13" id="" value="f">Woman</label></div>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name-14" id="" style="display: block;" >
                                                                <div name="radio-container"><label><input type="radio" name="sex-radio-14" id="" value="m">Man</label><label><input type="radio" name="sex-radio-14" id="" value="f">Woman</label></div>
                                                            </div>
                                                            <div name="post-container" class="post-container">
                                                                <input type="text" name="name-15" id="" style="display: block;" >
                                                                <div name="radio-container"><label><input type="radio" name="sex-radio-15" id="" value="m">Man</label><label><input type="radio" name="sex-radio-15" id="" value="f">Woman</label></div>
                                                            </div>
                                                            <input type="hidden" name="form_post_id" value=${form_post_id}>
                                                            <button type="submit">Submit</button>
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
        let formData = new FormData();
        let inputsData = {};
        const lstFields = evt.currentTarget.getElementsByClassName('post-container');
        for (let j = 0; j < lstFields.length; j++) {
            const field = lstFields[j];
            let lstInputs = field.children;
            let isRadioChecked = false;
            let isHasTextValue = false;
            let isInputValid = true;
            let isPostText = false;
            let isPostTitle = false;
            let inputData = {};

            for (let i = 0; i < lstInputs.length; i++) {
                const input = lstInputs[i];

                if (input.getAttribute('name').startsWith('name')) {
                    isHasTextValue = input.value.trim() !== '';
                    if (isHasTextValue) {
                        inputData.text = input.value.trim();
                    }
                }

                if (input.getAttribute('name') === 'radio-container') {
                    let radiobuttons = input.querySelectorAll('[type="radio"]');
                    for (let k = 0; k < radiobuttons.length; k++) {
                        const radio = radiobuttons[k];
                        if (radio.getAttribute('type') === 'radio') {
                            isRadioChecked = isRadioChecked || radio.checked;
                            if (radio.checked) {
                                inputData.radio = radio.value;
                            }
                        }
                    }
                }
            }

            let isObligatoryConditions = false ;
            
            if (isHasTextValue) {
                isObligatoryConditions = isRadioChecked;
            }else{
                isObligatoryConditions = true;
            }

            if (isObligatoryConditions) {
                if (isHasTextValue) {
                    isInputValid = isRadioChecked;    
                }else{
                    isInputValid = true;
                }
            } else {
                isInputValid = false;
            }
            
            isFormValid = isFormValid && isObligatoryConditions;
            
            if (isInputValid) {
                if (field.classList.contains(this.options.NOT_VALID_CSS_CLASS)) {
                    field.classList.remove(this.options.NOT_VALID_CSS_CLASS);
                }
                inputsData[j] = inputData;

            }else{
                if (!field.classList.contains(this.options.NOT_VALID_CSS_CLASS)) {
                    field.classList.add(this.options.NOT_VALID_CSS_CLASS);
                }  
            }
        }
        
        

        if (isFormValid) {
            let xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.open(`${evt.currentTarget.getAttribute("method")}`, `${evt.currentTarget.getAttribute("action")}`, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(new FormData(evt.currentTarget));
            evt.currentTarget.submit();
        }
    }
}

const formPost = new FormPosting('test');