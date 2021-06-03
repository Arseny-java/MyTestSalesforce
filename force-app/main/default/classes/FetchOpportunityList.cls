public with sharing class FetchOpportunityList{
    @AuraEnabled(cacheable = true)
public static List<opportunity> listOppLwc(){
       return [SELECT Amount, StageName, CloseDate FROM opportunity LIMIT 3];
    }
}