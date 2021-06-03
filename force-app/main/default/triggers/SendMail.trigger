trigger SendMail on Account__c(after update) {
        Messaging.reserveSingleEmailCapacity(trigger.size);
        List<Messaging.SingleEmailMessage> emails = new List<Messaging.SingleEmailMessage>();
        for (Account__c a : Trigger.old) {
            if (a.Primary_Contact_Phone__c != Trigger.newMap.get(a.id).Primary_Contact_Phone__c) {
                String emailText = 'This message is to alert you that the Account named ' 
                                       + '"'+ a.Name +'" ' 
                                       + 'has been changed in "Primary Contact Phone"-field.';
                Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
                email.setSenderDisplayName('Automatic alert');
                email.setToAddresses(new String[]{a.Email__c,'irneria@gmail.com'});
                email.setSubject('Account is changed');
                email.setPlainTextBody(emailText);             
                emails.add(email);  
            }
        }
        Messaging.sendEmail(emails);
    }