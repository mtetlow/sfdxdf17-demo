public with sharing class AppController {

  @RemoteAction
  public static List<SFDXDF17__Thing__c> getThings(){
    return [SELECT Id,Name FROM sfdxdf17__Thing__c];
  }
}