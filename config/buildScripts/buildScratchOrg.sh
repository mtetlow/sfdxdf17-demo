#!/bin/bash
SCRATCHORGALIAS=${1:-baseScratchOrg}
sfdx force:org:create -f config/project-scratch-def.json -a $SCRATCHORGALIAS
sfdx force:source:push -u $SCRATCHORGALIAS
sfdx force:user:permset:assign -u $SCRATCHORGALIAS -n My_App_Standard_Permission_Set
sfdx force:data:tree:import -u $SCRATCHORGALIAS --sobjecttreefiles config/sampleData/sfdxdf17__Thing__c.json
sfdx force:org:open -u $SCRATCHORGALIAS -p /apex/myApp