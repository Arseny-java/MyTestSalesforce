import { LightningElement, track, wire } from 'lwc';  
import fetchopportunities from '@salesforce/apex/FetchOpportunityList.listOppLwc';
const columns = [{
    label: 'View',
    type: 'button-icon',
    initialWidth: 75,
    typeAttributes: {
        iconName: 'action:preview',
        title: 'Preview',
        variant: 'border-filled',
        alternativeText: 'View'
    }
},
{
    label: 'Stage',
    fieldName: 'StageName'
},
{
    label: 'Amount',
    fieldName: 'Amount'
    
},
{
    label: 'Close Date',
    fieldName: 'CloseDate'  
}
];
  
export default class MyTest2 extends LightningElement {  
  
    @track clickedButtonLabel = 'Show';  
    @track boolVisible = false;
    @track columns = columns;
    @track record = {};
    @track rowOffset = 0;
    @track data = {};
    @track bShowModal = false;
    @wire(fetchopportunities) parameters;
 
    // Row Action event to show the details of the record
    handleRowAction(event) {
        const row = event.detail.row;
        this.record = row;
        this.bShowModal = true; // display modal window
    }
 
    // to close modal window set 'bShowModal' tarck value as false
    closeModal() {
        this.bShowModal = false;
    }  
  
    handleClick(event) {  
        const label = event.target.label;  
  
        if ( label === 'Show' ) {  
  
            this.clickedButtonLabel = 'Hide';  
            this.boolVisible = true;  
  
        } else if  ( label === 'Hide' ) {  
              
            this.clickedButtonLabel = 'Show';  
            this.boolVisible = false;  
  
        }  
    }  
  
}