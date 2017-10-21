@isTest
private class AppController_test {
	
	@isTest static void thingGetter() {
		// Implement test code
    insert new SFDXDF17__Thing__c(Name='Test');
    system.assertEquals(1, AppController.getThings().size());
	}
	
}