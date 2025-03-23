import { LightningElement, api } from 'lwc';

export default class ChildTwo extends LightningElement {
    @api btnSelection = "Select";
    btnBrand = "success";
    @api childName = "ChildTwo";

    @api childReset(){
        this.btnSelection = "Select";
        this.btnBrand = "success";
    }

    handleClick(event){
        const event1 = new CustomEvent('childclick',
        {
            bubbles: true,
            composed: true,
            detail: this.btnSelection
        });
        this.dispatchEvent(event1);

        if (this.btnSelection === "Select"){
            this.btnSelection = "Deselect";
            this.btnBrand = "destructive";
        }
        else{
            this.btnSelection = "Select";
            this.btnBrand = "success";
        }
    }
}